import { Order } from "./Order";
export class Payment {
    constructor(public date_payment?: Date, public amount?: number, public order?: Order) { }
}