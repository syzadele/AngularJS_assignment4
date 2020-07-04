(function () {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);


RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];

function RoutesConfig ($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');


$stateProvider

.state('home', {
    url:'/',
    templateUrl:'src/template/home.template.html'
})

.state('categories', {
    url:'/categories',
    templateUrl:'src/template/categories-list.html',
    controller: 'CategoriesListController as clController',
    resolve : {
       categoriesResult: ['MenuDataService', function (MenuDataService) {
         return MenuDataService.getAllCategories();
       }]
    }
})

.state('categories.items', {
  url:'/items/{categoryShortName}',
  templateUrl:'src/template/item-detail.html',
  controller:'ItemsController as itemsController',
  resolve:{
    items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
      return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
      .then(function (items) {
        return items;
      });
    }]
  }
});





}


})();
