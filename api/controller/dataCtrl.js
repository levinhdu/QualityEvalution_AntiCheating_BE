const dbConnection = require('../../connectDb');

class dataCtrl{
    getdata(req,res){
        dbConnection.query('SELECT * FROM unihack22.course', (err, response) => {
                if (err) throw err;
                res.json(response)
                // console.log(response);
            })
    }
    create(req,res){
        let hand_up = req.body.hand_up;
        let time = req.body.time;
        let date = req.body.date;
        let room_number = req.body.room_number;
        dbConnection.query('INSERT INTO unihack22.data_ai (hand_up, time, date, room_number) VALUES (' + hand_up + ',' + time +','+date+','+ '\"' + room_number + '\"' + ')', function(err, response){
            if (err) throw err;
            console.log('update data');
            res.send('create is success');
        })
    }

    getCourse(req, res){
        let nameTeacher = req.params.nameTeacher;
        dbConnection.query('SELECT teacher.fullName, period.Date, course.name_course, course.room, data_ai.time, data_ai.hand_up FROM unihack22.teacher inner join course on course.id_teacher = teacher.id_teacher inner join period on period.id_course = course.id_course inner join data_ai on data_ai.id_period = period.id_period where teacher.fullName = ?', nameTeacher, function(err, response){
            if (err) throw err;
            res.json(response);
        })
    }
}

module.exports = new dataCtrl()