'use strict';
/*global angular,_*/

var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
  var data;

  $http.get('http://krispypapad.herokuapp.com/fetch_article')
    .then(function (response) {
      data = response.data;
      console.log(data.response);
      $scope.info = data.response;
    });
});