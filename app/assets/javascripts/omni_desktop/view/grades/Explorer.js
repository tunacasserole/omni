Ext.define('Omni.view.grades.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-grades-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Grade'),

      contextMenuConfig:{
        xtype:'omni-grades-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-grades-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-grades-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      grade_nameLabel: Omni.i18n.model.Grade.grade_name,
      gradesetLabel: Omni.i18n.model.Grade.gradeset,
      grade_orderLabel: Omni.i18n.model.Grade.grade_order
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.grade_nameLabel, dataIndex: 'grade_name',  flex: 1,  sortable: true },
        { header: this.gradesetLabel, dataIndex: 'gradeset',  flex: 1,  sortable: true , renderer: Buildit.util.Format.lookupRenderer('GRADESET') },
        { header: this.grade_orderLabel, dataIndex: 'grade_order',  flex: 1,  sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Grade',
      subtitle:  'School grades'
    });
    // TITLES (End)



    this.callParent();
  }

});
