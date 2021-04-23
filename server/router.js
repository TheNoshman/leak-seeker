
const controller = require('./controller.js');
const router = require('express').Router();

// GET REQUEST
// GET ALL - FOR TESTING
router.get('/getallfaults', (req, res) => controller.getFunction(req, res));

// GET SPECIFIC FAULTS
router.get('/search/:reg', (req, res) => controller.getFaultsFromReg(req, res));

// // POST REQUEST
router.post('/addfault', (req, res) => controller.addFault(req, res));

// // PUT (UPDATE) REQUEST
// router.put('/:name/:newValue', (req, res) => controller.updateFunction(req, res));
// router.patch()

// // DELETE REQUEST
// router.delete('/:name', (req, res) => controller.deleteFunction(req, res));


module.exports = router;