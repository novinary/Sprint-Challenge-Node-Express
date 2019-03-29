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

// get projects by id
router.get('/:id', (req, res) => {
    const id = req.params.id;

    db
        .get(id)
        .then((projects) => {
            if (!projects) {
                res.status(404).json({ error: 'Project not found' });
            } else {
                res.status(200).json(projects);
            }
        })
        .catch((err) => res.status(500).json({ error: err }));
});

// get actions by action id for a specific project 
router.get('/:id/actions', (req, res) => {
    const id = req.params.id;

    db
        .getProjectActions(id)
        .then((projects) => {
            if (!projects) {
                res.status(404).json({ error: 'Project not found' });
            } else {
                res.status(200).json(projects);
            }
        })
        .catch((err) => res.status(500).json({ error: err }));
});

// post/insert a new project
router.post('/', (req, res) => {
	const project = req.body;
	if (!project.name || !project.description) {
		return res
			.status(404)
			.json({ error: 'Please provide name and description.' });
	}
	db
		.insert(project)
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((error) => {
			res.status(500).json({ error: 'Error adding new project to the database.' });
		});
});

// delete a project
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db
        .remove(id)
        .then((project) => {
            if (project) {
                res.json(id);
            } else {
                res.status(404).json({ error: 'This project id does not exist' });
            }
        })
        .catch((err) => res.status(500).json({ error: err }));
});

// put/update a project
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    db.update(id, changes).then((updated) => {
        if (!updated) {
            res.status(400).json({ message: 'The specified project id does not exist' });
        } else {
            res.status(200).json(id);
        }
    });
});

module.exports = router;