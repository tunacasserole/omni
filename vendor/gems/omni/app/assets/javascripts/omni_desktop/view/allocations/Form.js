Ext.define('Omni.view.allocations.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-allocations-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'allocation_id',
      value:      this.record.get('allocation_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      allocation_idLabel:                     Omni.i18n.model.Allocation.allocation_id,    
      displayLabel:                           Omni.i18n.model.Allocation.display,    
      allocation_nbrLabel:                    Omni.i18n.model.Allocation.allocation_nbr,    
      stateLabel:                             Omni.i18n.model.Allocation.state,    
      location_idLabel:                       Omni.i18n.model.Allocation.location_id,    
      is_destroyedLabel:                      Omni.i18n.model.Allocation.is_destroyed    
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

            // { xtype: 'textfield', name: 'allocation_id',                  fieldLabel: this.allocation_idLabel               , allowBlank: true },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },    
            { xtype: 'textfield', name: 'allocation_nbr',                 fieldLabel: this.allocation_nbrLabel              , allowBlank: true },    
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: true, disabled: true },    
            { xtype: 'buildit-Locator',   name: 'location_id',          fieldLabel: this.location_idLabel                 , allowBlank: true,  store:   Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Allocations',
      newTitle: 'New Allocation',
      newSubtitle: 'Complete the following to create a new Allocation'
    });
    // TITLES (End)

    this.callParent();
    
  }

});