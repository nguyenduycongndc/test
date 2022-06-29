using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Administrative_Tool.Models;

namespace Administrative_Tool.Services.Interface
{
    public interface ISellService
    {
        List<WalletModel> GetAllWallet();
        List<WalletModel> GetAllWalletDrop(string q);
    }
}
