const express = require('express');

const Resources = require('./resourcesModel')

const router = express.Router();


// =========== GET Resources ===========
router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(() => {
            res.status(500).json({ message: "Failed to get resources." })
        })
})

// =========== GET Resource by id ===========
router.get("/:id", (req, res) => {
    Resources.getResourceById(req.params.id)
      .then((resource) => {
        if (resource) {
          res.status(200).json(resource);
        } else {
          res.status(404).json({ message: "resource not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "unable to find resource", err });
      });
  });

// =========== POST Resources ===========
router.post('/', (req, res) => {
    Resources.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(() => {
            res.status(500).json({ message: "Failed to add resource" })
        })
})


module.exports = router