Ext.define('SHOGun.client.view.toolbar.Header', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'shogun-toolbar-header',

    requires: [
        'SHOGun.client.view.toolbar.HeaderController',
        'SHOGun.client.view.toolbar.HeaderModel'
    ],

    controller: 'toolbar.header',

    viewModel: 'toolbar.header',

    cls: 'viewport-header-headerbar toolbar-btn-shadow',

    height: 64

});