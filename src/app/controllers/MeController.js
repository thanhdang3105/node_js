const Course = require('../models/Course')

const {
    mutipleMongoosetoObject
} = require('../../util/mongoose')

class MeController {


    //[Get] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}),Course.countDocumentsDeleted()])
            .then(([course,deletedCount]) => {
                res.render('me/stored-courses', {
                    course: mutipleMongoosetoObject(course),
                    deletedCount,
                })
            })
            .catch(next)

        // Course.countDocuments()
        //     .then(courseCount => {

        //     })
        //     .catch(next)

        // Course.find({})
        //     .then(course => res.render('me/stored-courses', {
        //         course: mutipleMongoosetoObject(course),
        //     }))
        //     .catch(next)
    }

    //[Get] /course/create
    storedBlog(req, res, next) {
        // res.render('course/create')
    }

    //[Get] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
        .then(course => res.render('me/trash-courses', {
            course: mutipleMongoosetoObject(course),
        }))
        .catch(next)
    }

    //[Post] /course/store
    // store(req, res, next) {
    //     const formData = req.body
    //     formData.image = `http://img.youtube.com/vi/${req.body.video_id}/sddefault.jpg`
    //     const course = new Course(formData)
    //     course.save(err => {
    //         if(err) return handleError(err)
    //         res.redirect('/')
    //     })
    // }
}

module.exports = new MeController;
