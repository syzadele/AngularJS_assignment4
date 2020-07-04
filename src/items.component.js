(function () {
  'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl : 'src/template/item-detail-template.html',
  bindings : {
    itemsList : '<'
  }

});

})();
