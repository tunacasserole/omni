Ext.define('Omni.view.logs.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-logs-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: true,

  store: Ext.create('Omni.store.Log'),

  contextMenuConfig: {
    xtype: 'omni-logs-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-logs-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-logs-Inspector'
  },
  
  filters: [
    ['type_info',     "info"],
    ['type_debug',   "debug"]
  ],
  
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  log_idLabel:                            Omni.i18n.model.Log.log_id,
  logable_idLabel:                        Omni.i18n.model.Log.logable_id,
  logable_typeLabel:                      Omni.i18n.model.Log.logable_type,
  log_nbrLabel:                           Omni.i18n.model.Log.log_nbr,
  log_typeLabel:                          Omni.i18n.model.Log.log_type,
  log_titleLabel:                         Omni.i18n.model.Log.log_title,
  log_messageLabel:                       Omni.i18n.model.Log.log_message,
  is_destroyedLabel:                      Omni.i18n.model.Log.is_destroyed,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Logs',
  subtitle:  'Create and maintain Logs',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
//         { header: this.log_idLabel,                        dataIndex: 'log_id',                      flex: 1 },    
//         { header: this.logable_idLabel,                    dataIndex: 'logable_id',                  flex: 1 },    
//         { header: this.logable_typeLabel,                  dataIndex: 'logable_type',                flex: 1 }, 
        { header: this.log_messageLabel,                   dataIndex: 'log_message',                 flex: 3 },       
        { header: this.log_nbrLabel,                       dataIndex: 'log_nbr',                     flex: 1 },    
        { header: this.log_typeLabel,                      dataIndex: 'log_type',                    flex: 1 },    
        { header: this.log_titleLabel,                     dataIndex: 'log_title',                   flex: 1 },    
//         { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});