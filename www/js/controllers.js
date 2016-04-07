angular.module('starter.controllers', ['ngCordova'])

.controller('MenuCtrl', function($scope){

//OPEN THE PAGE INSIDE THE APP

    $scope.showInterstitialAd = function() {
        if(window.AdMob){ 
            AdMob.showInterstitial();
        }else{
            alert('not banner ready');
        }
        
    }
//VARIBLE TO KNOW WHERE ARE WE GOING
   // var ref;

//OPEN THE PAGE IN PHONE DEFAULT BROWSER
  /*  $scope.showInterstitialSystemBrowser = function(reference) {
        if(window.AdMob){ 
            AdMob.showInterstitial();
        }
            ref = reference;
        }

//IF THE AD GET CLOSED
    document.addEventListener('onAdDismiss', function(e){
        if(AdMob) AdMob.prepareInterstitial( {adId:'ca-app-pub-xxx/yyy', autoShow:false} );
        switch(ref){
            case '1':
                window.open('http://interactiva.eafit.edu.co/ei/', '_system', 'location=no');
                break;
            case '2':
                window.open('https://app.eafit.edu.co/ulises/login.do', '_system', 'location=no');
                break;
            case '3':
                 window.open('https://login.microsoftonline.com/', '_system', 'location=no');
                 break;
            case '4':
                window.open('http://bdigital.eafit.edu.co:8080/sinbad/', '_system', 'location=no');
                break;
            case '5':
                 window.open('http://www.eafit.edu.co/idiomas/Paginas/inicio.aspx', '_system', 'location=no');
                 break;
            case '6':
                window.open('http://www.eafit.edu.co/Paginas/index.aspx', '_system', 'location=no');
                break;
            default:
                break;
        }
    });
//IF THE APP GET CLICKED
     document.addEventListener('onAdLeaveApp', function(e){
        if(AdMob) AdMob.prepareInterstitial( {adId:'ca-app-pub-xxx/yyy', autoShow:false} );
        switch(ref){
            case '1':
                window.open('http://interactiva.eafit.edu.co/ei/', '_system', 'location=no');
                break;
            case '2':
                window.open('https://app.eafit.edu.co/ulises/login.do', '_system', 'location=no');
                break;
            case '3':
                 window.open('https://login.microsoftonline.com/', '_system', 'location=no');
                 break;
            case '4':
                window.open('http://bdigital.eafit.edu.co:8080/sinbad/', '_system', 'location=no');
                break;
            case '5':
                 window.open('http://www.eafit.edu.co/idiomas/Paginas/inicio.aspx', '_system', 'location=no');
                 break;
            case '6':
                window.open('http://www.eafit.edu.co/Paginas/index.aspx', '_system', 'location=no');
                break;
            default:
                break;
        }
    });*/

});