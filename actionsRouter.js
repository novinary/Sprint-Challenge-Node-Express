const express = require('express');

const db = require('./data/helpers/actionModel.js');

const router = express.Router();

// endpoints 
// get all actions
router.get('/', (req, res) => {
    db
        .get()
        .then((actions) => {
            res.status(200).json(actions);
        })
        .catch((err) => res.status(500).json({ error: err }));
});


// get actions by id
router.get('/:id', (req, res) => {
    const id = req.params.id;

    db
        .get(id)
        .then((actions) => {
            if (!actions) {
                res.status(404).json({ error: 'Action not found' });
            } else {
                res.status(200).json(actions);
            }
        })
        .catch((err) => res.status(500).json({ error: err }));
});

// post/insert a new action
router.post('/', (req, res) => {
    const action = req.body;
    if (action.project_id && action.description && action.notes) {
        db
            .get(action.project_id)
            .then((projects) => {
                if (projects) {
                    db
                        .insert(action)
                        .then((action) => {
                            res.status(201).json(action);
                        })
                        .catch(() => {
                            res.status(500).json({
                                error: 'Error saving action to the database.'
                            });
                        });
                } else {
                    res.status(404).json({ message: 'This project does not exist.' });
                }
            })
            .catch(() => {
                res.status(404).json({
                    error:
                        'Project using this action ID does not exist.'
                });
            });
    } else {
        res.status(400).json({ error: 'Please provide projectid, description and notes' });
    }
});

// delete an action
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db
        .remove(id)
        .then((action) => {
            if (action) {
                res.status(200).json(action);
            } else {
                res.status(404).json({ error: 'This action id does not exist' });
            }
        })
        .catch((err) => res.status(500).json({ error: err }));
});

// put/update an action
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    db
        .update(id, changes)
        .then((updated) => {
            if (updated) {
                res.status(200).json(updated);
            } else {
                res.status(404).json({ error: 'The specified action id does not exist' });
            }
        })
        .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
