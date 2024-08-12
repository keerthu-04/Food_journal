const { addJournal, getJournals, getUserJournal, getJournalbyId, updateJournal, deleteJournal, likeJournal } = require('../controllers/journalController');
const multer = require('multer');
const router = require('express').Router();
const { checkUser } = require('../middlewares/auth');
const { categoriesFeedback } = require('../controllers/llmController');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  }
});

const uploads = multer({ storage: storage });

router.post('/uploads', checkUser, uploads.single('image'), addJournal);
router.get('/getJournals', checkUser, getJournals);
router.get('/getUserJournal', checkUser, getUserJournal);
router.post('/getJournalbyId', checkUser, getJournalbyId);
router.patch('/updateJournal', checkUser, uploads.single('image'), updateJournal);
router.post('/deleteJournal', checkUser, deleteJournal);
router.post('/generateblog', checkUser, categoriesFeedback);

// Add the route for liking a journal
router.post('/like/:id', checkUser, likeJournal);

module.exports = router;
