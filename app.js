var budgetController = (function () {
  //do something
  const x = 20;

  const add = function (a) {
    return x + a;
  };

  return {
    publicTest: function (b) {
      console.log(add(b));
    },
  };
})();

budgetController.publicTest(5);
