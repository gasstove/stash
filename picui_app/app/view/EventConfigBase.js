Ext.define('picui.view.EventConfigBase', {
    extend: 'Ext.form.Panel',
    xtype: 'eventconfigbase',
    requires: [
        'Ext.form.FieldSet'
    ],

    config: {
        styleHtmlContent: true,
        scrollable: 'vertical',
        title: 'Settings',
        iconCls: 'settings',

        scrollable: 'vertical',
        standardSubmit: false,
        submitOnAction: false,
        url: 'http://52.10.166.27:8080/gs-rest-api/events',

        items: [
            {
                xtype: 'fieldset',
                title: 'Name and time',
                //instructions: 'Enter a title for the event, and its start and end times.',  // WHAT DOES THIS DO?
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Event name',
                        name : 'name',
                        itemId : 'nameText'
                    },{
                        xtype: 'datetimepickerfield',
                        label: 'Starts at',
                        name: 'openDate',
                        value: new Date(),
                        itemId : 'startPicker'
                        //picker: {yearFrom: 2000, yearTo: 2013}
                    },{
                        xtype: 'datetimepickerfield',
                        label: 'Ends at',
                        name: 'closeDate',
                        value: new Date(),
                        itemId : 'endPicker'
                        //picker: {yearFrom: 2000, yearTo: 2013}
                    }
                ]
            },{
                xtype: 'fieldset',
                title: 'Join methods',
                items: [
                    {
                        xtype: 'checkboxfield',
                        label: 'Guest list',
                        name : 'joinInvitation',        // name in rest-api
                        itemId : 'chkGuestList'
                    },{
                        xtype: 'checkboxfield',
                        label: 'Request / Accept',
                        name: 'joinAllowByAccept',      // name in rest-api
                        itemId : 'chkRequestAccept'
                    },{
                        xtype: 'checkboxfield',
                        label: 'Open to public',
                        name: 'joinAllowAuto',          // name in rest-api
                        itemId : 'chkOpenToPublic'
                    }
                ]
            },{
                xtype: 'button',
                itemId: 'btnSubmit',
                text: 'Save'
  //              scope: this,
//                formBind: true
            }
        ]
    }


});
