(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
    
        $stateProvider 
            .state('landing', {
                url: '/',
                templateUrl: '/template/landing.html'
            })
            .state('album', {
                url: '/album',
                templateUrl: '/template/album.html'
            })
            .state('collection', {
                url: '/collection',
                templateUrl: '/template/collection.html'
            });
    }
    angular
        .module('blocJams', ['ui.router'])
        .config(config);
})();

