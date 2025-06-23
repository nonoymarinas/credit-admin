function windows() {
    this.handleClickWindows = this.handleClickWindows.bind(this);
}
windows.prototype.closeAllOpenAddressUl = function () {
    const uls = document.querySelectorAll('.jsAddressSelectUl');
    uls.forEach(item => {
        item.classList.add('display-none');
    })
}
windows.prototype.closeAllOpenUlWhenClickOutsideInput = function () {
    window.addEventListener('click', this.handleClickWindows);
}
windows.prototype.handleClickWindows = function (e) {
    if (e.target.tagName == 'INPUT') return false;
    this.closeAllOpenAddressUl();
}