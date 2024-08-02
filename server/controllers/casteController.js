import Caste from '../models/casteModel.js';

export const addCasteData = async (req, res) => {
  const newCasteData = new Caste(req.body);

  try {
    await newCasteData.save();
    res.status(201).json("Caste data added!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

export const getCasteData = async (req, res) => {
  try {
    const casteData = await Caste.find();
    res.json(casteData);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};
