Ext.define('picui.controller.UserProfile',{
    extend: 'Ext.app.Controller',
    requires: [
        'picui.view.user.UserProfile'
    ],
    config: {
        refs: {
            userProfileView: 'userprofile',
            btnSubmit: 'userprofile #btnSubmit'
        },
        control: {
            btnSubmit: {
                tap: function(){
                    this.submitForm(this.getUserProfileView());
                }
            }
        }
    },

    submitForm: function(form){

        formValues = form.getValues();
        formValues.id = form.getRecord().get('id');
        jsonData = Ext.JSON.encode(formValues);

        Ext.Ajax.request({
            url : 'http://52.10.166.27:8080/gs-rest-api/users',
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Access-Control-Allow-Origin' : '*'
            },
            params : jsonData,
            success:function(data){

                responseText = Ext.JSON.decode(data.responseText)

                user = Ext.create(picui.model.User,Ext.JSON.decode(responseText.resource));

                console.log('SUCCESS PICUI RECEIVING')
                console.log(responseText)
                console.log(user)

                form.setRecord(user)
                picui.login_user = user

            },
            failure:function(form, result){
                console.log('FAILURE PICUI RECEIVING')
                console.log(result)
            }
        });

    }

});
