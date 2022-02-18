const Course = require('../models/Course')

const {
    mongoosetoObject
} = require('../../util/mongoose')
const {
    renderSync
} = require('node-sass')

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
            .then(course => res.render('course/edit', {
                course: mongoosetoObject(course),
            }))
            .catch(next)
    }

    //[PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({
                _id: req.params.id
            }, req.body)
            .then(() => {
                res.redirect('/me/stored/courses')
            })
            .catch(next)
    }

    //[Delete] /course/:id
    remove(req, res, next) {
        Course.delete({
                _id: req.params.id
            })
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
    }

    //[Delete] /course/:id
    removeMany(req, res, next) {
        switch (req.body.actions) {
            case 'delete':
                Course.delete({
                        _id: { $in: req.body.courseIds }
                    })
                    .then(() => {
                        res.redirect('back')
                    })
                    .catch(next)
                break
            default :
                    res.json({message: 'Actions Invalid'})
                    break
        }

    }

    //[Delete] /course/:id
    delete(req, res, next) {
        Course.deleteOne({
                _id: req.params.id
            })
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
    }

    //[Patch]] /course/:id/restore
    restore(req, res, next) {
        Course.restore({
                _id: req.params.id
            })
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
    }


    //[Post] /course/store
    store(req, res, next) {
        const formData = {
            ...req.body
        }
        formData.image = `http://img.youtube.com/vi/${req.body.video_id}/sddefault.jpg`
        const course = new Course(formData)
        course.save(err => {
            if (err) return next
            res.redirect('/me/stored/courses')
        })
    }
}

module.exports = new CourseController;
