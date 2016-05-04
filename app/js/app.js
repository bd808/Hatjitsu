/*jslint indent: 2, browser: true */
/*global angular, LobbyCtrl, RoomCtrl */

'use strict';

var basedir = '/hatjitsu';

// Declare app level module which depends on filters, and services
angular.module('pokerApp', ['pokerApp.filters', 'pokerApp.services', 'pokerApp.directives']).
  config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider.when(basedir + '/', { templateUrl: 'partials/lobby.html', controller: LobbyCtrl});
    $routeProvider.when(basedir + '/:roomId', { templateUrl: 'partials/room.html', controller: RoomCtrl});
    $routeProvider.otherwise({redirectTo: basedir + '/'});
  }]);
