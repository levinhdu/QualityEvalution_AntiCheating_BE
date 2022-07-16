const dataRoute = require("./data")

function routes(app){
    app.use('/',dataRoute)
}

module.exports = routes;