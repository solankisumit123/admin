
var user = require('../model/usermodel');

exports.insert = async(req,res) => {
    var data = await user.create(req.body);
    res.status(200).json({
        status:"success",
        data
    });
}

exports.get_data = async(req,res) => {
    var data = await user.find();
    res.status(200).json({
        status:"success",
        data
    });
}

exports.delete_data = async(req,res) => {
    var id = req.params.id;
    var data = await user.findByIdAndDelete(id);
    res.status(200).json({
        status:"success",
        
    });
}

exports.updat_data = async(req,res) => {
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:"success",
        
    });
}


