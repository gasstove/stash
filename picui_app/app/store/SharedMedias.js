Ext.define('picui.store.SharedMedias', {
    extend: 'Ext.data.Store',
    requires: [
        'picui.model.Media',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'picui.model.Media',
        storeId: 'sharedMediasStore',
        autoLoad: false,
        proxy:{
            type: 'jsonp',
            baseurl: 'http://52.10.166.27:8080/gs-rest-api/mediaevents/',
            // baseurl: picui.apiUrl + '/gs-rest-api/mediaevents/',
            appendId: false,
            callbackKey: 'gaswrapper'
        },
        grouper : function(record) {
            return record.get('userId');
        }
    }
});
