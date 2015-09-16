Ext.define('picui.store.EventUsers', {
    extend: 'Ext.data.Store',
    requires: [
        'picui.model.User',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'picui.model.User',
        storeId: 'eventusersStore',
        autoLoad: false,
        proxy:{
            type: 'jsonp',
            baseurl: 'http://52.10.166.27:8080/gs-rest-api/userevents/event/',
            // baseurl: picui.apiUrl + '/gs-rest-api/userevents/event/',
            appendId: false,
            callbackKey: 'gaswrapper'
        }
    }
});
