const { Router } = require('express');

const Controller = require('./app/controllers/Controller');

const router = Router();

router.post('/mutants', Controller.mutantVerifier);

router.get('/stats', Controller.statsVerifier);

module.exports = router;
