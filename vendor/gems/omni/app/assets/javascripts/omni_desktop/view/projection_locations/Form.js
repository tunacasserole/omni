Ext.define('Omni.view.projection_locations.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-projection_locations-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'projection_location_id',
      value:      this.record.get('projection_location_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      projection_location_idLabel:            Omni.i18n.model.ProjectionLocation.projection_location_id,    
      projection_idLabel:                     Omni.i18n.model.ProjectionLocation.projection_id,    
      location_idLabel:                       Omni.i18n.model.ProjectionLocation.location_id,    
      displayLabel:                           Omni.i18n.model.ProjectionLocation.display,    
      stateLabel:                             Omni.i18n.model.ProjectionLocation.state,    
      is_destroyedLabel:                      Omni.i18n.model.ProjectionLocation.is_destroyed    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
          /*
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField: 'name', 
              queryField: 'name', 
              valueField: 'value_field', 
              itemTpl:'{name}',
              name: 'attribute_name', 
              fieldLabel: this.attribute_nameLabel, 
              allowBlank: true 
            }
          */

            // { xtype: 'textfield', name: 'projection_location_id',         fieldLabel: this.projection_location_idLabel      , allowBlank: false },    
            // { xtype: 'textfield', name: 'projection_id',                  fieldLabel: this.projection_idLabel               , allowBlank: false },    
            { name: 'location_id', fieldLabel: this.location_idLabel, allowBlank: true,  disabled: true,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },                        
            // { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            // { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: false },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit ProjectionLocations',
      newTitle: 'New Projection Location',
      newSubtitle: 'Complete the following to create a new Projection Location'
    });
    // TITLES (End)

    this.callParent();
    
  }

});