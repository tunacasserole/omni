Ext.define('Omni.view.sites.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-sites-Explorer',

  

  initComponent:function () {

    var me = this;

    
    // EXPLORER INIT (Start) ===============================================================
    Ext.apply(this, {

      allowFind: true,

      store: Ext.create('Omni.store.Site'),

      contextMenuConfig:{
        xtype:'omni-sites-ExplorerContextMenu',
      },

      newForms:[{
        xtype:'omni-sites-Form',
        windowConfig: {}
      }],

      inspectorConfig: {
        xtype: 'omni-sites-Inspector'
      }
    });
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    Ext.applyIf(this, {
      location_displayLabel:                 Omni.i18n.model.Site.location_display,
      gradesetLabel:                         Omni.i18n.model.Site.gradeset,
      site_genderLabel:                      Omni.i18n.model.Site.site_gender,
      line_1Label:                           Omni.i18n.model.Site.line_1,
      cityLabel:                             Omni.i18n.model.Site.city,
      state_codeLabel:                       Omni.i18n.model.Site.state_code,
      phoneLabel:                            Omni.i18n.model.Site.phone
    });
    // LABELS (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        { header: this.location_displayLabel,                            dataIndex: 'location_display',                   flex: 1,   sortable: true  },
        { header: this.gradesetLabel,                                    dataIndex: 'gradeset',                           flex: 1,   sortable: true , renderer: Buildit.util.Format.lookupRenderer('GRADESET') },
        { header: this.site_genderLabel,                                 dataIndex: 'site_gender',                        flex: 1,   sortable: true , renderer: Buildit.util.Format.lookupRenderer('SITE_GENDER') },
        { header: this.line_1Label,                                      dataIndex: 'line_1',                             flex: 1,   sortable: true  },
        { header: this.cityLabel,                                        dataIndex: 'city',                               flex: 1,   sortable: true  },
        { header: this.state_codeLabel,                                  dataIndex: 'state_code',                         flex: 1,   sortable: true , renderer: Buildit.util.Format.lookupRenderer('STATE_CODE') },
        { header: this.phoneLabel,                                       dataIndex: 'phone',                              flex: 1,   sortable: true  }
      ]
    });
    // COLUMNS (End)

    // TITLES (Start) ======================================================================
    Ext.apply(this, {
      title:     'Site',
      subtitle:  'Each school covered by a contract'
    });
    // TITLES (End)



    this.callParent();
  }

});
