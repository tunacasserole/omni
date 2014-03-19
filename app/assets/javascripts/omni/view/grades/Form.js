Ext.define('Omni.view.grades.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-grades-Form',


  // LABELS (Start) =======================================================================
  grade_idLabel                           : Omni.i18n.model.Grade.grade_id,
  displayLabel                            : Omni.i18n.model.Grade.display,
  grade_nameLabel                         : Omni.i18n.model.Grade.grade_name,
  short_nameLabel                         : Omni.i18n.model.Grade.short_name,
  grade_orderLabel                        : Omni.i18n.model.Grade.grade_order,
  is_destroyedLabel                       : Omni.i18n.model.Grade.is_destroyed,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'grade_id',
      value       : this.record.get('grade_id')
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
              name         : 'display',
              fieldLabel   : me.displayLabel,
              maxLength    : 300,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'grade_name',
              fieldLabel   : me.grade_nameLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'short_name',
              fieldLabel   : me.short_nameLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'grade_order',
              fieldLabel   : me.grade_orderLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'checkbox',
              name         : 'is_destroyed',
              fieldLabel   : me.is_destroyedLabel
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
      title       : 'Grade',
      subtitle    : 'Edit Grade'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Omni.view.grades.Form'