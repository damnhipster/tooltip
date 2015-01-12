document.body.innerHTML = __html__['_site/index.html'];

var tooltip = skyComponents['tooltip'];

//tooltip.init(); //live events don't init for karma, so init them here if you need to

describe('tooltip module can ', function () {

    it('sum an array of numbers', function () {

        expect(tooltip.sum([1,2,3])).toBe(6);

    });

});