import { ServiceProvider } from "./ServiceProvider";
import { User } from "./User";

export class Order{
    constructor(public order_count?:number,public order_date?:Date,public servicepro?:ServiceProvider,public user?:User){}
}