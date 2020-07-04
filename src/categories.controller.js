(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject=['MenuDataService','categoriesResult'];


function CategoriesListController (MenuDataService, categoriesResult) {
  var $ctrl = this;
  $ctrl.categoriesResult = categoriesResult;

};



})();
