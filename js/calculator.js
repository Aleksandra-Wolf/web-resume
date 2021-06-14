const technologiesSelect = document.querySelector('#calc-form-tech');

const technologiesMultiSelect = new Choices(technologiesSelect, {
  allowSearch: false,
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  removeItems: true,
  removeItemButton: true,
  editItems: false,
  duplicateItemsAllowed: false,
  delimiter: ',',
  paste: true,
  searchEnabled: false,
  searchChoices: true,
  searchResultLimit: -1,
  position: 'auto',
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  noChoicesText: 'No available options',
  itemSelectText: 'Click to select',
  classNames: {
    containerInner: 'choices__inner tech-input-container',
    input: 'choices__input',
  },
});

calculateSum();

const calculatorForm = document.querySelector('.calc-form');

calculatorForm.addEventListener('submit', function (event) {
  event.preventDefault();
  calculateSum();
});

function calculateSum() {
  //Selectors

  const webtypeSelect = document.querySelector('#calc-form-web-type');
  const cartSelect = document.querySelector('#form-item-cart input:checked');
  const receptionSelect = document.querySelector(
    '#form-item-reception input:checked',
  );

  //Values
  const webtypeValue = extractPriceFromValue(webtypeSelect.value);
  const techValue = getTechSum(technologiesMultiSelect.getValue());
  const cartValue = convertCartOptionToPrice(cartSelect.value);
  const receptionValue = convertRecOptionToPrice(receptionSelect.value);

  const priceOutput = webtypeValue + techValue + cartValue + receptionValue;
  renderSum(priceOutput);
}

//Prices

function extractPriceFromValue(str) {
  const price = str.match(/:\d+/);
  if (price) {
    return Number(price[0].slice(1)) || 0;
  }
  return 0;
}

function getTechSum(techArr) {
  let totalSum = 0;
  techArr.forEach(function (tech) {
    totalSum = totalSum + extractPriceFromValue(tech.value);
  });
  return totalSum;
}

function convertCartOptionToPrice(option) {
  if (option === 'yes') {
    return 300;
  }
  return 0;
}

function convertRecOptionToPrice(option) {
  if (option === 'yes') {
    return 500;
  }
  return 0;
}

//Output price

function renderSum(sum) {
  const costElement = document.querySelector('.calc-form-output');
  costElement.textContent = 'Calculating...';
  setTimeout(function () {
    costElement.textContent = '$' + sum;
  }, 1000);
}
