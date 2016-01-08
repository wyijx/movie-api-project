var MoviesWebAPI;
(function (MoviesWebAPI) {
    var Controllers;
    (function (Controllers) {
        var FortuneController = (function () {
            function FortuneController(fortuneCookieService) {
                this.fortuneCookieService = fortuneCookieService;
                this.fortune = fortuneCookieService.getFortune();
            }
            FortuneController.prototype.roll = function () {
                this.fortune = this.fortuneCookieService.getFortune();
            };
            return FortuneController;
        })();
        Controllers.FortuneController = FortuneController;
    })(Controllers = MoviesWebAPI.Controllers || (MoviesWebAPI.Controllers = {}));
})(MoviesWebAPI || (MoviesWebAPI = {}));
