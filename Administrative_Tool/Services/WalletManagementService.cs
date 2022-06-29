using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Administrative_Tool.Data;
using Administrative_Tool.Models;
using Administrative_Tool.Repo;
using Administrative_Tool.Repo.Interface;
using Administrative_Tool.Services.Interface;

namespace Administrative_Tool.Services
{
    public class WalletManagementService : IWalletManagementService
    {
        private readonly ILogger<WalletManagementService> _logger;
        private readonly IWalletManagementRepo _walletManagementRepo;
        public WalletManagementService(IWalletManagementRepo walletManagementRepo, ILogger<WalletManagementService> logger)
        {
            _walletManagementRepo = walletManagementRepo;
            _logger = logger;
        }
        public List<Object> GetAllWallet(SearchWalletModel searchWalletModel)
        {
            var qr = _walletManagementRepo.GetAll();
            List<WalletModel> lst = new List<WalletModel>();
            var listWallet = qr.Where(x => (x.IsDeleted != 0) && x.users_id == searchWalletModel.Id).Select(x => new WalletModel()
            {
                Id = x.Id,
                Address = x.AddressWallet,
                TAU = x.TAU,
                BNB = x.BNB,
                IsCheck = x.IsCheck,
            }).OrderBy(x => x.Id).ToList();
            var count = listWallet.Count();
            var countSelected = qr.Where(x => (x.IsDeleted != 0)).Count(a => a.IsCheck == 1);
            var countNoSelected = qr.Where(x => (x.IsDeleted != 0)).Count(a => a.IsCheck == 0);
            lst = listWallet.Skip(searchWalletModel.StartNumber).Take(searchWalletModel.PageSize).ToList();
            var data = new List<Object> { lst, listWallet.Count(), countSelected, countNoSelected };
            return data;
        }
        public async Task<bool> CreateWallet(CreateWalletModel input, CurrentUserModel _userInfo)
        {
            try
            {
                var checkWallet = _walletManagementRepo.CheckWalletManagement(input.AddressWallet);
                if (checkWallet.Count() > 0)
                {
                    _logger.LogError("Ví đã tồn tại");
                    return false;
                }
                if (input.AddressWallet == "" || input.AddressWallet == null || input.PrivateKey == "" || input.PrivateKey == null)
                {
                    return false;
                }

                WalletManagement wl = new WalletManagement()
                {
                    PrivateKey = input.PrivateKey.Trim(),
                    AddressWallet = input.AddressWallet.Trim(),
                    TAU = input.TAU,
                    BNB = input.BNB,
                    IsCheck = input.IsCheck,
                    IsActive = 1,
                    CreatedAt = DateTime.Now,
                    CreatedBy = _userInfo.Id,
                    users_id = _userInfo.Id,
                };

                return await _walletManagementRepo.CreateWallet(wl);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return false;
            }
        }
        public async Task<bool> CheckedWallet(CheckedWalletModel input, CurrentUserModel _userInfo)
        {
            try
            {
                var data = _walletManagementRepo.GetDetailWallet(input.Id);
                if (data == null) return false;
                data.Id = input.Id;
                data.IsCheck = input.Checked;
                return await _walletManagementRepo.CheckedWallet(data);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return false;
            }
        }
        public DetailWalletModel GetDetailModels(int Id)
        {
            try
            {
                var data = _walletManagementRepo.GetDetailWallet(Id);

                var detailWl = new DetailWalletModel()
                {
                    Id = data.Id,
                    IsActive = data.IsActive,
                    AddressWallet = data.AddressWallet,
                };

                return detailWl;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }
        }
        public async Task<bool> DeleteWallet(int id, CurrentUserModel _userInfo)
        {
            try
            {
                var data = _walletManagementRepo.GetDetailWallet(id);
                if (data == null) return false;
                data.DeletedAt = DateTime.Now;
                data.DeletedBy = _userInfo.Id;
                data.IsDeleted = 0;
                return await _walletManagementRepo.DeleteWalletRP(data);
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
