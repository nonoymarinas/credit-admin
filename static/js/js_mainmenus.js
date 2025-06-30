let globalBurgerMenu = null;
function burgerMenus() {
    this.pageCoverMenu = new pageCoverMenus();
    this.enableBurgerMenu();
}
burgerMenus.prototype.enableBurgerMenu = function () {
    const menuToggleBtn = document.querySelector('.jsBurgerMenuCont');
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', this.handleClickBurgerMenu.bind(this));
    } else {
        console.warn('Burger menu button (.jsBurgerMenuCont) not found.');
    }
};

burgerMenus.prototype.handleClickBurgerMenu = function () {
    this.toggleMainMenus();
};

burgerMenus.prototype.toggleMainMenus = function () {
    const menu = document.querySelector('.jsMainMenuMainCont');
    if (!menu) {
        console.warn('Main menu container (.jsMainMenuMainCont) not found.');
        return;
    }

    const classes = menu.classList;

    const isHidden = classes.contains('max-width-zero');
    const isOpen = classes.contains('menu-animate-open');

    // ✅ Decision based on current state before class manipulation
    if (isHidden || !isOpen) {
        // Open the menu
        classes.remove('max-width-zero', 'menu-animate-close');
        classes.add('menu-animate-open');
        this.pageCoverMenu.showMenuPageCover();
    } else {
        // Close the menu
        classes.remove('menu-animate-open');
        classes.add('menu-animate-close');
        this.pageCoverMenu.hideMenuPageCover();
    }
};

function caretButtons() {
    // Save the handler as a property of the instance
    this.handleClickCaretButton = this.handleClickCaretButton.bind(this);
    this.enableCaretButton();
}

caretButtons.prototype.enableCaretButton = function () {
    this.closeIcon = document.querySelector('.jsCaretCloseIcon');
    if (!this.closeIcon) {
        console.warn('Element ".jsCaretCloseIcon" not found.');
        return;
    }
    // Use the stored handler reference here
    this.closeIcon.addEventListener('click', this.handleClickCaretButton);
};

caretButtons.prototype.handleClickCaretButton = function () {
    globalBurgerMenu.toggleMainMenus();
};

function homeMenus() {
    this.handleClickHomeMenu = this.handleClickHomeMenu.bind(this); // add this
    this.enableHomeMenu();
}

homeMenus.prototype.enableHomeMenu = function () {
    this.jsHomeMenuLi = document.querySelector('.jsHomeMenuLi');
    if (!this.jsHomeMenuLi) {
        console.warn('Element ".jsHomeMenuLi" not found.');
        return;
    }
    this.jsHomeMenuLi.addEventListener('click', this.handleClickHomeMenu);
}

homeMenus.prototype.handleClickHomeMenu = function () {
    globalBurgerMenu.toggleMainMenus();
};



function dashboardMenus() {
    // Bind the handler once and save reference
    this.handleClickDashboardMenu = this.handleClickDashboardMenu.bind(this);
    this.enableDashboardMenu();
}

dashboardMenus.prototype.enableDashboardMenu = function () {
    this.dashboardMenuItem = document.querySelector('.jsDashboardMenuLi');
    if (!this.dashboardMenuItem) {
        console.warn('Element ".jsDashboardMenuLi" not found.');
        return;
    }
    this.dashboardMenuItem.addEventListener('click', this.handleClickDashboardMenu);
};

dashboardMenus.prototype.handleClickDashboardMenu = async function () {
    globalBurgerMenu.toggleMainMenus();
    document.cookie = "MyCookieName=MyValue; path=/; max-age=86400";
    const options = {
        method: 'GET',
        credenstials: 'include' // ⬅️ IMPORTANT: ensures cookies are sent
    }
    const cookie = await fetchData.getData('get-cookie', options);
    if (cookie) {
        console.log('Cookie fetched successfully:', cookie);
    } else {
        console.error('Failed to fetch cookie.');
    }
    //fetch('/SampleCookie/ReadCookie', {
    //    method: 'GET',
    //    credentials: 'include' // ⬅️ IMPORTANT: ensures cookies are sent
    //})
    //    .then(response => response.text())
    //    .then(data => console.log(data));
};

function debtorMenus() {
    this.handleClickDebtorMenu = this.handleClickDebtorMenu.bind(this);
    this.handleClickNewDebtorMenu = this.handleClickNewDebtorMenu.bind(this);
    this.handleClickQuotationsListMenu = this.handleClickQuotationsListMenu.bind(this);

    this.enableMainMenuDebtor();
    this.enableSubMenuNewDebtor();
    this.enableSubMenuRecordsMenu();
}

