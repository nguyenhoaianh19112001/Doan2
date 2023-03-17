// --------------------------------------------------

var listSanPhamLen;

function xoa(phantu) {
    var listcu = phantu.parent().parent().parent().html()
    var listm = listcu.replace(phantu.parent().html(), "")
    var listmoi = listm.replace('<tr class="sanpham"></tr>', "")
    phantu.parent().remove()
    listSanPhamLen = listmoi;
}

function seach() {
    var filter, layten, a, i, txtValue;
    filter = $("#mySearch").val().toUpperCase();

    layten = $(".ten");
    for (i = 0; i < layten.length; i++) {
        a = layten[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            layten[i].parentElement.style.display = "";
        } else {
            layten[i].parentElement.style.display = 'none';
        }
    }
}

function hien(id) {
    var k = $(".main>div.container-1");
    for (var i = 1; i <= k.length; i++) {
        $(".main>div.container-1:nth-child(" + i + ")").addClass("none");
    }
    $("." + id).removeClass("none");
}

$('.them-click').click(function() {
    $('.them-none.chiThem').addClass('open');

    $('.quanLySanPhamThemSuaXoa').addClass('none');
})

$('.close').click(function() {
    $('.them-none').removeClass('open');
    $('.quanLySanPhamThemSuaXoa').removeClass('none');
})


