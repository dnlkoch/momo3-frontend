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
 * Panel containing the measure tools for the temporary drawing in the
 * client.
 *
 * @class SHOGun.client.view.panel.MeasurementToolsPanel
 */
Ext.define("SHOGun.client.view.panel.MeasurementToolsPanel", {
    extend: "Ext.panel.Panel",
    xtype: 'shogun-panel-measurement',

    requires: [
        'Ext.button.Button'
    ],

    viewModel: 'panel.measurementoolspanel',

    controller: 'panel.measurementoolspanel',

    layout: {
        type: 'hbox',
        pack: 'end'
    },

    width: 100,

    bodyStyle: {
        background: 'transparent'
    },

    defaults: {
        style: {
            margin: '0 5px 0 5px'
        },
        xtype: 'basigx-button-measure',
        bind : {
            viewModel: {
                data: {
                    continuePolygonMsg: '{continuePolygonMsg}',
                    continueLineMsg: '{continueLineMsg}',
                    clickToDrawText: '{clickToDrawText}'
                }
            }
        },
        toggleGroup: 'measure',
        ui: 'shogun-tools',
        scale: 'small',
        showMeasureInfoOnClickedPoints: true
    },

    items: [{
        measureType: 'line',
        glyph: 'xf10f@Flaticon',
        listeners: {
            afterrender: function(btn){
                btn.setBind({
                    text: '{text}',
                    tooltip: '{lineTooltip}'
                });
            }
        }
    }, {
        measureType: 'polygon',
        glyph: 'xf10b@Flaticon',
        listeners: {
            afterrender: function(btn){
                btn.setBind({
                    text: '{text}',
                    tooltip: '{areaTooltip}'
                });
            }
        }
    }]
});
