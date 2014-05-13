Ext.define('Desk.view.guides.Explorer', {

  extend: 'Buildit.ux.explorer.Panel',
  alias: 'widget.desk-guides-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig: {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms: [{
    xtype: 'desk-guides-Form'
  }],

  inspectorConfig: {
    xtype: 'desk-guides-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  guide_idLabel: Desk.i18n.model.Guide.guide_id,
  owner_idLabel: Desk.i18n.model.Guide.owner_id,
  guide_nbrLabel: Desk.i18n.model.Guide.guide_nbr,
  guide_nameLabel: Desk.i18n.model.Guide.guide_name,
  descriptionLabel: Desk.i18n.model.Guide.description,
  guide_locationLabel: Desk.i18n.model.Guide.guide_location,
  gem_nameLabel: Desk.i18n.model.Guide.gem_name,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title: 'Guides',
  subtitle: 'Create and maintain Guides',
  // TITLES (End)

  initComponent: function() {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store: Ext.create('Desk.store.Guide')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns: [
        // {
        //   header       : me.owner_idLabel,
        //   dataIndex    : 'owner_id',
        //   flex         : 1
        // },
        {
          header: me.guide_nbrLabel,
          dataIndex: 'guide_nbr',
          flex: 1
        }, {
          header: me.guide_nameLabel,
          dataIndex: 'guide_name',
          flex: 2
        }, {
          header: me.guide_locationLabel,
          dataIndex: 'guide_location',
          flex: 2,
          renderer: this.formatURL
        }, {
          header: me.descriptionLabel,
          dataIndex: 'description',
          flex: 4
        },
        // {
        //   header       : me.gem_nameLabel,
        //   dataIndex    : 'gem_name',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)

    me.callParent();
  },

  formatURL: function(value) {
    myURL = '';
    // console.log(value.substring(0,3))
    if (value !== '' && value.substring(0, 4) === 'http') {
      myURL = '<a href="' + value + '" target="_blank">' + 'view guide' + '</a>';
    } else {
      myURL = value;
    }
    console.log(myURL)
    return myURL;
  }

});
