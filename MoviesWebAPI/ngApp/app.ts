namespace MoviesWebAPI {
    angular.module('MoviesWebAPI', ['ngRoute', 'ui.bootstrap'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/ngApp/views/movies.html',
                    controller: MoviesWebAPI.Controllers.MoviesController,
                    controllerAs: 'movieList'
                });
        });
}