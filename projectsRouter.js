const express = require('express');

const db = require('./data/helpers/projectModel.js');

const router = express.Router();

// endpoints 
// get all projects
router.get('/', (req, res) => {
	db
		.get()
		.then((projects) => {
			res.status(200).json(projects);
		})
		.catch((err) => res.status(500).json({ error: err }));
});


module.exports = router;