var eapuocApp = new Framework7();

var $$ = Dom7;

var mainView = eapuocApp.addView('.view-main', {
    main: true,
    dynamicNavbar: true
});

eapuocApp.onPageInit('about', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

eapuocApp.onPageInit('video', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
    $$('.pb-standalone-video').on('click', function () {
        eapuocAppVideo.open();
    });
});
eapuocApp.onPageInit('eManual', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
eapuocApp.onPageInit('eManual-1', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
eapuocApp.onPageInit('eManual-2', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
eapuocApp.onPageInit('eManual-3', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
eapuocApp.onPageInit('eManual-4', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
eapuocApp.onPageInit('eManual-5', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
eapuocApp.onPageInit('eManual-6', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
eapuocApp.onPageInit('eManual-7', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
eapuocApp.onPageInit('eManual-8', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
eapuocApp.onPageInit('eManual-9', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
eapuocApp.onPageInit('eManual-10', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
eapuocApp.onPageInit('map', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

eapuocApp.onPageInit('map-offline', function (page) {
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
