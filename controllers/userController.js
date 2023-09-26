const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const updatedFields = {};
    
    if (req.body.name) {
      updatedFields.name = req.body.name;
    }
    
    if (req.body.email) {
      updatedFields.email = req.body.email;
    }
    
    if (req.body.phone) {
      updatedFields.phone = req.body.phone;
    }
    
    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, { new: true });

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
