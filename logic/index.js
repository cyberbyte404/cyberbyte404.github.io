let mobileMenuOpen = false;

function shiftMenu() {
  mobileMenuOpen === true ?
    document.querySelector('.mobile-nav').style.height = '0px' :
    document.querySelector('.mobile-nav').style.height = '100px';
  mobileMenuOpen = !mobileMenuOpen;
}

window.addEventListener('scroll', function () {
  if (this.window.scrollY === 0) {
    this.document.querySelector(".navbar").style.backgroundColor = "transparent";
  } else {
    this.document.querySelector(".navbar").style.backgroundColor = "rgb(0 0 0 / 94%)";
  }
});