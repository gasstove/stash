Ext.define('picui.model.Event', {
    extend: 'Ext.data.Model',
    requires: [
        'picui.model.User',
        'picui.model.Media'
    ],

    config: {

        fields: [
            'id',
            'name',
            {
                name: 'openDate',
                type: 'Date'
            },{
                name: 'closeDate',
                type: 'Date'
            },{
                name: 'joinInvitation',
                type: 'Boolean'
            },{
                name: 'joinAllowByAccept',
                type: 'Boolean'
            },{
                name: 'ownerId',
                type: 'Integer'
            },{
                name: 'amOwner',                // iff the logged in user owns this event
                type: 'Boolean'
            },
            'users',
            'medias'
        ],

        associations: [
            {
                type: 'hasMany',
                model: 'picui.model.User',
//                primaryKey: 'id',
//                foreignKey: 'userid',
                name: 'users'
            },
            {
                type: 'hasMany',
                model: 'picui.model.Media',
//                primaryKey: 'id',
//                foreignKey: 'mediaid',
                name: 'medias'
            }
        ]

    },

    setAmOwner: function(){
        this.set( 'amOwner' , picui.login_user.getId()==this.get('ownerId') );
    }

});