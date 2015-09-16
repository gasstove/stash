Ext.define('picui.controller.EventsList',{
    extend: 'Ext.app.Controller',
    requires: [
        'picui.view.event.EventTab'
    ],
    config: {
        refs: {
            loginView: 'loginview',
            navView : 'navview'
        },
        control: {
            eventslist: {
                itemsingletap: 'openEventContext'
            }
        }
    },

    openEventContext : function(list, index, target, record ){

        // query restapi for event details
        var event_id = record.data.id;
        var eventstore = Ext.getStore('eventStore');
        eventstore.getProxy().setUrl( eventstore.getProxy().config.baseurl + event_id + '/');
        eventstore.load(function (records) {    // callback
            if(records.length>0){

                // store this event
                picui.this_event = records[0];
                picui.this_event.setAmOwner();

                // create event tab
                this.getNavView().push({xtype:'eventtab'});
            }
            else{
                picui.this_event = null;
            }
        },this);
    }

});