//= require      buildit_desktop
//= require_tree ./omni_desktop/logic
//= require_tree ./omni_desktop/model
//= require_tree ./omni_desktop/store
//= require_tree ./omni_desktop/view
//= require_tree ./omni_desktop/controller

Buildit.desktopApplication({
  name:'Omni',

  autoCreateViewport:false,

  launch:function () {

    /* PATCH */
    delete Ext.tip.Tip.prototype.minWidth;

    if(Ext.isIE10) {
      Ext.override(Ext.tip.Tip, {
          componentLayout : {
          type            : 'fieldset',
          getDockedItems  : function() {
            return [];
          }
        }
      });
    }
    /* PATCH */

    Ext.QuickTips.init();

    // LAUNCH INITIAL COMPONENT
    Ext.widget('buildit-Viewport', {
      items    : [
      {
        xtype      : 'buildit-Canvas',
        flex       : 1,
        id         : 'canvas',
        items      : [
          {
            xtype      : 'buildit-SecurityCheckpoint',
            id         : 'login',
            listeners  : {
              loginsuccess : function() {

                var socket = Ext.create('Buildit.ux.Socket',{
                  host     : 'localhost',
                  port     : 3001,
                  channels : ['newEvents', 'newApprovalRequests']
                });

                Buildit.lib.SocketManager.add('STANDARD', socket);
              }
            }
          }
        ]
      }
      ]
    });

    Ext.FocusManager.enable();
  }

});
