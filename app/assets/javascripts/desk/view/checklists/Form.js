Ext.define('Desk.view.checklists.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.desk-checklists-Form',


  // LABELS (Start) =======================================================================
  checklist_idLabel                       : Desk.i18n.model.Checklist.checklist_id,
  checklist_nbrLabel                      : Desk.i18n.model.Checklist.checklist_nbr,
  checklist_typeLabel                     : Desk.i18n.model.Checklist.checklist_type,
  stateLabel                              : Desk.i18n.model.Checklist.state,
  displayLabel                            : Desk.i18n.model.Checklist.display,
  descriptionLabel                        : Desk.i18n.model.Checklist.description,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'checklist_id',
      value       : this.record.get('checklist_id')
    };
    // FILTER (End)

    

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items        : [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
            {
              xtype        : 'textfield',
              name         : 'checklist_nbr',
              fieldLabel   : me.checklist_nbrLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'checklist_type',
              fieldLabel   : me.checklist_typeLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'state',
              fieldLabel   : me.stateLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'display',
              fieldLabel   : me.displayLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'description',
              fieldLabel   : me.descriptionLabel,
              maxLength    : 2000,
              minLength    : 0,
              allowBlank   : true
            }
          ]
        }/*,
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
      title       : 'Checklist',
      subtitle    : 'Edit Checklist'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Desk.view.checklists.Form'