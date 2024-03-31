export class User {
    constructor(
        user_id: number,
        authority_id: number,
        user_name: string,
        password: string,
        department_id: number,
    ) {
        this.user_id = user_id;
        this.authority_id = authority_id;
        this.user_name = user_name;
        this.password = password;
        this.department_id = department_id;
    }
    user_id: number;
    authority_id: number;
    user_name: string;
    password: string;
    department_id: number;
}
