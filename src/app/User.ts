export class User {
    constructor(public username?: string, public first_name?: string,public last_name?: string,
                public email?: string,public password?: string,public mobile_no?: number,
                public add_line1?: string,public add_line2?: string,public is_active?:boolean) {
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.mobile_no = mobile_no;
        this.add_line1 = add_line1;
        this.add_line2 = add_line2;
        this.is_active=is_active;
    }
}