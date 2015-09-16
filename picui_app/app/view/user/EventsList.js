Ext.define('picui.view.user.EventsList', {
    extend: 'Ext.List',
    xtype: 'eventslist',

    config: {
        title: 'My Events',
        itemTpl: '{id} {name}',
        grouped: true,
//        groupTpl: ['sdf'],
        store: 'eventsListStore'
    },

    initialize: function(){
        var store = Ext.getStore('eventsListStore');
        store.getProxy().setUrl(store.getProxy().config.baseurl + picui.login_user.get('id') + '/');
        store.load({
            callback: function(records) {
                for (var i = 1; i < records.length; i++)
                    records[i].setAmOwner()
            },
            scope: this
        });

        // #Q SHOULD THIS BE IN LOAD CALLBACK?
        this.callParent();
    }

});