debtorMenus.prototype.enableMainMenuDebtor = function () {
    this.debtorMenuLi = document.querySelector('.jsDebtorMenuLi');
    if (!this.debtorMenuLi) {
        console.warn('Element ".jsDebtorMenuLi" not found.');
        return;
    }
    this.debtorMenuLi.addEventListener('click', this.handleClickDebtorMenu);
}

debtorMenus.prototype.handleClickDebtorMenu = function (e) {
    this.toggleSubli(e);
}

debtorMenus.prototype.toggleSubli = function (e) {
    const ul = e.currentTarget.querySelector('ul');
    if (ul) {
        ul.classList.toggle('display-none');
    } else {
        console.warn('No <ul> found inside the clicked element.');
    }
}

debtorMenus.prototype.enableSubMenuNewDebtor = function () {
    this.newDebtorMenuLi = document.querySelector('.jsNewDebtorMenuLi');
    if (!this.newDebtorMenuLi) {
        console.warn('Element ".jsNewDebtorMenuLi" not found.');
        return;
    }
    this.newDebtorMenuLi.addEventListener('click', this.handleClickNewDebtorMenu);
}

debtorMenus.prototype.handleClickNewDebtorMenu = async function (e) {
    globalBurgerMenu.toggleMainMenus();
    const reference = new references();
    await reference.getNewDeptorReferences();
    console.log("new debtor")
}

debtorMenus.prototype.enableSubMenuRecordsMenu = function () {
    this.quotationsListMenuLi = document.querySelector('.jsQuotationsListMenuLi');
    if (!this.quotationsListMenuLi) {
        console.warn('Element ".jsQuotationsListMenuLi" not found.');
        return;
    }
    this.quotationsListMenuLi.addEventListener('click', this.handleClickQuotationsListMenu);
}

debtorMenus.prototype.handleClickQuotationsListMenu = async function (e) {
    globalBurgerMenu.toggleMainMenus();
}

// Add disable methods to remove event listeners (optional but recommended)
debtorMenus.prototype.disableMainMenuQuotations = function () {
    if (this.debtorMenuLi) {
        this.debtorMenuLi.removeEventListener('click', this.handleClickDebtorMenu);
    }
}

debtorMenus.prototype.disableSubMenuNewQuotation = function () {
    if (this.newDebtorMenuLi) {
        this.newDebtorMenuLi.removeEventListener('click', this.handleClickNewDebtorMenu);
    }
}

debtorMenus.prototype.disableSubMenuRecordsMenu = function () {
    if (this.quotationsListMenuLi) {
        this.quotationsListMenuLi.removeEventListener('click', this.handleClickQuotationsListMenu);
    }
}


function productsMenus() {
    // Bind handlers once
    this.handleClickProductsMenu = this.handleClickProductsMenu.bind(this);
    this.handleClickNewProductsMenu = this.handleClickNewProductsMenu.bind(this);
    this.handleClickProductsListMenu = this.handleClickProductsListMenu.bind(this);

    this.enableMainMenuProducts();
    this.enableSubMenuNewProducts();
    this.enableSubMenuProductsList();
}

productsMenus.prototype.enableMainMenuProducts = function () {
    this.productsMenuLi = document.querySelector('.jsProductsMenuLi');
    if (!this.productsMenuLi) {
        console.warn('Element ".jsProductsMenuLi" not found.');
        return;
    }
    this.productsMenuLi.addEventListener('click', this.handleClickProductsMenu);
}

productsMenus.prototype.handleClickProductsMenu = function (e) {
    this.toggleSubli(e);
}

productsMenus.prototype.toggleSubli = function (e) {
    const ul = e.currentTarget.querySelector('ul');
    if (ul) {
        ul.classList.toggle('display-none');
    } else {
        console.warn('No <ul> found inside the clicked element.');
    }
}

productsMenus.prototype.enableSubMenuNewProducts = function () {
    this.newProductsMenuLi = document.querySelector('.jsNewProductsMenuLi');
    if (!this.newProductsMenuLi) {
        console.warn('Element ".jsNewProductsMenuLi" not found.');
        return;
    }
    this.newProductsMenuLi.addEventListener('click', this.handleClickNewProductsMenu);
}

productsMenus.prototype.handleClickNewProductsMenu = function (e) {
    globalBurgerMenu.toggleMainMenus();

    // You can uncomment and use this when ready:
    // var newQuotation = new newQuotations();
    // newQuotation.showNewQuotationInterfaces();
}

productsMenus.prototype.enableSubMenuProductsList = function () {
    this.productsListMenuLi = document.querySelector('.jsProductsListMenuLi');
    if (!this.productsListMenuLi) {
        console.warn('Element ".jsProductsListMenuLi" not found.');
        return;
    }
    this.productsListMenuLi.addEventListener('click', this.handleClickProductsListMenu);
}

