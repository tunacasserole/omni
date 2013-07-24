Ext.define('Omni.view.colors.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-colors-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'color_id',
      value:      this.record.get('color_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      color_idLabel:                          Omni.i18n.model.Color.color_id,    
      displayLabel:                           Omni.i18n.model.Color.display,    
      color_nbrLabel:                         Omni.i18n.model.Color.color_nbr,    
      descriptionLabel:                       Omni.i18n.model.Color.description,    
      short_nameLabel:                        Omni.i18n.model.Color.short_name,    
      concatenated_nameLabel:                 Omni.i18n.model.Color.concatenated_name,    
      is_plaidLabel:                          Omni.i18n.model.Color.is_plaid,    
      is_stripeLabel:                         Omni.i18n.model.Color.is_stripe,    
      color_familyLabel:                      Omni.i18n.model.Color.color_family,    
      is_discontinuedLabel:                   Omni.i18n.model.Color.is_discontinued,    
      is_destroyedLabel:                      Omni.i18n.model.Color.is_destroyed    
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

            { xtype: 'textfield', name: 'color_id',                       fieldLabel: this.color_idLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'color_nbr',                      fieldLabel: this.color_nbrLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'short_name',                     fieldLabel: this.short_nameLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'concatenated_name',              fieldLabel: this.concatenated_nameLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'is_plaid',                       fieldLabel: this.is_plaidLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'is_stripe',                      fieldLabel: this.is_stripeLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'color_family',                   fieldLabel: this.color_familyLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'is_discontinued',                fieldLabel: this.is_discontinuedLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Colors',
      newTitle: 'New Color',
      newSubtitle: 'Complete the following to create a new Color'
    });
    // TITLES (End)

    this.callParent();
    
  }

});