Ext.define('Omni.view.sites.Inspector', {

  extend:'Buildit.ux.inspector.Panel',
  alias:'widget.omni-sites-Inspector',

  

  initComponent:function () {

    var me = this;

        
    // LABELS (Start) ======================================================================  
    // LABELS (End)

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property: 'site_id',
        value:    me.record.get('site_id')
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {
          title: 'Profile',
          xtype: 'omni-sites-Form'
        }
        // ,{title: 'Donations', xtype: 'omni-site_donations-Explorer', module: 'contracts',
        //    defaultSearch: { with: 
        //      {
        //        site_id:   {equal_to: me.record.get('site_id')}
        //      }
        //   },
        //   showBadge: true
        // }        
        // ,{title: 'Enrollments', xtype: 'omni-site_enrollments-Explorer', module: 'tollgates',
        //    defaultSearch: { with: 
        //      {
        //        site_id:   {equal_to: me.record.get('site_id')}
        //      }
        //   },
        //   showBadge: true
        // }        
        // ,{title: 'Programs', xtype: 'omni-programs-Explorer', module: 'projects',
        //    defaultSearch: { with: 
        //      {
        //        site_id:   {equal_to: me.record.get('site_id')}
        //      }
        //   },
        //   showBadge: true
        // }        
        // ,{title: 'Tax Authorities', xtype: 'omni-site_tax_authorities-Explorer', module: 'cfars',
        //    defaultSearch: { with: 
        //      {
        //        site_id:   {equal_to: me.record.get('site_id')}
        //      }
        //   },
        //   showBadge: true
        // }                       
      ]
    });
    // CARDS (End)
    
    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Site',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)



    this.callParent();
  }

});
