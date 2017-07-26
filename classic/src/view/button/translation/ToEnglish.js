/**
 * ToEnglish Button
 *
 * @class SHOGun.client.view.button.translations.ToEnglish
 */
Ext.define('SHOGun.client.view.button.translation.ToEnglish', {
    extend: 'Ext.Button',
    xtype: 'shogun-translation-en-button',
    requires: [
        'Ext.app.ViewModel',

        'SHOGun.client.view.button.TranslationController',
        'SHOGun.client.view.button.TranslationModel'
    ],

    controller: 'button.translation',

    viewModel: 'button.translation',

    iconCls: 'trans-en',

    scale: 'small',

    /**
     * Check if application default language set to german
     */
    isDefaultLanguage: null,

    /**
     *
     */
    bind: {
        tooltip: '{tooltipEn}'
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
        viewModel.set('translateTo', viewModel.get('languageCodeEn'));
    }

});
