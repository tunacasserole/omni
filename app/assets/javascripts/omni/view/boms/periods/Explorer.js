Ext.define('Omni.view.periods.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-periods-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Period'),

  contextMenuConfig : {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-periods-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-periods-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  period_idLabel:                         Omni.i18n.model.Period.period_id,
  displayLabel:                           Omni.i18n.model.Period.display,
  start_dateLabel:                        Omni.i18n.model.Period.start_date,
  end_dateLabel:                          Omni.i18n.model.Period.end_date,
  year_numberLabel:                       Omni.i18n.model.Period.year_number,
  period_numberLabel:                     Omni.i18n.model.Period.period_number,
  is_destroyedLabel:                      Omni.i18n.model.Period.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Periods',
  subtitle:  'Create and maintain Periods',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.period_idLabel,
          dataIndex    : 'period_id',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : this.start_dateLabel,
          dataIndex    : 'start_date',
          flex         : 1
        },
        {
          header       : this.end_dateLabel,
          dataIndex    : 'end_date',
          flex         : 1
        },
        {
          header       : this.year_numberLabel,
          dataIndex    : 'year_number',
          flex         : 1
        },
        {
          header       : this.period_numberLabel,
          dataIndex    : 'period_number',
          flex         : 1
        },
        {
          header       : this.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
