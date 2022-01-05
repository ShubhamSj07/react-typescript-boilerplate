module.exports = {
  "*.{ts,tsx}": filenames => ["yarn run format:fix", "yarn run validate"],
};
