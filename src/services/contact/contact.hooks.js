

const contact = require('../../hooks/contact');

module.exports = {
  before: {
    all: [],
    find: [contact()],
    get: [],
    create: [contact()],
    update: [contact()],
    patch: [contact()],
    remove: [contact()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
