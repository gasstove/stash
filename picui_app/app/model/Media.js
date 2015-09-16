Ext.define('picui.model.Media', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'mediaId',
            'eventId',
            'userId',           // owner
            'numDownloads',
            'shared',
            'numLikes',
            'numDislikes',
            'mediaType',
            'mediaFileName',
            {
                name: 'url',
                type: 'string',
                defaultValue: 'resources/images/1.jpg'
            },{
                name: 'selected',
                type: 'boolean',
                defaultValue: false
            }
        ]
    }

});
