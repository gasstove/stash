Ext.define('picui.view.event.EventConfig', {
    extend: 'picui.view.EventConfigBase',
    xtype: 'eventconfig',


    initialize: function() {

        console.log('eventconfig int')


        this.setRecord(picui.this_event);
//
//
//        var amOwner;
//
//        if(picui.this_event ==null){
//            amOwner = true;
//        } else{
//            amOwner = picui.this_event.get('amOwner');
//        }
//
//        Ext.ComponentQuery.query('eventconfig #nameText')[0].set('readOnly',!amOwner);
//        Ext.ComponentQuery.query('eventconfig #startPicker')[0].set('readOnly',!amOwner);
//        Ext.ComponentQuery.query('eventconfig #endPicker')[0].set('readOnly',!amOwner);
//
//        Ext.ComponentQuery.query('eventconfig #chkGuestList')[0].setDisabled(!amOwner);
//        Ext.ComponentQuery.query('eventconfig #chkRequestAccept')[0].setDisabled(!amOwner);
//        Ext.ComponentQuery.query('eventconfig #chkOpenToPublic')[0].setDisabled(!amOwner);
//
//        Ext.ComponentQuery.query('eventconfig #btnSubmit')[0].setHidden(!amOwner);
//        Ext.ComponentQuery.query('eventconfig #btnEditGuestList')[0].setHidden(true);


        this.callParent();

    }



});
