Ext.define('Omni.view.imports.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-imports-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  store: Ext.create('Omni.store.Import'),

  contextMenuConfig: {
    xtype: 'omni-imports-ExplorerContextMenuAll'
  },

  newForms:[{
    xtype: 'omni-imports-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-imports-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  // import_idLabel:                         Omni.i18n.model.Import.import_id,
  displayLabel:                           Omni.i18n.model.Import.display,
  data_sourceLabel:                       Omni.i18n.model.Import.data_source,
  target_systemLabel:                     Omni.i18n.model.Import.target_system,
  job_typeLabel:                          Omni.i18n.model.Import.job_type,  
  data_sourceLabel:                       Omni.i18n.model.Import.data_source,
  table_nameLabel:                      Omni.i18n.model.Import.table_name,
  start_dateLabel:                        Omni.i18n.model.Import.start_date,
  end_dateLabel:                          Omni.i18n.model.Import.end_date,  
  argument_hashLabel:                     Omni.i18n.model.Import.argument_hash,
  stateLabel:                             Omni.i18n.model.Import.state,
  // is_destroyedLabel:                      Omni.i18n.model.Import.is_destroyed,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Imports',
  subtitle:  'Create and maintain Imports',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.import_idLabel,                     dataIndex: 'import_id',                   flex: 1 },    
        { header: this.displayLabel,                       dataIndex: 'display',                     flex: 3 },    
        { header: this.data_sourceLabel,                 dataIndex: 'data_source',               flex: 1 },    
        { header: this.job_typeLabel,                      dataIndex: 'job_type',                    flex: 1 },    
        { header: this.table_nameLabel,                 dataIndex: 'table_name',               flex: 1 },    
        // { header: this.target_tableLabel,                  dataIndex: 'target_table',                flex: 1 },    
        { header: this.start_dateLabel,                    dataIndex: 'start_date',                  flex: 1,  sortable: true , renderer: Ext.util.Format.dateRenderer('m/d/y') },
        { header: this.end_dateLabel,                      dataIndex: 'end_date',                    flex: 1,  sortable: true , renderer: Ext.util.Format.dateRenderer('m/d/y') },        
        // { header: this.argument_hashLabel,                 dataIndex: 'argument_hash',               flex: 1 },    
        { header: this.stateLabel,                         dataIndex: 'state',                       flex: 1 }    
        // { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});