/**
 * Map Component
 *
 */
Ext.define('SHOGun.client.view.component.Map', {
    extend: 'GeoExt.component.Map',
    xtype: 'shogun-component-map',

    requires: [
        'BasiGX.util.Layer',
        'BasiGX.util.Map',

        'SHOGun.client.view.component.MapController',
        'SHOGun.client.view.component.MapModel',

        'SHOGun.client.plugin.Hover'
    ],

    controller: 'component.map',

    viewModel: 'component.map',

    inheritableStatics: {
        guess: function(){
            return BasiGX.util.Map.getMapComponent('shogun-component-map');
        }
    },

    plugins: [{
        ptype: 'shogun-client-hover'
    }],

    listeners: {
        hoverfeaturesclick: 'onHoverFeatureClicked'
    },

    initComponent: function() {
        var me = this;
        var ctrl = me.getController();

        ctrl.setMap();

        me.callParent(arguments);

    }

});
