using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Administrative_Tool.Attributes;
using Administrative_Tool.Models;
using Administrative_Tool.Services.Interface;

namespace Administrative_Tool.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    [BaseAuthorize]
    public class SellItemsController : Controller
    {
        private readonly ILogger<SellItemsController> _logger;
        private readonly ISellService _sellService;
        public SellItemsController(ILogger<SellItemsController> logger, ISellService sellService)
        {
            _logger = logger;
            _sellService = sellService;
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
        [HttpGet]
        [Route("SelectWallet")]
        public List<WalletModel> SelectWallet()
        {
            try
            {
                if (HttpContext.Items["UserInfo"] is not CurrentUserModel _userInfo)
                {
                    return null;
                }
                var walletDetail = _sellService.GetAllWallet();
                return walletDetail;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }
        }
        [HttpGet]
        [Route("Dropdown")]
        public List<WalletModel> Dropdown(string q)
        {
            try
            {
                if (HttpContext.Items["UserInfo"] is not CurrentUserModel _userInfo)
                {
                    return null;
                }
                return _sellService.GetAllWalletDrop(q);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }
        }
    }
}
