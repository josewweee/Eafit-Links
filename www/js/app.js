// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }


    /**
    *** ca-app-pub-xxx/xxx
    **/
    var admobid = {};
    if( /(android)/i.test(navigator.userAgent) ) { // for android & amazon-fireos
        admobid = {
            banner: 'ca-app-pub-xxx/xxx', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-xxx/yyy'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
        admobid = {
            banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-xxx/kkk'
        };
    } else { // for windows phone
        admobid = {
            banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-xxx/kkk'
        };
    }

    if(window.AdMob) AdMob.prepareInterstitial({
      adId:admobid.interstitial,
      autoShow:false
    });
      
  });
})

//CONEXION ENTRE JS Y HTML
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  //aca ponemos los estados(osea las vistas y las conectamos con el controllador)
    .state('Menu', {
      url: '/Menu',
      templateUrl: 'templates/Menu.html',
      controller:'MenuCtrl'
    })
    //en caso de que ninguna vista corresponda, usamos esta
    $urlRouterProvider.otherwise('/Menu');
});