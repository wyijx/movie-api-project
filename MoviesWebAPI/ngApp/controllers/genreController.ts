namespace MoviesWebAPI.Controllers {
    export class genreController {
        public genres;
        public genreMatches;
        public selectedGenre;
        constructor(private $http) {
            this.$http.get('/api/genres')
                .then((response) => {
                    //console.log(response);
                    this.genres = response.data;
                })
                .catch((response) => {
                    console.log(`OH NOES: ${response.status}`);
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