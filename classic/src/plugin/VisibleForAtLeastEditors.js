Ext.define('SHOGun.client.plugin.VisibleForAtLeastEditors', {
    extend : 'Ext.plugin.Abstract',
    alias : 'plugin.visibleforatleasteditors',

    pluginId: 'visibleforatleasteditors',

    init : function(cmp) {
        this.setCmp(cmp);

        var currentUserHasAtLeastEditorRole = SHOGun.client.util.User
            .currentUserHasAtLeastEditorRole();

        if(!currentUserHasAtLeastEditorRole) {
            // hide the component if the current user has no editor role
            cmp.hide();
        }
    }
});
