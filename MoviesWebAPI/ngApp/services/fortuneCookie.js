var MoviesWebAPI;
(function (MoviesWebAPI) {
    var Services;
    (function (Services) {
        var FortuneCookieService = (function () {
            function FortuneCookieService() {
            }
            FortuneCookieService.prototype.getFortune = function () {
                var cookie = Math.floor(Math.random() * 3 + 1);
                var fortune;
                if (cookie > 2) {
                    fortune = "Your luck is about to change!";
                }
                else if (cookie > 1) {
                    fortune = "Oranges are not apples, but you must be the orange";
                }
                else {
                    fortune = "I forsee depression in your future!";
                }
                return fortune;
            };
            return FortuneCookieService;
        })();
        angular.module('MoviesWebAPI').service('fortuneCookieService', FortuneCookieService);
    })(Services = MoviesWebAPI.Services || (MoviesWebAPI.Services = {}));
})(MoviesWebAPI || (MoviesWebAPI = {}));
