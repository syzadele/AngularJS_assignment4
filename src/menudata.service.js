(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject=['$http', 'ApiBasePath'];
function MenuDataService ($http, ApiBasePath) {
  var menuDataServie = this;

  this.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function(result) {
      //console.log("result.data : " + JSON.stringify(result.data));
      return result.data;
    });

    return response;
  };

  this.getItemsForCategory = function (categoryShortName) {
    console.log("use service");
    var reponse = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
          category : categoryShortName
      }
    }).then(function(result) {
      console.log("result.data.menu_items : " + JSON.stringify(result.data.menu_items));
      return result.data.menu_items;
    });
    return reponse;
  };

}


})();
