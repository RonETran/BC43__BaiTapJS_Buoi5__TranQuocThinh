//Chuyển bài
var change1 = document.getElementById("change-bg1");
var change2 = document.getElementById("change-bg2");
var change3 = document.getElementById("change-bg3");
var change4 = document.getElementById("change-bg4");
var bai1 = document.getElementById("baiMot");
var bai2 = document.getElementById("baiHai");
var bai3 = document.getElementById("baiBa");
var bai4 = document.getElementById("baiBon");

function baiTapMot() {
  change1.style.backgroundColor = "rgb(138, 106, 171)";
  change1.style.color = "white";
  change2.style.backgroundColor = "#c5d8e6";
  change2.style.color = "black";
  change3.style.backgroundColor = "#c5d8e6";
  change3.style.color = "black";
  change4.style.backgroundColor = "#c5d8e6";
  change4.style.color = "black";
  bai1.style.display = "block";
  bai2.style.display = "none";
  bai3.style.display = "none";
  bai4.style.display = "none";
}
function baiTapHai() {
  change2.style.backgroundColor = "rgb(138, 106, 171)";
  change2.style.color = "white";
  change1.style.backgroundColor = "#c5d8e6";
  change1.style.color = "black";
  change3.style.backgroundColor = "#c5d8e6";
  change3.style.color = "black";
  change4.style.backgroundColor = "#c5d8e6";
  change4.style.color = "black";
  bai1.style.display = "none";
  bai2.style.display = "block";
  bai3.style.display = "none";
  bai4.style.display = "none";
}
function baiTapBa() {
  change3.style.backgroundColor = "rgb(138, 106, 171)";
  change3.style.color = "white";
  change2.style.backgroundColor = "#c5d8e6";
  change2.style.color = "black";
  change1.style.backgroundColor = "#c5d8e6";
  change1.style.color = "black";
  change4.style.backgroundColor = "#c5d8e6";
  change4.style.color = "black";
  bai1.style.display = "none";
  bai2.style.display = "none";
  bai3.style.display = "block";
  bai4.style.display = "none";
}
function baiTapBon() {
  change4.style.backgroundColor = "rgb(138, 106, 171)";
  change4.style.color = "white";
  change2.style.backgroundColor = "#c5d8e6";
  change2.style.color = "black";
  change3.style.backgroundColor = "#c5d8e6";
  change3.style.color = "black";
  change1.style.backgroundColor = "#c5d8e6";
  change1.style.color = "black";
  bai1.style.display = "none";
  bai2.style.display = "none";
  bai3.style.display = "none";
  bai4.style.display = "block";
}

// Bài 1:
/* */
function ketQua() {
  var thongBao = document.getElementById("thongBao");
  var diemChuan = document.getElementById("diemChuan").value;
  var diemToan = document.getElementById("diemToan").value;
  var diemLy = document.getElementById("diemLy").value;
  var diemHoa = document.getElementById("diemHoa").value;
  var diemKhuVuc = document.getElementById("khuVuc").value;
  var diemDoiTuong = document.getElementById("doiTuong").value;
  var diemBaMon = Number(diemToan) + Number(diemLy) + Number(diemHoa);
  var diemUuTien = Number(diemKhuVuc) + Number(diemDoiTuong);
  var tongDiem = diemBaMon + diemUuTien;
  if (diemToan == 0 || diemLy == 0 || diemHoa == 0) {
    thongBao.innerHTML = "Bạn đã rớt. Do có môn 0 điểm";
  }else if (tongDiem >= diemChuan) {
    thongBao.innerHTML = "Bạn đã đậu. Tổng điểm đạt được: " + tongDiem;
  }else {
    thongBao.innerHTML = "Bạn đã rớt. Tổng điểm đạt được: " + tongDiem;
  }
  
}

