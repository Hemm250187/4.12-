"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var banner = new Swiper(".banner,.list", {
  autoplay: true,
  loop: true,
  click: true,
  pagination: {
    el: ".swiper-pagination"
  }
});

var list = _toConsumableArray(document.querySelectorAll(".list2"));

var img = ["icon-01", "icon-09", "icon-06", "icon-08", "icon-02"];
var data = Mock.mock({
  "titie|10": [{
    "img|+1": img,
    "name": "@ctitle(3)"
  }]
});
var dls = "";
data.titie.forEach(function (item) {
  dls += "<dl>\n    <dt><i class=\"iconfont ".concat(item.img, "\"></i></dt>\n    <dd>").concat(item.name, "</dd>\n</dl>");
});
list.forEach(function (file) {
  file.innerHTML = dls;
});
axios.get("/api").then(function (res) {
  if (res.data.code == 0) {
    alert(res.data.msg);
  }
});