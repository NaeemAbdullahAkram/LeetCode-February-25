
const getPattern = (word) => {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    result += word.indexOf(word[i]);
  }
  return result;
};

var findAndReplacePattern = function(words, pattern) {
  const p = getPattern(pattern);
  return words.filter(word => getPattern(word) === p);
};