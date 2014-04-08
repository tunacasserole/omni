Ext.define('Omni.view.account_grades.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.omni-account_grades-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms: [{
    xtype: 'omni-account_grades-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-account_grades-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  account_grade_idLabel: Omni.i18n.model.AccountGrade.account_grade_id,
  account_idLabel: Omni.i18n.model.AccountGrade.account_id,
  grade_idLabel: Omni.i18n.model.AccountGrade.grade_id,
  grade_nameLabel: Omni.i18n.model.AccountGrade.grade_name,
  displayLabel: Omni.i18n.model.AccountGrade.display,
  grade_orderLabel: Omni.i18n.model.AccountGrade.grade_order,
  is_destroyedLabel: Omni.i18n.model.AccountGrade.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Account Grades',
  subtitle: 'Work with Account Grades',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store: Ext.create('Omni.store.AccountGrade')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [{
        //   header: me.account_idLabel,
        //   dataIndex: 'account_display',
        //   flex: 1
        // }, {
        header: me.grade_idLabel,
        dataIndex: 'grade_display',
        flex: 1
      }, {
        header: me.grade_nameLabel,
        dataIndex: 'grade_name',
        flex: 1
        // }, {
        //   header: me.displayLabel,
        //   dataIndex: 'display',
        //   flex: 1
      }, {
        header: me.grade_orderLabel,
        dataIndex: 'grade_order',
        flex: 1
      }]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
