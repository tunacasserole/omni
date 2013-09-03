Ext.define('Omni.view.projection_details.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-projection_details-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'projection_detail_id',
        value:      this.record.get('projection_detail_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-projection_details-Form'}
        ,{title: 'Period Results', xtype: 'omni-period_results-Explorer', module: 'approvals',
           defaultSearch: { with: 
             {
               sku_id:   {equal_to: me.record.get('sku_id')}
             }
          }
        }
        ,{
          title:      'Audit',
          xtype:      'buildit-audits-Explorer',
          module:     'audit',
          model:      'Omni::Projection',
          model_id:   me.record.get('projection_id')
        }                            
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Projection Detail',
      subtitle:  this.record.get('projection_detail_id')
    });
    // TITLES (End)

    this.callParent();
  }
});