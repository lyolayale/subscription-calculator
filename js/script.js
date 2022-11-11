/*
- Program: Subscription Calculator
- Date: 2022-10-30
 */

// ====== variables ========

var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

// ========== event Listeners ========

// subscription type
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

// subscription duration
subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
});

// ===== functions =====

// update the subscription infomation
var updateSubscriptionDiv = function () {
  var monthlyCost = 5;

  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }

  var total = (subDuration * monthlyCost).toFixed(2);

  result.innerText = `You have chosen the subscription plan: ${subType.toUpperCase()} at a monthly cost of: $${monthlyCost}. \nThis plan is for the length of ${subDuration} ${
    subDuration === 1 ? "month." : "months."
  }\n Your total cost is: $${total}`;
};
