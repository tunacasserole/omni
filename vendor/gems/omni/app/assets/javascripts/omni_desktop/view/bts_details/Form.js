Ext.define('Omni.view.bts_details.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-bts_details-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'bts_detail_id',
      value:      this.record.get('bts_detail_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      bts_detail_idLabel:                     Omni.i18n.model.BtsDetail.bts_detail_id,    
      bts_idLabel:                            Omni.i18n.model.BtsDetail.bts_id,    
      sku_idLabel:                            Omni.i18n.model.BtsDetail.sku_id,    
      location_idLabel:                       Omni.i18n.model.BtsDetail.location_id,    
      data_sourceLabel:                       Omni.i18n.model.BtsDetail.data_source,    
      mark_stockLabel:                        Omni.i18n.model.BtsDetail.mark_stock,
      mark_sizeLabel:                         Omni.i18n.model.BtsDetail.mark_size,            
      on_handLabel:                           Omni.i18n.model.BtsDetail.on_hand,    
      work_ipLabel:                           Omni.i18n.model.BtsDetail.work_ip,    
      purchase_ipLabel:                       Omni.i18n.model.BtsDetail.purchase_ip,    
      wipLabel:                               Omni.i18n.model.BtsDetail.wip,    
      allocatedLabel:                         Omni.i18n.model.BtsDetail.allocated,    
      in_transitLabel:                        Omni.i18n.model.BtsDetail.in_transit,    
      ytdLabel:                               Omni.i18n.model.BtsDetail.ytd,    
      py1Label:                               Omni.i18n.model.BtsDetail.py1,    
      py2Label:                               Omni.i18n.model.BtsDetail.py2,    
      projectedLabel:                         Omni.i18n.model.BtsDetail.projected,    
      versionLabel:                           Omni.i18n.model.BtsDetail.version,    
      audit_updated_atLabel:                  Omni.i18n.model.BtsDetail.audit_updated_at,    
      audit_created_atLabel:                  Omni.i18n.model.BtsDetail.audit_created_at,    
      audit_created_byLabel:                  Omni.i18n.model.BtsDetail.audit_created_by,    
      audit_updated_byLabel:                  Omni.i18n.model.BtsDetail.audit_updated_by,    
      is_destroyedLabel:                      Omni.i18n.model.BtsDetail.is_destroyed    
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

            // { xtype: 'textfield', name: 'bts_detail_id',                  fieldLabel: this.bts_detail_idLabel               , allowBlank: true, disabled: true },    
            // { xtype: 'textfield', name: 'bts_id',                         fieldLabel: this.bts_idLabel                      , allowBlank: true, disabled: true },    
            { name: 'sku_id', fieldLabel: this.sku_idLabel, allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Sku',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'sku_id', itemTpl:'{display}' },      
            // { name: 'location_id', fieldLabel: this.location_idLabel, allowBlank: true,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' }, 
            { name: 'data_source', fieldLabel: this.data_sourceLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'DATA_SOURCE' },
            { xtype: 'textfield', name: 'mark_stock',                     fieldLabel: this.mark_stockLabel                  , allowBlank: true, disabled: true },    
            { xtype: 'textfield', name: 'mark_size',                      fieldLabel: this.mark_sizeLabel                   , allowBlank: true, disabled: true },                
            { xtype: 'textfield', name: 'on_hand',                        fieldLabel: this.on_handLabel                     , allowBlank: true, disabled: true },    
            // { xtype: 'textfield', name: 'work_ip',                        fieldLabel: this.work_ipLabel                     , allowBlank: true, disabled: true },    
            // { xtype: 'textfield', name: 'purchase_ip',                    fieldLabel: this.purchase_ipLabel                 , allowBlank: true, disabled: true },    
            { xtype: 'textfield', name: 'wip',                            fieldLabel: this.wipLabel                         , allowBlank: true, disabled: true },    
            { xtype: 'textfield', name: 'allocated',                      fieldLabel: this.allocatedLabel                   , allowBlank: true, disabled: true },    
            { xtype: 'textfield', name: 'in_transit',                     fieldLabel: this.in_transitLabel                  , allowBlank: true, disabled: true },    
            { xtype: 'textfield', name: 'ytd ',                           fieldLabel: this.ytdLabel                   , allowBlank: true, disabled: true },    
            { xtype: 'textfield', name: 'py1',                            fieldLabel: this.py1Label                         , allowBlank: true, disabled: true },    
            { xtype: 'textfield', name: 'py2',                            fieldLabel: this.py2Label                         , allowBlank: true, disabled: true },    
            { xtype: 'textfield', name: 'projected',                      fieldLabel: this.projectedLabel                   , allowBlank: true, disabled: true },    
            // { xtype: 'textfield', name: 'version',                        fieldLabel: this.versionLabel                     , allowBlank: true, disabled: true },    
            // { xtype: 'textfield', name: 'audit_updated_at',               fieldLabel: this.audit_updated_atLabel            , allowBlank: true, disabled: true },    
            // { xtype: 'textfield', name: 'audit_created_at',               fieldLabel: this.audit_created_atLabel            , allowBlank: true, disabled: true },    
            // { xtype: 'textfield', name: 'audit_created_by',               fieldLabel: this.audit_created_byLabel            , allowBlank: true, disabled: true },    
            // { xtype: 'textfield', name: 'audit_updated_by',               fieldLabel: this.audit_updated_byLabel            , allowBlank: true, disabled: true },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit BtsDetails',
      newTitle: 'New Bts Detail',
      newSubtitle: 'Complete the following to create a new Bts Detail'
    });
    // TITLES (End)

    this.callParent();
    
  }

});