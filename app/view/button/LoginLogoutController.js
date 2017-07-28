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
 * LoginLogoutController
 *
 * This controller will be used to manage the login/logout logic on the
 * corresponding buttons click as well as displaying account name of the logged
 * in user
 *
 * @class SHOGun.client.view.button.LoginLogoutController
 */
Ext.define('SHOGun.client.view.button.LoginLogoutController', {
    extend: 'Ext.app.ViewController',

    requires: [
    ],

    alias: 'controller.button.loginlogout',

    /**
    *
    */
    onClick: function() {
        var me = this;
        var viewModel = me.getViewModel();

        var isLogin = viewModel.get('isLoginButton');

        if (isLogin) {
            me.doLogin();
        } else {
            BasiGX.confirm(viewModel.get('logoutConfirmMsgText'), {
                fn: function(decision) {
                    if (decision === 'yes') {
                        // logout
                        me.doLogout();
                    }
                },
                scope: me
            });
        }

    },

    /**
     *
     */
    doLogin: function() {
        var baseUrl = BasiGX.util.Url.getWebProjectBaseUrl();
        var clientId = SHOGun.client.util.ApplicationContext
                .getApplicationContext().id;

        location.href = baseUrl + 'login/?clientId=' + clientId;
    },

    /**
    *
    */
    doLogout: function() {
        var baseUrl = BasiGX.util.Url.getWebProjectBaseUrl();

        Ext.Ajax.request({
            url: baseUrl + 'logout',
            method: "POST",
            headers: BasiGX.util.CSRF.getHeader(),
            callback: function() {
                location.href = baseUrl + "login/";
            }
        });
    },

    /**
     *
     */
    setCurrentUserAccountName: function(){
        var me = this;
        var viewModel = me.getViewModel();

        // TODO get rid of delayed tasks
        var task = new Ext.util.DelayedTask(function(){
            var loggedInUser = SHOGun.client.app.getUser();
            var buttonText;
            var buttonTooltip;
            var isLoginButton;

            if (loggedInUser) {
                buttonTooltip = viewModel.get('logoutBtnText');
                isLoginButton = false;
            } else {
                buttonText = viewModel.get('loginBtnText');
                buttonTooltip = viewModel.get('loginBtnText');
                isLoginButton = true;
            }

            viewModel.set('text', buttonText);
            viewModel.set('tooltip', buttonTooltip);
            viewModel.set('isLoginButton', isLoginButton);
        });
        task.delay(500);
    }
});
