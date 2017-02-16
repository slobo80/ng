angular.
    module('public').
    component('speakers', {
        templateUrl: 'public/speakers.template.html',
        controller: function SpeakersController() {
            this.user = 'world';
        }
    });