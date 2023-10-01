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

// get transections
router.get('/get-transection', getAllTransection)