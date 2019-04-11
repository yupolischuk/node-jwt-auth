const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!';

/*
  Hash data and validate it
*/
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust');
// }

//******************************************************** */

/*
  Generate hashed salted password
  And compare password with hashed password
*/
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(salt);
//     console.log(hash);
//   });
// });

// var hashedPassword = '$2a$10$Tqt7v9lnabE7GJN.rpKaxeR4yTXl8I6daigH1Ad5QVq4W5ujlwxLW';

// bcrypt.compare(password, hashedPassword, (err, res) => {
//   console.log(res);
// });




//******************************************************** */
/*
 Create JWT and verify it
*/
var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);

