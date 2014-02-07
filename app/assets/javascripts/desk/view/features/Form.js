Ext.define('Desk.view.features.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.desk-features-Form',


  // LABELS (Start) =======================================================================
  feature_idLabel                         : Desk.i18n.model.Feature.feature_id,
  stateLabel                              : Desk.i18n.model.Feature.state,
  displayLabel                            : Desk.i18n.model.Feature.display,
  descriptionLabel                        : Desk.i18n.model.Feature.description,
  release_dateLabel                       : Desk.i18n.model.Feature.release_date,
  is_destroyedLabel                       : Desk.i18n.model.Feature.is_destroyed,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'feature_id',
      value       : this.record.get('feature_id')
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
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'description',
              fieldLabel   : me.descriptionLabel,
              maxLength    : 2000,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'release_date',
              fieldLabel   : me.release_dateLabel,
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
      title       : 'Feature',
      subtitle    : 'Edit Feature'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Desk.view.features.Form'