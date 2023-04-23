"use strict";

window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".input__tel"), function (a) {
    function c(a) {
      a.keyCode && (b = a.keyCode);
      var c = this.selectionStart;
      c < 3 && a.preventDefault();
      var d = "+7 (___) ___ ____",
        e = 0,
        f = d.replace(/\D/g, ""),
        g = this.value.replace(/\D/g, ""),
        h = d.replace(/[_\d]/g, function (a) {
          return e < g.length ? g.charAt(e++) || f.charAt(e) : a;
        });
      e = h.indexOf("_"), -1 != e && (e < 5 && (e = 3), h = h.slice(0, e));
      var i = d.substr(0, this.value.length).replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
      i = new RegExp("^" + i + "$"), (!i.test(this.value) || this.value.length < 5 || b > 47 && b < 58) && (this.value = h), "blur" == a.type && this.value.length < 5 && (this.value = "");
    }
    var b;
    a.addEventListener("input", c, !1), a.addEventListener("focus", c, !1), a.addEventListener("blur", c, !1), a.addEventListener("keydown", c, !1);
  });
});
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/* product slider */
document.querySelectorAll('.products').forEach(function (n) {
  var topSlider = new Swiper(n.querySelector('.swiper'), {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: n.querySelector('.slider-nav__next'),
      prevEl: n.querySelector('.slider-nav__prev')
    },
    pagination: {
      el: n.querySelector('.swiper-pagination')
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      560: {
        slidesPerView: 3,
        spaceBetween: 8
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 8
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 8
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 16
      }
    }
  });
});

/* buttons card */

var iconProduct = document.querySelectorAll('.product__icon');
var _iterator = _createForOfIteratorHelper(iconProduct),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var icon = _step.value;
    icon.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('active');
    });
  }

  /* max height title */
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
window.onload = function () {
  fixHeadTitle();
  fixStickersBlock();
};
window.onresize = function () {
  fixHeadTitle();
  fixStickersBlock();
};
function fixHeadTitle() {
  var titleProduct = document.querySelectorAll('.product__name');
  for (var i = 0; i < titleProduct.length; i++) {
    for (var j = 1; j < titleProduct.length; j++) {
      if (titleProduct[i].offsetHeight < titleProduct[j].offsetHeight) {
        titleProduct[i].style.height = titleProduct[j].offsetHeight + 'px';
      } else {
        titleProduct[i].offsetHeight + 'px';
      }
    }
  }
}
function fixStickersBlock() {
  var stickersBlock = document.querySelectorAll('.product__stickers');
  for (var i = 0; i < stickersBlock.length; i++) {
    for (var j = 1; j < stickersBlock.length; j++) {
      if (stickersBlock[i].offsetHeight < stickersBlock[j].offsetHeight) {
        stickersBlock[i].style.height = stickersBlock[j].offsetHeight + 'px';
      } else {
        stickersBlock[i].offsetHeight + 'px';
      }
    }
  }
}

/* value */

var quantityBlock = document.querySelectorAll('.quantity');
var _loop = function _loop() {
  var minus = quantityBlock[i].querySelector('.quantity__minus');
  var plus = quantityBlock[i].querySelector('.quantity__plus');
  var input = quantityBlock[i].querySelector('.quantity__input');
  minus.addEventListener('click', function () {
    input.value -= 1;
    if (input.value < 1) {
      input.value = 1;
    }
  });
  plus.addEventListener('click', function () {
    input.value = +input.value + 1;
  });
};
for (var i = 0; i < quantityBlock.length; i++) {
  _loop();
}

/* validation */

var form = document.getElementsByClassName('form');
var popup = document.querySelector('.popup');
var _loop2 = function _loop2() {
  var questionRequared = form[_i].querySelectorAll('.question__requared');
  var btnSubmit = form[_i].querySelector('.btn--submit');
  var input = form[_i].querySelectorAll('.input');
  var textArea = form[_i].querySelectorAll('.textarea');
  var checkBox = form[_i].querySelector('.checkbox input');
  btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    checkInput();
    checkTextArea();
    checkCheckBox();
    if (checkInput() == true && checkTextArea() == true && checkCheckBox() == true) {
      popup.classList.add('active');
      clearForm();
    } else {
      console.log('form false');
    }
    function checkInput() {
      var flag = 0;
      var _iterator3 = _createForOfIteratorHelper(input),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var key = _step3.value;
          if (key.value === '') {
            key.parentNode.classList.add('error');
            key.parentNode.classList.remove('agree');
            flag -= 1;
          } else {
            key.parentNode.classList.remove('error');
            key.parentNode.classList.add('agree');
            flag += 1;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if (flag == input.length) {
        return true;
      } else {
        return false;
      }
    }
    function checkTextArea() {
      var _iterator4 = _createForOfIteratorHelper(textArea),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var key = _step4.value;
          if (key.value === '') {
            key.parentNode.classList.add('error');
            key.parentNode.classList.remove('agree');
            return false;
          } else {
            key.parentNode.classList.remove('error');
            key.parentNode.classList.add('agree');
            return true;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    function checkCheckBox() {
      if (checkBox.checked) {
        checkBox.classList.remove('error');
        return true;
      } else {
        checkBox.classList.add('error');
        return false;
      }
    }
    function clearForm() {
      var _iterator5 = _createForOfIteratorHelper(input),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var key = _step5.value;
          key.value = '';
          key.parentNode.classList.remove('agree');
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      var _iterator6 = _createForOfIteratorHelper(textArea),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _key = _step6.value;
          _key.value = '';
          _key.parentNode.classList.remove('agree');
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  });
  var _iterator7 = _createForOfIteratorHelper(input),
    _step7;
  try {
    var _loop4 = function _loop4() {
      var key = _step7.value;
      key.addEventListener('input', function () {
        if (this.value === '') {
          key.parentNode.classList.add('error');
          key.parentNode.classList.remove('agree');
        } else {
          key.parentNode.classList.remove('error');
          key.parentNode.classList.add('agree');
        }
      });
    };
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      _loop4();
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  var _iterator8 = _createForOfIteratorHelper(textArea),
    _step8;
  try {
    var _loop5 = function _loop5() {
      var key = _step8.value;
      key.addEventListener('input', function () {
        if (this.value === '') {
          key.parentNode.classList.add('error');
          key.parentNode.classList.remove('agree');
        } else {
          key.parentNode.classList.remove('error');
          key.parentNode.classList.add('agree');
        }
      });
    };
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      _loop5();
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  checkBox.addEventListener('change', function () {
    if (checkBox.checked) {
      checkBox.classList.remove('error');
    } else {
      checkBox.classList.add('error');
    }
  });
};
for (var _i = 0; _i < form.length; _i++) {
  _loop2();
}

/* добавить для body активный класс */

/* cls popup */
var clsBtn = document.querySelectorAll('.popup__close--closed');
var _iterator2 = _createForOfIteratorHelper(clsBtn),
  _step2;
try {
  var _loop6 = function _loop6() {
    var key = _step2.value;
    key.addEventListener('click', function () {
      key.closest('.popup').classList.remove('active');
    });
  };
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    _loop6();
  }

  /* clear input btn */
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var inputBlock = document.getElementsByClassName('question__input');
var _loop3 = function _loop3() {
  var input = inputBlock[_i2].querySelector('.input');
  var clearBtn = inputBlock[_i2].querySelector('.input__clear');
  clearBtn.addEventListener('click', function (e) {
    e.preventDefault();
    input.value = '';
  });
};
for (var _i2 = 0; _i2 < inputBlock.length; _i2++) {
  _loop3();
}
//# sourceMappingURL=scripts.js.map
