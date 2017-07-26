/**
 * LoginLogout Button
 *
 * @class SHOGun.client.view.button.LoginLogout
 */
Ext.define('SHOGun.client.view.button.LoginLogout', {
    extend: 'Ext.Button',
    xtype: 'shogun-login-logout-button',
    requires: [
        'Ext.app.ViewModel',

        'SHOGun.client.view.button.LoginLogoutController',
        'SHOGun.client.view.button.LoginLogoutModel'
    ],

    controller: 'button.loginlogout',

    viewModel: 'button.loginlogout',

    scale: 'small',

    cls: 'delete-focus-bg',

    iconCls: 'x-fa fa-power-off',

    /**
     *
     */
    bind: {
        tooltip: '{tooltip}',
        text: '{text}'
    },

    /**
     *
     */
    listeners: {
        click: 'onClick',
        afterrender: 'setCurrentUserAccountName'
    },

    /**
     *
     */
    constructor: function(cfg) {
        var me = this;

        me.callParent([cfg]);
    }

});
