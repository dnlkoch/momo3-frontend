Ext.define('SHOGun.client.view.container.UserBatchModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.container.shogun-container-user-batch',

    data: {
        user: null
    },

    formulas: {
        profileImage: function() {
            var profileImage;

            if (this.get('user')) {
                profileImage = this.get('user').get('profileImage');
            }

            if (!profileImage) {
                profileImage = 'resources/images/emptyUserAvatar.png';
            }

            return profileImage;
        }
    }

});

