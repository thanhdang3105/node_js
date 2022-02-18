const Course = require('../models/Course')

const {mutipleMongoosetoObject} = require('../../util/mongoose')

class SiteController {

    //[Get] /news
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongoosetoObject(courses),
                })
            })
            .catch(next)

        // res.json({
        //     name: ' test'
        // })
        // res.render('home')
    }

    //[Get] /news/:slug
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController;
