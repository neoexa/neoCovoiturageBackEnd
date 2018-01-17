// Service accès au model "user"
var User = require('../models/user.model')

// sauvegarde contexte
_this = this

exports.authenticate = async function(user){
    
    var tmpUser = new userInfo({
        username: user.username,
        password: user.password
        
    })

    try {
        var authentification = await tmpUser.paginate(query, options)
        
        return trajets;

    } catch (e) {

        // return a Error message describing the reason 
        throw Error('Erreur lors Pagination trajets')
    }
}