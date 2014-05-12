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
              colspan: 2,
              rowspan: 1,
              target: {
                xtype: 'desk-cases-Explorer'
              }
            }, {
              title: 'Projects',
              colspan: 2,
              rowspan: 1,
              target: {
                xtype: 'desk-projects-Explorer'
              }
              // }, {
              //   title: 'Teams',
              //   colspan: 2,
              //   rowspan: 1,
              //   target: {
              //     xtype: 'desk-teams-Explorer'
              //   }
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
