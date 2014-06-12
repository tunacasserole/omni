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
            //   title: 'Email Messages',
            //   cls: 'roles',
            //   colspan: 2,
            //   rowspan: 1,
            //   target: {
            //     xtype: 'desk-email_messages-Explorer'
            //   }
            // }, {
              title: 'Help',
              cls: 'users',
              // iconCls: 'fa fa-envelope-o',
              colspan: 2,
              rowspan: 1,
              target: {
                xtype: 'desk-guides-Explorer'
              }
            }
          ]
        }, {
          title: 'quick',
          columns: 2,
          rows: 3,
          tiles: [{
              xtype: 'buildit-SearchTile',
              colspan: 2
            }
            //{ colspan: 2, rowspan: 1, title: 'Add', cls: 'add', listeners: { clicked: me.launchAddWindow, scope: me  }},
            // {
            //   colspan: 2,
            //   rowspan: 1,
            //   xtype: 'buildit-following_entries-Tile'
            // }
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
