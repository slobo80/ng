'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Code Camper', function () {

  describe('news', function () {

    beforeEach(function () {
      browser.get('index.html');
    });

    it('should filter the news list as a user types into the search box', function () {
      var newsList = element.all(by.repeater('news in $ctrl.newsList'));
      var query = element(by.model('$ctrl.query'));

      expect(newsList.count()).toBe(3);

      query.sendKeys('speaker');
      expect(newsList.count()).toBe(1);

      query.clear();
      query.sendKeys('registration');
      expect(newsList.count()).toBe(2);
    });

  });

});