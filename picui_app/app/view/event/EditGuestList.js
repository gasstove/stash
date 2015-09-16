Ext.define('picui.view.event.EditGuestList', {
    extend: 'Ext.Container',
    xtype: 'editguestlist',

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'list',
                itemTpl: '{first} {last}',
                store: 'contactsStore',
                mode: 'MULTI'
            },{
                xtype: 'button',
                itemId: 'btnSave',
                text: 'Save',
                docked: 'top'
            },{
                xtype: 'button',
                itemId: 'btnCancel',
                text: 'Cancel',
                docked: 'top'
            }
        ]
    }

});
