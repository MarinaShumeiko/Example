'use strict';

angular.module('falconUiTest', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html'
            })

        .when('/engage', {
            templateUrl: 'app/engage/engage.html',
            controller: 'EngageCtrl'
        })

        .when('/card', {
            templateUrl: 'components/card/card.html'
        })

        .when('/list', {
            templateUrl: 'components/list/list.html'
        })

        .when('/autosuggest', {
            templateUrl: 'components/autosuggest/autosuggest.html',
            controller: 'AutosuggestCtrl'
        })

        .when('/button', {
            templateUrl: 'components/button/button.html',
            controller: 'ButtonCtrl'
        })

        .otherwise({
            redirectTo: '/'
        });
    });
