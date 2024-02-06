// controllers/userController.js
const db = require("../db");


exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Validate input data
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }
        
        // Create user in the database
        const newUser = await db.User.create({ username, email, password });
        
        // Return success response
        return res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
