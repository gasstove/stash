Ext.define('picui.view.event.SharedMedia', {
    extend: 'Ext.Panel',
    xtype: 'sharedMediaView',
    requires: [
        'Ext.ux.touch.ImageGridList.view.Panel'
    ],

    config: {
        title: 'Shared media',
        iconCls: 'download',
        layout: 'fit',
        store: 'sharedMediasStore',
        items: [
            {
                xtype: 'image-grid-list-panel'
            }
        ]
    },

    initialize: function(){

        var me = this;

        // load data
        var store = Ext.getStore('sharedMediasStore');
        store.getProxy().setUrl(store.getProxy().config.baseurl + "event/" + picui.this_event.get('id') + '/');
        store.load({
            callback: function(records) {
                var gallery = me.down('image-grid-list-panel');
                gallery.renderImages(records);
            },
            scope: this
        });

        // SHOULD THIS BE IN LOAD CALLBACK?
        this.callParent();


    }

});