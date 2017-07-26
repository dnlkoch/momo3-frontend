Ext.define('SHOGun.client.view.container.UserBatchController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.container.shogun-container-user-batch',

    requires: [
    ],

    setCurrentUserAccountName: function(){
        var me = this;
        var viewModel = me.getViewModel();

        // TODO get rid of delayed tasks
        var task = new Ext.util.DelayedTask(function(){
            var loggedInUser = SHOGun.client.app.getUser();
            var buttonText;
            var isLoginButton;

            if (loggedInUser) {
                viewModel.set('user', loggedInUser.data);
            }
        });
        task.delay(500);
    }

});

