const jws = require('jsonwebtoken');
const jwt_code = process.env.JWT_NAME;

const jwt_verify = (req, res, next) => {
    if(!req.body.jwt === undefined & !req.body.jwt === null){
        console.log('Autharization çalışıyor!!')
        let token = req.body.jwt.split(' ')[1];
        jws.verify(token, jwt_code, async (err, user) => {
            if(user){
                if( user.mail === req.body.mail ) {
                    console.log('kullanıcı var')
                    next();
                } else {
                    return res.json({message:'You are not us!!! '})
                }
            } else{
                return res.json({
                    message: 'You can not reach to this data!! Cause you are not with us!!'
                });
            }
        });        
    }else {
        return res.json({
            message: 'You have to JWT token!!'
        });
    }
}

module.exports = jwt_verify;