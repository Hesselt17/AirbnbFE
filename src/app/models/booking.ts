export class booking {
    public id : number;
    public dateTo : string;
    public dateFrom : string;
    public userID : number;
    public propertyID : number;

    constructor() {
     this.id = null;
     this.dateTo = "";
     this.dateFrom = "";
     this.userID = null;
     this.propertyID = null;
    }
}