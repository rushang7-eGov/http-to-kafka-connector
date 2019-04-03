const express = require('express'),
    router = express.Router(),
    config = require('../envVariables'),
    dispatcherService = require('../service/dispatcher-service');

router.post(config.endPoint, (req, res) => { dispatcherService.dispatch(req, res); });

router.get('/health', (req, res) => dispatcherService.health(req, res));

module.exports = router;
