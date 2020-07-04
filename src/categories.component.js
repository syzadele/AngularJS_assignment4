(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/template/component-categories-template.html',
  bindings: {
    categoriesList : '<'
  }
});

})();
