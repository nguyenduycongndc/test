using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json;
using System.Threading.Tasks;
using Administrative_Tool.Attributes;
using Administrative_Tool.Models;
using Administrative_Tool.Services.Interface;

namespace Administrative_Tool.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    [BaseAuthorize]
    public class WalletManagementController : Controller
    {
        private readonly ILogger<WalletManagementController> _logger;
        private readonly IWalletManagementService _walletManagementService;

        public WalletManagementController(ILogger<WalletManagementController> logger, IWalletManagementService walletManagementService)
        {
            _logger = logger;
            _walletManagementService = walletManagementService;
        }
        static HttpClient client = new HttpClient();
        [HttpPost]
        [Route("InforWallet")]
        public async Task<CreateWalletModel> InforWallet([FromBody] InputWalletModel inputWalletModel)
        {
            try
            {
                if (HttpContext.Items["UserInfo"] is not CurrentUserModel _userInfo)
                {
                    return null;
                }
                var _data = new CreateWalletModel()
                {
                    PrivateKey = inputWalletModel.PrivateKey,
                    AddressWallet = inputWalletModel.AddressWallet,
                    IsCheck = inputWalletModel.IsCheck,
                };
                var _result = await CallGetMethod(_data, _userInfo);
                return _result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }

        }
        [HttpGet]
        public IActionResult Index()
        {
            if (HttpContext.Items["UserInfo"] is not CurrentUserModel _userInfo)
            {
                return null;
            }
            return View();
        }
        [HttpPost]
        [Route("Search")]
        public List<Object> Search([FromBody] SearchWalletModel searchWalletModel)
        {
            try
            {
                if (HttpContext.Items["UserInfo"] is not CurrentUserModel _userInfo)
                {
                    return null;
                }
                return _walletManagementService.GetAllWallet(searchWalletModel);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }
        }
        [HttpPost]
        [Route("Create")]
        public async Task<bool> Create([FromBody] CreateWalletModel add)
        {
            try
            {
                if (HttpContext.Items["UserInfo"] is not CurrentUserModel _userInfo)
                {
                    return false;
                }
                return await _walletManagementService.CreateWallet(add, _userInfo);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return false;
            }
        }
        [HttpPost]
        [Route("Checked")]
        public async Task<bool> Checked([FromBody] CheckedWalletModel input)
        {
            try
            {
                if (HttpContext.Items["UserInfo"] is not CurrentUserModel _userInfo)
                {
                    return false;
                }
                return await _walletManagementService.CheckedWallet(input, _userInfo);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return false;
            }
        }
        [HttpGet]
        [Route("Detail")]
        public DetailWalletModel Detail(int id)
        {
            try
            {
                if (HttpContext.Items["UserInfo"] is not CurrentUserModel _userInfo)
                {
                    return null;
                }
                var walletDetail = _walletManagementService.GetDetailModels(id);
                return walletDetail;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }
        }
        [HttpDelete]
        [Route("Delete")]
        public async Task<bool> Delete(int id)
        {
            try
            {
                if (HttpContext.Items["UserInfo"] is not CurrentUserModel _userInfo)
                {
                    return false;
                }
                return await _walletManagementService.DeleteWallet(id, _userInfo);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return false;
            }
        }

        public async Task<CreateWalletModel> CallGetMethod(CreateWalletModel createWalletModel, CurrentUserModel _userInfo)
        {
            HttpClientHandler handler = new HttpClientHandler();
            CreateWalletModel _creteWallet = new CreateWalletModel();

            try
            {
                using (var client = new HttpClient(handler))
                {
                    client.BaseAddress = new Uri("http://ec2-13-125-111-150.ap-northeast-2.compute.amazonaws.com:9099/");
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    //string authInfo = Convert.ToBase64String(Encoding.Default.GetBytes("Akash:Vidhate"));
                    string authInfo = "TJTpWG4Q9YdlE4Zh";
                    //client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("x-api-key", authInfo);
                    client.DefaultRequestHeaders.TryAddWithoutValidation("x-api-key", authInfo);
                    #region Consume GET method  

                    HttpResponseMessage response = await client.GetAsync("api/Wallet/Info?wallet=" + createWalletModel.AddressWallet);
                    if (response.IsSuccessStatusCode)
                    {
                        var httpResponseResult = response.Content.ReadAsStringAsync().ContinueWith(task => task.Result).Result;
                        OutWalletModel _outWallet = JsonSerializer.Deserialize<OutWalletModel>(httpResponseResult);
                        if (string.IsNullOrEmpty(httpResponseResult))
                        {
                            return null;
                        }
                        else
                        {
                            _creteWallet.PrivateKey = createWalletModel.PrivateKey;
                            _creteWallet.AddressWallet = createWalletModel.AddressWallet;
                            _creteWallet.TAU = _outWallet.BalanceTAU.ToString();
                            _creteWallet.BNB = _outWallet.BalanceBNB.ToString();
                            _creteWallet.IsCheck = 0;

                            var a = await _walletManagementService.CreateWallet(_creteWallet, _userInfo);
                            if (!a) return null;

                        }
                    }
                    #endregion
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }

            return _creteWallet;

        }
    }
}
