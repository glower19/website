const AdCount = require('./models/AdCount');
const AdItems = require('./models/AdItems');
const Feedback = require('./models/Feedback');
const LinkItem = require('./models/LinkItem');
class authController {
  async getLinksCategory(req, res) {
    try {
      const { category } = req.body
      const link = await LinkItem.find({
        category
      })
      return res.json(link)
    } catch (e) {
      console.error;
    }
  }
  async setAdCount(req, res) {
    try {
      const { link } = req.body
      const countItem = new AdCount({
        link,
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
      const { start, end, link } = req.body
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
  async setFeedback(req, res) {
    try {
      const { contact, message } = req.body
      const feedbackItem = new Feedback({
        contact,
        date: new Date().toLocaleString(),
        message,

      });
      await feedbackItem.save()
      return res.json({ message: `The feedback saved` })
    } catch (e) {
      console.error;
    }
  }
  async getOneAd(req, res) {
    try {
      const { category } = req.body
      const linkItem = await AdItems.find({
        category
      })
      return res.json(linkItem)
    } catch (e) {
      console.error;
    }
  }
  // async findProducts(req, res) {
  //   try {
  //     const { title,
  //        type,
  //        subtype,
  //        cost,
  //        width,
  //        height,
  //        material,
  //        country,
  //        color,
  //        surface,
  //        images,
  //      } = req.body
  //     const products = await Product.find({
  //       ...(title ? {title} : {}),
  //       ...(type ? {type} : {}),
  //       ...(subtype ? {subtype} : {}),
  //       ...(cost ? {cost} : {}),
  //       ...(width ? {width} : {}),
  //       ...(height ? {height} : {}),
  //       ...(material ? {material} : {}),
  //       ...(country ? {country} : {}),
  //       ...(color ? {color} : {}),
  //       ...(surface ? {surface} : {}),
  //       ...(images ? {images} : {}),
  //     })
  //     return res.json(products)
  //   } catch (e) {
  //     console.error;
  //   }
  // }

}
module.exports = new authController();
