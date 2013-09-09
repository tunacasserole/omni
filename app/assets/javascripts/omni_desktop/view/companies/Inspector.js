Ext.define('Omni.view.companies.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-companies-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'company_id',
        value:    me.record.get('company_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-companies-Form'
        }
        ,{title: 'Regions', xtype: 'omni-regions-Explorer', module: 'contacts',
           defaultSearch: { with: 
             {
               company_id:   {equal_to: me.record.get('company_id')}
             }
          }
        }        
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Company',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
