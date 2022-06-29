using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Administrative_Tool.Helpers.Module
{
    public class JwtSettings
    {
        public string Issuer { get; set; }
        public string Secret { get; set; }
        public int ExpirationInDays { get; set; }
    }
}
