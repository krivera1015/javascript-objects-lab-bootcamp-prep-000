var recipes = {
  ingredients: 'amount'
}

function updateObjectWithKeyAndValue(obj, ingredients, amount) {
  return Object.assign({}, obj, {[ingredients]: amount})
}

function destructiveUpdateObjectWithKeyAndValue(obj, ingredients, amount) {
  obj[ingredients] = amount;
  return obj;
}
