(function (angular) {
    var newsdetails_news = angular.module("newsdetails", ["json_model", "ngRoute"]);
    newsdetails_news.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/webnewsdetail:timestamp", {
            templateUrl: "./details/details.html",
            controller: "newsdetailsCtrl",
        })
    }])
    newsdetails_news.controller("newsdetailsCtrl", ["$scope", "$window", "$http", "$routeParams", "$route", function ($scope, $window, $http, $routeParams, $route) {
        // $scope.flag = false;
        var timestamp = parseInt($routeParams.timestamp);
        console.log(timestamp);
        // $scope.returnF = function() {
        //     return false;
        // }
        //详情
        $http({
            url: "http://127.0.0.1:9090/api/webgetsinglenews",
            method: "get",
            params: {
                timestamp: timestamp,
            }
        }).then(function (res) {
            console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
                res.data[i].imgArr = JSON.parse(res.data[i].imgArr)[0];
            }
            $scope.detailsMore = res.data[0];
            $scope.date = new Date();
        }).catch(function () {
            console.log("error");
        })
        //可能喜欢的新闻
        $http({
            url: "http://127.0.0.1:9090/api/webgetrandnews",
            method: "get",
            params: {

            }
        }).then(function (res1) {
            console.log(res1.data);
            // for(var i = 0; i < res.data.length;i++) {
            // res.data[i].imgArr = JSON.parse( res.data[i].imgArr)[0];
            // }
            $scope.mayLike = res1.data;
            // $scope.date = new Date();
        }).catch(function () {
            console.log("error");
        })
    }]);
     newsdetails_news.controller("tabCtrl",["$scope",function($scope){
            $scope.flag = false;
        }]);
})(angular)