import { ServiceProvider } from "./ServiceProvider";
import { User } from "./User";

export class Enquire {
    constructor(public event_date?: Date, public user?: User, public servicepro?: ServiceProvider, public is_active?: boolean) { }
}