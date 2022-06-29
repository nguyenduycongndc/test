using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Administrative_Tool.Models;

namespace Administrative_Tool.Services.Interface
{
    public interface IWalletManagementService
    {
        List<Object> GetAllWallet(SearchWalletModel searchWalletModel);
        public Task<bool> CreateWallet(CreateWalletModel input, CurrentUserModel _userInfo);
        public Task<bool> CheckedWallet(CheckedWalletModel input, CurrentUserModel _userInfo);
        public DetailWalletModel GetDetailModels(int id);
        public Task<bool> DeleteWallet(int Id, CurrentUserModel _userInfo);

    }
}
