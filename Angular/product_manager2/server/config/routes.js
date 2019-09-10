const products = require("./../controllers/products");

module.exports = (app) => {
    app.get("/products", products.getAll);
    app.get("/products/:id", products.getOne);
    app.post("/products", products.create);
    app.put("/products/:id", products.update);
    app.delete("/products/:id", products.delete);
};