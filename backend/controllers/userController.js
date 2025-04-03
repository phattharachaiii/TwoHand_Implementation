const User = require("../models/User");

exports.registerUser = async (req, res) => {
    const { username, role } = req.body;
    const newUser = new User({ username, role });
    await newUser.save();
    res.json(newUser);
};
