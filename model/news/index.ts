export class News {
    constructor(
        news_id: number,
        news_title: string,
        news_content: string,
        news_writer_id: string,
        news_praise_number: number,
        news_star_number: number,
        news_created_time: string,
    ) {
        this.news_id = news_id;
        this.news_title = news_title;
        this.news_content = news_content;
        this.news_writer_id = news_writer_id;
        this.news_praise_number = news_praise_number;
        this.news_star_number = news_star_number;
        this.news_created_time = news_created_time;
    }
    news_id: number;
    news_title: string;
    news_content: string;
    news_writer_id: string;
    news_praise_number: number;
    news_star_number: number;
    news_created_time: string;
}
