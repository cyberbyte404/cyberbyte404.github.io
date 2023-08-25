let mobileMenuOpen = false;

    function shiftMenu() {
      mobileMenuOpen === true ?
        document.querySelector('.mobile-nav').style.height = '0px' :
        document.querySelector('.mobile-nav').style.height = '100px';
      mobileMenuOpen = !mobileMenuOpen;
    }