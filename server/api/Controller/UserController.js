const UserModel = require('../Model/userModel');

const saveNewPerson = async (req, res) => {
    let newUser = {
        username : req.body.username,
        name: req.body.name,
        surname: req.body.surname,
        mail: req.body.mail,
        password: req.body.password,
        imageData: req.body.imageData,
        description: req.body.description
    }

    let user = await new UserModel(newUser);
    await user.save()
    res.send(newUser)
    
}

module.exports = { saveNewPerson };