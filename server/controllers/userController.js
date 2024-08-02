import User from "../models/userModel.js";

export const addUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    await newUser.save();
    res.status(201).json("User added!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

export const getUsers = async (req, res) => {
  
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};
