Ext.define('picui.store.MyMedias', {
    extend: 'Ext.data.Store',
    requires: [
        'picui.model.Media',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'picui.model.Media',
        storeId: 'myMediasStore',
        autoLoad: false,
        proxy:{
            type: 'jsonp',
            baseurl: 'http://52.10.166.27:8080/gs-rest-api/mediaevents/',
            // baseurl: picui.apiUrl + '/gs-rest-api/mediaevents/',
            appendId: false,
            callbackKey: 'gaswrapper'
        }
    }
});
