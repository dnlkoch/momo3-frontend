/**
 * ToGerman Button
 *
 * @class SHOGun.client.view.button.translation.ToGerman
 */
Ext.define('SHOGun.client.view.button.translation.ToGerman', {
    extend: 'Ext.Button',
    xtype: 'shogun-translation-de-button',
    requires: [
        'Ext.app.ViewModel',

        'SHOGun.client.view.button.TranslationController',
        'SHOGun.client.view.button.TranslationModel'
    ],

    controller: 'button.translation',

    viewModel: 'button.translation',

    iconCls: 'trans-de',

    scale: 'small',

    /**
     * Check if application default language set to german
     */
    isDefaultLanguage: true,

    /**
     *
     */
    bind: {
        tooltip: '{tooltipDe}'
    },

    /**
     *
     */
    listeners: {
        click: 'onClick',
        afterrender: 'onAfterRender'
    },

    /**
     *
     */
    constructor: function(cfg) {
        var me = this;
        me.callParent([cfg]);

        var viewModel = me.getViewModel();
        viewModel.set('translateTo', viewModel.get('languageCodeDe'));
    }

});
