Ext.define('picui.controller.Navigation',{
    extend: 'Ext.app.Controller',
    requires: [
        'picui.view.Navigation'
    ],
    config: {
        refs: {
            navView : 'navview'
        },
        control: {
            navView: {
                back: 'onBack'
            }
        }
    },

    onBack : function(){
        picui.this_event = null;
    }

});