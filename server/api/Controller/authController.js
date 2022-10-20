const UserModel = require("../Model/userModel");

// --------------- THIS METHOD IS FILTERED THE REQUEST AND CHANGED TO END ---------------------------------

const signInSignUp = async (req, res) => {
  console.log(req.body.sendState);
  if (req.body.sendState === "login") {
    login(req, res);
  } else if (req.body.sendState === "register") {
    register(req, res);
  } else if (req.body.requestType === "userHere") {
    userHere(req, res);
  }
};

// THIS METHOD IS FOR THE LOGIN LOGIC.

const login = (req, res) => {
  console.log("login");
  UserModel.findOne({ mail: req.body.mail, password: req.body.password })
    .then((person) => {
      const newUser = {
        statecode: 1,
        responseType: "login",
        username: person.username,
        name: person.name,
        surname: person.surname,
        mail: person.mail,
        password: person.password,
        imgUrl: person.imgUrl,
      };
      return res.json(newUser);
    })
    .catch((err) => {
      return res.json({ statecode: 0, responseType: "login" });
    });
};

// THIS METHOD IS FOR THE REGISTER LOGIC.

const register = async (req, res) => {
  console.log("register");
  console.log(req.body);
  await UserModel.findOne({ username: req.body.username }).then(
    async (person) => {
      console.log(person);
      if (person === null) {
        await UserModel.findOne({ mail: req.body.mail }).then((otherPerson) => {
            if (otherPerson === null) {
                const newUser = {
                    username: req.body.username,
                    name: req.body.name,
                    surname: req.body.surname,
                    mail: req.body.mail,
                    password: req.body.password,
                    imgUrl: req.body.imgUrl,
                };
                const User = new UserModel(newUser);
                User.save();
            }    
            return res.json({
                ...newUser,
                statecode: 1,
                responseType: "register",
            });
        });
      }
      return res.json({
        statecode: 0,
        responseType: "register",
        message: "This username have already used for another guy!!",
      });
    } 
  );
};

// THIS METHOD IS FOR THE UX.

const userHere = async (req, res) => {
  console.log(req.body.clientMail);
  await UserModel.findOne({ mail: req.body.clientMail }).then((human) => {
    if (human === null) {
      return res.json({ message: "You are a coward!!" });
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
      return res.json(newUser);
    }
  });
};

// ----------------------------------------------------------------------------

const allAuthMethods = {
  signInSignUp,
};

module.exports = allAuthMethods;
