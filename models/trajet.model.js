var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var trajetSchema = new mongoose.Schema({
    depart: String,
    destination: String,
    date: Date,
    prix: String,
    nbrPlaces: String
    
})

trajetSchema.plugin(mongoosePaginate)
const trajet = mongoose.model('trajet', trajetSchema)

module.exports = trajet;