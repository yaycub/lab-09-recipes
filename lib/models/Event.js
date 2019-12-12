const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  dateOfEvent: {
    type: Date,
    required: true
  },
  notes: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  }
});

schema.virtual('day')
  .get(function() {
    return this.dateOfEvent.getDate();
  })
  .set(function(val) {
    this.dateOfEvent.setDate(val);
  });

schema.virtual('month')
  .get(function() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const monthIndex = this.dateOfEvent.getMonth();

    return months[monthIndex];
  })
  .set(function(val) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    let monthIndex;
    if(typeof val === 'string'){
      monthIndex = months.indexOf(val);
    } else {
      monthIndex = val - 1;
    }

    this.dateOfEvent.setMonth(monthIndex);
  });

schema.virtual('year').get(() => {
  return this.dateOfEvent.getFullYear();
});

module.exports = mongoose.model('Event', schema);
