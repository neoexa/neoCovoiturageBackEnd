// Acces service User

var serviceUsers = require('../services/users.service')

// contexte

_this = this


exports.authenticate = async function(req, res){

    try{

        var user = {
            username: req.body.username,
            password: req.body.password
        }
    
    
        var authUser = await serviceUsers.authenticate(user);
        
        // Return success 
        
        return res.status(200).json({status: 200, data: authUser, message: "Connecté via controll"});
        
    }catch(e){
    
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.register = async function(req, res){

    try{

        var user = {
            username: req.body.username,
            password: req.body.password
        }
    
    
        var regUser = await serviceUsers.register(user);
        
        // Return success 
        
        return res.status(200).json({status: 200, data: authe, message: "register via controll réussi"});
        
    }catch(e){
    
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.getConnectedUser = async function(req, res){

    try{
    
        if(!req.user.sub){
            return res.status(400).json({status: 400., message: "non connecté"})
        }
        
        var _id = req.body.sub;

        var connectedUser = await serviceUsers.getUserById(_id);
        
        // Return success 
        
        return res.status(200).json({status: 200, data: connectedUser, message: "on l'a eu"});
        
    }catch(e){
    
        return res.status(400).json({status: 400, message: e.message});
        
    }
}
 
//get all users

//delete user

//update user

 
