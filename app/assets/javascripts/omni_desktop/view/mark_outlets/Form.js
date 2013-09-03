Ext.define('Omni.view.mark_outlets.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-mark_outlets-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'outlet_nbr',
      value:      this.record.get('outlet_nbr')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      outlet_nbrLabel:                        Omni.i18n.model.MarkOutlet.outlet_nbr,    
      displayLabel:                           Omni.i18n.model.MarkOutlet.display,    
      address1Label:                          Omni.i18n.model.MarkOutlet.address1,    
      address2Label:                          Omni.i18n.model.MarkOutlet.address2,    
      cityLabel:                              Omni.i18n.model.MarkOutlet.city,    
      state_idLabel:                          Omni.i18n.model.MarkOutlet.state_id,    
      zip_codeLabel:                          Omni.i18n.model.MarkOutlet.zip_code,    
      phone_nbrLabel:                         Omni.i18n.model.MarkOutlet.phone_nbr,    
      orig_outLabel:                          Omni.i18n.model.MarkOutlet.orig_out,    
      remits_taxLabel:                        Omni.i18n.model.MarkOutlet.remits_tax,    
      taxed_by1Label:                         Omni.i18n.model.MarkOutlet.taxed_by1,    
      taxed_by2Label:                         Omni.i18n.model.MarkOutlet.taxed_by2,    
      taxed_by3Label:                         Omni.i18n.model.MarkOutlet.taxed_by3,    
      taxed_by4Label:                         Omni.i18n.model.MarkOutlet.taxed_by4,    
      activeLabel:                            Omni.i18n.model.MarkOutlet.active,    
      informationLabel:                       Omni.i18n.model.MarkOutlet.information,    
      whseLabel:                              Omni.i18n.model.MarkOutlet.whse,    
      emailLabel:                             Omni.i18n.model.MarkOutlet.email,    
      tax_freeLabel:                          Omni.i18n.model.MarkOutlet.tax_free,    
      tax_free_startLabel:                    Omni.i18n.model.MarkOutlet.tax_free_start,    
      tax_free_stopLabel:                     Omni.i18n.model.MarkOutlet.tax_free_stop,    
      location_idLabel:                       Omni.i18n.model.MarkOutlet.location_id    
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

            { xtype: 'textfield', name: 'outlet_nbr',                     fieldLabel: this.outlet_nbrLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'address1',                       fieldLabel: this.address1Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'address2',                       fieldLabel: this.address2Label                    , allowBlank: false },    
            { xtype: 'textfield', name: 'city',                           fieldLabel: this.cityLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'state_id',                       fieldLabel: this.state_idLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'zip_code',                       fieldLabel: this.zip_codeLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'phone_nbr',                      fieldLabel: this.phone_nbrLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'orig_out',                       fieldLabel: this.orig_outLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'remits_tax',                     fieldLabel: this.remits_taxLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'taxed_by1',                      fieldLabel: this.taxed_by1Label                   , allowBlank: false },    
            { xtype: 'textfield', name: 'taxed_by2',                      fieldLabel: this.taxed_by2Label                   , allowBlank: false },    
            { xtype: 'textfield', name: 'taxed_by3',                      fieldLabel: this.taxed_by3Label                   , allowBlank: false },    
            { xtype: 'textfield', name: 'taxed_by4',                      fieldLabel: this.taxed_by4Label                   , allowBlank: false },    
            { xtype: 'textfield', name: 'active',                         fieldLabel: this.activeLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'information',                    fieldLabel: this.informationLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'whse',                           fieldLabel: this.whseLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'email',                          fieldLabel: this.emailLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'tax_free',                       fieldLabel: this.tax_freeLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'tax_free_start',                 fieldLabel: this.tax_free_startLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'tax_free_stop',                  fieldLabel: this.tax_free_stopLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'location_id',                    fieldLabel: this.location_idLabel                 , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit MarkOutlets',
      newTitle: 'New Mark Outlet',
      newSubtitle: 'Complete the following to create a new Mark Outlet'
    });
    // TITLES (End)

    this.callParent();
    
  }

});