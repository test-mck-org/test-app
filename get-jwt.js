
    
const fs = require('fs');
const jwt = require('jsonwebtoken');

const jwtSecretKey = fs.readFileSync(__dirname+ '/private-key.pem',
        {encoding:'utf8', flag:'r'});

var signOptions = {
    algorithm:  "RS256"   // RSASSA [ "RS256", "RS384", "RS512" ]
};

// console.log("jwtSecretKey",jwtSecretKey);

console.log("Current directory:", __dirname);
let data = {
    iss: 296166,
    iat: Math.floor(Date.now()/1000) - 60,
    exp: Math.floor(Date.now()/1000) + (10 * 60)
}

const token = jwt.sign(data, jwtSecretKey,signOptions);

fs.writeFileSync(__dirname+'/jwt_token', token);
fs.writeFileSync(__dirname+'/jwt_token2', jwtSecretKey);

// console.log("token",token);





    
