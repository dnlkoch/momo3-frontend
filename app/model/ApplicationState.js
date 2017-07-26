Ext.define('SHOGun.client.model.ApplicationState', {
    extend: 'SHOGun.client.model.Base',

    requires: [
        'SHOGun.client.data.identifier.Null'
    ],

    proxy: {
        type: 'rest',
        url: BasiGX.util.Url.getWebProjectBaseUrl() + 'rest/applicationstate',
        headers: BasiGX.util.CSRF.getHeader()
    },

    idProperty: 'token',

    identifier: 'null',

    fields: [{
        name: 'token',
        type: 'string',
        persist: false
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'layers',
        type: 'auto'
    }, {
        name: 'mapView',
        type: 'auto'
    }, {
        name: 'redlining',
        type: 'auto'
    }, {
        name: 'owner',
        type: 'int',
        persist: false
    }, {
        name: 'application',
        type: 'int'
    }]

});
