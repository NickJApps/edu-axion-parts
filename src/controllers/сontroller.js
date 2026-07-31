export const catalog = (req, res) => {

    const category = req.params.category;

    res.render("pages/catalog", {
        category
    });

};

