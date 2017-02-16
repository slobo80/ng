angular.
    module('core').
    component('news', {
        templateUrl: 'core/news.template.html',
        controller: ['$http',
            function NewsController($http) {
                var self = this;
                self.orderProp = 'date';

                $http.get('news/news.json').then(function (response) {
                    // console.log(response.data);
                    self.newsList = response.data;
                    self.newsCount = self.newsList.length;
                });
            }]
    });