Ext.define('Omni.view.account_grades.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-account_grades-Form',


  // LABELS (Start) =======================================================================
  account_grade_idLabel                   : Omni.i18n.model.AccountGrade.account_grade_id,
  account_idLabel                         : Omni.i18n.model.AccountGrade.account_id,
  grade_idLabel                           : Omni.i18n.model.AccountGrade.grade_id,
  grade_nameLabel                         : Omni.i18n.model.AccountGrade.grade_name,
  displayLabel                            : Omni.i18n.model.AccountGrade.display,
  grade_orderLabel                        : Omni.i18n.model.AccountGrade.grade_order,
  is_destroyedLabel                       : Omni.i18n.model.AccountGrade.is_destroyed,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'account_grade_id',
      value       : this.record.get('account_grade_id')
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
            // {
            //   xtype        : 'buildit-Locator',
            //   store        : Ext.create('Omni.store.Account',{pageSize: 10}),
            //   displayField : 'display',
            //   itemTpl      : '{display}',
            //   name         : 'account_id',
            //   fieldLabel   : me.account_idLabel,
            //   initialValue : me.record.get('display'),
            //   allowBlank   : true
            // },
            {
              xtype        : 'buildit-Locator',
              store        : Ext.create('Omni.store.Grade',{pageSize: 10}),
              displayField : 'display',
              itemTpl      : '{display}',
              name         : 'grade_id',
              fieldLabel   : me.grade_idLabel,
              // initialValue : me.record.get('grade_display'),
              gotoTarget        : 'omni-grades-Inspector',
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'grade_name',
              fieldLabel   : me.grade_nameLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            // {
            //   xtype        : 'textfield',
            //   name         : 'display',
            //   fieldLabel   : me.displayLabel,
            //   maxLength    : 200,
            //   minLength    : 0,
            //   allowBlank   : true
            // },
            {
              xtype        : 'textfield',
              name         : 'grade_order',
              fieldLabel   : me.grade_orderLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            // {
            //   xtype        : 'checkbox',
            //   name         : 'is_destroyed',
            //   fieldLabel   : me.is_destroyedLabel
            // }
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
      title       : 'Account Grade',
      subtitle    : 'Edit Account Grade'
    });
    // TITLES (End)

    this.callParent();

  }  // initComponent

}); // Ext.define('Omni.view.account_grades.Form'
