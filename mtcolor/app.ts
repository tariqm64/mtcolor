import { AllModels } from "./models/AllModels";

const express = require('express')
const app = express()
const port = 3000

const allModels = new AllModels();

app.set('view engine', 'vash');

app.use(express.static('static'));

app.get('*', (req, res) => {
    var path = req.path.substring(1);
    if (path.trim() == "")
        path = "index";
    var modelName = (path + "model").toLowerCase();
    var model = new allModels[modelName]();
    var args = req.query;
    for (var prop in args) {
        model[prop] = args[prop];
    }
    if (model.init != undefined)
        model.init();
    res.render(path, model.getRenderedModel());
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
