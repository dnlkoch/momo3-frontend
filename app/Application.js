/**
 * The main application class. An instance of this class is created by app.js
 * when it calls Ext.application(). This is the ideal place to handle
 * application launch and initialization details.
 */
Ext.define('SHOGun.client.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'SHOGun.client.util.ApplicationContext',
        'SHOGun.client.util.ApplicationState',
        'SHOGun.client.util.URL',
        'SHOGun.client.util.Module',
        'SHOGun.client.util.User'
    ],

    name: 'SHOGun.client',

    stores: [],

    config: {
        applicationContext: null,
        user: null
    },

    launch: function () {
        var loadMask = document.getElementById('loadmask');
        if (loadMask) {
            loadMask.parentNode.removeChild(loadMask);
        }
    },

    /**
     *
     */
    init: function() {
        var me = this;
        var appCtxUtil = SHOGun.client.util.ApplicationContext;
        var appStateUtil = SHOGun.client.util.ApplicationState;
        var moduleUtil = SHOGun.client.util.Module;
        var urlUtil = SHOGun.client.util.URL;

        // disable annoying debug messages from WAI-ARIA 1.0 recommendations.
        Ext.enableAriaButtons = false;
        Ext.enableAriaPanels = false;

        // get the current application ID
        var appId = urlUtil.getUrlQueryParameter('id');

        // load the application context and build the application on success
        appCtxUtil.loadApplicationContext(appId, function() {
            var viewportName = 'SHOGun.client.view.container.Viewport';
            // create the viewport
            moduleUtil.createViewport(viewportName);
            // and set it to the application
            me.setMainView(viewportName);

            // get the state token, if given
            var appStateToken = urlUtil.getUrlQueryParameter('state');

            if (!Ext.isEmpty(appStateToken)) {
                appStateUtil.loadApplicationState(appStateToken,
                        me.onLoadAppStateSuccess, me.onLoadAppStateFailure, me);
            }
        });

    },

    /**
     *
     */
    onLoadAppStateSuccess: function(appStateRecord) {

        if (!(appStateRecord instanceof SHOGun.client.model.ApplicationState)) {
            return false;
        }

        var appId = parseInt(SHOGun.client.util.URL
                .getUrlQueryParameter('id'), 10);
        var appStateId = appStateRecord.get('application');

        // Only proceed if the current application ID matches the
        // assignedWebApp ID of the loaded application state
        if (appId !== appStateId) {
            return false;
        }

        SHOGun.client.util.ApplicationState.setState(appStateRecord);
    },

    /**
     *
     */
    onLoadAppStateFailure: function(error) {
        Ext.Logger.error('Error while requesting ApplicationState: ',
                            error);
    },

    /**
     *
     */
    onAppUpdate: function () {
        Ext.Msg.confirm(
            'Application Update',
            'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }

});
