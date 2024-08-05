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
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: "Error in hashing password",
            });
        }

        const createUser = await User.create({
            username: username,
            name: name,
            email: email,
            password: hashedPassword,
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


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required",
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        const trimmedPassword = password.trim();
        const isPasswordValid = await bcrypt.compare(trimmedPassword, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect"
            });
        }


        return res.status(200).json({
            success: true,
            message: "Login Successfully",
            data: user
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error
        });
    }
}
