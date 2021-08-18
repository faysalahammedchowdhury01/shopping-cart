// select elements
const phonePlus = document.getElementById('phone-plus');
const phoneMinus = document.getElementById('phone-minus');
const casePlus = document.getElementById('case-plus');
const caseMinus = document.getElementById('case-minus');
const subTotalElement = document.getElementById('sub-total');
const vatElement = document.getElementById('vat');
const grandTotalElement = document.getElementById('grand-total');

// price and vat
const phonePrice = 1000;
const casePrice = 50;
const vatInPercent = 10;

// functions
function handleQuantity(updateProductName, operator) {
  const updateElement = document.getElementById(
    updateProductName + '-quantity'
  );
  const quantityText = updateElement.value;
  let quantity = parseInt(quantityText);

  if (quantity < 1 && isNaN) {
    quantity = 0;
  }

  if (operator == 'plus') {
    quantity++;
  } else if (operator == 'minus') {
    if (quantity < 1) {
      return quantity;
    }
    quantity--;
  } else {
    quantity = quantity;
  }
  updateElement.value = quantity;
  updateBalance(updateProductName, quantity);
}

function removeItem(itemName) {
  const item = document.getElementById(itemName + '-item');
  updateBalance(itemName, 0, 0);
  item.remove();
}

let phoneTotal = 0;
let caseTotal = 0;
function updateBalance(updateElementName, quantity) {
  const updateElement = document.getElementById(updateElementName + '-total');
  let productTotal = 0;
  if (updateElementName == 'phone') {
    productTotal = phonePrice * quantity;
    phoneTotal = productTotal;
  } else {
    productTotal = casePrice * quantity;
    caseTotal = productTotal;
  }

  updateElement.innerText = productTotal.toFixed(2);
  updateTotal(phoneTotal, caseTotal);
}

function calculateVat(subTotal, vatInPercent) {
  const vat = subTotal / vatInPercent;
  return vat;
}

function updateTotal(phoneTotal, caseTotal) {
  const subTotal = phoneTotal + caseTotal;
  const vatTotal = calculateVat(subTotal, vatInPercent);
  const grandTotal = subTotal + vatTotal;

  subTotalElement.innerText = subTotal.toFixed(2);
  vatElement.innerText = vatTotal.toFixed(2);
  grandTotalElement.innerText = grandTotal.toFixed(2);
}
