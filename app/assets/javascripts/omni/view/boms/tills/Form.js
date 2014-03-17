Ext.define('Omni.view.tills.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-tills-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'till_id',
      value:      this.record.get('till_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      till_idLabel:                           Omni.i18n.model.Till.till_id,    
      displayLabel:                           Omni.i18n.model.Till.display,    
      location_idLabel:                       Omni.i18n.model.Till.location_id,    
      till_nbrLabel:                          Omni.i18n.model.Till.till_nbr,    
      is_destroyedLabel:                      Omni.i18n.model.Till.is_destroyed    
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

            { xtype: 'textfield', name: 'till_id',                        fieldLabel: this.till_idLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'location_id',                    fieldLabel: this.location_idLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'till_nbr',                       fieldLabel: this.till_nbrLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Tills',
      newTitle: 'New Till',
      newSubtitle: 'Complete the following to create a new Till'
    });
    // TITLES (End)

    this.callParent();
    
  }

});