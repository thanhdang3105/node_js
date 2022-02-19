const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose)


const Schema = mongoose.Schema;

const Course = new Schema({
  _id: {type: Number,},
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
  _id: false,
  timestamps: true,
});

//Add plugin
mongoose.plugin(slug)

Course.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true,
})

Course.plugin(AutoIncrement)

module.exports = mongoose.model('Courses', Course);