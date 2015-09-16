Ext.define('picui.controller.EditGuestList',{
    extend: 'Ext.app.Controller',
    requires: ['picui.view.event.EditGuestList'],
    config: {
        refs: {
            navView: 'navview',
            guestListPanel: 'editguestlist',
            guestList: 'editguestlist > list',
            btnSave: 'editguestlist #btnSave',
            btnCancel: 'editguestlist #btnCancel'
        },
        control: {
            btnSave: {
                tap: 'tapSave'
            },
            btnCancel: {
                tap: 'tapCancel'
            },
            guestListPanel: {
                show: 'onShowGuestList'
            }

        }
    },

    tapSave : function( ){
        var selection = this.getGuestList().getSelection();
        var store = Ext.getStore('eventusersStore');
        store.setData(selection);
        this.submitGuestList(selection);
        this.gotoNavView();
    },

    submitGuestList: function(data){

        var arr = Array(data.length);
        for(var i=0;i<data.length;i++)
            arr[i] = Ext.JSON.encode(data[i].raw);
        var jsonData = '['+arr.join()+']';

        Ext.Ajax.request({
            url : 'http://52.10.166.27:8080/gs-rest-api/userevents/event/s' + picui.this_event.get("id"),
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            params : jsonData,
            success:function(d){
//                var responseText = Ext.JSON.decode(data.responseText)
//                var event = Ext.create(picui.model.Event,Ext.JSON.decode(responseText.resource));
//                event.setAmOwner();
//
//                form.setRecord(event)
//
//                if(!isNewEvent) {   // modifying an existing event
//                    picui.this_event = event
//                }
//                else{       // creating a new event
//                    Ext.getStore('eventsListStore').add(event);
//                }
            },
            failure:function(form, result){
                console.log('FAILURE')
            }
        });
    },


    tapCancel : function( ){
        this.gotoNavView();
    },

    gotoNavView : function() {

        // clear list selection
        this.getGuestList().deselectAll();

        // go to navigation view
        Ext.Viewport.animateActiveItem( this.getNavView() ,
            { type: 'slide', direction: 'right' });
    },

    onShowGuestList: function(){
        var list = this.getGuestList();
        var data = Ext.getStore('eventusersStore').getData();
        list.select(data.all)
    }

});
