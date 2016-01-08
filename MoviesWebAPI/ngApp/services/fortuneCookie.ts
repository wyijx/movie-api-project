namespace MoviesWebAPI.Services {

    class FortuneCookieService {

        public getFortune(): string {
            let cookie: number = Math.floor(Math.random() * 3 + 1);
            let fortune: string;
            if (cookie > 2) {
                fortune = "Your luck is about to change!";
            } else if (cookie > 1) {
                fortune = "Oranges are not apples, but you must be the orange";
            } else {
                fortune = "I forsee depression in your future!";
            }
            return fortune;
        }
    }
    angular.module('MoviesWebAPI').service('fortuneCookieService', FortuneCookieService);
}