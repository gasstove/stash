Ext.define('picui.view.event.MyMedia', {
    extend: 'Ext.Panel',
    xtype: 'myMediaView',
    requires: [
        'Ext.ux.touch.ImageGridList.view.Panel'
    ],

    config: {
        title: 'My media',
        iconCls: 'user',
        layout: 'fit',
        store: 'myMediasStore', //'myMediaGalleryStore',
        items: [
            {
                xtype: 'image-grid-list-panel'
            }
        ]
    },

    initialize: function(){

        var me = this;

        // load data
        var store = Ext.getStore('myMediasStore');
        store.getProxy().setUrl(store.getProxy().config.baseurl + "event/" + picui.this_event.get('id') + "/user/" + picui.login_user.get('id') + '/');
        store.load({
            callback: function(records) {
                var gallery = me.down('image-grid-list-panel');
                gallery.renderImages(records);
            },
            scope: this
        });

        // #Q SHOULD THIS BE IN LOAD CALLBACK?
        this.callParent();
    }

});