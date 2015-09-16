Ext.define('picui.view.event.EventTab', {
extend: 'Ext.TabPanel',
    xtype: 'eventtab',
    requires: [
    'picui.view.event.EventConfig',
    'picui.view.event.EventUsersList',
    'picui.view.event.EventUsersPanel',
    'picui.view.event.MyMedia',
    'picui.view.event.DebugMyMedia',
    'picui.view.event.SharedMedia',
    'picui.view.event.DebugSharedMedia'
],

    config: {
    fullscreen: true,
        tabBarPosition: 'bottom',
        title: '',
        items: [
        {
            xtype: 'eventconfig' ,
            title: 'Settings',
            iconCls: 'settings'
        },
        { xtype: 'eventusersPanel'  },
//            { xtype: 'myMediaViewDebug'  },
        { xtype: 'myMediaView'  },
//            { xtype: 'sharedMediaViewDebug' },
        { xtype: 'sharedMediaView' }
    ]
},

initialize: function(){
    this.setTitle(picui.this_event.data.name);
    this.callParent();
}

});

