const Course = require('../models/Course')

const {
    mongoosetoObject
} = require('../../util/mongoose')
const { renderSync } = require('node-sass')

class CourseController {
    //[Get] /course/:slug
    show(req, res, next) {

        Course.findOne({
                slug: req.params.slug
            })
            .then(course => res.render('course/show', {
                course: mongoosetoObject(course),
            }))
            .catch(next)
    }

    //[Get] /course/create
    create(req, res, next) {
        res.render('course/create')
    }

    //[Get] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => res.render('course/edit',{
            course: mongoosetoObject(course),
        }))
        .catch(next)
    }

    //[PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => {
                res.redirect('/me/stored/courses')
            })
            .catch(next)
    }

    //[Delete] /course/:id
    delete(req, res, next) {
        Course.delete({_id: req.params.id})
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
    }


    //[Post] /course/store
    store(req, res, next) {
        const formData = req.body
        formData.image = `http://img.youtube.com/vi/${req.body.video_id}/sddefault.jpg`
        const course = new Course(formData)
        course.save(err => {
            if(err) return next
            res.redirect('/me/stored/courses')
        })
    }
}

module.exports = new CourseController;
