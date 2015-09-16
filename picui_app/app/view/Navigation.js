Ext.define('picui.view.Navigation', {
    extend: 'Ext.navigation.View',
    xtype: 'navview',

    config: {
        navigationBar : {
            docked : 'top',
            items : [{
                xtype: 'button',
                text : 'Sign out',
                align : 'right',
                itemId: 'signOutButton'
            }]
        }
    }

});