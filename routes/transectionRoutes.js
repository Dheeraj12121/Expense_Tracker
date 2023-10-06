const express = require('express');
const{
    addTransection,
    getAllTransection,
} = require('../controllers/transectionCtrl')

// router object
const router = express.Router();

// routes
// add transection Post method
router.post('/add-transection', addTransection)
// Edit transection Post method
router.post('/edit-transection', editTransection)
// delete transection Post method
router.post('/delete-transection', deleteTransection)

// get transections
router.post('/get-transection', getAllTransection)

module.exports = router;