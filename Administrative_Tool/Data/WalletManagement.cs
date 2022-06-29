using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Administrative_Tool.Data
{
    [Table("WALLET_MANAGEMENT")]

    public class WalletManagement
    {
        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [Column("private _key")]
        [JsonPropertyName("private _key")]
        public string PrivateKey { get; set; }

        [Column("address_wallet")]
        [JsonPropertyName("address_wallet")]
        public string AddressWallet { get; set; }

        [Column("TAU")]
        [JsonPropertyName("TAU")]
        public string TAU { get; set; }

        [Column("BNB")]
        [JsonPropertyName("BNB")]
        public string BNB { get; set; }

        [Column("is_check")]
        [JsonPropertyName("is_check")]
        public int IsCheck { get; set; }

        [Column("is_active")]
        [JsonPropertyName("is_active")]
        public int IsActive { get; set; }

        [Column("is_deleted")]
        [JsonPropertyName("is_deleted")]
        public int? IsDeleted { get; set; }

        [Column("created_by")]
        [JsonPropertyName("created_by")]
        public int? CreatedBy { get; set; }

        [Column("created_at")]
        [JsonPropertyName("created_at")]
        public DateTime? CreatedAt { get; set; }

        [Column("modified_by")]
        [JsonPropertyName("modified_by")]
        public int? ModifiedBy { get; set; }

        [Column("modified_at")]
        [JsonPropertyName("modified_at")]
        public DateTime? ModifiedAt { get; set; }

        [Column("deleted_at")]
        [JsonPropertyName("deleted_at")]
        public DateTime? DeletedAt { get; set; }

        [Column("deleted_by")]
        [JsonPropertyName("deleted_by")]
        public int? DeletedBy { get; set; }

        [JsonPropertyName("users_id")]
        public int? users_id { get; set; }

        [ForeignKey("users_id")]
        public virtual Users Users { get; set; }
    }
}
