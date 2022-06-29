using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Administrative_Tool.Data;
using Administrative_Tool.Repo.Interface;

namespace Administrative_Tool.Repo
{
    public class SellRepo : ISellRepo
    {
        private readonly SqlDbContext _context;
        public SellRepo(SqlDbContext context)
        {
            _context = context;
        }
        public List<WalletManagement> GetAll()
        {
            return _context.WalletManagements.ToList();
        }
    }
}
