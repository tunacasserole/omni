Ext.define('Omni.view.tills.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-tills-Explorer',



  initComponent:function () {

    var me = this;


    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Till'),

      contextMenuConfig:{
        xtype:'omni-tills-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-tills-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-tills-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      till_nbrLabel: Omni.i18n.model.Till.till_nbr,
      location_displayLabel: Omni.i18n.model.Till.location_display
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.till_nbrLabel, dataIndex: 'till_nbr',  flex: 1,  sortable: false  },
        { header: this.location_displayLabel, dataIndex: 'location_display',  flex: 1,  sortable: false  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Till',
      subtitle:  'Identifes every cash till (tender media receptacle)'
    });
    // TITLES (End)



    this.callParent();
  }

});
