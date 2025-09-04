const User = require('./models/User');
const bcrypt = require('bcrypt');
async function makeAdmin(){
    try {
        let user = await User.findOne({email: 'sushil@gmail.com'});
        if(user) {
        } else {

        user = new User();
        user.firstName = "Sushil";
        user.lastName = "Patel";
        user.email = "sushil@gmail.com";
        let encryptedPassword = bcrypt.hashSync('1234', 10);
        user.password = encryptedPassword;
        user.userType = 'Admin';
        await user.save();
        }


    } catch(err) {
        console.log(err);
    }
}
module.exports = makeAdmin;