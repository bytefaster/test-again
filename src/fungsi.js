function outer(a, b, c) {
  function inner() {
    return a + b + c;
  }
  return inner();
}

module.exports = { outer };
