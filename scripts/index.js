window.onload = function() {
  particlesJS.load('particles-js');


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

var sec1 = document.getElementsByClassName('sec-1')[0];
var sec2 = document.getElementsByClassName('sec-2')[0];

function scrollUp() {
  console.log('up')
  sec1.style.transform = sec2.style.transform = 'translateY(0)';
}

function scrollDown() {
  console.log('down')
  sec1.style.transform = sec2.style.transform = 'translateY(-100%)';

}