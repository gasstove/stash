Ext.define('picui.store.Event', {
    extend: 'Ext.data.Store',
    requires: [
        'picui.model.Event',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'picui.model.Event',
        storeId: 'eventStore',
        autoLoad: false,
        proxy: {
            type: 'jsonp',
            baseurl: 'http://52.10.166.27:8080/gs-rest-api/events/',
            // baseurl: picui.apiUrl + '/gs-rest-api/events/',
            appendId: false,
            callbackKey: 'gaswrapper'
        }
    }

});
