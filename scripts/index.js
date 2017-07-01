HTMLElement.prototype.addClass = function(className) {
    if (!this.classList.length) {
      this.className += className;
    } else if (this.className.indexOf(className) < 0) {
      this.className += ' ' + className;
    }

    return this;
  }
  // 删除样式
HTMLElement.prototype.removeClass = function(className) {
  if (this.classList[0] === className) {
    this.className = this.className.replace(className, '');
  } else {
    this.className = this.className.replace(' ' + className, '');
  }

  return this;
}

function $(selector) {
  if (!selector) return

  if (selector.indexOf('#') > -1) {
    selector = selector.replace('#', '');
    return document.getElementById(selector);
  } else if (selector.indexOf('.') > -1) {
    selector = selector.replace('.', '');
    return document.getElementsByClassName(selector);
  } else {
    return document.querySelectorAll(selector);
  }
}

window.onload = function() {
  particlesJS.load('particles-js', function() {
    showEl('#particles-js');
  });

  initTouchEvents();
}

var fontLoader = new FontLoader(['lombok'], {
  fontLoaded: function(font) {
    showEl('#jf');
  }
}, 3000);
fontLoader.loadFonts();

function showEl(id) {
  var el = $(id);
  if (el) {
    el.style.opacity = 1;
  }
}

var inAnimation = false
window.onmousewheel = function(e) {
  if (inAnimation) return;

  computeScrollPx(e) > 0 ? scrollUp() : scrollDown();

  // debounce
  inAnimation = true
  setTimeout(function() {
    inAnimation = false
  }, 100)
}

function computeScrollPx(e) {
  return e.wheelDelta ? e.wheelDelta : (e.detail ? e.detail : 0)
}

var sec1 = $('.sec-1')[0];
var sec2 = $('.sec-2')[0];

function scrollUp() {
  [sec1, sec2].map(function(el) {
    el.removeClass('down').addClass('up')
  })
}

function scrollDown() {
  [sec1, sec2].map(function(el) {
    el.removeClass('up').addClass('down')
  })

}

function initTouchEvents(){
  document.body.addEventListener('swipedown', function(){
    scrollUp();
  });

  document.body.addEventListener('swipeup', function(){
    scrollDown();
  });

  new Touch(document.body)
}

window.addEventListener('keydown', function(e){
  if(e.key == 'ArrowUp'){
    scrollUp();
  } else if (e.key == 'ArrowDown'){
    scrollDown();
  }
})
