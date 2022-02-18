const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')


const Schema = mongoose.Schema;

const Course = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    maxlength: 600
  },
  image: {
    type: String,
    maxlength: 255
  },
  slug: {
    type: String,
    slug: 'name',
    unique: true
  },
  video_id: {
    type: String,
    required: true
  },
  level: {
    type: String,
    maxlength: 255
  },
  deleted: {
    type: Boolean,
  }
}, {
  timestamps: true,
});

//Add plugin
mongoose.plugin(slug)

Course.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true,
})

module.exports = mongoose.model('Courses', Course);