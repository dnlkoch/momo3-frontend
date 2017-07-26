Ext.define('SHOGun.client.view.component.MapModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.component.map',

    data: {
        mapStateHistory: [],
        currentMapStateIndex: null,
        clickedNav: null
    }
});
