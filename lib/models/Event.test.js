const mongoose = require('mongoose');
const Event = require('./Event');

describe('Event model', () => {
  it('has a required recipeId', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.recipeId.message).toEqual('Path `recipeId` is required.');
  });

  it('has a required dateOfEvent', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.dateOfEvent.message).toEqual('Path `dateOfEvent` is required.');
  });

  it('has a required rating', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` is required.');
  });

  it('has a rating 0 or above', () => {
    const event = new Event({
      rating: -1
    });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (-1) is less than minimum allowed value (0).');
  });

  it('has a rating 5 or below', () => {
    const event = new Event({
      rating: 6
    });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (6) is more than maximum allowed value (5).');
  });

  it('has a day get virtual', () => {
    const event = new Event({
      recipeId: mongoose.Schema.Types.ObjectId,
      dateOfEvent: new Date(),
      rating: 5
    });

    expect(event.day).toEqual(12);
  });

  it('has a day set virtual', () => {
    const event = new Event({
      recipeId: mongoose.Schema.Types.ObjectId,
      dateOfEvent: new Date(),
      rating: 5
    });

    event.day = 11;

    expect(event.day).toEqual(11);
  });

  it('has a month get virtual', () => {
    const event = new Event({
      recipeId: mongoose.Schema.Types.ObjectId,
      dateOfEvent: new Date(),
      rating: 5
    });

    expect(event.month).toEqual('December');
  });

  it('has a month set virtual with month as string', () => {
    const event = new Event({
      recipeId: mongoose.Schema.Types.ObjectId,
      dateOfEvent: new Date(),
      rating: 5
    });

    event.month = 'November';

    expect(event.month).toEqual('November');
  });

  it('has a month set virtual with month as number', () => {
    const event = new Event({
      recipeId: mongoose.Schema.Types.ObjectId,
      dateOfEvent: new Date(),
      rating: 5
    });

    event.month = 11;

    expect(event.month).toEqual('November');
  });
});
