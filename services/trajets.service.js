// Service accès au model "trajet"
var Trajet = require('../models/trajet.model')

// sauvegarde contexte
_this = this

// fonctions Async 
exports.getTrajets = async function(query, page, limit){

    // Options mongoose paginate
    var options = {
        page,
        limit
    }
        
    try {
        var trajets = await Trajet.paginate(query, options)
        
        return trajets;

    } catch (e) {

        // return a Error message describing the reason 
        throw Error('Erreur lors Pagination trajets')
    }
}

exports.createTrajet = async function(trajet){
    
    // Creatiion new Mongoose Objet (new du Mongoose)
    var newTrajet = new Trajet({ 
        depart: trajet.depart,
        destination: trajet.destination,
        date: trajet.date,
        prix: trajet.prix,
        nbrPlaces: trajet.nbrPlaces     
    })

    try{
        // sauvegarde trajet
        var trajetsSauvg = await newTrajet.save()
        return trajetsSauvg;
    }catch(e){
           
        throw Error("Erreur creation trajet")
    }
}

exports.updateTrajet = async function(trajet){
    var id = trajet.id

    try{
        
        //recherche du trajet à modif
    
        var oldTrajet = await Trajet.findById(id);
    }catch(e){
        throw Error("Erreur recherche trajet")
    }

    // !existe
    if(!oldTrajet){
        return false;
    }

    console.log(oldTrajet)

    //Edition de l'objet trajet
    
    oldTrajet.depart = trajet.depart,
    oldTrajet.destination = trajet.destination,
    oldTrajet.date = trajet.date,
    oldTrajet.prix = trajet.prix,
    oldTrajet.nbrPlaces = trajet.nbrPlaces
        

    console.log(oldTrajet)

    try{
        var trajetsSauvg = await oldTrajet.save()
        return trajetsSauvg;
    }catch(e){
        throw Error("erreur modif trajet");
    }
}

exports.deleteTrajet = async function(id){
    
    // Delete trajet
    try{
        var deleted = await Trajet.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("peux pas supp")
        }
        return deleted
    }catch(e){
        throw Error("Erreur supression trajet")
    }
}