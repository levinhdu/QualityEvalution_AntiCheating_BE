const testRoute = require("./test")

function routes(app){
    app.use('/',testRoute)
}

module.exports = routes;