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