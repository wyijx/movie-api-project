namespace MoviesWebAPI.Controllers {
    export class nameController {
        public movies;
        constructor(private $http) {
            this.$http.get('/api/movies')
                .then((response) => {
                    //console.log(response);
                    this.movies = response.data;
                });
        }
    }
}