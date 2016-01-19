angular.module('babyfood.services', [])

.factory('User', function() {
  var o = {
    favorites: []
  }

  o.addProductToFavorites = function(product) {
    if (!product) {
      return false;
    }

    // add to favorites array
    o.favorites.unshift(product);
  }

  o.removeProductFromFavorites = function(product, index) {
    if (!product) {
      return false;
    }
    // remove from favorite array
    o.favorites.splice(index, 1);
  }

  return o;
});
