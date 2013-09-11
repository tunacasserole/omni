Ext.define('Omni.view.sites.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-sites-Explorer',
  allowFind  :  true,
  
  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Site'),

  contextMenuConfig : {
    xtype    : 'omni-sites-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-sites-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-sites-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  site_idLabel:                           Omni.i18n.model.Site.site_id,
  displayLabel:                           Omni.i18n.model.Site.display,
  site_nameLabel:                         Omni.i18n.model.Site.site_name,
  parent_site_idLabel:                    Omni.i18n.model.Site.parent_site_id,
  school_nbrLabel:                        Omni.i18n.model.Site.school_nbr,
  descriptionLabel:                       Omni.i18n.model.Site.description,
  short_nameLabel:                        Omni.i18n.model.Site.short_name,
  concatenated_nameLabel:                 Omni.i18n.model.Site.concatenated_name,
  site_typeLabel:                         Omni.i18n.model.Site.site_type,
  location_idLabel:                       Omni.i18n.model.Site.location_id,
  is_on_webLabel:                         Omni.i18n.model.Site.is_on_web,
  gradesetLabel:                          Omni.i18n.model.Site.gradeset,
  site_genderLabel:                       Omni.i18n.model.Site.site_gender,
  line_1Label:                            Omni.i18n.model.Site.line_1,
  line_2Label:                            Omni.i18n.model.Site.line_2,
  line_3Label:                            Omni.i18n.model.Site.line_3,
  line_4Label:                            Omni.i18n.model.Site.line_4,
  cityLabel:                              Omni.i18n.model.Site.city,
  state_codeLabel:                        Omni.i18n.model.Site.state_code,
  zipLabel:                               Omni.i18n.model.Site.zip,
  countryLabel:                           Omni.i18n.model.Site.country,
  latitudeLabel:                          Omni.i18n.model.Site.latitude,
  longitudeLabel:                         Omni.i18n.model.Site.longitude,
  phoneLabel:                             Omni.i18n.model.Site.phone,
  faxLabel:                               Omni.i18n.model.Site.fax,
  is_destroyedLabel:                      Omni.i18n.model.Site.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Sites',
  subtitle:  'Create and maintain Sites',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.displayLabel,
        //   dataIndex    : 'display',
        //   flex         : 1
        // },
        {
          header       : this.site_nameLabel,
          dataIndex    : 'site_name',
          flex         : 2
        },
        {
          header       : this.site_typeLabel,
          dataIndex    : 'site_type',
          flex         : 1
        },
        {
          header       : this.location_idLabel,
          dataIndex    : 'location_display',
          flex         : 1
        },
        // {
        //   header       : this.is_on_webLabel,
        //   dataIndex    : 'is_on_web',
        //   flex         : 1
        // },
        {
          header       : this.gradesetLabel,
          dataIndex    : 'gradeset',
          flex         : 1
        },
        // {
        //   header       : this.site_genderLabel,
        //   dataIndex    : 'site_gender',
        //   flex         : 1
        // },
        // {
        //   header       : this.line_1Label,
        //   dataIndex    : 'line_1',
        //   flex         : 1
        // },
        // {
        //   header       : this.line_2Label,
        //   dataIndex    : 'line_2',
        //   flex         : 1
        // },
        // {
        //   header       : this.line_3Label,
        //   dataIndex    : 'line_3',
        //   flex         : 1
        // },
        // {
        //   header       : this.line_4Label,
        //   dataIndex    : 'line_4',
        //   flex         : 1
        // },
        {
          header       : this.cityLabel,
          dataIndex    : 'city',
          flex         : 1
        },
        {
          header       : this.state_codeLabel,
          dataIndex    : 'state_code',
          flex         : 1
        },
        // {
        //   header       : this.zipLabel,
        //   dataIndex    : 'zip',
        //   flex         : 1
        // },
        // {
        //   header       : this.countryLabel,
        //   dataIndex    : 'country',
        //   flex         : 1
        // },
        // {
        //   header       : this.latitudeLabel,
        //   dataIndex    : 'latitude',
        //   flex         : 1
        // },
        // {
        //   header       : this.longitudeLabel,
        //   dataIndex    : 'longitude',
        //   flex         : 1
        // },
        {
          header       : this.phoneLabel,
          dataIndex    : 'phone',
          flex         : 1
        },
        // {
        //   header       : this.faxLabel,
        //   dataIndex    : 'fax',
        //   flex         : 1
        // },
        {
          header       : this.school_nbrLabel,
          dataIndex    : 'school_nbr',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});