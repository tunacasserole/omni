//= require ./HubContextMenu

Ext.define('Desk.view.app.Hub', {
  extend: 'Buildit.ux.Hub',
  alias: 'widget.desk-app-Hub',
  extend: 'Buildit.ux.Hub',
  bodyStyle: 'background: transparent',
  cls: 'desktop',

  initComponent: function() {
    var me = this;

    // this.socket   = Buildit.lib.SocketManager.get('STANDARD');
    // this.socket.on('newEvents', this.handleNewEvents, me);


    Ext.apply(this, {
      allowSignout: true,
      title: 'Start',
      subtitle: '',
      contextMenuConfig: {
        xtype: 'desk-app-HubContextMenu'
      },
      sections: [

        // Section: Desk //
        {
          title: 'My Desk',
          columns: 4,
          rows: 4,
          tiles: [

            {
              title: 'Support Requests',
              cls: 'applications',
              colspan: 2,
              rowspan: 1,
              target: {
                xtype: 'desk-cases-Explorer'
              }
            }, {
              title: 'Projects',
              cls: 'roles',
              colspan: 2,
              rowspan: 1,
              target: {
                xtype: 'desk-projects-Explorer'
              }
              }, {
                title: 'Help',
                cls: 'users',
                colspan: 2,
                rowspan: 1,
                target: {
                  xtype: 'desk-guides-Explorer'
                }
            }
          ]
        }

      ]
    });

    this.callParent();
  },

  // handleNewEvents : function(data){
  //    var me = this;
  //    Ext.Array.each(data, function(event){
  //      var newEvent = Ext.create('Buildit.model.Event', event);
  //      // me.store.add(newEvent);
  //        Buildit.infoMsg(event.message)
  //      // Buildit.infoMsg(newEvent.get('message'))
  //    });
  //  }


});
