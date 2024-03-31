export class Praise {
    constructor(praise_id: number, user_id: number, news_id: number) {
        this.praise_id = praise_id;
        this.user_id = user_id;
        this.news_id = news_id;
    }
    praise_id: number;
    user_id: number;
    news_id: number;
}
