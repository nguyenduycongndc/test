using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Administrative_Tool.Models;
using Administrative_Tool.Repo;
using Administrative_Tool.Repo.Interface;
using Administrative_Tool.Services.Interface;

namespace Administrative_Tool.Services
{
    public class SellService : ISellService
    {
        private readonly ILogger<SellService> _logger;
        private readonly ISellRepo _sellRepo;
        public SellService(ISellRepo sellRepo, ILogger<SellService> logger)
        {
            _sellRepo = sellRepo;
            _logger = logger;
        }
        public List<WalletModel> GetAllWallet()
        {
            var qr = _sellRepo.GetAll();
            List<WalletModel> lst = new List<WalletModel>();
            var listWallet = qr.Where(x => (x.IsDeleted != 0) && x.IsCheck == 1).Select(x => new WalletModel()
            {
                Id = x.Id,
                Address = x.AddressWallet,
                PrivateKey = x.PrivateKey,
                TAU = x.TAU,
                BNB = x.BNB,
                IsCheck = x.IsCheck,
            }).OrderBy(x => x.Id).ToList();
            return listWallet;
        }
        public List<WalletModel> GetAllWalletDrop(string q)
        {
            var qr = _sellRepo.GetAll();
            List<WalletModel> lst = new List<WalletModel>();
            var listWallet = qr.Where(x => (x.IsDeleted != 0) && x.IsCheck == 1 && (string.IsNullOrEmpty(q) || x.AddressWallet.Contains(q) || x.AddressWallet.Contains(q))).Select(x => new WalletModel()
            {
                Id = x.Id,
                Address = x.AddressWallet,
                TAU = x.TAU,
                BNB = x.BNB,
                IsCheck = x.IsCheck,
            }).OrderBy(x => x.Id).ToList();
            return listWallet;
        }
    }
}
