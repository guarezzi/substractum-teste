angular.module('hello', [ 'ngRoute' ])
  .config(function($routeProvider, $httpProvider, $locationProvider) {

    $locationProvider.html5Mode(true);	  
	  
    
    ///j_spring_security_check post passando os parametros 
    //http://www.mkyong.com/spring-security/spring-security-form-login-using-database/
    
    $routeProvider.when('/home', {
      templateUrl : '/app/modules/portal/views/home.html',
      controller : 'home',
      controllerAs: 'controller'
    }).when('/login', {
      templateUrl : '/app/modules/portal/views/login.html',
      controller : 'navigation',
      controllerAs: 'controller'
    }).otherwise({redirectTo: '/home'});

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

  })
  .controller('home', function($http) {
    var self = this;
    $http.get('/resource/').then(function(response) {
      self.greeting = response.data;
    })
  })
  .controller('navigation', 
		  function($rootScope, $http, $location) {

	  var self = this

	  var authenticate = function(credentials, callback) {

	    var headers = credentials ? {authorization : "Basic "
	        + btoa(credentials.username + ":" + credentials.password)
	    } : {};

	    $http.get('/user', {headers : headers}).then(function(response) {
	      if (response.data.name) {
	        $rootScope.authenticated = true;
	      } else {
	        $rootScope.authenticated = false;
	      }
	      callback && callback();
	    }, function() {
	      $rootScope.authenticated = false;
	      callback && callback();
	    });

	  }

	  authenticate();
	  self.credentials = {};
	  self.login = function() {
	      authenticate(self.credentials, function() {
	        if ($rootScope.authenticated) {
	        	$location.path("/");
	          self.error = false;
	        } else {
	        	$location.path("/login");
	          self.error = true;
	        }
	      });
	  };
	  
	  self.logout = function() {
		  $http.post('logout', {}).finally(function() {
		    $rootScope.authenticated = false;
		    	$location.path("/");
		  });
		}
	});