const { journalModel } = require('../models/journalSchema');

// Get all journals
const getJournals = async (req, res) => {
  try {
    const journals = await journalModel.find({});
    return res.status(200).json({ error: false, journals });
  } catch (e) {
    return res.status(500).json({ error: true, message: e.message });
  }
};

// Get journal by ID
const getJournalbyId = async (req, res) => {
  try {
    const id = req.body.id;
    console.log(id);
    const journal = await journalModel.findOne({ _id: id });
    return res.status(200).json({ error: false, message: journal });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};

// Get user's journals
const getUserJournal = async (req, res) => {
  try {
    const journals = await journalModel.find({ userName: req.user.userName });
    return res.status(200).json({ error: false, message: journals });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};

// Add or update a journal
const addJournal = async (req, res) => {
  try {
    const { id, title, description, journalContent, author } = req.body;
    const userName = req.user.userName;
    let existingJournal;
    const imageFile = req.file ? req.file.path : null;
    const image = imageFile ? `${process.env.BACKEND_URL}/${imageFile}` : null;
    console.log(image);
    if (id) {
      existingJournal = await journalModel.findById(id);
    }
    if (existingJournal) {
      existingJournal.title = title;
      existingJournal.description = description;
      existingJournal.journalContent = journalContent;
      if (image) {
        existingJournal.image = image;
      }
      existingJournal.author = author;
      await existingJournal.save();
      return res.status(200).json({ error: false, message: "Journal Updated" });
    } else {
      await journalModel.create({
        title,
        description,
        journalContent,
        author,
        userName,
        image,
      });
      return res.status(200).json({ error: false, message: "Journal Added" });
    }
  } catch (err) {
    return res.status(500).json({ error: true, message: err.message });
  }
};

// Update a journal
const updateJournal = async (req, res) => {
  try {
    const username = req.body.userName;
    const title = req.body.title;
    const description = req.body.description;
    const journalContent = req.body.journalContent;
    const image = req.file ? req.file.path : null;
    const author = req.body.author;

    const updateFields = {
      description,
      journalContent,
      author,
    };

    if (image) {
      updateFields.image = `${process.env.BACKEND_URL}/${image}`;
    }

    await journalModel.updateOne({ userName: username, title: title }, updateFields);
    res.status(200).json({ error: false, message: "Journal Updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: err.message });
  }
};

// Delete a journal
const deleteJournal = async (req, res) => {
  const userName = req.body.userName;
  const title = req.body.title;
  try {
    const doc = await journalModel.deleteOne({ userName: userName, title: title });
    return res.status(200).json({ error: false, message: "Successfully deleted" });
  } catch (err) {
    return res.status(404).json({ error: true, message: "Deletion failed" });
  }
};

//Like a journal
const likeJournal = async (req, res) => {
  try {
    const journal = await journalModel.findById(req.params.id);
    if (!journal) {
      return res.status(404).json({ error: true, message: 'Journal not found' });
    }

    journal.likes += 1;
    journal.views += 1; // Increment views when liked
    await journal.save();

    res.json({ error: false, journal });
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

module.exports = {
  addJournal,
  getJournals,
  getUserJournal,
  getJournalbyId,
  updateJournal,
  deleteJournal,
  likeJournal,
};
