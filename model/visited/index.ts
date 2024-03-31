export class Visited {
    constructor(
        visited_id: number,
        user_id: number,
        news_id: number,
        visited_time: string,
    ) {
        this.visited_id = visited_id;
        this.user_id = user_id;
        this.news_id = news_id;
        this.visited_time = visited_time;
    }
    visited_id: number;
    user_id: number;
    news_id: number;
    visited_time: string;
}
