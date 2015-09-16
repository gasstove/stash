Ext.define('picui.view.user.EventsTab', {
    extend: 'Ext.TabPanel',
    xtype: 'eventstab',
    requires: [
        'picui.view.user.NewEventConfig',
        'picui.view.user.EventsList',
        'picui.view.user.UserProfile'
    ],

    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        title: '',

        items: [
            {
                xtype: 'eventslist' ,
                title: 'My Events',
                iconCls: 'home'
            }
            ,{
                xtype: 'eventconfignew',
                title: 'New',
                iconCls: 'add'
            },
            {
                xtype: 'userprofile',
                title: 'Profile',
                iconCls: 'user'
            }
        ]

    }

});
