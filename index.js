const express = require('express');
const port = 3000;
const dbConnection = require('./connectDb');
const bodyParser = require('body-parser');
var app = express();
const routes = require("./routes");

app.use(express.json());

dbConnection.connect(function(err) {
    if (!err){
      console.log ("Database is connected!!");
    } else{
      console.log ("Database connect error");
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

// exports = module.exports = app;
  
// // let routes = require('./api/routes');
// // routes(app);

// // post AI
// dbConnection.query('SELECT * FROM unihack22.course', (err, response) => {
//     if (err) throw err;
//     console.log(response);
// })

// dbConnection.query('INSERT INTO unihack22.data_ai (hand_up, time, date, room_number) VALUES (' + '3, "9:00", 20220707, 4)')
routes(app);

app.listen(port, function(){
    console.log('Node server running @ http://localhost:' + port)
});