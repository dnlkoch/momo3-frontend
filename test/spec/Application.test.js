Ext.Loader.syncRequire(['SHOGun.client.Application']);

describe('SHOGun.client.Application', function() {
    describe('Basics', function() {
        it('is defined', function() {
            expect(SHOGun.client.Application).to.not.be(undefined);
        });
    });
});
