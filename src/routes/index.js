const express = require('express'),
    router = express.Router(),
    config = require('../envVariables'),
    dispatcherService = require('../service/dispatcher-service');

router.post(config.contextPath + config.endPoint, (req, res) => { dispatcherService.dispatch(req, res); });

router.get(config.contextPath + '/health', (req, res) => dispatcherService.health(req, res));

module.exports = router;
