Ext.define('Omni.view.bts.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-bts-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: true,
  allowEdit: true,

  store: Ext.create('Omni.store.Bts'),

  contextMenuConfig: {
    xtype: 'omni-bts-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-bts-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-bts-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  bts_idLabel:                     Omni.i18n.model.Bts.bts_id,
  forecast_profile_idLabel:               Omni.i18n.model.Bts.forecast_profile_id,
  region_idLabel:                         Omni.i18n.model.Bts.region_id,
  location_idLabel:                       Omni.i18n.model.Bts.location_id,
  department_idLabel:                     Omni.i18n.model.Bts.department_id,
  classification_idLabel:                 Omni.i18n.model.Bts.classification_id,
  subclass_idLabel:                       Omni.i18n.model.Bts.subclass_id,
  style_idLabel:                          Omni.i18n.model.Bts.style_id,
  sku_idLabel:                            Omni.i18n.model.Bts.sku_id,
  color_idLabel:                          Omni.i18n.model.Bts.color_id,
  stateLabel:                             Omni.i18n.model.Bts.state,
  displayLabel:                           Omni.i18n.model.Bts.display,
  descriptionLabel:                       Omni.i18n.model.Bts.description,
  plan_yearLabel:                         Omni.i18n.model.Bts.plan_year,
  bts_typeLabel:                          Omni.i18n.model.Bts.bts_type,
  versionLabel:                           Omni.i18n.model.Bts.version,
  audit_updated_atLabel:                  Omni.i18n.model.Bts.audit_updated_at,
  audit_created_atLabel:                  Omni.i18n.model.Bts.audit_created_at,
  audit_created_byLabel:                  Omni.i18n.model.Bts.audit_created_by,
  audit_updated_byLabel:                  Omni.i18n.model.Bts.audit_updated_by,
  is_destroyedLabel:                      Omni.i18n.model.Bts.is_destroyed,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Back to School Report',
  subtitle:  'Run and review the BTS report',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.stateLabel,                         dataIndex: 'state',                       flex: 1 },    
        { header: this.displayLabel,   editor:   {},         dataIndex: 'display',                     flex: 1 },    
        // { header: this.bts_idLabel,                 dataIndex: 'bts_id',               flex: 1 },    
        // { header: this.forecast_profile_idLabel,           dataIndex: 'forecast_profile_display',         flex: 1 },    
        // { header: this.region_displayLabel,                     dataIndex: 'region_display',                   flex: 1 },    
        // { header: this.location_idLabel,                   dataIndex: 'location_display',                 flex: 1 },    
        { header: this.department_idLabel,                 dataIndex: 'department_display',               flex: 1 },    
        { header: this.classification_idLabel,               dataIndex: 'classification_display',                    flex: 1 },    
        { header: this.subclass_idLabel,                   dataIndex: 'subclass_display',                 flex: 1 },    
        // { header: this.style_idLabel,                      dataIndex: 'style_display',                    flex: 1 },    
        // { header: this.sku_idLabel,                        dataIndex: 'sku_display',                      flex: 1 },    
        // { header: this.color_displayLabel,                      dataIndex: 'color_display',                    flex: 1 },    
        // { header: this.descriptionLabel,                   dataIndex: 'description',                 flex: 1 },    
        // { header: this.plan_yearLabel,                     dataIndex: 'plan_year',                   flex: 1 },    
        // { header: this.bts_typeLabel,               dataIndex: 'bts_type',             flex: 1 },    
        // { header: this.versionLabel,                       dataIndex: 'version',                     flex: 1 },    
        // { header: this.audit_updated_atLabel,              dataIndex: 'audit_updated_at',            flex: 1 },    
        // { header: this.audit_created_atLabel,              dataIndex: 'audit_created_at',            flex: 1 },    
        // { header: this.audit_created_byLabel,              dataIndex: 'audit_created_by',            flex: 1 },    
        // { header: this.audit_updated_byLabel,              dataIndex: 'audit_updated_by',            flex: 1 },    
        // { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});