productsMenus.prototype.handleClickProductsListMenu = function (e) {
    globalBurgerMenu.toggleMainMenus();
}

// Optional: add disable methods to remove event listeners cleanly

productsMenus.prototype.disableMainMenuProducts = function () {
    if (this.productsMenuLi) {
        this.productsMenuLi.removeEventListener('click', this.handleClickProductsMenu);
    }
}

productsMenus.prototype.disableSubMenuNewProducts = function () {
    if (this.newProductsMenuLi) {
        this.newProductsMenuLi.removeEventListener('click', this.handleClickNewProductsMenu);
    }
}

productsMenus.prototype.disableSubMenuProductsList = function () {
    if (this.productsListMenuLi) {
        this.productsListMenuLi.removeEventListener('click', this.handleClickProductsListMenu);
    }
}

function settingMenus() {
    // Bind handlers once
    this.handleClickSettingsMenu = this.handleClickSettingsMenu.bind(this);
    this.handleClickOperationCostMenu = this.handleClickOperationCostMenu.bind(this);

    this.enableMainMenuSettings();
    this.enableSubMenuOperationCost();
}

settingMenus.prototype.enableMainMenuSettings = function () {
    this.settingsMenuLi = document.querySelector('.jsSettingsMenuLi');
    if (!this.settingsMenuLi) {
        console.warn('Element ".jsSettingsMenuLi" not found.');
        return;
    }
    this.settingsMenuLi.addEventListener('click', this.handleClickSettingsMenu);
}

settingMenus.prototype.handleClickSettingsMenu = function (e) {
    this.toggleSubli(e);
}

settingMenus.prototype.toggleSubli = function (e) {
    const ul = e.currentTarget.querySelector('ul');
    if (ul) {
        ul.classList.toggle('display-none');
    } else {
        console.warn('No <ul> found inside the clicked element.');
    }
}

settingMenus.prototype.enableSubMenuOperationCost = function () {
    this.operationalCostMenuLi = document.querySelector('.jsOperationalCostMenuLi');
    if (!this.operationalCostMenuLi) {
        console.warn('Element ".jsOperationalCostMenuLi" not found.');
        return;
    }
    this.operationalCostMenuLi.addEventListener('click', this.handleClickOperationCostMenu);
}

settingMenus.prototype.handleClickOperationCostMenu = function (e) {
    globalBurgerMenu.toggleMainMenus();

    // Uncomment and implement as needed:
    // var newQuotation = new newQuotations();
    // newQuotation.showNewQuotationInterfaces();
}

// Optional disable methods:

settingMenus.prototype.disableMainMenuSettings = function () {
    if (this.settingsMenuLi) {
        this.settingsMenuLi.removeEventListener('click', this.handleClickSettingsMenu);
    }
}

settingMenus.prototype.disableSubMenuOperationCost = function () {
    if (this.operationalCostMenuLi) {
        this.operationalCostMenuLi.removeEventListener('click', this.handleClickOperationCostMenu);
    }
}


function pageCoverMenus() {
    // Bind the event handler once
    this.handleClickPageCoverMenu = this.handleClickPageCoverMenu.bind(this);
    this.enablePageCoverMenu();
}

pageCoverMenus.prototype.enablePageCoverMenu = function () {
    this.jsMenuPageCover = document.querySelector('.jsMenuPageCover');
    if (!this.jsMenuPageCover) {
        console.warn('Element ".jsMenuPageCover" not found.');
        return;
    }
    this.jsMenuPageCover.addEventListener('click', this.handleClickPageCoverMenu);
}

pageCoverMenus.prototype.handleClickPageCoverMenu = function () {
    // Explicitly close the menu
    const menu = document.querySelector('.jsMainMenuMainCont');
    if (!menu) {
        console.warn('Main menu container (.jsMainMenuMainCont) not found.');
        return;
    }

    const classes = menu.classList;

    // Remove open classes, add close classes
    classes.remove('menu-animate-open');
    classes.add('menu-animate-close');

    // Hide page cover
    this.hideMenuPageCover();
}

pageCoverMenus.prototype.hideMenuPageCover = function () {
    if (this.jsMenuPageCover) {
        this.jsMenuPageCover.classList.add('display-none');
    }
}

pageCoverMenus.prototype.showMenuPageCover = function () {
    if (this.jsMenuPageCover) {
        this.jsMenuPageCover.classList.remove('display-none');
    }
};

(function enableMenus() {
    globalBurgerMenu = new burgerMenus(); 
    new caretButtons();
    new homeMenus();
    new dashboardMenus();
    new debtorMenus();
    new productsMenus();
    new settingMenus();
    new pageCoverMenus();
})();