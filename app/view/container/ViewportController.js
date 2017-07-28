/**
 * This class is the controller for the main viewport for the application.
 *
 */
Ext.define('SHOGun.client.container.ViewportController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.shogun-mainviewport',

    requires: [
        'BasiGX.util.CSRF',
        'BasiGX.util.Url'
    ],

    /**
     * If application was opened with permalink hash, the map and layer will be
     * adjusted.
     */
    reactOnPermalink: function(){
        var mapComponent = BasiGX.util.Map.getMapComponent();
        var ctrl = mapComponent.getController();
        var hash = window.location.hash;
        if (window.location.hash) {
            ctrl.restoreMapState(hash, true);
        }
    },

    /**
     * retrieves user information from the backend and sets the information
     * on the applications main viewmodel
     */
    getUserBySession: function() {
        var viewModel = this.getViewModel();
        var getUserBySessionPath = BasiGX.util.Url.getWebProjectBaseUrl() +
            'user/getUserBySession.action';

        Ext.Ajax.request({
            url: getUserBySessionPath,
            method: 'GET',
            success: function(response) {
                if (response && response.responseText) {
                    var responseObj = Ext.decode(response.responseText);
                    var user = Ext.create(
                        SHOGun.client.model.User,
                        responseObj.data
                    );

                    viewModel.set('user', user);
                    SHOGun.client.app.setUser(user);

                } else {
                    Ext.Error.raise('Could not get user by session.');
                }
            },
            failure: function(response) {
                Ext.Msg.alert(
                    'Error',
                    Ext.String.format(response.responseText)
                );
            }
        });
    },

    logOut: function(){
        var me = this;
        Ext.MessageBox.confirm('Log out',
            'Are you sure you want to log out?',
            function(confirmed){
                if(confirmed === "yes"){
                    Ext.Ajax.request({
                        url: BasiGX.util.Url.getWebProjectBaseUrl() + 'logout',
                        method: "POST",
                        headers: BasiGX.util.CSRF.getHeader(),
                        scope: me,
                        callback: function() {
                            location.href = BasiGX.util.Url
                                .getWebProjectBaseUrl() + "login/";
                        }
                    });
                }
            }
        );
    }
});