$('#file').change(function() {
    readImgUrlAndPreview(this);

    function readImgUrlAndPreview(input) {
        if (input.files) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#load').attr('src', e.target.result);
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
});


$('#sua').change(function() {
    readImgUrlAndPreview(this);

    function readImgUrlAndPreview(input) {
        if (input.files) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#loadsua').attr('src', e.target.result);
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
});

function themSanPham() {
    var tensp = $("#tensp").val();
    var giasp = $("#giasp").val();
    var thuonghieu = $("#thuonghieu").val();
    var anh = $('#load').attr('src');
    var Xuatxu = $("#Xuatxu").val();
    var Chatlieu = $("#Chatlieu").val();
    var Hoatiet = $("#Hoatiet").val();
    var sl = $("#sl").val();

    /*var hang = $("tbody#dstd").html();*/









    var html = '<tr class="sanpham">\
    <td class="tenspopen sorting_1">' + tensp + '</td>\
    <td class="giaspopen">' + giasp + '</td>\
    <td class="thuonghieuopen">' + thuonghieu + '</td>\
    <td class="sorting_1 imgopen"><img src="' + anh + '" style="width:100%" class="imgtd"></td>\
    <td class="Xuatxuopen">' + Xuatxu + '</td>\
    <td class="Chatlieuopen">' + Chatlieu + '</td>\
    <td class="Hoatietopen">' + Hoatiet + '</td>\
    <td class="soluongopen">' + sl + '</td>\
    <td onclick="xoa($(this))" class="deletebutton"><i class="fas fa-trash-alt"></i></td>\
    <td onclick="sua($(this))" class="editbutton"><i class="fas fa-edit"></i></td>\
  </tr>';
    /*$("tbody#dstd").html(hang + html);*/

}

$("#quanLySanPham").click(function() {
    $("#listSanPham").html(listSanPhamLen);
    listSanPhamLen = $("#listSanPham").html();
})

/*$(".dieuChinhDonHang").click(function() {
    $(".chitietdonhang").css("display", "none")
    $(".dieuChinhDonHang").css("display", "none")
});

$(".bars-dieuChinh i").click(function() {
    $(".chitietdonhang").css("display", "block")
});

$(".chitietdonhang").click(function() {
    $(".chitietdonhang").css("display", "none")
})*/

/*sua

function sua(elm) {
    $('.them-none.sua').addClass('open');
    var tensp = elm.parent().find('.tenspopen').html();
    var giasptd = elm.parent().find('.giaspopen').html();
    var imgtd = elm.parent().find('img').attr('src');
    var thuonghieutd = elm.parent().find('.thuonghieuopen').html();
    var Chatlieutd = elm.parent().find('.Chatlieuopen').html();
    var Hoatiettd = elm.parent().find('.Hoatietopen').html();
    var soluongtd = elm.parent().find('.soluongopen').html();
    var Xuatxutd = elm.parent().find('.Xuatxuopen').html();
    $("#tensp").val(tensp)
    $("#giasp").val(giasptd)
    $("#thuonghieu").val(thuonghieutd)
    $("#Xuatxu").val(Xuatxutd)
    $("#Chatlieu").val(Chatlieutd)
    $("#sl").val(soluongtd)
    $("#Hoatiet").val(Hoatiettd)
    $("#load.imgtd").attr("src", imgtd)
}

$(document).ready(function() {
    var tensp = localStorage.getItem("matdi4");
    var giasptd = localStorage.getItem("giasptdi4");
    var imgtd = localStorage.getItem("imgtdi4");
    var thuonghieutd = localStorage.getItem("thuonghieutdi4");
    var Hoatiettd = localStorage.getItem("Hoatiettdi4");
    var Chatlieutd = localStorage.getItem("Chatlieutdi4");
    var soluongtd = localStorage.getItem("soluongtdi4");
    var Xuatxutd = localStorage.getItem("Xuatxutdi4");

    var html = '<tbody style="text-align: left;">\
                     <tr>\
                         <td>Ảnh :</td>\
                         <td>\
                             <img id="loadsua" class="imgtd" src="' + imgtd + '">\
                         </td>\
                         <td>\
                             <input style="width: 120px!important;" required type="file"  name="filesua" id="sua"  accept="image/*" class="inputfile"/>\
                             <label for="sua">Chọn file ảnh</label>\
                         </td>\
                     </tr>\
                     <tr>\
                         <td style="width: 150px">Tên sản phẩm : </td>\
                         <td style="width: 360px">\
                             <input id="tensp" value="' + tensp + '" required type="text">\
                         </td>\
                     </tr>\
                     <tr>\
                         <td style="width: 150px">Gía sản phẩm : </td>\
                         <td style="width: 360px">\
                             <input  value="' + giasptd + '"id="giasptd" required type="text">\
                         </td>\
                     </tr>\
                     <tr>\
                         <td>Thương hiệu : </td>\
                         <td>\
                             <input id="thuonghieu" required type="text" value="' + thuonghieutd + '">\
                         </td>\
                     </tr>\
                     <tr>\
                         <td>Xuất xứ :</td>\
                         <td><input value="' + Xuatxutd + '" id="Xuatxu" required type="text"></td>\
                     </tr>\
                     <tr>\
                         <td>Chất liệu :</td>\
                         <td><input value="' + Chatlieutd + '" id="Chatlieutd" required type="text"></td>\
                     </tr>\
                     <tr>\
                         <td>Họa tiết :</td>\
                         <td>\
                             <input id="Hoatiet" value="' + Hoatiettd + '" required type="number">\
                         </td>\
                     </tr>\
                     <tr>\
                         <td>Số lượng :</td>\
                         <td> <input id="sl" value="' + soluongtd + '" required type="number"></td>\
                     </tr>\
                 </tbody>';

    $("#i4td").html(html);
})*/



$('.them-none.sua').click(function() {
    $('.them-none.sua').addClass('none');
})

/*function suaSanPham(elm) {
    var tensp = elm.parent().children().children().children().find('input#tensp').val();
    var giasptd = elm.parent().children().children().children().children().find('#giasp').val();
    var imgtd = elm.parent().children().children().children().find('img#load').attr('src');
    var thuonghieutd = elm.parent().children().children().children().find('input#thuonghieu').val();
    var Hoatiettd = elm.parent().children().children().children().find('input#Hoatiet').val();
    var Chatlieutd = elm.parent().children().children().children().children().find('#Chatlieu option').val();
    var soluongtd = elm.parent().children().children().children().find('input#sl').val();
    var Xuatxutd = elm.parent().children().children().children().find('input#Xuatxu').val();

    var html = '<td class="tenspopen sorting_1">' + tensp + '</td>\
     <td class="sorting_1 imgopen"><img src="' + imgtd + '" style="width:100%" class="imgtd"></td>\
     <td class="thuonghieuopen">' + thuonghieutd + '</td>\
     <td class="Chatlieuopen">' + Chatlieutd + '</td>\
     <td class="sorting_1 Hoatietopen">' + Hoatiettd + '</td>\
     <td class="soluongopen">' + soluongtd + '</td>\
     <td class="Xuatxuopen">' + Xuatxutd + '</td>\
     <td class="giaspopen">' + giasptd + '</td>\
     <td onclick="xoa($(this))" class="deletebutton"><i class="fas fa-trash-alt"></i></td>\
     <td onclick="sua($(this))" class="editbutton"><i class="fas fa-edit"></i></td>'
    $('#sanpham').html(html);
}*/