angular.module('starter.controllers', [])

.controller('MenuCtrl', function($scope, $ionicPlatform, $cordovaAdMob, $window){
	$ionicPlatform.ready(function() {
 
    var adMobId = {
        //admob_banner_key: 'ca-app-pub-6553885112981747/9738563313',
        admob_interstitial_key: 'ca-app-pub-6553885112981747/2354897314'
    };
     
   /* $scope.showBannerAd = function() {
         
        try {
             
            console.log('Show Banner Ad');          
             
            $cordovaAdMob.createBannerView({
                adId: adMobId.admob_banner_key,
                position: adMobPosition.BOTTOM_CENTER,
                isTesting: true,
                autoShow: true
            });
 
        } catch (e) {
            alert(e);
        }       
    }*/
     
    $scope.showInterstitialAd = function() {
         
        try {
             
            console.log('Show Interstitial Ad');            
 
            $cordovaAdMob.createInterstitialView({
                adId: adMobId.admob_interstitial_key,
                isTesting: true,
                autoShow: true
            });
             
        } catch (e) {
            alert(e);
        }       
    }   
  });   
});