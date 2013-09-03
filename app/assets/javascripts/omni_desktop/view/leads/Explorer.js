Ext.define('Omni.view.leads.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-leads-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  store: Ext.create('Omni.store.Lead'),

  contextMenuConfig: {
    xtype: 'omni-leads-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-leads-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-leads-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  lead_idLabel:                           Omni.i18n.model.Lead.lead_id,
  is_destroyedLabel:                      Omni.i18n.model.Lead.is_destroyed,
  master_record_idLabel:                  Omni.i18n.model.Lead.master_record_id,
  salutationLabel:                        Omni.i18n.model.Lead.salutation,
  first_nameLabel:                        Omni.i18n.model.Lead.first_name,
  last_nameLabel:                         Omni.i18n.model.Lead.last_name,
  titleLabel:                             Omni.i18n.model.Lead.title,
  companyLabel:                           Omni.i18n.model.Lead.company,
  streetLabel:                            Omni.i18n.model.Lead.street,
  cityLabel:                              Omni.i18n.model.Lead.city,
  state_provinceLabel:                    Omni.i18n.model.Lead.state_province,
  postal_codeLabel:                       Omni.i18n.model.Lead.postal_code,
  countryLabel:                           Omni.i18n.model.Lead.country,
  latitudeLabel:                          Omni.i18n.model.Lead.latitude,
  longitudeLabel:                         Omni.i18n.model.Lead.longitude,
  phoneLabel:                             Omni.i18n.model.Lead.phone,
  mobile_phoneLabel:                      Omni.i18n.model.Lead.mobile_phone,
  faxLabel:                               Omni.i18n.model.Lead.fax,
  emailLabel:                             Omni.i18n.model.Lead.email,
  websiteLabel:                           Omni.i18n.model.Lead.website,
  descriptionLabel:                       Omni.i18n.model.Lead.description,
  lead_sourceLabel:                       Omni.i18n.model.Lead.lead_source,
  stateLabel:                             Omni.i18n.model.Lead.state,
  industryLabel:                          Omni.i18n.model.Lead.industry,
  ratingLabel:                            Omni.i18n.model.Lead.rating,
  annual_revenueLabel:                    Omni.i18n.model.Lead.annual_revenue,
  employeesLabel:                         Omni.i18n.model.Lead.employees,
  owner_idLabel:                          Omni.i18n.model.Lead.owner_id,
  is_opted_out_emailLabel:                Omni.i18n.model.Lead.is_opted_out_email,
  is_convertedLabel:                      Omni.i18n.model.Lead.is_converted,
  converted_dateLabel:                    Omni.i18n.model.Lead.converted_date,
  converted_account_idLabel:              Omni.i18n.model.Lead.converted_account_id,
  converted_contact_idLabel:              Omni.i18n.model.Lead.converted_contact_id,
  converted_opportunity_idLabel:          Omni.i18n.model.Lead.converted_opportunity_id,
  is_unread_by_ownerLabel:                Omni.i18n.model.Lead.is_unread_by_owner,
  created_dateLabel:                      Omni.i18n.model.Lead.created_date,
  created_by_idLabel:                     Omni.i18n.model.Lead.created_by_id,
  last_modified_dateLabel:                Omni.i18n.model.Lead.last_modified_date,
  last_modified_by_idLabel:               Omni.i18n.model.Lead.last_modified_by_id,
  system_mod_dateLabel:                   Omni.i18n.model.Lead.system_mod_date,
  last_activity_dateLabel:                Omni.i18n.model.Lead.last_activity_date,
  is_do_not_callLabel:                    Omni.i18n.model.Lead.is_do_not_call,
  is_opted_out_faxLabel:                  Omni.i18n.model.Lead.is_opted_out_fax,
  last_transfer_dateLabel:                Omni.i18n.model.Lead.last_transfer_date,
  jigsawLabel:                            Omni.i18n.model.Lead.jigsaw,
  jigsaw_contact_idLabel:                 Omni.i18n.model.Lead.jigsaw_contact_id,
  email_bounce_reasonLabel:               Omni.i18n.model.Lead.email_bounce_reason,
  email_bounce_dateLabel:                 Omni.i18n.model.Lead.email_bounce_date,
  correlation_idLabel:                    Omni.i18n.model.Lead.correlation_id,
  correlation_dataLabel:                  Omni.i18n.model.Lead.correlation_data,
  web_sourceLabel:                        Omni.i18n.model.Lead.web_source,
  low_gradeLabel:                         Omni.i18n.model.Lead.low_grade,
  high_gradeLabel:                        Omni.i18n.model.Lead.high_grade,
  enrollmentLabel:                        Omni.i18n.model.Lead.enrollment,
  current_vendorLabel:                    Omni.i18n.model.Lead.current_vendor,
  denominationLabel:                      Omni.i18n.model.Lead.denomination,
  territoryLabel:                         Omni.i18n.model.Lead.territory,
  sales_repLabel:                         Omni.i18n.model.Lead.sales_rep,
  countyLabel:                            Omni.i18n.model.Lead.county,
  contract_termLabel:                     Omni.i18n.model.Lead.contract_term,
  expiration_dateLabel:                   Omni.i18n.model.Lead.expiration_date,
  plaidLabel:                             Omni.i18n.model.Lead.plaid,
  notesLabel:                             Omni.i18n.model.Lead.notes,
  samplesLabel:                           Omni.i18n.model.Lead.samples,
  date_last_verifiedLabel:                Omni.i18n.model.Lead.date_last_verified,
  lead_typeLabel:                         Omni.i18n.model.Lead.lead_type,
  charter_numberLabel:                    Omni.i18n.model.Lead.charter_number,
  districtLabel:                          Omni.i18n.model.Lead.district,
  regionLabel:                            Omni.i18n.model.Lead.region,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Leads',
  subtitle:  'Create and maintain Leads',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.lead_idLabel,                       dataIndex: 'lead_id',                     flex: 1 },    
        // { header: this.is_destroyedLabel,                  dataIndex: 'is_destroyed',                flex: 1 },    
        // { header: this.master_record_idLabel,              dataIndex: 'master_record_id',            flex: 1 },    
        // { header: this.salutationLabel,                    dataIndex: 'salutation',                  flex: 1 },    
        // { header: this.first_nameLabel,                    dataIndex: 'first_name',                  flex: 1 },    
        // { header: this.last_nameLabel,                     dataIndex: 'last_name',                   flex: 1 },    
        // { header: this.titleLabel,                         dataIndex: 'title',                       flex: 1 },    
        { header: this.companyLabel,                       dataIndex: 'company',                     flex: 1 },    
        // { header: this.streetLabel,                        dataIndex: 'street',                      flex: 1 },    
        { header: this.cityLabel,                          dataIndex: 'city',                        flex: 1 },    
        { header: this.state_provinceLabel,                dataIndex: 'state_province',              flex: 1 },    
        // { header: this.postal_codeLabel,                   dataIndex: 'postal_code',                 flex: 1 },    
        // { header: this.countryLabel,                       dataIndex: 'country',                     flex: 1 },    
        // { header: this.latitudeLabel,                      dataIndex: 'latitude',                    flex: 1 },    
        // { header: this.longitudeLabel,                     dataIndex: 'longitude',                   flex: 1 },    
        // { header: this.phoneLabel,                         dataIndex: 'phone',                       flex: 1 },    
        // { header: this.mobile_phoneLabel,                  dataIndex: 'mobile_phone',                flex: 1 },    
        // { header: this.faxLabel,                           dataIndex: 'fax',                         flex: 1 },    
        // { header: this.emailLabel,                         dataIndex: 'email',                       flex: 1 },    
        // { header: this.websiteLabel,                       dataIndex: 'website',                     flex: 1 },    
        // { header: this.descriptionLabel,                   dataIndex: 'description',                 flex: 1 },    
        { header: this.lead_sourceLabel,                   dataIndex: 'lead_source',                 flex: 1 },    
        // { header: this.stateLabel,                         dataIndex: 'state',                       flex: 1 },    
        // { header: this.industryLabel,                      dataIndex: 'industry',                    flex: 1 },    
        // { header: this.ratingLabel,                        dataIndex: 'rating',                      flex: 1 },    
        // { header: this.annual_revenueLabel,                dataIndex: 'annual_revenue',              flex: 1 },    
        // { header: this.employeesLabel,                     dataIndex: 'employees',                   flex: 1 },    
        // { header: this.owner_idLabel,                      dataIndex: 'owner_id',                    flex: 1 },    
        // { header: this.is_opted_out_emailLabel,            dataIndex: 'is_opted_out_email',          flex: 1 },    
        // { header: this.is_convertedLabel,                  dataIndex: 'is_converted',                flex: 1 },    
        // { header: this.converted_dateLabel,                dataIndex: 'converted_date',              flex: 1 },    
        // { header: this.converted_account_idLabel,          dataIndex: 'converted_account_id',        flex: 1 },    
        // { header: this.converted_contact_idLabel,          dataIndex: 'converted_contact_id',        flex: 1 },    
        // { header: this.converted_opportunity_idLabel,      dataIndex: 'converted_opportunity_id',    flex: 1 },    
        // { header: this.is_unread_by_ownerLabel,            dataIndex: 'is_unread_by_owner',          flex: 1 },    
        // { header: this.created_dateLabel,                  dataIndex: 'created_date',                flex: 1 },    
        // { header: this.created_by_idLabel,                 dataIndex: 'created_by_id',               flex: 1 },    
          // { header: this.last_modified_dateLabel,            dataIndex: 'last_modified_date',          flex: 1 },    
        // { header: this.last_modified_by_idLabel,           dataIndex: 'last_modified_by_id',         flex: 1 },    
        // { header: this.system_mod_dateLabel,               dataIndex: 'system_mod_date',             flex: 1 },    
        // { header: this.last_activity_dateLabel,            dataIndex: 'last_activity_date',          flex: 1 },    
        // { header: this.is_do_not_callLabel,                dataIndex: 'is_do_not_call',              flex: 1 },    
        // { header: this.is_opted_out_faxLabel,              dataIndex: 'is_opted_out_fax',            flex: 1 },    
        // { header: this.last_transfer_dateLabel,            dataIndex: 'last_transfer_date',          flex: 1 },    
        // { header: this.jigsawLabel,                        dataIndex: 'jigsaw',                      flex: 1 },    
        // { header: this.jigsaw_contact_idLabel,             dataIndex: 'jigsaw_contact_id',           flex: 1 },    
        // { header: this.email_bounce_reasonLabel,           dataIndex: 'email_bounce_reason',         flex: 1 },    
        // { header: this.email_bounce_dateLabel,             dataIndex: 'email_bounce_date',           flex: 1 },    
        // { header: this.correlation_idLabel,                dataIndex: 'correlation_id',              flex: 1 },    
        // { header: this.correlation_dataLabel,              dataIndex: 'correlation_data',            flex: 1 },    
        // { header: this.web_sourceLabel,                    dataIndex: 'web_source',                  flex: 1 },    
        { header: this.low_gradeLabel,                     dataIndex: 'low_grade',                   flex: 1 },    
        { header: this.high_gradeLabel,                    dataIndex: 'high_grade',                  flex: 1 },    
        { header: this.enrollmentLabel,                    dataIndex: 'enrollment',                  flex: 1 },    
        { header: this.current_vendorLabel,                dataIndex: 'current_vendor',              flex: 1 },    
        // { header: this.denominationLabel,                  dataIndex: 'denomination',                flex: 1 },    
        // { header: this.territoryLabel,                     dataIndex: 'territory',                   flex: 1 },    
        // { header: this.sales_repLabel,                     dataIndex: 'sales_rep',                   flex: 1 },    
        // { header: this.countyLabel,                        dataIndex: 'county',                      flex: 1 },    
        // { header: this.contract_termLabel,                 dataIndex: 'contract_term',               flex: 1 },    
        // { header: this.expiration_dateLabel,               dataIndex: 'expiration_date',             flex: 1 },    
        // { header: this.plaidLabel,                         dataIndex: 'plaid',                       flex: 1 },    
        { header: this.notesLabel,                         dataIndex: 'notes',                       flex: 1 },    
        // { header: this.samplesLabel,                       dataIndex: 'samples',                     flex: 1 },    
        // { header: this.date_last_verifiedLabel,            dataIndex: 'date_last_verified',          flex: 1 },    
        // { header: this.lead_typeLabel,                     dataIndex: 'lead_type',                   flex: 1 },    
        // { header: this.charter_numberLabel,                dataIndex: 'charter_number',              flex: 1 },    
        // { header: this.districtLabel,                      dataIndex: 'district',                    flex: 1 },    
        // { header: this.regionLabel,                        dataIndex: 'region',                      flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});