var recipes = {
  ingredients: 'amount'
}

function updateObjectWithKeyAndValue(obj, ingredients, amount) {
  return Object.assign({}, obj, {[ingredients]: amount})
}
