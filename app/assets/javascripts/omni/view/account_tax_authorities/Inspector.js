Ext.define('Omni.view.account_tax_authorities.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.omni-account_tax_authorities-Inspector',


  initComponent:function(){
    var me = this;

    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'account_tax_authority_id',
        value     : this.record.get('account_tax_authority_id')
      },

      associativeSearch : {
        with: {
          account_tax_authority_id : {
            equal_to : this.record.get('account_tax_authority_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)

    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards     : [
        {
          title     : 'Profile',
          xtype     : 'omni-account_tax_authorities-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Account Tax Authority',
      subtitle  : this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});
