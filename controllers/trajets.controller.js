// Acces service trajet

var serviceTrajet = require('../services/trajets.service')

// contexte

_this = this


exports.getTrajets = async function(req, res, next){

    // check params ? sinon vals par defaut
    
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var trajets = await serviceTrajet.getTrajets({}, page, limit);
        
        // Return liste trajets (avec http code).
        
        return res.status(200).json({status: 200, data: trajets, message: "trajets reçus"});
        
    }catch(e){
        
            
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createTrajet = async function(req, res, next){

    // RécuP des données reqUEST http

    var trajet = {
        depart: req.body.depart,
        destination: req.body.destination,
        date: req.body.date,
        prix: req.body.prix,
        nbrPlaces: req.body.nbrPlaces
    }

    try{
        // Appel de la fonction create du service avec l'objet des données de la requete http
        var createdTrajet = await serviceTrajet.createTrajet(trajet)
        return res.status(201).json({status: 201, data: createdTrajet, message: "trajet crée NIIICE"})
    }catch(e){
    
        return res.status(400).json({status: 400, message: "hmmm création trajet"});
    }
}

exports.updateTrajet = async function(req, res, next){

    // id est nécessaire pour l'update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "faut un id valide pour update!"})
    }

    var id = req.body._id;

    console.log(req.body)

    var trajet = {
        id,
        depart: req.body.depart,
        destination: req.body.destination,
        date: req.body.date,
        prix: req.body.prix,
        nbrPlaces: req.body.nbrPlaces 
        
    }

    try{
        var updatedTrajet = await serviceTrajet.updateTrajet(trajet)
        return res.status(200).json({status: 200, data: updatedTrajet, message: "update réussi gg"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeTrajet = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await serviceTrajet.deleteTrajet(id)
        return res.status(204).json({status:204, message: "delete réussi naiice"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}