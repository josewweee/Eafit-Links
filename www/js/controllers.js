angular.module('starter.controllers', ['ngCordova'])

.controller('MenuCtrl', function($scope/*, $ionicPlatform, $cordovaAdMob, $window*/){
	/*$ionicPlatform.ready(function() {
 	
    var adMobId = {
        admob_banner_key: 'ca-app-pub-6553885112981747/9738563313',
        admob_interstitial_key: 'ca-app-pub-6553885112981747/2354897314'
    };
     
    $scope.showInterstitialAd = function() {


        if (! window.AdMob ) {
             alert( 'admob plugin not ready' ); 
             return; 
        }

        window.AdMob.prepareInterstitial({
            adId:  admob_interstitial_key, 
            autoShow: true
        })
        window.AdMob.showInterstitial();
        console.log("aaa");
    } 
  });*/
$scope.showInterstitialAd = function() {
    if(window.AdMob) AdMob.showInterstitial();
    console.log("aa");
}

  $scope.$on('$ionicView.beforeLeave', function(e){
    if(window.AdMob) AdMob.showInterstitial();
  });

});