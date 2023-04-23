/* product slider */
document.querySelectorAll('.products').forEach(n => {
  const topSlider = new Swiper(n.querySelector('.swiper'), {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: n.querySelector('.slider-nav__next'),
      prevEl: n.querySelector('.slider-nav__prev'),
    },
    pagination: {
      el: n.querySelector('.swiper-pagination'),
    },
    
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 8,
        
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

let iconProduct = document.querySelectorAll('.product__icon')

for (let icon of iconProduct) {
  icon.addEventListener('click', function (e) {
    e.preventDefault()
    this.classList.toggle('active')
  })
}

/* max height title */
window.onload = function(){
  fixHeadTitle()
  fixStickersBlock()
}
window.onresize = function(){
  fixHeadTitle()
  fixStickersBlock()
}


function fixHeadTitle(){
  let titleProduct = document.querySelectorAll('.product__name')
  for (let i = 0; i < titleProduct.length; i++) {
    for (let j=1;j<titleProduct.length;j++) {
      if (titleProduct[i].offsetHeight<titleProduct[j].offsetHeight) {
        titleProduct[i].style.height = titleProduct[j].offsetHeight + 'px'
      } else {
        titleProduct[i].offsetHeight + 'px'
      }
    }
  }
}

function fixStickersBlock(){
  let stickersBlock = document.querySelectorAll('.product__stickers')
  for (let i = 0; i < stickersBlock.length; i++) {
    for (let j=1;j<stickersBlock.length;j++) {
      if (stickersBlock[i].offsetHeight<stickersBlock[j].offsetHeight) {
        stickersBlock[i].style.height = stickersBlock[j].offsetHeight + 'px'
      } else {
        stickersBlock[i].offsetHeight + 'px'
      }
    }
  }
}



/* value */

let quantityBlock = document.querySelectorAll('.quantity')

for (let i = 0; i < quantityBlock.length; i++) {
  let minus = quantityBlock[i].querySelector('.quantity__minus')
  let plus = quantityBlock[i].querySelector('.quantity__plus')
  let input = quantityBlock[i].querySelector('.quantity__input')

  minus.addEventListener('click', function () {
    input.value -= 1
    if (input.value < 1) {
      input.value = 1
    }
  })
  plus.addEventListener('click', function () {
    input.value = +(input.value) + 1
  })

}




/* validation */

let form = document.getElementsByClassName('form')
let popup = document.querySelector('.popup')
for (let i=0;i<form.length;i++) {
  let questionRequared = form[i].querySelectorAll('.question__requared')
  let btnSubmit = form[i].querySelector('.btn--submit')
  let input = form[i].querySelectorAll('.input')
  let textArea = form[i].querySelectorAll('.textarea')
  let checkBox = form[i].querySelector('.checkbox input')
  btnSubmit.addEventListener('click', function(e){
    e.preventDefault()
    checkInput()
    checkTextArea()
    checkCheckBox()

    if (checkInput()==true&&checkTextArea()==true&&checkCheckBox()==true) {
      popup.classList.add('active')
      clearForm()
    } else {
      console.log('form false')
    }
    function checkInput() {
      let flag = 0
      for (let key of input) {
        if (key.value==='') {
          key.parentNode.classList.add('error')
          key.parentNode.classList.remove('agree')
          flag -=1
        } else {
          key.parentNode.classList.remove('error')
          key.parentNode.classList.add('agree')
          flag +=1
        }

        
      }
      if (flag==input.length) {
        return true
      } else {
        return false
      }
    }
    function checkTextArea() {
      for (let key of textArea) {
        if (key.value==='') {
          key.parentNode.classList.add('error')
          key.parentNode.classList.remove('agree')
          return false
        } else {
          key.parentNode.classList.remove('error')
          key.parentNode.classList.add('agree')
          return true
        }
      }
    }
    function checkCheckBox(){
      if (checkBox.checked) {
        checkBox.classList.remove('error')
        return true
      } else {
        checkBox.classList.add('error')
        return false
      }
    }
    function clearForm() {
      for (let key of input) {
        key.value=''
        key.parentNode.classList.remove('agree')
      }
      for (let key of textArea) {
        key.value=''
        key.parentNode.classList.remove('agree')
      }
    }
  })

  for (let key of input) {
    key.addEventListener('input',function(){
      if (this.value==='') {
        key.parentNode.classList.add('error')
        key.parentNode.classList.remove('agree')
      } else {
        key.parentNode.classList.remove('error')
        key.parentNode.classList.add('agree')
      }
    })
  }
  for (let key of textArea) {
    key.addEventListener('input',function(){
      if (this.value==='') {
        key.parentNode.classList.add('error')
        key.parentNode.classList.remove('agree')
      } else {
        key.parentNode.classList.remove('error')
        key.parentNode.classList.add('agree')
      }
    })
  }
  checkBox.addEventListener('change', function(){
    if (checkBox.checked) {
      checkBox.classList.remove('error')
    } else {
      checkBox.classList.add('error')
    }
  })
}



/* добавить для body активный класс */


/* cls popup */
let clsBtn = document.querySelectorAll('.popup__close--closed')
for (let key of clsBtn) {
  key.addEventListener('click', function(){
    key.closest('.popup').classList.remove('active')
  })
}


/* clear input btn */

let inputBlock = document.getElementsByClassName('question__input')


for (let i=0;i<inputBlock.length;i++) {
  let input = inputBlock[i].querySelector('.input')
  let clearBtn = inputBlock[i].querySelector('.input__clear')

  clearBtn.addEventListener('click', function(e){
    e.preventDefault()
    input.value=''
  })
}