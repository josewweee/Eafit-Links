/*var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        //banner: 'ca-app-pub-6869992474017983/9375997553',
        interstitial: 'ca-app-pub-6553885112981747/2354897314'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        //banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6553885112981747/2354897314'
    };
} else {
    admobid = { // for Windows Phone
        //banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6553885112981747/2354897314'
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
    if (! AdMob ) { alert( 'admob plugin not ready' ); return; }
    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
    });
    console.log("aa");
}*/