const Router = require('express');
const router = new Router();
const controller = require('./authController');

router.post('/getLinks', controller.getLinksCategory)
router.post('/setAdCount', controller.setAdCount)
router.post('/getAdCounts', controller.getAdCounts)
router.post('/setFeedback', controller.setFeedback)
router.post('/getOneAd', controller.getOneAd)

module.exports = router;
