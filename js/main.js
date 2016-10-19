$.noConflict();
jQuery(document).ready(function(){
      jQuery("#login").fadeOut(1);
      jQuery("#password").fadeOut(1);


});
var loginStatus = false;

function toggleLogin(){
  if(!loginStatus){
  jQuery("#login").removeClass("animated fadeOutUp");
  jQuery("#password").removeClass("animated fadeOutUp");
  jQuery("#login").addClass("animated fadeInDown");
  jQuery("#password").addClass("animated fadeInDown");
  jQuery("#login").fadeIn(500);
  jQuery("#password").fadeIn(500);
  loginStatus = true;}
  else{
    jQuery("#login").removeClass("animated fadeInDown");
    jQuery("#password").removeClass("animated fadeInDown");
    jQuery("#login").addClass("animated fadeOutUp");
    jQuery("#password").addClass("animated fadeOutUp");
    loginStatus = false;
  }
}

app = angular.module('app', ['ngMaterial']);
app.controller('projectCtrl', projectCtrl);


app.filter('searchFor', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}
		var result = [];
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if(item.price.toLowerCase().indexOf(searchString) !== -1 || item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}
		});
		return result;
	};
});


function projectCtrl($scope, $mdSidenav, $mdToast){
  $scope.openSettings = function() {
          $mdSidenav('left').toggle();
        };
  $scope.cartLogos = [];
  $scope.bill = 0.00;
  $scope.cartRemove = function(logo){
    for(i=0;i<$scope.cartLogos.length; i++){
      if(logo == $scope.cartLogos[i]){
        $scope.cartLogos.splice(i,1);
        $scope.bill-= (parseFloat(logo.price.slice(1,logo.price.length)));
        $scope.bill=Math.round($scope.bill*100)/100;
        $scope.cartNum -=1;
      }
    }
  }
  $scope.sizeSlider = 125;
  $scope.cartNum = 0;
  $scope.addCart = function(obj, prc, logo){
      $mdToast.show(
        $mdToast.simple()
          .textContent(obj + ' has been added to the cart')
          .hideDelay(1300)
          .position("top right")
        );
           $scope.cartNum +=1;

           $scope.bill+= (parseFloat(prc.slice(1,prc.length)));
           $scope.bill=Math.round($scope.bill*100)/100;
           $scope.cartLogos.push(logo);
             };

  $scope.logos = [{
                      title:'Gears',
                      price:'$5.99',
                      src : 'gears.png'
                    },
                    {
                      title:'Detective',
                      price:'$5.99',
                      src : 'detective.png'
                    },
                    {
                      title:'Icecream',
                      price:'$5.99',
                      src : 'icecream.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    },
                    {
                      title:'Empty',
                      price:'$5.99',
                      src : 'Empty.png'
                    }

                  ]
    }
