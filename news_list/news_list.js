(function(angular){
    var newsList_news = angular.module("newsList",["json_model","newsdetails","ngRoute"]);
        newsList_news.config(["$routeProvider",function($routeProvider){
            $routeProvider.when("/:newsType",{
                templateUrl: "./news_list/news_list.html", //判断js文件在哪儿引入，即可判断其向相对路径
                controller: "news_listCtrl",
            }) 
        }])
        newsList_news.controller("news_listCtrl",["$scope","$http","$window","$route","$routeParams","mjsonp",function($scope,$http,$window,$route,$routeParams,mjsonp){
            // $scope.flag = true;
            $http({
                method: "get",
                url: "http://127.0.0.1:9090/api/webgetkeynews",
                params: {
                    category: $routeParams.newsType,
                    page: 1,
                }
            }).then(function(res){
                console.log(res.data);
                var newDat = res.data;
                // $scope.imgarr = [];
                for(var i = 0; i < newDat.length;i++) {
                    // console.log(JSON.parse(res.data[i].imgArr)[0]);
                    newDat[i].imgArr = (JSON.parse(newDat[i].imgArr))[0];
                    // imgarr.push(JSON.parse(res.data[i].imgArr)[0]);
                }
                // console.log(res.data);
                // console.log(res.data.imgArr);
                console.log(newDat);
                $scope.newsLis = newDat;
                $scope.date = new Date();

            }).catch(function(){
                console.log("erro");
            })
        }]);
        newsList_news.controller("tabCtrl",["$scope",function($scope){
            $scope.flag = true;
        }]);
})(angular)