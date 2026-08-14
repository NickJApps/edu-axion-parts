import Repository from "../repository/Repository.js"

export class Service {
    constructor() {
        this.repo = new Repository();
    }

    getProductsByCategory(category) {
        return this.repo.getProductsByCategory(category);
    }
}