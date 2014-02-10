Ext.define('Desk.view.features.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.desk-features-Form',


  // LABELS (Start) =======================================================================
  feature_idLabel                         : Desk.i18n.model.Feature.feature_id,
  project_idLabel                         : Desk.i18n.model.Feature.project_id,
  feature_nbrLabel                        : Desk.i18n.model.Feature.feature_nbr,
  feature_typeLabel                       : Desk.i18n.model.Feature.feature_type,
  stateLabel                              : Desk.i18n.model.Feature.state,
  displayLabel                            : Desk.i18n.model.Feature.display,
  descriptionLabel                        : Desk.i18n.model.Feature.description,
  release_dateLabel                       : Desk.i18n.model.Feature.release_date,
  estimated_hoursLabel                    : Desk.i18n.model.Feature.estimated_hours,
  actual_hoursLabel                       : Desk.i18n.model.Feature.actual_hours,
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
            // {
            //   xtype        : 'buildit-Locator',
            //   store        : Ext.create('Desk.store.Project',{pageSize: 10}),
            //   displayField : 'display_as',
            //   itemTpl      : '{display_as}',
            //   name         : 'project_id',
            //   fieldLabel   : me.project_idLabel,
            //   initialValue : me.record.get('display_as'),
            //   allowBlank   : false
            // },
            {
              xtype        : 'textfield',
              name         : 'feature_nbr',
              fieldLabel   : me.feature_nbrLabel,
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
            // {
            //   xtype        : 'textfield',
            //   name         : 'feature_type',
            //   fieldLabel   : me.feature_typeLabel,
            //   maxLength    : 200,
            //   minLength    : 0,
            //   allowBlank   : true
            // },
            {
              xtype        : 'textfield',
              name         : 'display',
              fieldLabel   : me.displayLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textarea',
              name         : 'description',
              fieldLabel   : me.descriptionLabel,
              maxLength    : 2000,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'datefield',
              name         : 'release_date',
              fieldLabel   : me.release_dateLabel,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'estimated_hours',
              fieldLabel   : me.estimated_hoursLabel,
              minValue     : 0,
              maxValue     : 100,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'actual_hours',
              fieldLabel   : me.actual_hoursLabel,
              minValue     : 0,
              maxValue     : 100,
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
      title       : 'Feature',
      subtitle    : 'Edit Feature'
    });
    // TITLES (End)

    this.callParent();

  }  // initComponent

}); // Ext.define('Desk.view.features.Form'
