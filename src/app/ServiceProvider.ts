import { Service } from "./Service";

export class ServiceProvider {
    constructor(public add_line1?: string, public add_line2?: string, public charges?: number,
        public email?: string, public experience_year?: number, public first_name?: string,
        public is_active?: boolean, public last_name?: string, public mobile_no?: number,
        public password?: string, public servicedesc?: string, public username?: string,
        public services?: Service,public agencyname?:string) {
            // echa krt kay kru?
    }
}