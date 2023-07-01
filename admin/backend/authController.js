const AdItems = require('./models/AdItems');
const Count = require('./models/Count');
const LinkItem = require('./models/LinkItem');
const Feedback = require('./models/Feedback');
const AdCount = require('./models/AdCount');


class authController {
  async setLink(req, res) {
    try {
      const { image, title, links, category, cities, important } = req.body
      const linkSearch = await LinkItem.findOne({
        title
      })
      if (linkSearch) {
        linkSearch.deleteOne()
      }
      const linkItem = new LinkItem({
        image,
        title,
        links,
        category,
        cities,
        important
      });
      await linkItem.save()
      return res.json({ message: `The link saved` })
    } catch (e) {
      console.error;
    }
  }
  async getLinks(req, res) {
    try {
      const linkItem = await LinkItem.find()
      return res.json(linkItem)
    } catch (e) {
      console.error;
    }
  }
  async deleteLink(req, res) {
    try {
      const { title } = req.body
      const linkItem = await LinkItem.find({
        title
      }).deleteOne()
      return res.json(linkItem)
    } catch (e) {
      console.error;
    }
  }
  async setAd(req, res) {
    try {
      const { image, title, link, category } = req.body
      const ad = await AdItems.findOne({
        link
      })
      if (ad) {
        ad.deleteOne()
      }
      const adIt = new AdItems({
        image,
        category,
        link,
        title,
        date: new Date().toLocaleString(),

      });
      await adIt.save()
      return res.json({ message: `The Ad saved` })
    } catch (e) {
      console.error;
    }
  }
  async getAds(req, res) {
    try {
      const ad = await AdItems.find()
      return res.json(ad)
    } catch (e) {
      console.error;
    }
  }
  async getOneAd(req, res) {
    try {
      const { title } = req.body
      const linkItem = await AdItems.find({
        title
      })
      return res.json(linkItem)
    } catch (e) {
      console.error;
    }
  }
  async deleteAd(req, res) {
    try {
      const { link } = req.body
      const adItem = await AdItems.find({
        link
      }).deleteOne()
      return res.json(adItem)
    } catch (e) {
      console.error;
    }
  }
  async setCount(req, res) {
    try {
      const { title, device } = req.body
      const countItem = new Count({
        title,
        date: Date.now(),
        device,
      });
      await countItem.save()
      return res.json({ message: `The countItem saved` })
    } catch (e) {
      console.error;
    }
  }
  async getCounts(req, res) {
    try {
      const { start, end } = req.body
      const c = await Count.find(
        { date: { $gt: start, $lt: end } }
      )
      return res.json(c)
    } catch (e) {
      console.error;
    }
  }
  async setAdCount(req, res) {
    try {
      const { title } = req.body
      const countItem = new AdCount({
        title,
        date: Date.now(),
      });
      await countItem.save()
      return res.json({ message: `The countItem saved` })
    } catch (e) {
      console.error;
    }
  }
  async getAdCounts(req, res) {
    try {
      const { link, start, end } = req.body
      const c = await AdCount.find(
        {
          link,
          date: { $gt: start, $lt: end }
        }
      )
      return res.json(c)
    } catch (e) {
      console.error;
    }
  }
  async getFeedback(req, res) {
    try {
      const feedbackList = await Feedback.find()
      return res.json(feedbackList)
    } catch (e) {
      console.error;
    }
  }
  async deleteFeedback(req, res) {
    try {
      const { contact } = req.body
      const adItem = await Feedback.find({
        contact
      }).deleteOne()
      return res.json(adItem)
    } catch (e) {
      console.error;
    }
  }
}
module.exports = new authController();
