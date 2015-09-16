Ext.define('picui.view.user.UserProfile', {
    extend: 'Ext.form.Panel',
    xtype: 'userprofile',
    requires: [
        'Ext.form.FieldSet'
    ],

    config: {
        styleHtmlContent: true,
        scrollable: 'vertical',
        title: 'Profile',
        iconCls: 'settings',
        items: [{
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'textfield',
                    name : 'first',
                    label: 'First name'
                },{
                    xtype: 'textfield',
                    name : 'last',
                    label: 'Last name'
                }
            ]
        },{
            xtype: 'button',
            itemId: 'btnSubmit',
            text: 'Save'
        }]

    },

    initialize: function() {
        this.setRecord(picui.login_user)
        this.callParent();
    }

}); 