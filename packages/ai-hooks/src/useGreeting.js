const { generateGreeting } = require('@tw/ai-libs');

function useGreeting(name) {
  return generateGreeting(name);
}

module.exports = {
  useGreeting,
};
