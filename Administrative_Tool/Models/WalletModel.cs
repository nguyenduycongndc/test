using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Administrative_Tool.Models
{
    public class WalletModel
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public string PrivateKey { get; set; }
        public string TAU { get; set; }
        public string BNB { get; set; }
        public int IsCheck { get; set; }
    }

    public class SearchWalletModel
    {
        public int Id { get; set; }
        [JsonPropertyName("start_number")]
        public int StartNumber { get; set; }
        [JsonPropertyName("page_size")]
        public int PageSize { get; set; }
    }

    public class OutWalletModel
    {
        public double BalanceBNB { get; set; }
        public double BalanceTAU { get; set; }
    }
}
