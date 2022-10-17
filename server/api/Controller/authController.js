const UserModel = require('../Model/userModel')

// --------------- THIS METHOD IS FILTER THE REQUEST AND CHANGE TO END ---------------------------------

const signInSignUp = async (req, res) => {
    console.log(req.body.sendState)
    if( req.body.sendState === 'login') {
        login(req,res);
    }else{
        register(req,res)
    }
}

const login = (req,res) => {
    console.log('login')
    UserModel.findOne({mail:req.body.mail,password: req.body.password})
    .then((person) => {
        const newUser = {
            statecode: 1,
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
        return res.json({statecode:0, responseType: 'login'});
    })
}

const register = (req,res) => {
    console.log('register')
    console.log(req.body)
    UserModel.findOne({mail: req.body.mail, username: req.body.username}, (err, person) => {
        if (err) {
            const newUser = {
                username: req.body.username,
                name: req.body.name,
                surname: req.body.surname,
                mail: req.body.mail,
                password: req.body.password,
                imgUrl: req.body.imgUrl
            }
            const User = new UserModel(newUser);
            User.save();
            return res.json({...newUser, statecode:1, responseType: 'register'})
        } else if(person) {
            let human = person;
            console.log(human);
            return res.json({statecode:0,responseType: 'register'})
        }
    })
}

// ----------------------------------------------------------------------------

const allAuthMethods = {
    signInSignUp
}

module.exports = allAuthMethods