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
  //do something
})();

/** Global App Controller
 *
 */
const appController = (function (budgetCtrl, UICrtl) {
  //grab the button
  const addBtn = document.querySelector(".add__btn");

  //add the event listener
  addBtn.addEventListener("click", () => {
    /** As soon someone hit the button we have to do the follow steps.
     *
     * Get the filed input data
     * Add the item to the budget controller
     * Add the new item to the User Interface
     * Calculate the budget
     * Display the budget on the User Interface
     *
     */
  });

  document.addEventListener("keypress", (event) => {
    //check if the user pressed the return key (enter)
    if (event.keyCode === 13) {
      //do something when enter is pressed
    }
  });
})(budgetController, userInterfaceController);
