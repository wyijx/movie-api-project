namespace MoviesWebAPI.Controllers {
    
    export class FortuneController {
        public fortune: string;

        constructor(private fortuneCookieService) {
            this.fortune = fortuneCookieService.getFortune();
        }

        roll() {
            this.fortune = this.fortuneCookieService.getFortune();
        }
    }
}