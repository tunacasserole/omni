Ext.define('Buildit.view.events.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.buildit-events-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  store: Ext.create('Buildit.store.Event'),

  contextMenuConfig: {
    xtype: 'buildit-events-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'buildit-events-Form'
  }],

  inspectorConfig: {
    xtype: 'buildit-events-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  event_idLabel:                          Buildit.i18n.model.Event.event_id,
  eventable_idLabel:                      Buildit.i18n.model.Event.eventable_id,
  eventable_typeLabel:                    Buildit.i18n.model.Event.eventable_type,
  event_typeLabel:                        Buildit.i18n.model.Event.event_type,
  user_idLabel:                           Buildit.i18n.model.Event.user_id,
  occurred_atLabel:                       Buildit.i18n.model.Event.occurred_at,
  messageLabel:                           Buildit.i18n.model.Event.message,
  revision_numberLabel:                   Buildit.i18n.model.Event.revision_number,
  is_destroyedLabel:                      Buildit.i18n.model.Event.is_destroyed,
  titleLabel:                             Buildit.i18n.model.Event.title,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Events',
  subtitle:  'Create and maintain Events',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.event_idLabel,                      dataIndex: 'event_id',                    flex: 1 },    
        { header: this.eventable_idLabel,                  dataIndex: 'eventable_id',                flex: 1 },    
        { header: this.eventable_typeLabel,                dataIndex: 'eventable_type',              flex: 1 },    
        { header: this.event_typeLabel,                    dataIndex: 'event_type',                  flex: 1 },    
        { header: this.user_idLabel,                       dataIndex: 'user_id',                     flex: 1 },    
        { header: this.occurred_atLabel,                   dataIndex: 'occurred_at',                 flex: 1 },    
        { header: this.messageLabel,                       dataIndex: 'message',                     flex: 1 },    
        { header: this.revision_numberLabel,               dataIndex: 'revision_number',             flex: 1 },    
        { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 },    
        { header: this.titleLabel,                         dataIndex: 'title',                       flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});