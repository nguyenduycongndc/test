
function Start() {
    //egg
    CommonEgg = $('#checkbox1:checked').val() != undefined ? true : false;
    UnCommonEgg = $('#checkbox2:checked').val() != undefined ? true : false;
    RareEgg = $('#checkbox3:checked').val() != undefined ? true : false;
    EpicEgg = $('#checkbox4:checked').val() != undefined ? true : false;
    LengendEgg = $('#checkbox5:checked').val() != undefined ? true : false;
    MythicEgg = $('#checkbox6:checked').val() != undefined ? true : false;
    //hero
    CommonHero = $('#checkbox000:checked').val() != undefined ? true : false;
    MaleCommonHero = $('#checkboxsex001:checked').val() != undefined ? true : false;
    FemaleCommonHero = $('#checkboxsex008:checked').val() != undefined ? true : false;

    UnCommonHero = $('#checkbox100:checked').val() != undefined ? true : false;
    MaleUnCommonHero = $('#checkboxsex101:checked').val() != undefined ? true : false;
    FemaleUnCommonHero = $('#checkboxsex108:checked').val() != undefined ? true : false;


    RareHero = $('#checkbox200:checked').val() != undefined ? true : false;
    MaleRareHero = $('#checkboxsex201:checked').val() != undefined ? true : false;
    FemaleRareHero = $('#checkboxsex208:checked').val() != undefined ? true : false;

    EpicHero = $('#checkbox300:checked').val() != undefined ? true : false;
    MaleEpicHero = $('#checkboxsex301:checked').val() != undefined ? true : false;
    FemaleEpicHero = $('#checkboxsex308:checked').val() != undefined ? true : false;

    LengendHero = $('#checkbox400:checked').val() != undefined ? true : false;
    MaleLengendHero = $('#checkboxsex401:checked').val() != undefined ? true : false;
    FemaleLengendHero = $('#checkboxsex408:checked').val() != undefined ? true : false;

    MythicHero = $('#checkbox500:checked').val() != undefined ? true : false;
    MaleMythicHero = $('#checkboxsex501:checked').val() != undefined ? true : false;
    FemaleMythicHero = $('#checkboxsex508:checked').val() != undefined ? true : false;

    if (CommonEgg == true && $('#Zen1').val() == "") {
        toastr.error("Vui lòng nhập giá trứng đã chọn");
        return;
    } else if (CommonEgg != true && $('#Zen1').val() != "") {
        toastr.error("Vui lòng chọn trứng đã nhập giá mua");
        return;
    }
    if (UnCommonEgg == true && $('#Zen2').val() == "") {
        toastr.error("Vui lòng nhập giá trứng đã chọn");
        return;
    } else if (UnCommonEgg != true && $('#Zen2').val() != "") {
        toastr.error("Vui lòng chọn trứng đã nhập giá mua");
        return;
    }
    if (RareEgg == true && $('#Zen3').val() == "") {
        toastr.error("Vui lòng nhập giá trứng đã chọn");
        return;
    } else if (RareEgg != true && $('#Zen3').val() != "") {
        toastr.error("Vui lòng chọn trứng đã nhập giá mua");
        return;
    }
    if (EpicEgg == true && $('#Zen4').val() == "") {
        toastr.error("Vui lòng nhập giá trứng đã chọn");
        return;
    } else if (EpicEgg != true && $('#Zen4').val() != "") {
        toastr.error("Vui lòng chọn trứng đã nhập giá mua");
        return;
    }
    if (LengendEgg == true && $('#Zen5').val() == "") {
        toastr.error("Vui lòng nhập giá trứng đã chọn");
        return;
    } else if (LengendEgg != true && $('#Zen5').val() != "") {
        toastr.error("Vui lòng chọn trứng đã nhập giá mua");
        return;
    }
    if (MythicEgg == true && $('#Zen6').val() == "") {
        toastr.error("Vui lòng nhập giá trứng đã chọn");
        return;
    } else if (MythicEgg != true && $('#Zen6').val() != "") {
        toastr.error("Vui lòng chọn trứng đã nhập giá mua");
        return;
    }
    var Egg = {
        'RarityEggCommon': CommonEgg == true ? "Common" : "",
        'MonneyEggCommon': $('#Zen1').val(),
        'RarityEggUnCommon': UnCommonEgg == true ? "UnCommon" : "",
        'MonneyEggUnCommon': $('#Zen2').val(),
        'RarityEggRare': RareEgg == true ? "Rare" : "",
        'MonneyEggRare': $('#Zen3').val(),
        'RarityEggEpic': EpicEgg == true ? "Epic" : "",
        'MonneyEggEpic': $('#Zen4').val(),
        'RarityEggLengend': LengendEgg == true ? "Lengend" : "",
        'MonneyEggLengend': $('#Zen5').val(),
        'RarityEggMythic': MythicEgg == true ? "Mythic" : "",
        'MonneyEggMythic': $('#Zen6').val(),
    }
    //commonhero
    //MaleCommonHero
    MaleCommon05 = $('#checkboxsex002:checked').val() != undefined ? true : false;
    MaleCommon15 = $('#checkboxsex003:checked').val() != undefined ? true : false;
    MaleCommon25 = $('#checkboxsex004:checked').val() != undefined ? true : false;
    MaleCommon35 = $('#checkboxsex005:checked').val() != undefined ? true : false;
    MaleCommon45 = $('#checkboxsex006:checked').val() != undefined ? true : false;
    MaleCommon55 = $('#checkboxsex007:checked').val() != undefined ? true : false;
    //FemaleCommonHero
    FemaleCommon05 = $('#checkboxsex009:checked').val() != undefined ? true : false;
    FemaleCommon15 = $('#checkboxsex010:checked').val() != undefined ? true : false;
    FemaleCommon25 = $('#checkboxsex011:checked').val() != undefined ? true : false;
    FemaleCommon35 = $('#checkboxsex012:checked').val() != undefined ? true : false;
    FemaleCommon45 = $('#checkboxsex013:checked').val() != undefined ? true : false;
    FemaleCommon55 = $('#checkboxsex013:checked').val() != undefined ? true : false;
    if (CommonHero == true) {
        if (MaleCommonHero == true) {
            if (MaleCommon05 == true && $('#Zen000').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleCommon05 != true && $('#Zen000').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleCommon15 == true && $('#Zen001').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleCommon15 != true && $('#Zen001').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleCommon25 == true && $('#Zen002').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleCommon25 != true && $('#Zen002').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleCommon35 == true && $('#Zen003').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleCommon35 != true && $('#Zen003').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleCommon45 == true && $('#Zen004').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleCommon45 != true && $('#Zen004').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleCommon55 == true && $('#Zen005').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleCommon55 != true && $('#Zen005').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleCommon55 == true && $('#Zen005').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleCommon55 != true && $('#Zen005').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
        }
        else if (FemaleCommonHero == true) {
            if (FemaleCommon05 == true && $('#Zen000').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleCommon05 != true && $('#Zen000').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleCommon15 == true && $('#Zen001').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleCommon15 != true && $('#Zen001').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleCommon25 == true && $('#Zen002').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleCommon25 != true && $('#Zen002').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleCommon35 == true && $('#Zen003').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleCommon35 != true && $('#Zen003').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleCommon45 == true && $('#Zen004').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleCommon45 != true && $('#Zen004').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleCommon55 == true && $('#Zen005').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleCommon55 != true && $('#Zen005').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleCommon55 == true && $('#Zen005').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleCommon55 != true && $('#Zen005').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
        }
    }

    //Uncommonhero
    //MaleUnCommonHero
    MaleUnCommon05 = $('#checkboxsex102:checked').val() != undefined ? true : false;
    MaleUnCommon15 = $('#checkboxsex103:checked').val() != undefined ? true : false;
    MaleUnCommon25 = $('#checkboxsex104:checked').val() != undefined ? true : false;
    MaleUnCommon35 = $('#checkboxsex105:checked').val() != undefined ? true : false;
    MaleUnCommon45 = $('#checkboxsex106:checked').val() != undefined ? true : false;
    MaleUnCommon55 = $('#checkboxsex107:checked').val() != undefined ? true : false;
    //FemaleUnCommonHero
    FemaleUnCommon05 = $('#checkboxsex109:checked').val() != undefined ? true : false;
    FemaleUnCommon15 = $('#checkboxsex110:checked').val() != undefined ? true : false;
    FemaleUnCommon25 = $('#checkboxsex111:checked').val() != undefined ? true : false;
    FemaleUnCommon35 = $('#checkboxsex112:checked').val() != undefined ? true : false;
    FemaleUnCommon45 = $('#checkboxsex113:checked').val() != undefined ? true : false;
    FemaleUnCommon55 = $('#checkboxsex114:checked').val() != undefined ? true : false;
    if (UnCommonHero == true) {
        if (MaleUnCommonHero == true) {
            if (MaleUnCommon05 == true && $('#Zen100').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleUnCommon05 != true && $('#Zen100').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleUnCommon15 == true && $('#Zen101').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleUnCommon15 != true && $('#Zen101').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleUnCommon25 == true && $('#Zen102').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleUnCommon25 != true && $('#Zen102').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleUnCommon35 == true && $('#Zen103').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleUnCommon35 != true && $('#Zen103').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleUnCommon45 == true && $('#Zen104').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleUnCommon45 != true && $('#Zen104').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleUnCommon55 == true && $('#Zen105').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleUnCommon55 != true && $('#Zen105').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleUnCommon55 == true && $('#Zen105').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleUnCommon55 != true && $('#Zen105').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
        }
        else if (FemaleUnCommonHero == true) {
            if (FemaleUnCommon05 == true && $('#Zen106').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleUnCommon05 != true && $('#Zen106').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleUnCommon15 == true && $('#Zen107').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleUnCommon15 != true && $('#Zen107').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleUnCommon25 == true && $('#Zen108').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleUnCommon25 != true && $('#Zen108').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleUnCommon35 == true && $('#Zen109').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleUnCommon35 != true && $('#Zen109').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleUnCommon45 == true && $('#Zen110').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleUnCommon45 != true && $('#Zen110').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleUnCommon55 == true && $('#Zen111').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleUnCommon55 != true && $('#Zen111').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
        }
    }

    //Rarehero
    //MaleRareHero
    MaleRare05 = $('#checkboxsex202:checked').val() != undefined ? true : false;
    MaleRare15 = $('#checkboxsex203:checked').val() != undefined ? true : false;
    MaleRare25 = $('#checkboxsex204:checked').val() != undefined ? true : false;
    MaleRare35 = $('#checkboxsex205:checked').val() != undefined ? true : false;
    MaleRare45 = $('#checkboxsex206:checked').val() != undefined ? true : false;
    MaleRare55 = $('#checkboxsex207:checked').val() != undefined ? true : false;
    //FemaleRareHero
    FemaleRare05 = $('#checkboxsex209:checked').val() != undefined ? true : false;
    FemaleRare15 = $('#checkboxsex210:checked').val() != undefined ? true : false;
    FemaleRare25 = $('#checkboxsex211:checked').val() != undefined ? true : false;
    FemaleRare35 = $('#checkboxsex212:checked').val() != undefined ? true : false;
    FemaleRare45 = $('#checkboxsex213:checked').val() != undefined ? true : false;
    FemaleRare55 = $('#checkboxsex214:checked').val() != undefined ? true : false;
    if (RareHero == true) {
        if (MaleRareHero == true) {
            if (MaleRare05 == true && $('#Zen200').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleRare05 != true && $('#Zen200').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleRare15 == true && $('#Zen201').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleRare15 != true && $('#Zen201').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleRare25 == true && $('#Zen202').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleRare25 != true && $('#Zen202').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleRare35 == true && $('#Zen203').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleRare35 != true && $('#Zen203').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleRare45 == true && $('#Zen204').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleRare45 != true && $('#Zen204').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleRare55 == true && $('#Zen205').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleRare55 != true && $('#Zen205').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleRare55 == true && $('#Zen205').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleRare55 != true && $('#Zen205').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
        }
        else if (FemaleRareHero == true) {
            if (FemaleRare05 == true && $('#Zen206').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleRare05 != true && $('#Zen206').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleRare15 == true && $('#Zen207').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleRare15 != true && $('#Zen207').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleRare25 == true && $('#Zen208').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleRare25 != true && $('#Zen208').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleRare35 == true && $('#Zen209').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleRare35 != true && $('#Zen209').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleRare45 == true && $('#Zen210').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleRare45 != true && $('#Zen210').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleRare55 == true && $('#Zen211').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleRare55 != true && $('#Zen211').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
        }
    }
    
    //Epichero
    //MaleEpicHero
    MaleEpic05 = $('#checkboxsex302:checked').val() != undefined ? true : false;
    MaleEpic15 = $('#checkboxsex303:checked').val() != undefined ? true : false;
    MaleEpic25 = $('#checkboxsex304:checked').val() != undefined ? true : false;
    MaleEpic35 = $('#checkboxsex305:checked').val() != undefined ? true : false;
    MaleEpic45 = $('#checkboxsex306:checked').val() != undefined ? true : false;
    MaleEpic55 = $('#checkboxsex307:checked').val() != undefined ? true : false;
    //FemaleEpicHero
    FemaleEpic05 = $('#checkboxsex309:checked').val() != undefined ? true : false;
    FemaleEpic15 = $('#checkboxsex310:checked').val() != undefined ? true : false;
    FemaleEpic25 = $('#checkboxsex311:checked').val() != undefined ? true : false;
    FemaleEpic35 = $('#checkboxsex312:checked').val() != undefined ? true : false;
    FemaleEpic45 = $('#checkboxsex313:checked').val() != undefined ? true : false;
    FemaleEpic55 = $('#checkboxsex314:checked').val() != undefined ? true : false;
    if (EpicHero == true) {
        if (MaleEpicHero == true) {
            if (MaleEpic05 == true && $('#Zen300').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleEpic05 != true && $('#Zen300').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleEpic15 == true && $('#Zen301').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleEpic15 != true && $('#Zen301').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleEpic25 == true && $('#Zen302').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleEpic25 != true && $('#Zen302').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleEpic35 == true && $('#Zen303').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleEpic35 != true && $('#Zen303').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleEpic45 == true && $('#Zen304').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleEpic45 != true && $('#Zen304').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleEpic55 == true && $('#Zen305').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleEpic55 != true && $('#Zen305').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleEpic55 == true && $('#Zen305').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleEpic55 != true && $('#Zen305').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
        }
        else if (FemaleEpicHero == true) {
            if (FemaleEpic05 == true && $('#Zen306').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleEpic05 != true && $('#Zen306').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleEpic15 == true && $('#Zen307').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleEpic15 != true && $('#Zen307').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleEpic25 == true && $('#Zen308').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleEpic25 != true && $('#Zen308').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleEpic35 == true && $('#Zen309').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleEpic35 != true && $('#Zen309').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleEpic45 == true && $('#Zen310').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleEpic45 != true && $('#Zen310').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleEpic55 == true && $('#Zen311').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleEpic55 != true && $('#Zen311').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
        }
    } 

    //Lengendhero
    //MaleLengendHero
    MaleLengend05 = $('#checkboxsex402:checked').val() != undefined ? true : false;
    MaleLengend15 = $('#checkboxsex403:checked').val() != undefined ? true : false;
    MaleLengend25 = $('#checkboxsex404:checked').val() != undefined ? true : false;
    MaleLengend35 = $('#checkboxsex405:checked').val() != undefined ? true : false;
    MaleLengend45 = $('#checkboxsex406:checked').val() != undefined ? true : false;
    MaleLengend55 = $('#checkboxsex407:checked').val() != undefined ? true : false;
    //FemaleLengendHero
    FemaleLengend05 = $('#checkboxsex409:checked').val() != undefined ? true : false;
    FemaleLengend15 = $('#checkboxsex410:checked').val() != undefined ? true : false;
    FemaleLengend25 = $('#checkboxsex411:checked').val() != undefined ? true : false;
    FemaleLengend35 = $('#checkboxsex412:checked').val() != undefined ? true : false;
    FemaleLengend45 = $('#checkboxsex413:checked').val() != undefined ? true : false;
    FemaleLengend55 = $('#checkboxsex414:checked').val() != undefined ? true : false;
    if (LengendHero == true) {
        if (MaleLengendHero == true) {
            if (MaleLengend05 == true && $('#Zen400').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleLengend05 != true && $('#Zen400').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleLengend15 == true && $('#Zen401').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleLengend15 != true && $('#Zen401').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleLengend25 == true && $('#Zen402').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleLengend25 != true && $('#Zen402').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleLengend35 == true && $('#Zen403').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleLengend35 != true && $('#Zen403').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleLengend45 == true && $('#Zen404').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleLengend45 != true && $('#Zen404').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleLengend55 == true && $('#Zen405').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleLengend55 != true && $('#Zen405').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleLengend55 == true && $('#Zen405').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleLengend55 != true && $('#Zen405').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
        }
        else if (FemaleLengendHero == true) {
            if (FemaleLengend05 == true && $('#Zen406').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleLengend05 != true && $('#Zen406').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleLengend15 == true && $('#Zen407').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleLengend15 != true && $('#Zen407').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleLengend25 == true && $('#Zen408').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleLengend25 != true && $('#Zen408').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleLengend35 == true && $('#Zen409').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleLengend35 != true && $('#Zen409').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleLengend45 == true && $('#Zen410').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleLengend45 != true && $('#Zen410').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleLengend55 == true && $('#Zen411').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleLengend55 != true && $('#Zen411').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
        }
    }
    

    //Mythichero
    //MaleMythicHero
    MaleMythic05 = $('#checkboxsex502:checked').val() != undefined ? true : false;
    MaleMythic15 = $('#checkboxsex503:checked').val() != undefined ? true : false;
    MaleMythic25 = $('#checkboxsex504:checked').val() != undefined ? true : false;
    MaleMythic35 = $('#checkboxsex505:checked').val() != undefined ? true : false;
    MaleMythic45 = $('#checkboxsex506:checked').val() != undefined ? true : false;
    MaleMythic55 = $('#checkboxsex507:checked').val() != undefined ? true : false;
    //FemaleMythicHero
    FemaleMythic05 = $('#checkboxsex509:checked').val() != undefined ? true : false;
    FemaleMythic15 = $('#checkboxsex510:checked').val() != undefined ? true : false;
    FemaleMythic25 = $('#checkboxsex511:checked').val() != undefined ? true : false;
    FemaleMythic35 = $('#checkboxsex512:checked').val() != undefined ? true : false;
    FemaleMythic45 = $('#checkboxsex513:checked').val() != undefined ? true : false;
    FemaleMythic55 = $('#checkboxsex514:checked').val() != undefined ? true : false;
    if (MythicHero == true) {
        if (MaleMythicHero == true) {
            if (MaleMythic05 == true && $('#Zen500').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleMythic05 != true && $('#Zen500').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleMythic15 == true && $('#Zen501').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleMythic15 != true && $('#Zen501').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleMythic25 == true && $('#Zen502').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleMythic25 != true && $('#Zen502').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleMythic35 == true && $('#Zen503').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleMythic35 != true && $('#Zen503').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleMythic45 == true && $('#Zen504').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleMythic45 != true && $('#Zen504').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleMythic55 == true && $('#Zen505').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleMythic55 != true && $('#Zen505').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (MaleMythic55 == true && $('#Zen505').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (MaleMythic55 != true && $('#Zen505').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
        }
        else if (FemaleMythicHero == true) {
            if (FemaleMythic05 == true && $('#Zen506').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleMythic05 != true && $('#Zen506').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleMythic15 == true && $('#Zen507').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleMythic15 != true && $('#Zen507').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleMythic25 == true && $('#Zen508').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleMythic25 != true && $('#Zen508').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleMythic35 == true && $('#Zen509').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleMythic35 != true && $('#Zen509').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleMythic45 == true && $('#Zen510').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleMythic45 != true && $('#Zen510').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
            if (FemaleMythic55 == true && $('#Zen511').val() == "") {
                toastr.error("Vui lòng nhập giá hero đã chọn");
                return;
            } else if (FemaleMythic55 != true && $('#Zen511').val() != "") {
                toastr.error("Vui lòng chọn hero đã nhập giá mua");
                return;
            }
        }
    }

    //var MoneyMaleCommonHero = {
    //    'MonneyMaleHeroCommon05': $('#Zen000').val(),
    //    'MonneyMaleHeroCommon15': $('#Zen001').val(),
    //    'MonneyMaleHeroCommon25': $('#Zen002').val(),
    //    'MonneyMaleHeroCommon35': $('#Zen003').val(),
    //    'MonneyMaleHeroCommon45': $('#Zen004').val(),
    //    'MonneyMaleHeroCommon55': $('#Zen005').val(),
    //}
    //var MoneyFemaleCommonHero = {
    //    'MonneyFemaleHeroCommon05': $('#Zen006').val(),
    //    'MonneyFemaleHeroCommon15': $('#Zen007').val(),
    //    'MonneyFemaleHeroCommon25': $('#Zen008').val(),
    //    'MonneyFemaleHeroCommon35': $('#Zen009').val(),
    //    'MonneyFemaleHeroCommon45': $('#Zen010').val(),
    //    'MonneyFemaleHeroCommon55': $('#Zen011').val(),
    //}
    //var Hero = {
    //    'rarity': CommonHero == true ? 1 : RareHero == true ? 2 : RareHero == true ? 3 : SuperRace == true ? 4 : Epic == true ? 5 : Legend == true ? 6 : Mythic == true ? 7 : 0,
    //    'MaleHeroCommon': MaleCommonHero,
    //    'FemaleCommonHero': FemaleCommonHero,
    //    'MoneyMaleCommonHero': MoneyMaleCommonHero,
    //    'MonneyFemaleCommonHero': MoneyFemaleCommonHero,
    //}
    
    var filters = [];
    if (CommonHero == true && MaleCommonHero == true && MaleCommon05 == true) {
        filters.push({
            'rarity': 1,
            'sex': 0,
            'breed': 0,
            'priceUSD': $('#Zen000').val(),
        })
    }
    if (CommonHero == true && MaleCommonHero == true && MaleCommon15 == true) {
        filters.push({
            'rarity': 1,
            'sex': 0,
            'breed': 1,
            'priceUSD': $('#Zen001').val(),
        })
    }
    if (CommonHero == true && MaleCommonHero == true && MaleCommon25 == true) {
        filters.push({
            'rarity': 1,
            'sex': 0,
            'breed': 2,
            'priceUSD': $('#Zen002').val(),
        })
    }
    if (CommonHero == true && MaleCommonHero == true && MaleCommon35 == true) {
        filters.push({
            'rarity': 1,
            'sex': 0,
            'breed': 3,
            'priceUSD': $('#Zen003').val(),
        })
    }
    if (CommonHero == true && MaleCommonHero == true && MaleCommon45 == true) {
        filters.push({
            'rarity': 1,
            'sex': 0,
            'breed': 4,
            'priceUSD': $('#Zen004').val(),
        })
    }
    if (CommonHero == true && MaleCommonHero == true && MaleCommon55 == true) {
        filters.push({
            'rarity': 1,
            'sex': 0,
            'breed': 5,
            'priceUSD': $('#Zen005').val(),
        })
    }
    if (CommonHero == true && FemaleCommonHero == true && FemaleCommon05 == true) {
        filters.push({
            'rarity': 2,
            'sex': 1,
            'breed': 0,
            'priceUSD': $('#Zen006').val(),
        })
    }
    if (CommonHero == true && FemaleCommonHero == true && FemaleCommon15 == true) {
        filters.push({
            'rarity': 2,
            'sex': 1,
            'breed': 1,
            'priceUSD': $('#Zen007').val(),
        })
    }
    if (CommonHero == true && FemaleCommonHero == true && FemaleCommon25 == true) {
        filters.push({
            'rarity': 1,
            'sex': 1,
            'breed': 2,
            'priceUSD': $('#Zen008').val(),
        })
    }
    if (CommonHero == true && FemaleCommonHero == true && FemaleCommon35 == true) {
        filters.push({
            'rarity': 1,
            'sex': 1,
            'breed': 3,
            'priceUSD': $('#Zen009').val(),
        })
    }
    if (CommonHero == true && FemaleCommonHero == true && FemaleCommon45 == true) {
        filters.push({
            'rarity': 1,
            'sex': 1,
            'breed': 4,
            'priceUSD': $('#Zen010').val(),
        })
    }
    if (CommonHero == true && FemaleCommonHero == true && FemaleCommon55 == true) {
        filters.push({
            'rarity': 1,
            'sex': 1,
            'breed': 5,
            'priceUSD': $('#Zen011').val(),
        })
    }


    if (UnCommonHero == true && MaleUnCommonHero == true && MaleUnCommon05 == true) {
        filters.push({
            'rarity': 2,
            'sex': 0,
            'breed': 0,
            'priceUSD': $('#Zen100').val(),
        })
    }
    if (UnCommonHero == true && MaleUnCommonHero == true && MaleUnCommon15 == true) {
        filters.push({
            'rarity': 2,
            'sex': 0,
            'breed': 1,
            'priceUSD': $('#Zen101').val(),
        })
    }
    if (UnCommonHero == true && MaleUnCommonHero == true && MaleUnCommon25 == true) {
        filters.push({
            'rarity': 2,
            'sex': 0,
            'breed': 2,
            'priceUSD': $('#Zen102').val(),
        })
    }
    if (UnCommonHero == true && MaleUnCommonHero == true && MaleUnCommon35 == true) {
        filters.push({
            'rarity': 2,
            'sex': 0,
            'breed': 3,
            'priceUSD': $('#Zen103').val(),
        })
    }
    if (UnCommonHero == true && MaleUnCommonHero == true && MaleUnCommon45 == true) {
        filters.push({
            'rarity': 2,
            'sex': 0,
            'breed': 4,
            'priceUSD': $('#Zen104').val(),
        })
    }
    if (UnCommonHero == true && MaleUnCommonHero == true && MaleUnCommon55 == true) {
        filters.push({
            'rarity': 2,
            'sex': 0,
            'breed': 5,
            'priceUSD': $('#Zen105').val(),
        })
    }
    if (UnCommonHero == true && FemaleUnCommonHero == true && FemaleUnCommon05 == true) {
        filters.push({
            'rarity': 2,
            'sex': 1,
            'breed': 0,
            'priceUSD': $('#Zen106').val(),
        })
    }
    if (UnCommonHero == true && FemaleUnCommonHero == true && FemaleUnCommon15 == true) {
        filters.push({
            'rarity': 2,
            'sex': 1,
            'breed': 1,
            'priceUSD': $('#Zen107').val(),
        })
    }
    if (UnCommonHero == true && FemaleUnCommonHero == true && FemaleUnCommon25 == true) {
        filters.push({
            'rarity': 2,
            'sex': 1,
            'breed': 2,
            'priceUSD': $('#Zen108').val(),
        })
    }
    if (UnCommonHero == true && FemaleUnCommonHero == true && FemaleUnCommon35 == true) {
        filters.push({
            'rarity': 2,
            'sex': 1,
            'breed': 3,
            'priceUSD': $('#Zen109').val(),
        })
    }
    if (UnCommonHero == true && FemaleUnCommonHero == true && FemaleUnCommon45 == true) {
        filters.push({
            'rarity': 2,
            'sex': 1,
            'breed': 4,
            'priceUSD': $('#Zen110').val(),
        })
    }
    if (UnCommonHero == true && FemaleUnCommonHero == true && FemaleUnCommon55 == true) {
        filters.push({
            'rarity': 2,
            'sex': 1,
            'breed': 5,
            'priceUSD': $('#Zen111').val(),
        })
    }

    if (RareHero == true && MaleRareHero == true && MaleRare05 == true) {
        filters.push({
            'rarity': 3,
            'sex': 0,
            'breed': 0,
            'priceUSD': $('#Zen200').val(),
        })
    }
    if (RareHero == true && MaleRareHero == true && MaleRare15 == true) {
        filters.push({
            'rarity': 3,
            'sex': 0,
            'breed': 1,
            'priceUSD': $('#Zen201').val(),
        })
    }
    if (RareHero == true && MaleRareHero == true && MaleRare25 == true) {
        filters.push({
            'rarity': 3,
            'sex': 0,
            'breed': 2,
            'priceUSD': $('#Zen202').val(),
        })
    }
    if (RareHero == true && MaleRareHero == true && MaleRare35 == true) {
        filters.push({
            'rarity': 3,
            'sex': 0,
            'breed': 3,
            'priceUSD': $('#Zen203').val(),
        })
    }
    if (RareHero == true && MaleRareHero == true && MaleRare45 == true) {
        filters.push({
            'rarity': 3,
            'sex': 0,
            'breed': 4,
            'priceUSD': $('#Zen204').val(),
        })
    }
    if (RareHero == true && MaleRareHero == true && MaleRare55 == true) {
        filters.push({
            'rarity': 3,
            'sex': 0,
            'breed': 5,
            'priceUSD': $('#Zen205').val(),
        })
    }
    if (RareHero == true && FemaleRareHero == true && FemaleRare05 == true) {
        filters.push({
            'rarity': 3,
            'sex': 1,
            'breed': 0,
            'priceUSD': $('#Zen206').val(),
        })
    }
    if (RareHero == true && FemaleRareHero == true && FemaleRare15 == true) {
        filters.push({
            'rarity': 3,
            'sex': 1,
            'breed': 1,
            'priceUSD': $('#Zen207').val(),
        })
    }
    if (RareHero == true && FemaleRareHero == true && FemaleRare25 == true) {
        filters.push({
            'rarity': 3,
            'sex': 1,
            'breed': 2,
            'priceUSD': $('#Zen208').val(),
        })
    }
    if (RareHero == true && FemaleRareHero == true && FemaleRare35 == true) {
        filters.push({
            'rarity': 3,
            'sex': 1,
            'breed': 3,
            'priceUSD': $('#Zen209').val(),
        })
    }
    if (RareHero == true && FemaleRareHero == true && FemaleRare45 == true) {
        filters.push({
            'rarity': 3,
            'sex': 1,
            'breed': 4,
            'priceUSD': $('#Zen210').val(),
        })
    }
    if (RareHero == true && FemaleRareHero == true && FemaleRare55 == true) {
        filters.push({
            'rarity': 3,
            'sex': 1,
            'breed': 5,
            'priceUSD': $('#Zen211').val(),
        })
    }
    

    if (EpicHero == true && MaleEpicHero == true && MaleEpic05 == true) {
        filters.push({
            'rarity': 5,
            'sex': 0,
            'breed': 0,
            'priceUSD': $('#Zen300').val(),
        })
    }
    if (EpicHero == true && MaleEpicHero == true && MaleEpic15 == true) {
        filters.push({
            'rarity': 5,
            'sex': 0,
            'breed': 1,
            'priceUSD': $('#Zen301').val(),
        })
    }
    if (EpicHero == true && MaleEpicHero == true && MaleEpic25 == true) {
        filters.push({
            'rarity': 5,
            'sex': 0,
            'breed': 2,
            'priceUSD': $('#Zen302').val(),
        })
    }
    if (EpicHero == true && MaleEpicHero == true && MaleEpic35 == true) {
        filters.push({
            'rarity': 5,
            'sex': 0,
            'breed': 3,
            'priceUSD': $('#Zen303').val(),
        })
    }
    if (EpicHero == true && MaleEpicHero == true && MaleEpic45 == true) {
        filters.push({
            'rarity': 5,
            'sex': 0,
            'breed': 4,
            'priceUSD': $('#Zen304').val(),
        })
    }
    if (EpicHero == true && MaleEpicHero == true && MaleEpic55 == true) {
        filters.push({
            'rarity': 5,
            'sex': 0,
            'breed': 5,
            'priceUSD': $('#Zen305').val(),
        })
    }
    if (EpicHero == true && FemaleEpicHero == true && FemaleEpic05 == true) {
        filters.push({
            'rarity': 5,
            'sex': 1,
            'breed': 0,
            'priceUSD': $('#Zen306').val(),
        })
    }
    if (EpicHero == true && FemaleEpicHero == true && FemaleEpic15 == true) {
        filters.push({
            'rarity': 5,
            'sex': 1,
            'breed': 1,
            'priceUSD': $('#Zen307').val(),
        })
    }
    if (EpicHero == true && FemaleEpicHero == true && FemaleEpic25 == true) {
        filters.push({
            'rarity': 5,
            'sex': 1,
            'breed': 2,
            'priceUSD': $('#Zen308').val(),
        })
    }
    if (EpicHero == true && FemaleEpicHero == true && FemaleEpic35 == true) {
        filters.push({
            'rarity': 5,
            'sex': 1,
            'breed': 3,
            'priceUSD': $('#Zen309').val(),
        })
    }
    if (EpicHero == true && FemaleEpicHero == true && FemaleEpic45 == true) {
        filters.push({
            'rarity': 5,
            'sex': 1,
            'breed': 4,
            'priceUSD': $('#Zen310').val(),
        })
    }
    if (EpicHero == true && FemaleEpicHero == true && FemaleEpic55 == true) {
        filters.push({
            'rarity': 5,
            'sex': 1,
            'breed': 5,
            'priceUSD': $('#Zen311').val(),
        })
    }



    if (LengendHero == true && MaleLengendHero == true && MaleLengend05 == true) {
        filters.push({
            'rarity': 6,
            'sex': 0,
            'breed': 0,
            'priceUSD': $('#Zen400').val(),
        })
    }
    if (LengendHero == true && MaleLengendHero == true && MaleLengend15 == true) {
        filters.push({
            'rarity': 6,
            'sex': 0,
            'breed': 1,
            'priceUSD': $('#Zen401').val(),
        })
    }
    if (LengendHero == true && MaleLengendHero == true && MaleLengend25 == true) {
        filters.push({
            'rarity': 6,
            'sex': 0,
            'breed': 2,
            'priceUSD': $('#Zen402').val(),
        })
    }
    if (LengendHero == true && MaleLengendHero == true && MaleLengend35 == true) {
        filters.push({
            'rarity': 6,
            'sex': 0,
            'breed': 3,
            'priceUSD': $('#Zen403').val(),
        })
    }
    if (LengendHero == true && MaleLengendHero == true && MaleLengend45 == true) {
        filters.push({
            'rarity': 6,
            'sex': 0,
            'breed': 4,
            'priceUSD': $('#Zen404').val(),
        })
    }
    if (LengendHero == true && MaleLengendHero == true && MaleLengend55 == true) {
        filters.push({
            'rarity': 6,
            'sex': 0,
            'breed': 5,
            'priceUSD': $('#Zen405').val(),
        })
    }
    if (LengendHero == true && FemaleLengendHero == true && FemaleLengend05 == true) {
        filters.push({
            'rarity': 6,
            'sex': 1,
            'breed': 0,
            'priceUSD': $('#Zen406').val(),
        })
    }
    if (LengendHero == true && FemaleLengendHero == true && FemaleLengend15 == true) {
        filters.push({
            'rarity': 6,
            'sex': 1,
            'breed': 1,
            'priceUSD': $('#Zen407').val(),
        })
    }
    if (LengendHero == true && FemaleLengendHero == true && FemaleLengend25 == true) {
        filters.push({
            'rarity': 6,
            'sex': 1,
            'breed': 2,
            'priceUSD': $('#Zen408').val(),
        })
    }
    if (LengendHero == true && FemaleLengendHero == true && FemaleLengend35 == true) {
        filters.push({
            'rarity': 6,
            'sex': 1,
            'breed': 3,
            'priceUSD': $('#Zen409').val(),
        })
    }
    if (LengendHero == true && FemaleLengendHero == true && FemaleLengend45 == true) {
        filters.push({
            'rarity': 6,
            'sex': 1,
            'breed': 4,
            'priceUSD': $('#Zen410').val(),
        })
    }
    if (LengendHero == true && FemaleLengendHero == true && FemaleLengend55 == true) {
        filters.push({
            'rarity': 6,
            'sex': 1,
            'breed': 5,
            'priceUSD': $('#Zen411').val(),
        })
    }




    if (MythicHero == true && MaleMythicHero == true && MaleMythic05 == true) {
        filters.push({
            'rarity': 7,
            'sex': 0,
            'breed': 0,
            'priceUSD': $('#Zen500').val(),
        })
    }
    if (MythicHero == true && MaleMythicHero == true && MaleMythic15 == true) {
        filters.push({
            'rarity': 7,
            'sex': 0,
            'breed': 1,
            'priceUSD': $('#Zen501').val(),
        })
    }
    if (MythicHero == true && MaleMythicHero == true && MaleMythic25 == true) {
        filters.push({
            'rarity': 7,
            'sex': 0,
            'breed': 2,
            'priceUSD': $('#Zen502').val(),
        })
    }
    if (MythicHero == true && MaleMythicHero == true && MaleMythic35 == true) {
        filters.push({
            'rarity': 7,
            'sex': 0,
            'breed': 3,
            'priceUSD': $('#Zen503').val(),
        })
    }
    if (MythicHero == true && MaleMythicHero == true && MaleMythic45 == true) {
        filters.push({
            'rarity': 7,
            'sex': 0,
            'breed': 4,
            'priceUSD': $('#Zen504').val(),
        })
    }
    if (MythicHero == true && MaleMythicHero == true && MaleMythic55 == true) {
        filters.push({
            'rarity': 7,
            'sex': 0,
            'breed': 5,
            'priceUSD': $('#Zen505').val(),
        })
    }
    if (MythicHero == true && FemaleMythicHero == true && FemaleMythic05 == true) {
        filters.push({
            'rarity': 7,
            'sex': 1,
            'breed': 0,
            'priceUSD': $('#Zen506').val(),
        })
    }
    if (MythicHero == true && FemaleMythicHero == true && FemaleMythic15 == true) {
        filters.push({
            'rarity': 7,
            'sex': 1,
            'breed': 1,
            'priceUSD': $('#Zen507').val(),
        })
    }
    if (MythicHero == true && FemaleMythicHero == true && FemaleMythic25 == true) {
        filters.push({
            'rarity': 7,
            'sex': 1,
            'breed': 2,
            'priceUSD': $('#Zen508').val(),
        })
    }
    if (MythicHero == true && FemaleMythicHero == true && FemaleMythic35 == true) {
        filters.push({
            'rarity': 7,
            'sex': 1,
            'breed': 3,
            'priceUSD': $('#Zen509').val(),
        })
    }
    if (MythicHero == true && FemaleMythicHero == true && FemaleMythic45 == true) {
        filters.push({
            'rarity': 7,
            'sex': 1,
            'breed': 4,
            'priceUSD': $('#Zen510').val(),
        })
    }
    if (MythicHero == true && FemaleMythicHero == true && FemaleMythic55 == true) {
        filters.push({
            'rarity': 7,
            'sex': 1,
            'breed': 5,
            'priceUSD': $('#Zen511').val(),
        })
    }


    var Hero = {
        'filters': filters
    }
    var input = {
        Egg,
        Hero,
    }
    callApi_auto(
        apiConfig.api.buyitem.controller,
        apiConfig.api.buyitem.action.listegghero.path,
        apiConfig.api.buyitem.action.listegghero.method,
        input, 'fnSuccess', 'msgError');
}

function callApi_auto(controller, action, method, data, callbackSuccess, callbackError) {
    $.ajax({
        type: method,
        url: apiConfig.api.host_user_service + controller + action,
        contentType: "application/json; charset=utf-8",
        data: (method == 'GET' ? data : JSON.stringify(data)),
        success: function (result) {
            if (window[callbackSuccess] != undefined)
                window[callbackSuccess](result);
            setTimeout(function () { Start() }, 5000);
        },
        error: function (request, status, error) {
            if (window[callbackError] != undefined)
                window[callbackError](request, status, error);
        }
    });
};
function fnSuccess(res) {
    var xxxx = res;
    var x = "";
}