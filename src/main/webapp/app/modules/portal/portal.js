angular.module('hello', [ 'ngRoute' ])
  .constant('baseUrl', '/substractum')
  .config(function($routeProvider, $httpProvider, $locationProvider, baseUrl) {

    $locationProvider.html5Mode(true);	  
	
    $routeProvider.when(baseUrl + '/home', {
      templateUrl : baseUrl + '/app/modules/portal/views/home.html',
      controller : 'home',
      controllerAs: 'controller'
    }).when( baseUrl + '/login', {
      templateUrl : baseUrl + '/app/modules/portal/views/login.html',
      controller : 'navigation',
      controllerAs: 'controller'
    }).otherwise({redirectTo: baseUrl + '/home'});

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

	    $http.get(baseUrl + '/user/current-user', {headers : headers}).then(function(response) {
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