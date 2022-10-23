const jws = require('jsonwebtoken');
const jwt_code = process.env.JWT_NAME;

const jwt_verify = (req, res, next) => {
    if(req.body.sendState === 'userHere'){
        console.log('userHere çalışıyor!!')
        if (req.body.jwt) {
            console.log('jwt çalışıyor.')
            let token = req.body.jwt.split(' ')[1];
            console.log(token);
            jws.verify(token, jwt_code, async (err, user) => {
                if(user){
                    console.log('kullanıcı var')
                    let mail = user.mail;
                    req.body.mail = mail;
                    next();
                } else{
                    return res.json({message:'You are not us!!! '})
                }
            });
        }else {
            res.json({
                message: 'You are not us!!'
            })
        }
    }else {
        next();
    }
}

module.exports = jwt_verify;