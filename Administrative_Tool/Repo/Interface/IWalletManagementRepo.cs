using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Administrative_Tool.Data;
using Administrative_Tool.Models;

namespace Administrative_Tool.Repo.Interface
{
    public interface IWalletManagementRepo
    {
        List<WalletManagement> GetAll();
        Task<bool> CreateWallet(WalletManagement walletManagement);
        Task<bool> CheckedWallet(WalletManagement walletManagement);
        public WalletManagement GetDetailWallet(int id);
        Task<bool> DeleteWalletRP(WalletManagement walletManagement);
        List<WalletManagement> CheckWalletManagement(string AddressWallet);
    }
}
