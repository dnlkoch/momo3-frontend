
Ext.define('SHOGun.view.window.PrintWindow',{
    extend: 'Ext.window.Window',
    xtype: 'shogun-print',

    name: 'print-window',

    requires: [
    ],

    controller: 'window.print',

    viewModel: 'window.print',

    autoScroll: true,

    resizable: false,

    constrainHeader: true,

    bind: {
        title: '{title}'
    },

    /**
     * Items will be set on initialization
     */
    items: []

});
