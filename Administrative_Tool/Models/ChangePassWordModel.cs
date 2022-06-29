using System;

namespace Administrative_Tool.Models
{
    public class ChangePassWordModel
    {
        public int Id { get; set; }
        public string PassWordOld { get; set; }
        public string PassWordNew { get; set; }
        public string ConfirmPassWordNew { get; set; }
    }
}
