const userService = require('../service/userservice');

exports.deleteUser = async function(req,res){
    try{
        const id = req.params.id;
        await userService.deleteById(id)
        res.status(200).json({
            status: true,
            message: "User deleted successfully"
        });
    }
    catch(error){
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

exports.getAllUsers = async function(req,res){
    const data = await userService.getAllUsers();
    try{
        res.status(200).json({
            status: true,
            message: "Users fetched successfully",
            data: data
        })
    }
    catch(error){
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}

exports.updateUser = async function(req, res){
    try{
        const payload = req.body;
        await userService.updateUser(payload);
        res.status(200).json({
            status: true,
            message: "Updated successfully"
        })
    }
    catch(error){
        res.status(400).json({
            status: false,
            message: error.message
        })
    }
}