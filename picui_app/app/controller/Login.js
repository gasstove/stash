Ext.define('picui.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: [
        'picui.view.user.EventsTab',
        'picui.model.User',
        'Ext.util.DelayedTask'
    ],
    config: {
        refs: {
            loginView: 'loginview',
            navView: 'navview',
            loginButton: 'loginview #logInButton',
            signOutButton: 'navview #signOutButton'
        },
        control: {
            loginView: {
                signInCommand: 'onSignInCommand'
            },
            loginButton: {
                tap: 'loginButtonTapped'
            },
            signOutButton: {
                tap: 'onLogOffButtonTap'
            }
        }
    },

    /** capture user input, hide failure label, call onSignInCommand **/
    loginButtonTapped: function(){

        var me = this;
        var view = this.getLoginView();

        // get field references
        var usernameField = view.down('#userNameTextField'),
            passwordField = view.down('#passwordTextField'),
            failedLabel = view.down('#signInFailedLabel');

        // hide failure label
        failedLabel.hide();

        // get user input
        var username = usernameField.getValue(),
            password = passwordField.getValue();

        // Using a delayed task in order to give the hide animation above
        // time to finish before executing the next steps.
        var task = Ext.create('Ext.util.DelayedTask', function () {

            // clear stuff
            failedLabel.setHtml('');
            usernameField.setValue('');
            passwordField.setValue('');

            // call signIn method
            me.signIn(username, password);

        });

        task.delay(500);
    },

    /** validate input, login ajax request, call success or failure **/
    signIn: function (username, password) {

        var me = this;
        var view = this.getLoginView();

//        if (username.length === 0 || password.length === 0) {
//            me.showSignInFailedMessage('Please enter your username and password.');
//            return;
//        }

        view.setMasked({
            xtype: 'loadmask',
            message: 'Signing In...'
        });

        // MIMIC SUCCESS  ///////
        picui.login_user = Ext.create('picui.model.User',{
            first: "Creola",
            last: "Cropp",
            id: 1
        })
        
        me.signInSuccess();
//        me.signInFailure('FAILURE');
        /////////


//        Ext.Ajax.request({
//            url: '../../services/login.ashx',
//            method: 'post',
//            params: {
//                user: username,
//                pwd: password
//            },
//            success: function (response) {
//
//                var loginResponse = Ext.JSON.decode(response.responseText);
//
//                if (loginResponse.success === "true") {
//                    // The server will send a token that can be used throughout the app to confirm that the user is authenticated.
//                    me.sessionToken = loginResponse.sessionToken;
//                    me.signInSuccess();     //Just simulating success.
//                } else {
//                    me.signInFailure(loginResponse.message);
//                }
//            },
//            failure: function (response) {
//                me.sessionToken = null;
//                me.signInFailure('Login failed. Please try again later.');
//            }
//        });

    },

    showSignInFailedMessage: function (message) {
        var label = this.getLoginView().down('#signInFailedLabel');
        label.setHtml(message);
        label.show();
    },

    signInSuccess: function () {

        var loginView = this.getLoginView();
        var navView = this.getNavView();

        // create and push events tab [#Q WHY IS THIS NOT IN THE DEFINITION OF NAVIGATION?]
        navView.push({xtype:'eventstab'});

        // transition
        loginView.setMasked(false);
        Ext.Viewport.animateActiveItem(navView,{ type: 'slide', direction: 'left' });
    },

    signInFailure: function (message) {
        var loginView = this.getLoginView();
        loginView.showSignInFailedMessage(message);
        loginView.setMasked(false);
    },

    onLogOffButtonTap: function () {

        // clear globals
        picui.login_user = null;
        picui.this_event = null;

        // clear stores
        Ext.StoreManager.each(function(store){
            store.removeAll();
        });

        // transition
        var loginView = this.getLoginView();
        loginView.setMasked(false);
        Ext.Viewport.animateActiveItem(loginView , { type: 'slide', direction: 'right' });
    }

});