// Bài 2:
/**/
function tienDien() {
  var soTien = document.getElementById("soTien");
  var hoTen = document.getElementById("hoTen").value;
  var soDien = document.getElementById("soDien").value;
  var tienDien = 0;
  if (soDien<=50) {
    tienDien = soDien * 500;
  }else if (soDien<=100) {
    tienDien = (soDien-50) * 650 + 50 * 500;
  }else if (soDien<=200) {
    tienDien = (soDien-100) * 850 + 50*650 + 50*500;
  }else if (soDien<=350) {
    tienDien = (soDien-200) * 1100 + 100*850 + 50*650 + 50*500;
  }else {
    tienDien = (soDien-350) * 1300 + 150*1100 + 100*850 + 50*650 + 50*500;
  }
  soTien.innerHTML = "Họ tên: " + hoTen + ". Tiền điện: " + tienDien.toLocaleString() + ' VND';
}

// Bài 3
/**/
function tinhThue() {
  var thueThuNhap = document.getElementById('thueThuNhap');
  var hoVaTen = document.getElementById('hoVaTen').value;
  var thuNhap = document.getElementById('thuNhap').value;
  var soNguoi = document.getElementById('soNguoi').value;
  var chiuThue = thuNhap - 4000000 - soNguoi*1600000;
  if (chiuThue<=0) {
    alert('Số tiền thu nhập không hợp lệ');
    return thueThuNhap.innerHTML = '';
  }else if (chiuThue<=60000000) {
    chiuThue = chiuThue * 0.05;
  }else if (chiuThue<=120000000) {
    chiuThue = (chiuThue-60000000) * 0.1 + 60000000*0.05;
  }else if (chiuThue<=210000000) {
    chiuThue = (chiuThue-120000000) * 0.15 + 60000000*(0.1+0.05);
  }else if (chiuThue<=384000000) {
    chiuThue = (chiuThue-210000000) * 0.2 + 90000000*0.15 + 60000000*(0.1+0.05);
  }else if (chiuThue<=624000000) {
    chiuThue = (chiuThue-384000000) * 0.25 + 174000000*0.2 + 90000000*0.15 + 60000000*(0.1+0.05);
  }else if (chiuThue<=960000000) {
    chiuThue = (chiuThue-624000000) * 0.3 + 240000000*0.25 + 174000000*0.2 + 90000000*0.15 + 60000000*(0.1+0.05);
  }else {
    chiuThue = (chiuThue-960000000) * 0.35 + 336000000*0.3 + 240000000*0.25 + 174000000*0.2 + 90000000*0.15 + 60000000*(0.1+0.05);
  }
  thueThuNhap.innerHTML = "Họ tên: " + hoVaTen + ". Tiền thuế thu nhập cá nhân: " + chiuThue.toLocaleString() + ' VND';
}

// Bài 4
/* */
function show() {
  var loaiKhachHang = document.getElementById('loaiKhachHang').value;
  if (loaiKhachHang == 2) {
    document.getElementById('soKetNoi').style.display = 'inline-block';
  }else {
    document.getElementById('soKetNoi').style.display = 'none';
  }
}
function tinhTienCap() {
  var loaiKhachHang = document.getElementById('loaiKhachHang').value;
  var maKhachHang = document.getElementById('maKhachHang').value;
  var kenhCaoCap = document.getElementById('kenhCaoCap').value;
  var soKetNoi = document.getElementById('soKetNoi').value;
  var tinhTienCap = document.getElementById('tinhTienCap');
  if(loaiKhachHang == 0) {
    alert('Hãy chọn loại khách hàng!');
    return tinhTienCap.innerHTML = '';
  }
  if(loaiKhachHang == 1) {
    var tienCap = 4.5 + 20.5 + 7.5 * kenhCaoCap;
  }
  if(loaiKhachHang == 2) {
    var tienCap = 15 + 50 * kenhCaoCap + 75;
    if(soKetNoi>10) {
      tienCap += (soKetNoi - 10) * 5;
    }
  }
  tinhTienCap.innerHTML = 'Mã khách hàng: ' + maKhachHang + '. Tiền cáp: $' + tienCap.toLocaleString();
}
