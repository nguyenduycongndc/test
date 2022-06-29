function msgError(respon, status, error) {
    if (respon.status == 401)
        toastr.warning("Bạn phải đăng nhập vào hệ thống trước khi thao tác")
        //swal("Unauthorized!", "Bạn phải đăng nhập vào hệ thống trước khi thao tác!", "warning");
    else if (respon.status == 404)
        toastr.warning("Không tìm thấy đối tượng để xử lý!")
    //swal("Not found!", "Không tìm thấy đối tượng để xử lý!", "warning");
    else
        toastr.error("Có lỗi xảy ra trong quá trình xử lý!")
    //swal(error + "!", "Có lỗi xảy ra trong quá trình xử lý!", "error");
}

function formatNumberByLocate(value) {
    if (value == undefined || value == null || value == "")
        return "0";
    return Number(value).toLocaleString('vi')
}

function rowNo(page, pageSize, i) {
    page = parseInt(page);
    pageSize = parseInt(pageSize);
    i = parseInt(i);
    if (isNaN(page) || isNaN(pageSize) || isNaN(i))
        return 0;
    return (page - 1) * pageSize + i + 1;
}

function btnOnSearch() {
    $("#txtCurrentPage").val(1);
    onSearch();
}
function showLoading() {
    $('#preloader').css('display', 'block');
}
//function hideLoading() {
//    $('#preloader').css('display', 'none');
//}

function hideLoading() {
    setTimeout(function () {
        var keys = Object.keys(localStorage);
        var isOk = true;
        for (var i = 0; i < keys.length; i++) {
            if (keys[i].startsWith('loading'))
                isOk = false;
        }
        if (isOk)
            $('#preloader').css('display', 'none');
    }, 500);
}
function fakeValue(value) {
    if (value == undefined || value == null || value == '')
        return 0;
    return value;
}

function clearMsgInvalid() {
    var inputInvalid = $('.is-invalid');
    var labelInvalid = $('.invalid-feedback');
    for (var i = 0; i < inputInvalid.length; i++) {
        $(inputInvalid[i]).removeClass('is-invalid');
    }
    for (var i = 0; i < labelInvalid.length; i++) {
        $(labelInvalid[i]).remove();
    }
}

function validateRequired(parent) {
    parent = !parent ? '' : parent;
    var allRequired = $(parent + ' .required');
    var isValid = true;
    var itemFocus = null;
    for (var i = 0; i < allRequired.length; i++) {
        var grInput = $(allRequired[i]).parent().find('input');
        var grSelect = $(allRequired[i]).parent().find('select');
        var grTextarea = $(allRequired[i]).parent().find('textarea');

        var msg = $(allRequired[i]).parent().find('label').text() + ' ' + "Không được để trống";
        $(allRequired[i]).parent().find('.invalid-feedback').remove();

        if (grInput.length > 0 || grSelect.length > 0 || grTextarea.length > 0) {
            var eleWork = grInput.length > 0 ? grInput : grSelect.length > 0 ? grSelect : grTextarea;
            eleWork.removeClass('is-invalid');

            var val = eleWork.val();

            if (val == undefined || val == null/* || val.isBlank()*/) {
                itemFocus = itemFocus == null ? $(allRequired[i]) : itemFocus;
                eleWork.addClass('is-invalid');
                $(eleWork).parent().append('<div class="invalid-feedback">' + msg + '</div>')
                isValid = false;
            }
        }
    }
    if (!isValid)
        itemFocus.focus();
    return isValid;
}

function onFocus(parent) {
    parent = !parent ? 'body' : parent;
    var grInput = $(parent).find('input:not(:hidden)');
    var grSelect = $(parent).find('select');
    var grTextarea = $(parent).find('textarea');
    var eleWork = grInput.length > 0 ? grInput : grSelect.length > 0 ? grSelect : grTextarea;
    console.log(eleWork[0]);
    $(eleWork[0]).focus();
}

