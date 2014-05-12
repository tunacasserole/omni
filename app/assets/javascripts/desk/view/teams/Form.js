Ext.define('Desk.view.teams.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.desk-teams-Form',
  backOnNew: true,

  // LABELS (Start) =======================================================================
  user_idLabel: Desk.i18n.model.Team.user_id,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'team_id',
      value: this.record.get('team_id')
    };
    // FILTER (End)



    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
          xtype: 'fieldset',
          title: 'General Information',
          collapsible: true,
          defaultType: 'textfield',
          layout: 'anchor',
          items: [{
            xtype: 'buildit-Locator',
            store: Ext.create('Buildit.store.User', {
              pageSize: 20
            }),
            displayField: 'full_name',
            queryField: 'full_name',
            valueField: 'user_id',
            itemTpl: '{full_name}',
            name: 'user_id',
            fieldLabel: this.user_idLabel,
            allowBlank: true
          }]
        }
        /*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Team',
      subtitle: 'Edit Team'
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Desk.view.teams.Form'
