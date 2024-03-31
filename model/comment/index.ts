export class Comment {
    constructor(
        comment_id: number,
        user_id: number,
        news_id: number,
        comment_content: string,
        comment_created_time: string,
        comment_praise_number: number,
    ) {
        this.comment_id = comment_id;
        this.user_id = user_id;
        this.news_id = news_id;
        this.comment_content = comment_content;
        this.comment_created_time = comment_created_time;
        this.comment_praise_number = comment_praise_number;
    }
    comment_id: number;
    user_id: number;
    news_id: number;
    comment_content: string;
    comment_created_time: string;
    comment_praise_number: number;
}
