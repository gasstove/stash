Ext.define('picui.store.Contacts', {
    extend: 'Ext.data.Store',
    requires: [
        'picui.model.User',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'picui.model.User',
        storeId: 'contactsStore',
        autoLoad: true,
        proxy: {
            type: 'jsonp',
            url: 'http://52.10.166.27:8080/gs-rest-api/users/',
            // url: picui.apiUrl + '/gs-rest-api/users/',
            appendId: false,
            callbackKey: 'gaswrapper'
        }
    }

});
