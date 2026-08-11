export const catalog = (req, res) => {

    const category = req.params.category;
    const config = catalogConfig[category];

    res.render("pages/catalog", {
        category,
        ...config
    });

};


const catalogConfig = {
    brake: {
        title: "Axion Brake Systems",
        description: "Original brake components for European vehicles."
    },

    clutch: {
        title: "Axion Clutch Systems",
        description: "Reliable clutch components for modern vehicles."
    },

    fluid: {
        title: "Axion Brake Fluids",
        description: "High-performance fluids for braking systems."
    },

    tools: {
        title: "Axion Special Tools",
        description: "Professional tools for automotive service."
    }
};
