var MoviesWebAPI;
(function (MoviesWebAPI) {
    var Controllers;
    (function (Controllers) {
        var genreController = (function () {
            function genreController($http) {
                var _this = this;
                this.$http = $http;
                this.$http.get('/api/genres')
                    .then(function (response) {
                    //console.log(response);
                    _this.genres = response.data;
                })
                    .catch(function (response) {
                    console.log("OH NOES: " + response.status);
                });
            }
            genreController.prototype.getMovies = function () {
                var _this = this;
                this.$http.get("/api/genres/" + this.selectedGenre.id)
                    .then(function (response) {
                    //console.log(response);
                    _this.genreMatches = response.data.movies;
                    //console.log(`Genres Data: ${this.genres}`)
                });
            };
            return genreController;
        })();
        Controllers.genreController = genreController;
    })(Controllers = MoviesWebAPI.Controllers || (MoviesWebAPI.Controllers = {}));
})(MoviesWebAPI || (MoviesWebAPI = {}));
