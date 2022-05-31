export class ResService{
    constructor(public serviceProviderName?:string,public serviceName?:string,public charges?:number,public description?:string){
        this.serviceProviderName=serviceProviderName;
        this.serviceName=serviceName;
        this.charges=charges;
        this.description=description;
    }
}