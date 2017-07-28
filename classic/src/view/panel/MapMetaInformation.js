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
 * Panel containing meta informations for the map as current scale, EPSG
 * or mouse position
 *
 * @class SHOGun.client.view.panel.MapMetaInformation
 */
Ext.define("SHOGun.client.view.panel.MapMetaInformation", {
    extend: "Ext.panel.Panel",
    xtype: 'shogun-panel-metainfos',

    requires: [
        'BasiGX.view.combo.ScaleCombo',
        'BasiGX.util.Map'
    ],

    viewModel: {
        data: {
            /* i18n */
            srsPrefix: ':',
            mousePositionLabel: ''
            /* i18n */
        }
    },

    hidden: true,

    collapsible: false,

    width: 625,

    layout: {
        type: 'hbox'
    },

    cls: 'metainfos-panel',

    defaults: {
        style: {
            margin: '5px 5px 0 5px'
        }
    },

    items: [
        {
            xtype: 'shogun-combo-scale'
        }, {
            xtype: 'displayfield',
            bind: {
                fieldLabel: '{srsPrefix}'
            },
            labelWidth: 85,
            listeners: {
                afterrender: function(df) {
                    var map = BasiGX.util.Map
                        .getMapComponent('shogun-map-component').getMap(),
                        proj = map.getView().getProjection().getCode();
                    df.setValue(proj);
                }
            }
        }, {
            xtype: 'displayfield',
            width: 285,
            bind: {
                fieldLabel: '{mousePositionLabel}'
            },
            labelWidth: 160,
            listeners: {
                afterrender: function(df) {
                    var map = BasiGX.util.Map
                        .getMapComponent('shogun-map-component').getMap(),
                        mousePosCtrl;
                    Ext.each(map.getControls().getArray(), function(ctrl){
                        if (ctrl instanceof ol.control.MousePosition) {
                            mousePosCtrl = ctrl;
                        }
                    });

                    if (Ext.isEmpty (mousePosCtrl)) {
                        mousePosCtrl = new ol.control.MousePosition({
                            coordinateFormat: ol.coordinate.createStringXY(2),
                            projection: map.getView().getProjection(),
                            target: Ext.DomQuery.select("div", df.el.dom)[0]
                        });
                        map.addControl(mousePosCtrl);
                    }
                }
            }
        }
    ]
});
