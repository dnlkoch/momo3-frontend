Ext.define('SHOGun.client.view.container.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'BasiGX.*',
        'GeoExt.*',
        'SHOGun.*',
        'Ext.layout.container.Absolute',
        'Ext.layout.container.Border'
    ],

    controller: 'shogun-mainviewport',

    viewModel: {
        type: 'shogun-mainviewport'
    },

    listeners: {
        beforerender: 'getUserBySession',
        afterrender: 'reactOnPermalink'
    },

    initComponent: function() {
        var me = this;
        me.callParent(arguments);
    }
});
