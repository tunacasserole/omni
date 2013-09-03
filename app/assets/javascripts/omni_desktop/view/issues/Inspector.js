Ext.define('Omni.view.issues.Inspector',{
  extend: 'Buildit.ux.inspector.Panel',
  alias: 'widget.omni-issues-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter: {
        property:   'issue_id',
        value:      this.record.get('issue_id')
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards: [
        {title: 'Profile',           xtype: 'omni-issues-Form'}
        ,{
          xtype    : 'buildit-CardGroup',
          title    : 'Support',
          module   : 'notes',
          cards    : [
            {
              title: 'Notes',
              xtype: 'buildit-notes-Explorer',
              defaultSearch: { with:
                {
                  notable_type: {equal_to: 'Omni::Issue'},
                  notable_id:   {equal_to: me.record.get('issue_id')}
                }
              },
              showBadge: true
            },
            {
              title: 'Attachments',
              xtype: 'buildit-attachments-Explorer',
              defaultSearch: { with:
                {
                  attachable_type: {equal_to: 'Omni::Issue'},
                  attachable_id:   {equal_to: me.record.get('issue_id')}
                }
              },
              showBadge: true
            },
            {
              title:      'Audit',
              xtype:      'buildit-audits-Explorer',
              model:      'Omni::Issue',
              model_id:   me.record.get('issue_id')
            }
          ]
        }        
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title:     'Issue',
      subtitle:  this.record.get('display')
    });
    // TITLES (End)

    this.callParent();
  }
});