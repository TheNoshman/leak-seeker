
const controller = require('./controller.js');
const router = require('express').Router();

// GET REQUEST
router.get('/', (req, res) => controller.getFunction(req, res));

// // POST REQUEST
router.post('/', (req, res) => controller.postFunction(req, res));

// // PUT (UPDATE) REQUEST
// router.put('/:name/:newValue', (req, res) => controller.updateFunction(req, res));
// // router.patch()

// // DELETE REQUEST
// router.delete('/:name', (req, res) => controller.deleteFunction(req, res));


module.exports = router;