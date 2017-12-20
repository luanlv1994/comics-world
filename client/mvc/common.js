/**
 * Created by TamDT on 12/12/2017.
 */
var app = angular.module('myApp', ['ngRoute','ui.router','pascalprecht.translate','ui.select','ui.bootstrap','ngResource','FBAngular']);

app.constant("ADDRESS_BACKEND", "");
app.constant("ADDRESS_OAUTH", "");
app.constant("ADDRESS_SOCKET", "");
app.constant("ADDRESS_PING", "");



app.constant("NO_AUTH_PATH", ['/404', '/500']);
app.constant("FULL_SCREEN_PATH", ['/404', '/500']);


app.constant("STATE_CONFIG", {
    404: {
        isSpecial: true,
        template: 'mvc/view/404.html'
    },
    500: {
        isSpecial: true,
        template: 'mvc/view/500.html'
    },
    'common-home': {
        isSpecial: true,
        template: 'dashboard.html'
    },
    'user': {
        isSpecial: true,
        template: 'mvc/view/user/user.html',
        ctrl:'UserCtrl',
        ctrlUrls:['mvc/controller/user/user-ctrl.js','mvc/controller/user/user-detail-ctrl.js']
    }
});




app.config(function ($stateProvider,$urlRouterProvider,$translateProvider, ADDRESS_BACKEND, ADDRESS_OAUTH, ADDRESS_SOCKET, STATE_CONFIG) {


    $urlRouterProvider.otherwise(function ($injector, $location) {
        $injector.invoke(['$state', function ($state) {
            $state.go('common-home');
        }]);
    });

    //STATE
    for (var statename in STATE_CONFIG) {
        if (STATE_CONFIG.hasOwnProperty(statename)) {
            var config = STATE_CONFIG[statename];
            if (config.isSpecial) {
                var state = {
                    url: ("/" + statename)
                };

                state.templateUrl = config.template;

                if (config.ctrl != null) {
                    state.controller = config.ctrl;

                    if (config.url != null) {
                        state.url = config.url;
                    }
                    if (config.params != null) {
                        state.params = config.params;
                    }
                }
                $stateProvider.state(statename, state);
            } else {
                var stateList = {
                    url: ('/' + statename),
                    templateUrl: 'mvc/view/common/common-category.html',
                    controller: 'CommonCategoryCtrl'
                };

                if (config.listCtrl != null) {
                    stateList.controller = config.listCtrl;
                }
                if (config.listTemplate != null) {
                    stateList.templateUrl = config.listTemplate;
                }

                if (config.isUsePopup) {
                    $stateProvider.state(statename, stateList);
                } else {
                    $stateProvider.state(statename + '-list', stateList);

                    $stateProvider.state(statename + '-detail', {
                        url: ("/" + statename + "/:id"),
                        templateUrl: config.detailTemplate,
                        controller: config.detailCtrl,
                    });
                }
            }
        }



        $translateProvider.preferredLanguage('vi');
        $translateProvider.useStaticFilesLoader({
            prefix: 'message/',
            suffix: '.json'
        });

    }
});