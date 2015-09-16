Ext.define('picui.view.event.DebugMyMedia', {
    extend: 'Ext.List',
    xtype: 'myMediaViewDebug',
    config: {
        title: '*My media*',
        layout: 'fit',
        store: 'myMediasStore',
        iconCls: 'user',
        itemTpl: 'user {userId}, event {eventId}, media {mediaId}'
    },

    initialize: function(){
        var store = Ext.getStore('myMediasStore');
        store.getProxy().setUrl(store.getProxy().config.baseurl + "event/" + picui.this_event.get('id') + "/user/" + picui.login_user.get('id') + '/');
        store.load({
            callback: function(records, operation, success) {
                // the operation object contains all of the details of the load operation
                console.log('MyMedia loaded this:');
                console.log(records);
            },
            scope: this
        });


        this.callParent();
    }

});