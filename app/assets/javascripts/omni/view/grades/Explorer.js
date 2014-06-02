Ext.define('Omni.view.grades.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-grades-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'omni-app-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-grades-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-grades-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  grade_idLabel                           : Omni.i18n.model.Grade.grade_id,
  displayLabel                            : Omni.i18n.model.Grade.display,
  grade_nameLabel                         : Omni.i18n.model.Grade.grade_name,
  short_nameLabel                         : Omni.i18n.model.Grade.short_name,
  grade_orderLabel                        : Omni.i18n.model.Grade.grade_order,
  is_destroyedLabel                       : Omni.i18n.model.Grade.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Grades',
  subtitle : 'Create and maintain Grades',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Omni.store.Grade')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.displayLabel,
          dataIndex    : 'display',
          flex         : 1
        },
        {
          header       : me.grade_nameLabel,
          dataIndex    : 'grade_name',
          flex         : 1
        },
        {
          header       : me.short_nameLabel,
          dataIndex    : 'short_name',
          flex         : 1
        },
        {
          header       : me.grade_orderLabel,
          dataIndex    : 'grade_order',
          flex         : 1
        }
        // {
        //   xtype        : 'checkcolumn',
        //   header       : me.is_destroyedLabel,
        //   dataIndex    : 'is_destroyed',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
