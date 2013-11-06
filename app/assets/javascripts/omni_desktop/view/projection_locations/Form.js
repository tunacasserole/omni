Ext.define('Omni.view.projection_locations.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.omni-projection_locations-Form',


  // LABELS (Start) =======================================================================
  projection_location_idLabel             : Omni.i18n.model.ProjectionLocation.projection_location_id,
  projection_idLabel                      : Omni.i18n.model.ProjectionLocation.projection_id,
  location_idLabel                        : Omni.i18n.model.ProjectionLocation.location_id,
  displayLabel                            : Omni.i18n.model.ProjectionLocation.display,
  approval_dateLabel                      : Omni.i18n.model.ProjectionLocation.approval_date,
  stateLabel                              : Omni.i18n.model.ProjectionLocation.state,
  is_destroyedLabel                       : Omni.i18n.model.ProjectionLocation.is_destroyed,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'projection_location_id',
      value       : this.record.get('projection_location_id')
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
          /*
            {
              xtype        : 'buildit-Locator', 
              store        : Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField : 'name', 
              queryField   : 'name', 
              valueField   : 'value_field', 
              itemTpl      :'{name}',
              name         : 'attribute_name', 
              fieldLabel   : this.attribute_nameLabel, 
              allowBlank   : true 
            }
          */

            {
              xtype        : 'textfield',
              name         : 'projection_location_id',
              fieldLabel   : this.projection_location_idLabel,
              allowBlank   : false
            },    
            {
              xtype        : 'textfield',
              name         : 'projection_id',
              fieldLabel   : this.projection_idLabel,
              allowBlank   : true
            },    
            {
              xtype        : 'textfield',
              name         : 'location_id',
              fieldLabel   : this.location_idLabel,
              allowBlank   : true
            },    
            {
              xtype        : 'textfield',
              name         : 'display',
              fieldLabel   : this.displayLabel,
              allowBlank   : true
            },    
            {
              xtype        : 'textfield',
              name         : 'approval_date',
              fieldLabel   : this.approval_dateLabel,
              allowBlank   : true
            },    
            {
              xtype        : 'textfield',
              name         : 'state',
              fieldLabel   : this.stateLabel,
              allowBlank   : true
            },    
            {
              xtype        : 'textfield',
              name         : 'is_destroyed',
              fieldLabel   : this.is_destroyedLabel,
              allowBlank   : true
            }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'ProjectionLocation',
      subtitle    : 'Edit ProjectionLocation'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Omni.view.projection_locations.Form'