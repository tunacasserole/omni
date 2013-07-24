Ext.define('Omni.view.colors.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-colors-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: true,

  store: Ext.create('Omni.store.Color'),

  contextMenuConfig: {
    xtype: 'omni-colors-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-colors-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-colors-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  color_idLabel:                          Omni.i18n.model.Color.color_id,
  displayLabel:                           Omni.i18n.model.Color.display,
  color_nbrLabel:                         Omni.i18n.model.Color.color_nbr,
  descriptionLabel:                       Omni.i18n.model.Color.description,
  short_nameLabel:                        Omni.i18n.model.Color.short_name,
  concatenated_nameLabel:                 Omni.i18n.model.Color.concatenated_name,
  is_plaidLabel:                          Omni.i18n.model.Color.is_plaid,
  is_stripeLabel:                         Omni.i18n.model.Color.is_stripe,
  color_familyLabel:                      Omni.i18n.model.Color.color_family,
  is_discontinuedLabel:                   Omni.i18n.model.Color.is_discontinued,
  is_destroyedLabel:                      Omni.i18n.model.Color.is_destroyed,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Colors',
  subtitle:  'Create and maintain Colors',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.color_idLabel,                      dataIndex: 'color_id',                    flex: 1 },    
        { header: this.displayLabel,                       dataIndex: 'display',                     flex: 1 },    
        { header: this.color_nbrLabel,                     dataIndex: 'color_nbr',                   flex: 1 },    
        { header: this.descriptionLabel,                   dataIndex: 'description',                 flex: 1 },    
        { header: this.short_nameLabel,                    dataIndex: 'short_name',                  flex: 1 },    
        { header: this.concatenated_nameLabel,             dataIndex: 'concatenated_name',           flex: 1 },    
        { header: this.is_plaidLabel,                      dataIndex: 'is_plaid',                    flex: 1 },    
        { header: this.is_stripeLabel,                     dataIndex: 'is_stripe',                   flex: 1 },    
        { header: this.color_familyLabel,                  dataIndex: 'color_family',                flex: 1 },    
        { header: this.is_discontinuedLabel,               dataIndex: 'is_discontinued',             flex: 1 },    
        { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});