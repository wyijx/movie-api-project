var MoviesWebAPI;
(function (MoviesWebAPI) {
    var Controllers;
    (function (Controllers) {
        var nameController = (function () {
            function nameController($http) {
                var _this = this;
                this.$http = $http;
                this.$http.get('/api/movies')
                    .then(function (response) {
                    //console.log(response);
                    _this.movies = response.data;
                });
            }
            return nameController;
        })();
        Controllers.nameController = nameController;
    })(Controllers = MoviesWebAPI.Controllers || (MoviesWebAPI.Controllers = {}));
})(MoviesWebAPI || (MoviesWebAPI = {}));
