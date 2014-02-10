Ext.define('Desk.view.approvals.Form', {

    extend: 'Buildit.ux.Form',
    alias: 'widget.desk-approvals-Form',

    // LABELS (Start) =======================================================================
    approval_idLabel: Desk.i18n.model.Approval.approval_id,
    approver_idLabel: Desk.i18n.model.Approval.approver_id,
    approval_nbrLabel: Desk.i18n.model.Approval.approval_nbr,
    approval_typeLabel: Desk.i18n.model.Approval.approval_type,
    displayLabel: Desk.i18n.model.Approval.display,
    descriptionLabel: Desk.i18n.model.Approval.description,
    approval_dateLabel: Desk.i18n.model.Approval.approval_date,
    audit_created_byLabel: Desk.i18n.model.Approval.audit_created_by,
    audit_updated_byLabel: Desk.i18n.model.Approval.audit_updated_by,
    audit_created_atLabel: Desk.i18n.model.Approval.audit_created_at,
    audit_updated_atLabel: Desk.i18n.model.Approval.audit_updated_at,
    // LABELS (End)

    initComponent: function() {

      var me = this;

      // FILTER (Start) =======================================================================
      var associativeFilter = {
        property: 'approval_id',
        value: this.record.get('approval_id')
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
                  name: 'approver_id',
                  fieldLabel: this.approver_idLabel,
                  allowBlank: true,
                  disabled: true,
                  emptyText: 'auto-populated on save'
                }, {
                  xtype: 'textfield',
                  name: 'approval_nbr',
                  fieldLabel: me.approval_nbrLabel,
                  maxLength: 200,
                  minLength: 0,
                  allowBlank: true,
                  disabled: true
                }, {
                  //   xtype: 'textfield',
                  //   name: 'approval_type',
                  //   fieldLabel: me.approval_typeLabel,
                  //   allowBlank: true,
                  //   xtype: 'buildit-Lookup',
                  //   category: 'APPROVAL_TYPE'
                  // }, {
                  xtype: 'textfield',
                  name: 'display',
                  fieldLabel: me.displayLabel,
                  maxLength: 200,
                  minLength: 0,
                  allowBlank: false
                // }, {
                //   xtype: 'textarea',
                //   name: 'description',
                //   fieldLabel: me.descriptionLabel,
                //   maxLength: 4000,
                //   minLength: 0,
                //   allowBlank: true
                }, {
                  xtype: 'datefield',
                  name: 'approval_date',
                  fieldLabel: me.approval_dateLabel,
                  maxLength: 100,
                  minLength: 0,
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
          title: 'Approval',
          subtitle: 'Edit Approval'
        });
        // TITLES (End)

        this.callParent();

      } // initComponent

    }); // Ext.define('Desk.view.approvals.Form'
