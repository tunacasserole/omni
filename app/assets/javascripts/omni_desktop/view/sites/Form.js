Ext.define('Omni.view.sites.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-sites-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'site_id',
      value:      this.record.get('site_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
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
      is_destroyedLabel:                      Omni.i18n.model.Site.is_destroyed    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
          /*
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField: 'name', 
              queryField: 'name', 
              valueField: 'value_field', 
              itemTpl:'{name}',
              name: 'attribute_name', 
              fieldLabel: this.attribute_nameLabel, 
              allowBlank: true 
            }
          */

            // { xtype: 'textfield', name: 'site_id',                        fieldLabel: this.site_idLabel                     , allowBlank: false },    
            // { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'site_name',                      fieldLabel: this.site_nameLabel                   , allowBlank: false },    
            // { xtype: 'textfield', name: 'parent_site_id',                 fieldLabel: this.parent_site_idLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'school_nbr',                     fieldLabel: this.school_nbrLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'short_name',                     fieldLabel: this.short_nameLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'concatenated_name',              fieldLabel: this.concatenated_nameLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'site_type',                      fieldLabel: this.site_typeLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'location_id',                    fieldLabel: this.location_idLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'is_on_web',                      fieldLabel: this.is_on_webLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'gradeset',                       fieldLabel: this.gradesetLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'site_gender',                    fieldLabel: this.site_genderLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'line_1',                         fieldLabel: this.line_1Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'line_2',                         fieldLabel: this.line_2Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'line_3',                         fieldLabel: this.line_3Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'line_4',                         fieldLabel: this.line_4Label                      , allowBlank: false },    
            { xtype: 'textfield', name: 'city',                           fieldLabel: this.cityLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'state_code',                     fieldLabel: this.state_codeLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'zip',                            fieldLabel: this.zipLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'country',                        fieldLabel: this.countryLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'latitude',                       fieldLabel: this.latitudeLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'longitude',                      fieldLabel: this.longitudeLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'phone',                          fieldLabel: this.phoneLabel                       , allowBlank: false },    
            { xtype: 'textfield', name: 'fax',                            fieldLabel: this.faxLabel                         , allowBlank: false },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Sites',
      newTitle: 'New Site',
      newSubtitle: 'Complete the following to create a new Site'
    });
    // TITLES (End)

    this.callParent();
    
  }

});