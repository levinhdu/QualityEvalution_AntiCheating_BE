const User = require("../../config/index");

class testController{
    async getdata(req,res,next){
        const snapshot = await User.get();
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.send(list);
    }
    async create(req,res,next){
        const file = req.file;
        console.log(file.firebaseUrl);
        const data = await req.body;
        data.image = file.firebaseUrl;
        User.add({ data });
        res.send({ msg: "User Added" });
    }
    
}

module.exports = new testController()