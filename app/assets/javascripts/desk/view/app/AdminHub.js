//= require ./HubContextMenu

Ext.define('Desk.view.app.AdminHub', {
  extend: 'Buildit.ux.Hub',
  alias: 'widget.desk-app-AdminHub',
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

        // Section: Office //
        {
          title: 'The Office',
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
              title: 'Features',
              colspan: 2,
              rowspan: 1,
              target: {
                xtype: 'desk-features-Explorer'
              }
            }, {
              title: 'Projects',
              colspan: 2,
              rowspan: 1,
              target: {
                xtype: 'desk-projects-Explorer'
              }
            }, {
              title: 'Tasks',
              colspan: 2,
              rowspan: 1,
              target: {
                xtype: 'desk-tasks-Explorer'
              }
            }, {
              title: 'Checklists',
              colspan: 2,
              rowspan: 1,
              target: {
                xtype: 'desk-checklists-Explorer'
              }
            }, {
              title: 'Approvals',
              colspan: 2,
              rowspan: 1,
              target: {
                xtype: 'desk-approvals-Explorer'
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
