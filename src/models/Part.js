export default class Part{
    constructor(data){
        this.id = data.id;
        this.category = data.category;
        this.partNumber = data.partNumber;
        this.name = data.name;
        this.mark = data.mark;
        this.model = data.model;
        this.year = data.year;
        this.price = data.price;
        this.image = data.image;
    }
}