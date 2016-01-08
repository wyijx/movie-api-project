namespace MoviesWebAPI.Controllers {
    export class MoviesController {
        public movies;
        public genres;
        public genreMatches;
        public selectedGenre;
        constructor(private $http) {
            this.$http.get('/api/movies')
                .then((response) => {
                    console.log(response);
                    this.movies = response.data;
                    //console.log(`Movies Data: ${this.movies}`);
                })
                .catch((response) => {
                    console.log(`OH NOES: ${response.status}`);
                });
            this.$http.get('/api/genres')
                .then((response) => {
                    //console.log(response);
                    this.genres = response.data;
                    //console.log(`Genres Data: ${this.genres}`)
                });
        }
        getMovies(): void {
            this.$http.get(`/api/genres/${this.selectedGenre.id}`)
                .then((response) => {
                    //console.log(response);
                    this.genreMatches = response.data.movies;
                    //console.log(`Genres Data: ${this.genres}`)
                });
        }
    }
}