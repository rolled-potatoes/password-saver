const keys = {
  all: ['gist'],
  id(gistId) {
    return [...this.all, gistId];
  },
};

export default keys;
