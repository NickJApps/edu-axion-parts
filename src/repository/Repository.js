import { brake } from "../db/Brake.js";
import { clutch } from "../db/Clutch.js";
import { fluid } from "../db/Fluid.js";
import { tools } from "../db/Tools.js";

const collections = {
    brake,
    clutch,
    fluid,
    tools
};

export default class Repository {

    getProductsByCategory(category) {
        return collections[category] || [];
    };
}
