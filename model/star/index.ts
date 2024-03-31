export class Star {
    constructor(star_id: number, user_id: number, news_id: number) {
        this.star_id = star_id;
        this.user_id = user_id;
        this.news_id = news_id;
    }
    star_id: number;
    user_id: number;
    news_id: number;
}
