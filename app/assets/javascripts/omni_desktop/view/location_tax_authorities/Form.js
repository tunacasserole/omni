Ext.define('Omni.view.location_tax_authorities.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-location_tax_authorities-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      location_idLabel:                           Omni.i18n.model.LocationTaxAuthority.location_id,
      tax_authority_idLabel:                      Omni.i18n.model.LocationTaxAuthority.tax_authority_id
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype: 'fieldset',
          title: 'General',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' },
            { name: 'tax_authority_id',               fieldLabel: this.tax_authority_idLabel,           allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.TaxAuthority',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'tax_authority_id', itemTpl:'{display}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
