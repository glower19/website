const Router = require('express');
const router = new Router();
const controller = require('./authController');

router.post('/setLink', controller.setLink);
router.get('/getLinks', controller.getLinks)
router.post('/deleteLink', controller.deleteLink)
router.post('/setAd', controller.setAd)
router.get('/getAds', controller.getAds)
router.post('/getOneAd', controller.getOneAd)
router.post('/deleteAd', controller.deleteAd)
router.post('/setCount', controller.setCount)
router.post('/getCounts', controller.getCounts)
router.get('/getFeedback', controller.getFeedback)
router.post('/deleteFeedback', controller.deleteFeedback)
router.post('/setAdCount', controller.setAdCount)
router.post('/getAdCounts', controller.getAdCounts)











module.exports = router;
