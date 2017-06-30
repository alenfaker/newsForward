(function(angular){
    var newsWeb = angular.module("newsWeb",[
        "newsdetails",
        "newsList",
        "ngRoute",
    ]);
        newsWeb.config(["$locationProvider",function($locationProvider){
            $locationProvider.hashPrefix("");
        }]);
        
})(angular)