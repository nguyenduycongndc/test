using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Administrative_Tool.Models;

namespace Administrative_Tool.Services.Interface
{
    public interface ILoginService
    {
        public LoginModel Login(InputLoginModel inputModel);
    }
}
