Ext.define('Omni.view.grits_bts.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-grits_bts-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'tg_sku_id',
      value:      this.record.get('tg_sku_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      tg_sku_idLabel:                         Omni.i18n.model.GritsBts.tg_sku_id,    
      qoh_60Label:                            Omni.i18n.model.GritsBts.qoh_60,    
      qoh_61Label:                            Omni.i18n.model.GritsBts.qoh_61,    
      qoh_62Label:                            Omni.i18n.model.GritsBts.qoh_62,    
      qoh_63Label:                            Omni.i18n.model.GritsBts.qoh_63,    
      qoh_64Label:                            Omni.i18n.model.GritsBts.qoh_64,    
      qoh_65Label:                            Omni.i18n.model.GritsBts.qoh_65,    
      qoh_66Label:                            Omni.i18n.model.GritsBts.qoh_66,    
      qoo_60Label:                            Omni.i18n.model.GritsBts.qoo_60,    
      qoo_61Label:                            Omni.i18n.model.GritsBts.qoo_61,    
      qoo_62Label:                            Omni.i18n.model.GritsBts.qoo_62,    
      qoo_63Label:                            Omni.i18n.model.GritsBts.qoo_63,    
      qoo_64Label:                            Omni.i18n.model.GritsBts.qoo_64,    
      qoo_65Label:                            Omni.i18n.model.GritsBts.qoo_65,    
      qoo_66Label:                            Omni.i18n.model.GritsBts.qoo_66,    
      sold_60Label:                           Omni.i18n.model.GritsBts.sold_60,    
      sold_61Label:                           Omni.i18n.model.GritsBts.sold_61,    
      sold_62Label:                           Omni.i18n.model.GritsBts.sold_62,    
      sold_63Label:                           Omni.i18n.model.GritsBts.sold_63,    
      sold_64Label:                           Omni.i18n.model.GritsBts.sold_64,    
      sold_65Label:                           Omni.i18n.model.GritsBts.sold_65,    
      sold_66Label:                           Omni.i18n.model.GritsBts.sold_66,    
      projected_60Label:                      Omni.i18n.model.GritsBts.projected_60,    
      projected_61Label:                      Omni.i18n.model.GritsBts.projected_61,    
      projected_62Label:                      Omni.i18n.model.GritsBts.projected_62,    
      projected_63Label:                      Omni.i18n.model.GritsBts.projected_63,    
      projected_64Label:                      Omni.i18n.model.GritsBts.projected_64,    
      projected_65Label:                      Omni.i18n.model.GritsBts.projected_65,    
      projected_66Label:                      Omni.i18n.model.GritsBts.projected_66    
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

            { xtype: 'textfield', name: 'tg_sku_id',                      fieldLabel: this.tg_sku_idLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'qoh_60',                         fieldLabel: this.qoh_60Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoh_61',                         fieldLabel: this.qoh_61Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoh_62',                         fieldLabel: this.qoh_62Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoh_63',                         fieldLabel: this.qoh_63Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoh_64',                         fieldLabel: this.qoh_64Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoh_65',                         fieldLabel: this.qoh_65Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoh_66',                         fieldLabel: this.qoh_66Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoo_60',                         fieldLabel: this.qoo_60Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoo_61',                         fieldLabel: this.qoo_61Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoo_62',                         fieldLabel: this.qoo_62Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoo_63',                         fieldLabel: this.qoo_63Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoo_64',                         fieldLabel: this.qoo_64Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoo_65',                         fieldLabel: this.qoo_65Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'qoo_66',                         fieldLabel: this.qoo_66Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'sold_60',                        fieldLabel: this.sold_60Label                     , allowBlank: false },    
            { xtype: 'textfield', name: 'sold_61',                        fieldLabel: this.sold_61Label                     , allowBlank: false },    
            { xtype: 'textfield', name: 'sold_62',                        fieldLabel: this.sold_62Label                     , allowBlank: false },    
            { xtype: 'textfield', name: 'sold_63',                        fieldLabel: this.sold_63Label                     , allowBlank: false },    
            { xtype: 'textfield', name: 'sold_64',                        fieldLabel: this.sold_64Label                     , allowBlank: false },    
            { xtype: 'textfield', name: 'sold_65',                        fieldLabel: this.sold_65Label                     , allowBlank: false },    
            { xtype: 'textfield', name: 'sold_66',                        fieldLabel: this.sold_66Label                     , allowBlank: false },    
            { xtype: 'textfield', name: 'projected_60',                   fieldLabel: this.projected_60Label                , allowBlank: false },    
            { xtype: 'textfield', name: 'projected_61',                   fieldLabel: this.projected_61Label                , allowBlank: false },    
            { xtype: 'textfield', name: 'projected_62',                   fieldLabel: this.projected_62Label                , allowBlank: false },    
            { xtype: 'textfield', name: 'projected_63',                   fieldLabel: this.projected_63Label                , allowBlank: false },    
            { xtype: 'textfield', name: 'projected_64',                   fieldLabel: this.projected_64Label                , allowBlank: false },    
            { xtype: 'textfield', name: 'projected_65',                   fieldLabel: this.projected_65Label                , allowBlank: false },    
            { xtype: 'textfield', name: 'projected_66',                   fieldLabel: this.projected_66Label                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit GritsBts',
      newTitle: 'New Grits Bts',
      newSubtitle: 'Complete the following to create a new Grits Bts'
    });
    // TITLES (End)

    this.callParent();
    
  }

});