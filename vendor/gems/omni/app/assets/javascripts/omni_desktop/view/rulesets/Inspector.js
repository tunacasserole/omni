Ext.define('Omni.view.rulesets.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-rulesets-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'ruleset_id',
        value:    me.record.get('ruleset_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-rulesets-Form'
        }
        ,{
          title: 'Rules',
          xtype: 'omni-rules-Explorer', module: 'cfars',
          defaultSearch: { with: 
             {
               ruleset_id:   {equal_to: me.record.get('ruleset_id')}
             }
          }
        }            
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Ruleset',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
