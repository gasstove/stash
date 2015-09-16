Ext.define('picui.controller.EventConfig',{
    extend: 'Ext.app.Controller',
    requires: [
        'picui.view.user.NewEventConfig',
        'picui.view.event.EventConfig'
    ],
    config: {
        refs: {
            newEventConfig: 'eventconfignew',
            eventConfig: 'eventconfig',
            btnSubmit: 'eventconfig #btnSubmit',
            newbtnSubmit: 'eventconfignew #btnSubmit'
        },
        control: {
            newEventConfig: {
                show: function() {
                    this.paintPanel(this.getNewEventConfig(),false);
                }
            },
            eventConfig: {
                show: function() {
                    var readonly = !picui.this_event.get('amOwner');
                    this.paintPanel(this.getEventConfig(),readonly);
                }
            },
            btnSubmit: {
                tap: function(){
                    this.submitForm(this.getEventConfig());
                }
            },
            newbtnSubmit: {
                tap: function(){
                    this.submitForm(this.getNewEventConfig());
                }
            }
        }
    },

    paintPanel: function(panel,readonly){
        panel.down('#nameText').set('readOnly',readonly);
        panel.down('#startPicker').setDisabled(readonly);
        panel.down('#endPicker').setDisabled(readonly);
        panel.down('#chkGuestList').setDisabled(readonly);
        panel.down('#chkRequestAccept').setDisabled(readonly);
        panel.down('#chkOpenToPublic').setDisabled(readonly);
        panel.down('#btnSubmit').setHidden(readonly);
    },

    submitForm: function(form){

        var isNewEvent = form.getRecord()==null;

        var formValues = form.getValues();
        formValues.id = isNewEvent ? null : form.getRecord().get('id');
        formValues.ownerId = picui.login_user.get('id');

        var jsonData = Ext.JSON.encode(formValues);

        Ext.Ajax.request({
            url : 'http://52.10.166.27:8080/gs-rest-api/events',
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            params : jsonData,
            success:function(data){

                var responseText = Ext.JSON.decode(data.responseText)
                var event = Ext.create(picui.model.Event,Ext.JSON.decode(responseText.resource));
                event.setAmOwner();

                form.setRecord(event)

                if(!isNewEvent) {   // modifying an existing event
                    picui.this_event = event
                }
                else{       // creating a new event
                    Ext.getStore('eventsListStore').add(event);
                }

            },
            failure:function(form, result){
                console.log('FAILURE PICUI RECEIVING')
                console.log(result)
            }
        });
    }

});
