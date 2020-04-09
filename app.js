/** Budget Controller
 *
 */
const budgetController = (function () {
  //do something
})();

/** UI Controller
 *
 */
const userInterfaceController = (function () {
  const DOMstrings = {
    inputType: ".add__type",
    inputDesc: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  };

  return {
    getInput() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
        description: document.querySelector(DOMstrings.inputDesc).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings() {
      return DOMstrings;
    },
  };
})();

/** Global App Controller
 *
 */
const appController = (function (budgetCtrl, UICrtl) {
  const DOM = UICrtl.getDOMstrings();

  const controllerAddItem = () => {
    //1. Get the filed input data
    const input = UICrtl.getInput();
    console.log(input);

    //2. Add the item to the budget controller
    //Add the new item to the User Interface
    //Calculate the budget
    //Display the budget on the User Interface
  };

  //grab the button
  document
    .querySelector(DOM.inputBtn)
    .addEventListener("click", controllerAddItem);

  document.addEventListener("keypress", (event) => {
    //check if the user pressed the return key (enter)
    if (event.keyCode === 13) {
      controllerAddItem();
    }
  });
})(budgetController, userInterfaceController);
