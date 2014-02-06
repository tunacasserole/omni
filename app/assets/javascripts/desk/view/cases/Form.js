Ext.define('Desk.view.cases.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.desk-cases-Form',
  record: undefined,
  // LABELS (Start) =======================================================================
  case_idLabel: Desk.i18n.model.Case.case_id,
  case_nbrLabel: Desk.i18n.model.Case.case_nbr,
  case_typeLabel: Desk.i18n.model.Case.case_type,
  user_idLabel: Desk.i18n.model.Case.user_id,
  agent_idLabel: Desk.i18n.model.Case.agent_id,
  stateLabel: Desk.i18n.model.Case.state,
  summaryLabel: Desk.i18n.model.Case.summary,
  tagsLabel: Desk.i18n.model.Case.tags,
  descriptionLabel: Desk.i18n.model.Case.description,
  is_destroyedLabel: Desk.i18n.model.Case.is_destroyed,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    Ext.apply(me, {
      store: Ext.create('Desk.store.Case')
    });

    // var rec = new store.model;

    // Ext.apply(me, {
    //   record: rec
    // });

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'case_id',
      value: 'new'
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
              xtype: 'textfield',
              name: 'state',
              fieldLabel: me.stateLabel,
              maxLength: 100,
              minLength: 0,
              allowBlank: true,
              disabled: true
            }, {
              xtype: 'textfield',
              name: 'case_nbr',
              fieldLabel: me.case_nbrLabel,
              allowBlank: true,
              disabled: true
            }, {
              xtype: 'textfield',
              name: 'summary',
              fieldLabel: me.summaryLabel,
              maxLength: 100,
              minLength: 0,
              allowBlank: false
            }, {
              xtype: 'label',
              text: 'Give a concise but descriptive summary of your request',
              cls: 'instruction'
            }, {
              xtype: 'textarea',
              name: 'description',
              fieldLabel: me.descriptionLabel,
              maxLength: 500,
              minLength: 0,
              allowBlank: true,
              // rowspan: 5q
            }, {
              xtype: 'label',
              text: 'Add as much detail as you can to the request',
              cls: 'instruction'
            }, {
              name: 'case_type',
              fieldLabel: this.case_typeLabel,
              allowBlank: true,
              disabled: false,
              xtype: 'buildit-Lookup',
              category: 'CASE_TYPE'
            }, {
              xtype: 'label',
              text: "Select the type that best describes your request or select 'question' if you are unsure",
              cls: 'instruction'
            }
          ]
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
      title: 'Support Request',
      subtitle: 'work with your request'
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Desk.view.cases.Form'
