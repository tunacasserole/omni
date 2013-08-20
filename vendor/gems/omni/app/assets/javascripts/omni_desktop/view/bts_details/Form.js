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
      on_handLabel:                           Omni.i18n.model.BtsDetail.on_hand,    
      wipLabel:                               Omni.i18n.model.BtsDetail.wip,    
      allocatedLabel:                         Omni.i18n.model.BtsDetail.allocated,    
      in_transitLabel:                        Omni.i18n.model.BtsDetail.in_transit,    
      ytdLabel:                               Omni.i18n.model.BtsDetail.ytd,    
      py1Label:                               Omni.i18n.model.BtsDetail.py1,    
      py2Label:                               Omni.i18n.model.BtsDetail.py2,    
      projectionLabel:                        Omni.i18n.model.BtsDetail.projection,    
      projection_totalLabel:                  Omni.i18n.model.BtsDetail.projection_total,    
      projection_devLabel:                    Omni.i18n.model.BtsDetail.projection_dev,    
      projection_dev_pctLabel:                Omni.i18n.model.BtsDetail.projection_dev_pct,    
      projection_smoothedLabel:               Omni.i18n.model.BtsDetail.projection_smoothed,    
      converted_needLabel:                    Omni.i18n.model.BtsDetail.converted_need,    
      generic_needLabel:                      Omni.i18n.model.BtsDetail.generic_need,    
      needLabel:                              Omni.i18n.model.BtsDetail.need,    
      useable_on_handLabel:                   Omni.i18n.model.BtsDetail.useable_on_hand,    
      unuseable_on_handLabel:                 Omni.i18n.model.BtsDetail.unuseable_on_hand,    
      total_on_handLabel:                     Omni.i18n.model.BtsDetail.total_on_hand,    
      complete_ooLabel:                       Omni.i18n.model.BtsDetail.complete_oo,    
      complete_coverageLabel:                 Omni.i18n.model.BtsDetail.complete_coverage,    
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

            // { xtype: 'textfield', name: 'bts_detail_id',                  fieldLabel: this.bts_detail_idLabel               , allowBlank: false },    
            // { xtype: 'textfield', name: 'bts_id',                         fieldLabel: this.bts_idLabel                      , allowBlank: false },    
            // { xtype: 'textfield', name: 'sku_id',                         fieldLabel: this.sku_idLabel                      , allowBlank: false },    
            // { name: 'location_id',   fieldLabel: this.location_idLabel  , allowBlank: true , xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 25}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' }, 
            { xtype: 'buildit-Lookup', name: 'data_source',   category: 'DATA_SOURCE',            fieldLabel: this.data_sourceLabel , allowBlank: false },    
            { xtype: 'textfield', name: 'on_hand',                        fieldLabel: this.on_handLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'wip',                            fieldLabel: this.wipLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'allocated',                      fieldLabel: this.allocatedLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'in_transit',                     fieldLabel: this.in_transitLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'ytd',                            fieldLabel: this.ytdLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'py1',                            fieldLabel: this.py1Label                         , allowBlank: false },    
            { xtype: 'textfield', name: 'py2',                            fieldLabel: this.py2Label                         , allowBlank: false },    
            { xtype: 'textfield', name: 'projection',                     fieldLabel: this.projectionLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_total',               fieldLabel: this.projection_totalLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_dev',                 fieldLabel: this.projection_devLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_dev_pct',             fieldLabel: this.projection_dev_pctLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_smoothed',            fieldLabel: this.projection_smoothedLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'converted_need',                 fieldLabel: this.converted_needLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'generic_need',                   fieldLabel: this.generic_needLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'need',                           fieldLabel: this.needLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'useable_on_hand',                fieldLabel: this.useable_on_handLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'unuseable_on_hand',              fieldLabel: this.unuseable_on_handLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'total_on_hand',                  fieldLabel: this.total_on_handLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'complete_oo',                    fieldLabel: this.complete_ooLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'complete_coverage',              fieldLabel: this.complete_coverageLabel           , allowBlank: false },    
            // { xtype: 'textfield', name: 'version',                        fieldLabel: this.versionLabel                     , allowBlank: false },    
            // { xtype: 'textfield', name: 'audit_updated_at',               fieldLabel: this.audit_updated_atLabel            , allowBlank: false },    
            // { xtype: 'textfield', name: 'audit_created_at',               fieldLabel: this.audit_created_atLabel            , allowBlank: false },    
            // { xtype: 'textfield', name: 'audit_created_by',               fieldLabel: this.audit_created_byLabel            , allowBlank: false },    
            // { xtype: 'textfield', name: 'audit_updated_by',               fieldLabel: this.audit_updated_byLabel            , allowBlank: false },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
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