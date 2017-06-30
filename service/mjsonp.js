(function (angular) {
    var myapp = angular.module("json_model", []);
    myapp.service("mjsonp", ["$window", function ($window) {
        this.jsonp = function (opts) {
            var url = opts.url + "?";
            for (var k in opts.params) {
                url += (k + "=" + opts.params[k] + "&");
            }
            var callbackName = "json_" + $window.Math.ramdon.toString().slice(2);
            window[callbackName] = opts.callback;
            url += "callback=" + callbackName;
            var script = document.createElement("script");
            script.src = url;
            $window.document.body.appendChild(script);
        }
    }]);

        myapp.directive("activeAng",function(){
            return {
                restrict: "AE",
                link: function(scope,element,attrs) {
                    element.parent().children().removeClass("active");
                    element.addClass(active);
                }
            }
        });
})(angular)