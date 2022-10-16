const UserModel = require('../Model/userModel')

// --------------- THIS METHOD IS FILTER THE REQUEST AND CHANGE TO END ---------------------------------

const signInSignUp = async (req, res) => {
    console.log(req.body.sendState)
    if( req.body.sendState === 'login') {
        console.log('login')
        UserModel.findOne({mail:req.body.mail,password: req.body.password})
        .then((person) => {
            const newUser = {
                responseType: 'login',
                username: person.username,
                name: person.name,
                surname: person.surname,
                mail: person.mail,
                password: person.password,
                imgUrl: person.imgUrl
            }
            return res.json(newUser)
        }).catch((err) => {
            console.log(err)
        })
    }else{
        console.log('register')
        const isHere = UserModel.exists({mail:req.body.mail})
        if (isHere){
            return res.json({message:'This mail already use for another user.'})
        }
            const newUser = {
                username: req.body.username,
                name: req.body.name,
                surname: req.body.surname,
                mail: req.body.mail,
                password: req.body.password,
                imgUrl: req.body.imgUrl
            }
            const User = await new UserModel(newUser);
            return res.json(User)
        
    }
}

// ----------------------------------------------------------------------------

const allAuthMethods = {
    signInSignUp
}

module.exports = allAuthMethods