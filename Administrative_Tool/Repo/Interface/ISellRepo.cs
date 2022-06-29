using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Administrative_Tool.Data;

namespace Administrative_Tool.Repo.Interface
{
    public interface ISellRepo
    {
        List<WalletManagement> GetAll();
    }
}
