const bcrypt = require('bcrypt');
const User = require("../models/User");

exports.signup = async (req, res) => {
    try {

        const { username, name, email, password, role } = req.body;

        const userFind = await User.findOne({ email });
        if (userFind) {
            return res.status(400).json({
                success: false,
                message: "Email Already Exist",
            });
        }

        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                message: "Error in hasing password",
            });
        }

        const createUser = await User.create({
            username: username,
            name: name,
            email: email,
            password: password,
            role: role
        });

        return res.status(200).json({
            success: true,
            message: "Sign up Successfully"
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error in Signup",
            error: error
        });
    }
}