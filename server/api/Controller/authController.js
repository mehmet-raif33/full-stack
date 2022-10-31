const UserModel = require("../Model/userModel");
require('dotenv').config();
const jwt_code = process.env.JWT_NAME;
const jwt = require('jsonwebtoken')

// --------------- THIS METHOD IS FILTERED THE REQUEST AND CHANGED TO END ---------------------------------

const signInSignUp = async (req, res) => {
  console.log(req.body.sendState);
  if (req.body.sendState === "login") {
    login(req, res);
  } else if (req.body.sendState === "register") {
    register(req, res);
  } else if (req.body.sendState === "userHere") {
    userHere(req, res);
  }
};

// THIS METHOD IS FOR THE LOGIN LOGIC.

const login = async (req, res) => {
  console.log("login fonksiyonu çalışıyor");
  await UserModel.findOne({ mail: req.body.mail, password: req.body.password })
    .then( async (person) => {
      if(person){
        const token = await jwt.sign({mail: req.body.mail}, jwt_code)
        const realToken = 'Asade ' + token;
        const newUser = {
          statecode: 1,
          responseType: "login",
          jwt: realToken,
          username: person.username,
          name: person.name,
          surname: person.surname,
          mail: person.mail,
          password: person.password,
          imgUrl: person.imgUrl
        };
        console.log(newUser)
        return res.json(newUser);
      } else {
        return res.json({ statecode: 0, responseType: "login", messa:'sadad' })
      }
    })
};

// THIS METHOD IS FOR THE REGISTER LOGIC.

// REGISTER METHOD
const register = async (req, res) => {
  console.log("register");
  console.log(req.body);
  await UserModel.findOne({ username: req.body.username }).then(
    async (person) => {
      console.log(person);
      if (person === null) {
        await UserModel.findOne({ mail: req.body.mail }).then(async(otherPerson) => {
          console.log(otherPerson);
          if (otherPerson === null) {
            const newUser = {
              username: req.body.username,
              name: req.body.name,
              surname: req.body.surname,
              mail: req.body.mail,
              password: req.body.password,
              imgUrl: req.body.imgUrl
            };
            const User = new UserModel(newUser);
            await User.save();
            const token = jwt.sign({mail: req.body.mail}, jwt_code)
            const realToken = 'Asade ' + token;
            return res.json({
              statecode: 1,
              jwt: realToken,
              responseType: "register",
              username: newUser.username,
              name: newUser.name,
              surname: newUser.surname,
              mail: newUser.mail,
              password: newUser.password,
              imgUrl: newUser.imgUrl,
            });
          }
          return res.json({
            statecode: 0,
            responseType: "register",
            errorCase: 'mail',
            message: "This mail have already used for another guy!!",
          });
        });
      } else {
          return res.json({
            statecode: 0,
            responseType: "register",
            errorCase: 'username',
            message: "This username have already used for another guy!!",
          });
      }
    }
  );
};
 
// THIS METHOD IS FOR THE UX.

const userHere = async (req,  res) => {
  console.log('userHere is working now')
    await UserModel.findOne({mail: req.body.tokenMail}).then((human) => {
      console.log(human)
      if (human === null) {
        return res.json({ message: "You are a coward!!" });
        console.log("human null'a eşit")
      } else {
        let newUser = {
          responseType: "userHere",
          username: human.username,
          name: human.name,
          surname: human.surname,
          mail: human.mail,
          password: human.password,
          imgUrl: human.imgUrl,
        };
        console.log("UserInfo sended!!");
        return res.json(newUser);
      }
  }).catch((err) => {
    console.log('catch is working now' + err)
    return res.json({
      message:err
    });
  })
  
};

// ----------------------------------------------------------------------------

const allAuthMethods = {
  signInSignUp,
};

module.exports = allAuthMethods;
