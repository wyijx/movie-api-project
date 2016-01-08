namespace MoviesWebAPI {
    angular.module('MoviesWebAPI', ['ngRoute', 'ui.bootstrap'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/ngApp/views/movieNames.html',
                    controller: MoviesWebAPI.Controllers.nameController,
                    controllerAs: 'movieList'
                })
                .when('/movieGenre', {
                    templateUrl: '/ngApp/views/movieGenre.html',
                    controller: MoviesWebAPI.Controllers.genreController,
                    controllerAs: 'movieList'
                });
        });

    angular.module('MoviesWebAPI').constant
}