Ext.define('SHOGun.client.view.container.UserBatch', {
    xtype: 'shogun-container-user-batch',
    extend: 'Ext.container.Container',
    requires: [
        'Ext.form.field.Display',
        'Ext.Img',

        'SHOGun.client.view.container.UserBatchController',
        'SHOGun.client.view.container.UserBatchModel'
    ],

    controller: 'container.shogun-container-user-batch',

    viewModel: 'container.shogun-container-user-batch',

    /**
     *
     */
    layout: {
        type: 'hbox',
        align: 'center',
        pack: 'justify'
    },

    /**
     *
     */
    items: [{
        xtype: 'displayfield',
        fieldStyle: 'color:#fff;margin-top:15px',
        margin: '0 12 0 4',
        bind: {
            value: '{user.fullName}'
        },
        listeners: {
            render: 'setCurrentUserAccountName'
        }
    }, {
        xtype: 'image',
        cls: 'header-right-profile-image',
        style: {
            'border-radius': '20px'
        },
        height: 35,
        width: 35,
        alt: 'current user image',
        bind: {
            src: '{profileImage}'
        }
    }]

});