function collapseDelegate() {
    $('.btn-collapse').on('click', function (ele) {
        var target = ele.currentTarget.dataset["target"];

        if (target != undefined && target != null && target != '') {
            var clsList = ele.currentTarget.classList;
            if (clsList.contains('shown')) {
                ele.currentTarget.classList.remove('shown');
                ele.currentTarget.classList.add('hidden');
                $(target).hide();
                if (ele.currentTarget.childElementCount > 0)
                    ele.currentTarget.childNodes[0].classList.value = 'fas fa-plus';
            }
            else {
                ele.currentTarget.classList.remove('hidden');
                ele.currentTarget.classList.add('shown');
                $(target).show();
                if (ele.currentTarget.childElementCount > 0)
                    ele.currentTarget.childNodes[0].classList.value = 'fas fa-minus';


                var btn = $(ele.currentTarget.dataset["target"]).find('button.hidden');
                if (btn.length > 0) {
                    $(target).show();

                    for (var i = 0; i < btn.length; i++) {
                        var tg = btn[i].dataset['target'];
                        $(tg).hide();
                    }
                }
                else $(target).show();

            }
        }
    });
}

function onBack() {
    var modal = $('#card-update');
    var cardManag = $('#card-index');

    var headerManager = $('#header-manager');
    var headerCreate = $('#header-create');
    var headerUpdate = $('#header-update');
    var headerDetail = $('#header-detail');
    var headerImport = $('#header-import');

    modal.hide();
    cardManag.show();

    headerManager.show();
    headerCreate.hide();
    headerUpdate.hide();
    headerDetail.hide();
    headerImport.hide();
    localStorage[keyCurrentStage] = 'manager';
    location.hash = '';
}


function generateComboUserOptions(data, n, prop, extenal, idField, nameField) {
    var html = '';
    var nbsp = '';
    for (var i = 0; i < n; i++) {
        nbsp += '-&nbsp';
    }
    idField = idField ? idField : 'id';
    nameField = nameField ? nameField : 'full_name';
    if (data != undefined && data != null && data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            var cls = obj[prop] == undefined || obj[prop] == null || obj[prop].length == 0 ? '' : ' class="font-weight-bold" ';
            var dataExtenal = '';
            if (extenal && obj[extenal]) {
                dataExtenal += ' data-' + extenal + '="' + obj[extenal] + '" ';
            }
            html += '<option ' + dataExtenal + cls + ' value="' + obj[idField] + '">' + nbsp + obj[nameField] + '</option>';
            html += generateComboOptions(obj[prop], n + 1, prop, extenal, idField, nameField);
        }
    }
    return html;
}


function getCode(obj) {
    return typeof (obj) != 'object' || obj == undefined || obj == null || obj == '' ? '' : obj.code;
}
function getName(obj) {
    return typeof (obj) != 'object' || obj == undefined || obj == null || obj == '' ? '' : obj.name;
}
function getIssueLevel(val) {
    return val == 1 ? localizationResources.Low : val == 2 ? localizationResources.Mid : val == 3 ? localizationResources.High : '';
}
function IsCheckPemission(menucode, permission_code) {
    if (localStorage["CurrentPermission"] != null && localStorage["CurrentPermission"] != undefined) {
        var list_permission = JSON.parse(localStorage["CurrentPermission"]);
        var _permission = menucode + "_" + permission_code;
        var ischeck = list_permission.some(el => el.permission === _permission);
        return ischeck;
    }
    return false;
}
function getAssessmentStage(val) {
    return val == 1 ? localizationResources.Year : val == 2 ? localizationResources.HalfYear : val == 3 ? localizationResources.Quarter : '';
}
function getAssessmentState(val) {
    return !val || val == 0 ? localizationResources.InProcess : localizationResources.Completed;
}
function getProcessState(val) {
    return val == -1 || val == null || val == undefined ? localizationResources.NotStart : val == 0 ? localizationResources.InProcess : localizationResources.Completed;
}
function getAssessmentPullState(val) {
    return localizationResources.InComplete;
}
function getAssessmentPullLast(val) {
    return '';
}

