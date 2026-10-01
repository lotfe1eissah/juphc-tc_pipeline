function calculateTax(income) {
  if (typeof income !== 'number' || income < 0) {
    throw new Error('Invalid income');
  }
  if (income <= 10000) {
    return 0;
  } else if (income <= 50000) {
    return (income - 10000) * 0.1;
  } else {
    return 4000 + (income - 50000) * 0.2;
  }
}

module.exports = { calculateTax };