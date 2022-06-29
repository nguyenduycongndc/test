using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Administrative_Tool.Models
{
    public class CreateModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public int RoleId { get; set; }
    }
    public class CreateWalletModel
    {
        public string PrivateKey { get; set; }
        public string AddressWallet { get; set; }
        public string TAU { get; set; }
        public string BNB { get; set; }
        public int IsCheck { get; set; }
    }
    public class CheckedWalletModel
    {
        public int Id { get; set; }
        public int Checked { get; set; }
    }

    public class InputWalletModel
    {
        public string PrivateKey { get; set; }
        public string AddressWallet { get; set; }
        public int IsCheck { get; set; }
    }

    //public class InputBuyModel
    //{
    //    public Egg Egg { get; set; }
    //    public Hero Hero { get; set; }
    //}
    //public class Egg
    //{
    //    public string RarityEggCommon { get; set; }
    //    public string MonneyEggCommon { get; set; }
    //    public string RarityEggUnCommon { get; set; }
    //    public string MonneyEggUnCommon { get; set; }
    //    public string RarityEggRare { get; set; }
    //    public string MonneyEggRare { get; set; }
    //    public string RarityEggEpic { get; set; }
    //    public string MonneyEggEpic { get; set; }
    //    public string RarityEggLengend { get; set; }
    //    public string MonneyEggLengend { get; set; }
    //    public string RarityEggMythic { get; set; }
    //    public string MonneyEggMythic { get; set; }
    //}
    //public class Hero
    //{
    //    public string RarityHeroCommon { get; set; }
    //    public bool MaleHeroCommon { get; set; }
    //    public MoneyMaleCommonHero MoneyMaleCommonHero { get; set; }
    //    public bool FemaleCommonHero { get; set; }
    //    public MonneyFemaleCommonHero MonneyFemaleCommonHero { get; set; }

    //    public string RarityHeroUnCommon { get; set; }
    //    public bool MaleUnCommonHero { get; set; }
    //    public MoneyMaleUnCommonHero MoneyMaleUnCommonHero { get; set; }
    //    public bool FemaleUnCommonHero { get; set; }
    //    public MonneyFemaleUnCommonHero MonneyFemaleUnCommonHero { get; set; }

    //    public string RarityHeroRare { get; set; }
    //    public bool MaleRareHero { get; set; }
    //    public MoneyMaleRareHero MoneyMaleRareHero { get; set; }
    //    public bool FemaleRareHero { get; set; }
    //    public MonneyFemaleRareHero MonneyFemaleRareHero { get; set; }

    //    public string RarityHeroEpic { get; set; }
    //    public bool MaleEpicHero { get; set; }
    //    public MoneyMaleEpicHero MoneyMaleEpicHero { get; set; }
    //    public bool FemaleEpicHero { get; set; }
    //    public MonneyFemaleEpicHero MonneyFemaleEpicHero { get; set; }

    //    public string RarityHeroLengend { get; set; }
    //    public bool MaleLengendHero { get; set; }
    //    public MoneyMaleLengendHero MoneyMaleLengendHero { get; set; }
    //    public bool FemaleLengendHero { get; set; }
    //    public MonneyFemaleLengendHero MonneyFemaleLengendHero { get; set; }

    //    public string RarityHeroMythic { get; set; }
    //    public bool MaleMythicHero { get; set; }
    //    public MoneyMaleMythicHero MoneyMaleMythicHero { get; set; }
    //    public bool FemaleMythicHero { get; set; }
    //    public MonneyFemaleMythicHero MonneyFemaleMythicHero { get; set; }
    //}
    //public class MoneyMaleCommonHero
    //{
    //    public string MonneyMaleHeroCommon05 { get; set; }
    //    public string MonneyMaleHeroCommon15 { get; set; }
    //    public string MonneyMaleHeroCommon25 { get; set; }
    //    public string MonneyMaleHeroCommon35 { get; set; }
    //    public string MonneyMaleHeroCommon45 { get; set; }
    //    public string MonneyMaleHeroCommon55 { get; set; }
    //}
    //public class MonneyFemaleCommonHero
    //{
    //    public string MonneyFemaleHeroCommon05 { get; set; }
    //    public string MonneyFemaleHeroCommon15 { get; set; }
    //    public string MonneyFemaleHeroCommon25 { get; set; }
    //    public string MonneyFemaleHeroCommon35 { get; set; }
    //    public string MonneyFemaleHeroCommon45 { get; set; }
    //    public string MonneyFemaleHeroCommon55 { get; set; }
    //}
    //public class MoneyMaleUnCommonHero
    //{
    //    public string MonneyHero05 { get; set; }
    //    public string MonneyHero15 { get; set; }
    //    public string MonneyHero25 { get; set; }
    //    public string MonneyHero35 { get; set; }
    //    public string MonneyHero45 { get; set; }
    //    public string MonneyHero55 { get; set; }
    //}
    //public class MonneyFemaleUnCommonHero
    //{
    //    public string MonneyHero05 { get; set; }
    //    public string MonneyHero15 { get; set; }
    //    public string MonneyHero25 { get; set; }
    //    public string MonneyHero35 { get; set; }
    //    public string MonneyHero45 { get; set; }
    //    public string MonneyHero55 { get; set; }
    //}
    //public class MoneyMaleRareHero
    //{
    //    public string MonneyHero05 { get; set; }
    //    public string MonneyHero15 { get; set; }
    //    public string MonneyHero25 { get; set; }
    //    public string MonneyHero35 { get; set; }
    //    public string MonneyHero45 { get; set; }
    //    public string MonneyHero55 { get; set; }
    //}
    //public class MonneyFemaleRareHero
    //{
    //    public string MonneyHero05 { get; set; }
    //    public string MonneyHero15 { get; set; }
    //    public string MonneyHero25 { get; set; }
    //    public string MonneyHero35 { get; set; }
    //    public string MonneyHero45 { get; set; }
    //    public string MonneyHero55 { get; set; }
    //}
    //public class MoneyMaleEpicHero
    //{
    //    public string MonneyHero05 { get; set; }
    //    public string MonneyHero15 { get; set; }
    //    public string MonneyHero25 { get; set; }
    //    public string MonneyHero35 { get; set; }
    //    public string MonneyHero45 { get; set; }
    //    public string MonneyHero55 { get; set; }
    //}
    //public class MonneyFemaleEpicHero
    //{
    //    public string MonneyHero05 { get; set; }
    //    public string MonneyHero15 { get; set; }
    //    public string MonneyHero25 { get; set; }
    //    public string MonneyHero35 { get; set; }
    //    public string MonneyHero45 { get; set; }
    //    public string MonneyHero55 { get; set; }
    //}
    //public class MoneyMaleLengendHero
    //{
    //    public string MonneyHero05 { get; set; }
    //    public string MonneyHero15 { get; set; }
    //    public string MonneyHero25 { get; set; }
    //    public string MonneyHero35 { get; set; }
    //    public string MonneyHero45 { get; set; }
    //    public string MonneyHero55 { get; set; }
    //}
    //public class MonneyFemaleLengendHero
    //{
    //    public string MonneyHero05 { get; set; }
    //    public string MonneyHero15 { get; set; }
    //    public string MonneyHero25 { get; set; }
    //    public string MonneyHero35 { get; set; }
    //    public string MonneyHero45 { get; set; }
    //    public string MonneyHero55 { get; set; }
    //}
    //public class MoneyMaleMythicHero
    //{
    //    public string MonneyHero05 { get; set; }
    //    public string MonneyHero15 { get; set; }
    //    public string MonneyHero25 { get; set; }
    //    public string MonneyHero35 { get; set; }
    //    public string MonneyHero45 { get; set; }
    //    public string MonneyHero55 { get; set; }
    //}
    //public class MonneyFemaleMythicHero
    //{
    //    public string MonneyHero05 { get; set; }
    //    public string MonneyHero15 { get; set; }
    //    public string MonneyHero25 { get; set; }
    //    public string MonneyHero35 { get; set; }
    //    public string MonneyHero45 { get; set; }
    //    public string MonneyHero55 { get; set; }
    //}

    public class XModel
    {
       
    }
    public class InputBuyModel
    {
        public Egg Egg { get; set; }
        public Hero Hero { get; set; }
    }
    public class Egg
    {

    }
    #region
    public class Hero
    {
        //public string checksum { get; set; }
        public List<Fillter> filters { get; set; }
    }
    public class Fillter
    {
        public int rarity { get; set; }
        public int sex { get; set; }//duc, cai
        public int breed { get; set; }//0-5
        public int priceUSD { get; set; }//tien

    }
    #endregion
    #region DataRs
    public class ModelX
    {
        public string checksum { get; set; }
        public List<Fillter> filters { get; set; }
    }
    public class OutPut
    {
        public List<DataOut> Data { get; set; }
    }
    public class DataOut
    {
        public int id { get; set; }
        public int ticketId { get; set; }
        public int tokenId { get; set; }
        public string elemental { get; set; }
        public string elemental2 { get; set; }
        public string elemental3 { get; set; }
        [JsonPropertyName("class")]
        public string Class { get; set; }
        public string rarity { get; set; }
        public int skillActiveId { get; set; }
        public int skillPassiveId { get; set; }
        public string ownerId { get; set; }
        public int? ownerIdOffer { get; set; }
        public string name { get; set; }
        public string sex { get; set; }
        public int? view { get; set; }
        public int level { get; set; }
        public int percentLevelUp { get; set; }
        public string eyes { get; set; }
        public string hair { get; set; }
        public string tattoo { get; set; }
        public int attack { get; set; }
        public int armor { get; set; }
        public int hp { get; set; }
        public int speed { get; set; }
        public int wings { get; set; }
        [JsonPropertyName("base")]
        public int Base { get; set; }
        public int horn { get; set; }
        public int armorItem { get; set; }
        public int pricesBNB { get; set; }
        public int pricesUSD { get; set; }
        public bool isSelling { get; set; }
        public int star { get; set; }
        public int breedCount { get; set; }
        public int spiritId { get; set; }
        public int? lastBreedingTime { get; set; }
        public int momId { get; set; }
        public int dadId { get; set; }
        public int exp { get; set; }
        public int critDame { get; set; }
        public int critRate { get; set; }
        public int evasion { get; set; }
        public int energy { get; set; }
        public int energyMax { get; set; }
        public int? levelCapCurentStar { get; set; }
        public int? levelCapNextStar { get; set; }
        public int? upgradeStarUSDFee { get; set; }
        public int? upgradeStarGoldFee { get; set; }
        public int? listSkillPassiveDto { get; set; }
        public int? listSkillActiveDto { get; set; }
        public int baseHp { get; set; }
        public int baseAttack { get; set; }
        public int baseArmor { get; set; }
        public int baseSpeed { get; set; }
        public int? ownerRent { get; set; }
        public int feeRent { get; set; }
        public int hourEndRent { get; set; }
        public string status { get; set; }
        public int? timeEndRent { get; set; }
        public int? timeStartRent { get; set; }
        public int? lockTime { get; set; }
    }
    #endregion
}