function getImportStatus(code) {
    code = (code + '').trim();
    if (!code || code == null || code == '')
        return '';
    var val = localizationResources['Import' + code];
    return val ? val : code;
}
function getImportResult(note) {
    if (!note || note == null || note == '')
        return '';
    var spt = note.split(',');

    var str = '';
    for (var i = 0; i < spt.length; i++) {
        var code = spt[i].trim();
        str += getImportStatus(code) + '<br/>';
    }
    return str;
}

function isViewUpload() {
    return location.hash == '#import';
}
function isViewEdit() {
    return location.hash.indexOf('#edit-') >= 0;
}
function isViewDetail() {
    return location.hash.indexOf('#view-') >= 0;
}
function idViewEdit() {
    return location.hash.replace('#edit-', '');
}
function idViewDetail() {
    return location.hash.replace('#view-', '');
}
function triggerChangeHeader() {
    $('a.btn.icon-default.btn-action-custom').off('click');
    $('a.btn.icon-default.btn-action-custom').on('click', function (ele) {
        var button = null;
        if (ele.target.tagName === 'A')
            button = $(ele.target);
        else if (ele.target.tagName === 'I')
            button = $(ele.target.parentNode);
        else return;

        var action = button.data('action');
        if (action == undefined || action == null || action == '')
            return;
        fnChangeHeader(action);
    });
}

function fnChangeHeader(action) {
    if (action == 'view')
        $('#header-update').text($('#header-update').text().replace(localizationResources.Update, localizationResources.Detail))
    else
        $('#header-update').text($('#header-update').text().replace(localizationResources.Detail, localizationResources.Update))
}

function callApi_multipleselect(selector, placeholder, host, controller, action) {
    $("#" + selector).select2({
        placeholder: placeholder,
        minimumInputLength: 0,
        multiple: true,
        closeOnSelect: false,
        ajax: {
            headers: { "Authorization": "Bearer " + sessionStorage['SessionToken'] },
            url: host + controller + action,
            dataType: 'json',
            data: function (params) {
                var query = {
                    q: params.term,
                    type: 'public'
                }
                return query;
            },
            processResults: function (data) {
                return {
                    results: $.map(data.data, function (item) {
                        return {
                            text: item.full_name ?? item.name,
                            id: item.id
                        }
                    })
                };
            },
            cache: true
        }
    });
}
function callApi_select(selector, placeholder, host, controller, action) {
    $("#" + selector).select2({
        placeholder: placeholder,
        minimumInputLength: 0,
        multiple: false,
        closeOnSelect: true,
        ajax: {
            headers: { "Authorization": "Bearer " + sessionStorage['SessionToken'] },
            url: host + controller + action,
            dataType: 'json',
            data: function (params) {
                var query = {
                    q: params.term,
                    type: 'public'
                }
                return query;
                return {
                    text: params.term
                };
            },
            processResults: function (data) {
                return {
                    results: $.map(data.data, function (item) {
                        return {
                            text: item.full_name ?? item.name,
                            id: item.id
                        }
                    })
                };
            },
            cache: true
        }
    });
}
function ResetPageSize() {
    $("#txtCurrentPage").val(1);
    reCalculatPagesCustom(0);
    viewBtnActionPage();
}

function callApi_oneselect(selector, placeholder, host, controller, action) {
    $("#" + selector).select2({
        placeholder: placeholder,
        minimumInputLength: 0,
        multiple: false,
        closeOnSelect: true,
        ajax: {
            headers: { "Authorization": sessionStorage['SessionToken'] },
            url: host + controller + action,
            dataType: 'json',
            data: function (params) {
                var query = {
                    q: params.term,
                    type: 'public'
                }
                return query;
            },
            processResults: function (data) {
                return {
                    results: $.map(data, function (item) {
                        return {
                            id: item.id,
                            text: item.address,
                        }
                    })
                };
            },
            cache: true
        }
    });
}

