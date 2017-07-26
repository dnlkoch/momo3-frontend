/* Copyright (c) 2016 terrestris GmbH & Co. KG
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Search Field
 *
 * Used to search in the glorious dataset of OSM combined with a WFS search
 * searching through configurable layers. Extends the
 * `BasiGX.view.form.field.MultiSearchCombo` class.
 *
 * @class SHOGun.client.view.form.field.MultiSearchCombo
 */
Ext.define("SHOGun.client.view.form.field.MultiSearchCombo", {
    extend: 'BasiGX.view.form.field.MultiSearchCombo',
    xtype: "shogun-form-field-multisearch",


    viewModel: {
        data: {
            /*i18n*/
            emptyText: "",
            settingsWindowTitle: ""
            /*i18n*/
        }
    },

    config: {

        gazetteerGrid: "shogun-grid-multisearchgazetteergrid",

        wfsSearchGrid: "shogun-grid-multisearchwfssearchgrid",

        searchSettings: "shogun-container-multisearchsettings",

        wfsServerUrl:"/shogun2-webapp/geoserver.action",

        wfsPrefix: "shogun:",

        wfsDataProjection: 'EPSG:32648',

        wfsFeatureProjection: 'EPSG:3857',

        searchLayerBlackList: [
            "hoverVectorLayer",
            "OSM-WMS GRAY"
        ]
    },

    /**
     * override of basdigx class to filter out raster layers from search
     */
    initComponent: function(){
        var me = this;

        me.callParent(arguments);

        // we need to clean up the default behaviour of the basigx component
        // to avoid using of raster layers
        me.setAllSearchLayers([]);
        me.setConfiguredSearchLayers([]);

        me.setHideTrigger(false);

        // get all layers from the map except the blacklisted ones
        var map = BasiGX.util.Map.getMapComponent().getMap();
        var allLayers = BasiGX.util.Layer.getAllLayers(map);
        var blackList = me.getSearchLayerBlackList();

        Ext.each(allLayers, function(l) {
            if (l instanceof ol.layer.Tile && !Ext.Array.contains(blackList,
                    l.get('name')) && l.get('dataType') !== "Raster") {
                me.allSearchLayers.push(l);
            }
        });

        // set search layers to all above layers if not configured different
        if (me.getConfiguredSearchLayers().length === 0 ) {
            Ext.each(me.getAllSearchLayers(), function(l) {
                me.configuredSearchLayers.push(l);
            });
        }

        me.on('boxready', me.onBoxReady, me);
        me.on('change', me.onComboValueChange, me);

    },

    listeners: {
        change: function() {
            var me = this;
            var searchContainer = me.searchContainer;

            // Ensure the container is visible always.
            if (searchContainer) {
                searchContainer.setStyle({
                    'z-index': 10
                });
            }
        }
    }

});
