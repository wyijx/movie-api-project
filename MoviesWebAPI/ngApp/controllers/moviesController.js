var MoviesWebAPI;
(function (MoviesWebAPI) {
    var Controllers;
    (function (Controllers) {
        var MoviesController = (function () {
            function MoviesController($http) {
                var _this = this;
                this.$http = $http;
                this.$http.get('/api/movies')
                    .then(function (response) {
                    console.log(response);
                    _this.movies = response.data;
                    //console.log(`Movies Data: ${this.movies}`);
                })
                    .catch(function (response) {
                    console.log("OH NOES: " + response.status);
                });
                this.$http.get('/api/genres')
                    .then(function (response) {
                    //console.log(response);
                    _this.genres = response.data;
                    //console.log(`Genres Data: ${this.genres}`)
                });
            }
            MoviesController.prototype.getMovies = function () {
                var _this = this;
                this.$http.get("/api/genres/" + this.selectedGenre.id)
                    .then(function (response) {
                    //console.log(response);
                    _this.genreMatches = response.data.movies;
                    //console.log(`Genres Data: ${this.genres}`)
                });
            };
            return MoviesController;
        })();
        Controllers.MoviesController = MoviesController;
    })(Controllers = MoviesWebAPI.Controllers || (MoviesWebAPI.Controllers = {}));
})(MoviesWebAPI || (MoviesWebAPI = {}));
//# sourceMappingURL=moviesController.js.map