describe('core', function () {

    // Load the module that contains the `news` component before each test
    beforeEach(module('core'));

    // Test the controller
    describe('controller', function () {
        var $httpBackend, ctrl;

        beforeEach(inject(function ($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('news/news.json')
                .respond([{ text: 'SpeakerregistrationstartsonJune1' }, { text: 'AttendeeregistrationstartsonJuly1' }]);

            ctrl = $componentController('news');
        }));

        it('should create a `news` model with 3 items', function () {
            $httpBackend.flush();
            expect(ctrl.newsList.length).toBe(2);
        });

        it('should set `newsCount` to 3', function () {
            $httpBackend.flush();
            expect(ctrl.newsCount).toBe(2);
        });

        it('should set  `orderProp` to `date`', function () {
            expect(ctrl.orderProp).toBe('date');
        });
    });
});