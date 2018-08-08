var myApp = angular.module("myModule",['ui.router']).controller("mySignUpController",function ($scope,$state) {
		var details = {
			username: '',
			repeatpassword:'',
			email:'',
			password:''
		};
        var password = document.getElementById("inputPassword");
        var confirm_password = document.getElementById("inputrepeatPassword");
		$scope.details = details;
		$scope.onSubmitForm = function(){
        if(details.username !== '' && details.email !== '' && details.password !== '' && details.repeatpassword !== ''){
            if(password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
          } else {
            confirm_password.setCustomValidity('');
            console.log("Username: " + details.username + "\n" + "Phone: " 
            + "Email: " + details.email+ "\n" + "Password: " + details.password);
            $state.go('home');  
          }
        }
		}
		
		
	}).controller("myHomeController",function($scope){
        var page="Home";
        $scope.page=page;
    });
        
    myApp.config(function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/signup');
  var helloState = {
    name: 'home',
    url: '/home',
    controller: 'myHomeController', 
    templateUrl:'NewHome.html'
  }

  var aboutState = {
    name: 'signup',
    url: '/signup',
    controller: 'mySignUpController',
    templateUrl:'SignUp.html'
  }
  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});