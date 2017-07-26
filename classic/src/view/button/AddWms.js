Ext.define("SHOGun.client.view.button.AddWms", {
    extend: "BasiGX.view.button.AddWms",
    xtype: 'shogun-button-addwms',

    viewModel: {
        data: {
            /* i18n */
            text: null,
            tooltip: '',
            windowTitle: ''
            /* i18n */
        }
    },

    bind: {
        tooltip: '{tooltip}'
    },

    glyph: 'xf278@FontAwesome'

});
