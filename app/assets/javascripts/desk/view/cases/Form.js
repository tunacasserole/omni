Ext.define('Desk.view.cases.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.desk-cases-Form',


  // LABELS (Start) =======================================================================
  case_idLabel                            : Desk.i18n.model.Case.case_id,
  requestor_idLabel                       : Desk.i18n.model.Case.requestor_id,
  project_idLabel                         : Desk.i18n.model.Case.project_id,
  case_nbrLabel                           : Desk.i18n.model.Case.case_nbr,
  case_typeLabel                          : Desk.i18n.model.Case.case_type,
  stateLabel                              : Desk.i18n.model.Case.state,
  displayLabel                            : Desk.i18n.model.Case.display,
  descriptionLabel                        : Desk.i18n.model.Case.description,
  tagsLabel                               : Desk.i18n.model.Case.tags,
  estimated_hoursLabel                    : Desk.i18n.model.Case.estimated_hours,
  actual_hoursLabel                       : Desk.i18n.model.Case.actual_hours,
  is_billableLabel                        : Desk.i18n.model.Case.is_billable,
  audit_created_byLabel                   : Desk.i18n.model.Case.audit_created_by,
  audit_updated_byLabel                   : Desk.i18n.model.Case.audit_updated_by,
  audit_created_atLabel                   : Desk.i18n.model.Case.audit_created_at,
  audit_updated_atLabel                   : Desk.i18n.model.Case.audit_updated_at,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'case_id',
      value       : this.record.get('case_id')
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
              name         : 'case_nbr',
              fieldLabel   : me.case_nbrLabel,
              emptyText    : 'auto-generated on save',
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true,
              disabled     : true
            },
            {
              xtype        : 'textfield',
              name         : 'state',
              fieldLabel   : me.stateLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true,
              disabled     : true
            },
            {
              xtype        : 'textfield',
              name         : 'display',
              fieldLabel   : me.displayLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            { xtype             : 'buildit-Locator',
              name              : 'project_id',
              fieldLabel        : this.project_idLabel,
              allowBlank        : true,
              store             : Ext.create('Desk.store.Project',{pageSize: 20}),
              displayField      : 'display',
              queryField        : 'display',
              valueField        : 'project_id',
              itemTpl           : '{display}',
              gotoTarget        : 'desk-projects-Inspector'
            },
            { xtype             : 'buildit-Lookup',
              name              : 'case_type',
              fieldLabel        : this.case_typeLabel,
              allowBlank        : true,
              category          : 'CASE_TYPE'
            },
            {
              xtype        : 'textarea',
              name         : 'description',
              fieldLabel   : me.descriptionLabel,
              maxLength    : 2000,
              minLength    : 0,
              allowBlank   : true
            },
            // {
            //   xtype        : 'textfield',
            //   name         : 'tags',
            //   fieldLabel   : me.tagsLabel,
            //   maxLength    : 200,
            //   minLength    : 0,
            //   allowBlank   : true
            // },
            // {
            //   xtype        : 'numberfield',
            //   name         : 'estimated_hours',
            //   fieldLabel   : me.estimated_hoursLabel,
            //   allowBlank   : true,
            //   minValue     : 0,
            //   maxValue     : 100
            // },
            // {
            //   xtype        : 'numberfield',
            //   name         : 'actual_hours',
            //   fieldLabel   : me.actual_hoursLabel,
            //   allowBlank   : true,
            //     minValue     : 0,
            //     maxValue     : 100
            // },
            {
              xtype        : 'checkbox',
              name         : 'is_billable',
              fieldLabel   : me.is_billableLabel
            },
            { xtype             : 'buildit-Locator',
              store             : Ext.create('Buildit.store.User',{pageSize: 20}),
              displayField      : 'full_name',
              queryField        : 'full_name',
              valueField        : 'user_id',
              itemTpl           : '{full_name}',
              name              : 'requestor_id',
              fieldLabel        : this.requestor_idLabel,
              allowBlank        : true,
              disabled          : true,
              emptyText         : 'auto-populated on save'
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
      title       : 'Case',
      subtitle    : 'Edit Case'
    });
    // TITLES (End)

    this.callParent();

  }  // initComponent

}); // Ext.define('Desk.view.cases.Form'
