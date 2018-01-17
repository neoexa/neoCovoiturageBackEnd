//acces au service auth
var serviceAuth = require('../services/auth.service')
// contexte

_this = this

exports.login = async function(req, res, next){
    try{
    
        var connexion = await serviceAuth.login({});
                
        return res.status(200).json({status: 200, data: connexion, message: "Connecté"});
        
    }catch(e){
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.logout = async function(req, res, next){
    try{
    
        var deco = await serviceAuth.logout({});
                
        return res.status(200).json({status: 200, data: deco, message: "déco réussi"});
        
        
    }catch(e){
        
        
    }
}
