Ext.define('Omni.view.bts_styles.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-bts_styles-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'bts_style_id',
      value:      this.record.get('bts_style_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      bts_style_idLabel:                      Omni.i18n.model.BtsStyle.bts_style_id,    
      bts_idLabel:                            Omni.i18n.model.BtsStyle.bts_id,    
      style_idLabel:                          Omni.i18n.model.BtsStyle.style_id,    
      location_idLabel:                       Omni.i18n.model.BtsStyle.location_id,    
      data_sourceLabel:                       Omni.i18n.model.BtsStyle.data_source,    
      on_handLabel:                           Omni.i18n.model.BtsStyle.on_hand,    
      wipLabel:                               Omni.i18n.model.BtsStyle.wip,    
      allocatedLabel:                         Omni.i18n.model.BtsStyle.allocated,    
      transitLabel:                        Omni.i18n.model.BtsStyle.transit,    
      ytdLabel:                               Omni.i18n.model.BtsStyle.ytd,    
      py1Label:                               Omni.i18n.model.BtsStyle.py1,    
      py2Label:                               Omni.i18n.model.BtsStyle.py2,    
      projectionLabel:                        Omni.i18n.model.BtsStyle.projection,    
      projection_totalLabel:                  Omni.i18n.model.BtsStyle.projection_total,    
      projection_devLabel:                    Omni.i18n.model.BtsStyle.projection_dev,    
      projection_dev_pctLabel:                Omni.i18n.model.BtsStyle.projection_dev_pct,    
      projection_smoothLabel:                 Omni.i18n.model.BtsStyle.projection_smooth,    
      converted_needLabel:                    Omni.i18n.model.BtsStyle.converted_need,    
      generic_needLabel:                      Omni.i18n.model.BtsStyle.generic_need,    
      needLabel:                              Omni.i18n.model.BtsStyle.need,    
      useable_ohLabel:                        Omni.i18n.model.BtsStyle.useable_oh,    
      unuseable_ohLabel:                      Omni.i18n.model.BtsStyle.unuseable_oh,    
      total_ohLabel:                          Omni.i18n.model.BtsStyle.total_oh,    
      complete_ooLabel:                       Omni.i18n.model.BtsStyle.complete_oo,    
      complete_coverageLabel:                 Omni.i18n.model.BtsStyle.complete_coverage,    
      versionLabel:                           Omni.i18n.model.BtsStyle.version,    
      audit_updated_atLabel:                  Omni.i18n.model.BtsStyle.audit_updated_at,    
      audit_created_atLabel:                  Omni.i18n.model.BtsStyle.audit_created_at,    
      audit_created_byLabel:                  Omni.i18n.model.BtsStyle.audit_created_by,    
      audit_updated_byLabel:                  Omni.i18n.model.BtsStyle.audit_updated_by,    
      is_destroyedLabel:                      Omni.i18n.model.BtsStyle.is_destroyed    
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

            { xtype: 'textfield', name: 'bts_style_id',                   fieldLabel: this.bts_style_idLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'bts_id',                         fieldLabel: this.bts_idLabel                      , allowBlank: false },    
            { xtype: 'textfield', name: 'style_id',                       fieldLabel: this.style_idLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'location_id',                    fieldLabel: this.location_idLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'data_source',                    fieldLabel: this.data_sourceLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'on_hand',                        fieldLabel: this.on_handLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'wip',                            fieldLabel: this.wipLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'allocated',                      fieldLabel: this.allocatedLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'transit',                     fieldLabel: this.transitLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'ytd',                            fieldLabel: this.ytdLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'py1',                            fieldLabel: this.py1Label                         , allowBlank: false },    
            { xtype: 'textfield', name: 'py2',                            fieldLabel: this.py2Label                         , allowBlank: false },    
            { xtype: 'textfield', name: 'projection',                     fieldLabel: this.projectionLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_total',               fieldLabel: this.projection_totalLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_dev',                 fieldLabel: this.projection_devLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_dev_pct',             fieldLabel: this.projection_dev_pctLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'projection_smooth',              fieldLabel: this.projection_smoothLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'converted_need',                 fieldLabel: this.converted_needLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'generic_need',                   fieldLabel: this.generic_needLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'need',                           fieldLabel: this.needLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'useable_oh',                     fieldLabel: this.useable_ohLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'unuseable_oh',                   fieldLabel: this.unuseable_ohLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'total_oh',                       fieldLabel: this.total_ohLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'complete_oo',                    fieldLabel: this.complete_ooLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'complete_coverage',              fieldLabel: this.complete_coverageLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'version',                        fieldLabel: this.versionLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'audit_updated_at',               fieldLabel: this.audit_updated_atLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'audit_created_at',               fieldLabel: this.audit_created_atLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'audit_created_by',               fieldLabel: this.audit_created_byLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'audit_updated_by',               fieldLabel: this.audit_updated_byLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit BtsStyles',
      newTitle: 'New Bts Style',
      newSubtitle: 'Complete the following to create a new Bts Style'
    });
    // TITLES (End)

    this.callParent();
    
  }

});