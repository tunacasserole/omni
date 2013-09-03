Ext.define('Omni.view.checklists.Explorer', {

  extend:'Buildit.ux.explorer.Panel',
  alias:'widget.omni-checklists-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  allowFind: false,

  store: Ext.create('Omni.store.Checklist'),

  contextMenuConfig: {
    xtype: 'omni-checklists-ExplorerContextMenu'
  },

  newForms:[{
    xtype: 'omni-checklists-Form'
  }],

  inspectorConfig: {
    xtype: 'omni-checklists-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  checklist_idLabel:                      Omni.i18n.model.Checklist.checklist_id,
  OwnerIdLabel:                           Omni.i18n.model.Checklist.OwnerId,
  IsDeletedLabel:                         Omni.i18n.model.Checklist.IsDeleted,
  NameLabel:                              Omni.i18n.model.Checklist.Name,
  CreatedDateLabel:                       Omni.i18n.model.Checklist.CreatedDate,
  CreatedByIdLabel:                       Omni.i18n.model.Checklist.CreatedById,
  LastModifiedDateLabel:                  Omni.i18n.model.Checklist.LastModifiedDate,
  LastModifiedByIdLabel:                  Omni.i18n.model.Checklist.LastModifiedById,
  SystemModstampLabel:                    Omni.i18n.model.Checklist.SystemModstamp,
  LastActivityDateLabel:                  Omni.i18n.model.Checklist.LastActivityDate,
  YIF_form_complete__cLabel:              Omni.i18n.model.Checklist.YIF_form_complete__c,
  Account__cLabel:                        Omni.i18n.model.Checklist.Account__c,
  Contract_signed__cLabel:                Omni.i18n.model.Checklist.Contract_signed__c,
  Update_production_dept_disks_and_specs__cLabel:Omni.i18n.model.Checklist.Update_production_dept_disks_and_specs__c,
  Update_Prep_Database__cLabel:           Omni.i18n.model.Checklist.Update_Prep_Database__c,
  Update_Monogram_Spec__cLabel:           Omni.i18n.model.Checklist.Update_Monogram_Spec__c,
  Store_assignment__cLabel:               Omni.i18n.model.Checklist.Store_assignment__c,
  School_Sale_notice_created__cLabel:     Omni.i18n.model.Checklist.School_Sale_notice_created__c,
  School_Sale_Entered_in_Saleforce__cLabel:Omni.i18n.model.Checklist.School_Sale_Entered_in_Saleforce__c,
  School_Sale_date_and_discount__cLabel:  Omni.i18n.model.Checklist.School_Sale_date_and_discount__c,
  School_information_updated_in_Salesforce__cLabel:Omni.i18n.model.Checklist.School_information_updated_in_Salesforce__c,
  Scan_contract_to_PDF__cLabel:           Omni.i18n.model.Checklist.Scan_contract_to_PDF__c,
  Sale_week_message_update__cLabel:       Omni.i18n.model.Checklist.Sale_week_message_update__c,
  Salesforce_account_type_change_to_Client__cLabel:Omni.i18n.model.Checklist.Salesforce_account_type_change_to_Client__c,
  Requirement_List_signed__cLabel:        Omni.i18n.model.Checklist.Requirement_List_signed__c,
  Req_list_proofed__cLabel:               Omni.i18n.model.Checklist.Req_list_proofed__c,
  Rep_Checklist_meeting_agenda__cLabel:   Omni.i18n.model.Checklist.Rep_Checklist_meeting_agenda__c,
  Plaid_Approval_Form__cLabel:            Omni.i18n.model.Checklist.Plaid_Approval_Form__c,
  PDF_price_list__cLabel:                 Omni.i18n.model.Checklist.PDF_price_list__c,
  On_line_SIS_saved__cLabel:              Omni.i18n.model.Checklist.On_line_SIS_saved__c,
  Artwork_approval_form_for_new_logo_items__cLabel:Omni.i18n.model.Checklist.Artwork_approval_form_for_new_logo_items__c,
  Artwork_Spec_for_new_logos_Art_Dept__cLabel:Omni.i18n.model.Checklist.Artwork_Spec_for_new_logos_Art_Dept__c,
  Calendar_date_in_Salesforce_checked_to_Y__cLabel:Omni.i18n.model.Checklist.Calendar_date_in_Salesforce_checked_to_Y__c,
  Check_prices_of_all_customized_on_printe__cLabel:Omni.i18n.model.Checklist.Check_prices_of_all_customized_on_printe__c,
  Check_web_requirements_and_pricing_to_pr__cLabel:Omni.i18n.model.Checklist.Check_web_requirements_and_pricing_to_pr__c,
  Create_School_Spec_folders__cLabel:     Omni.i18n.model.Checklist.Create_School_Spec_folders__c,
  New_School_Info_Form__cLabel:           Omni.i18n.model.Checklist.New_School_Info_Form__c,
  New_req_list_posted__cLabel:            Omni.i18n.model.Checklist.New_req_list_posted__c,
  Monogram_specs__cLabel:                 Omni.i18n.model.Checklist.Monogram_specs__c,
  Monogram_form_signed__cLabel:           Omni.i18n.model.Checklist.Monogram_form_signed__c,
  LOGO_change_requested__cLabel:          Omni.i18n.model.Checklist.LOGO_change_requested__c,
  Garment_Spec_for_added_or_changed_logo_w__cLabel:Omni.i18n.model.Checklist.Garment_Spec_for_added_or_changed_logo_w__c,
  Director_approval_sale_date_and_progra__cLabel:Omni.i18n.model.Checklist.Director_approval_sale_date_and_progra__c,
  Delete_design_specs_for_deleted_items__cLabel:Omni.i18n.model.Checklist.Delete_design_specs_for_deleted_items__c,
  Customized_Garment_List__cLabel:        Omni.i18n.model.Checklist.Customized_Garment_List__c,
  // LABELS (End)
  
  // TITLES (Start) ======================================================================
  title:     'Checklists',
  subtitle:  'Create and maintain Checklists',
  // TITLES (End)

  initComponent:function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns: [
        // { header: this.checklist_idLabel,                  dataIndex: 'checklist_id',                flex: 1 },    
        // { header: this.OwnerIdLabel,                       dataIndex: 'OwnerId',                     flex: 1 },    
        // { header: this.IsDeletedLabel,                     dataIndex: 'IsDeleted',                   flex: 1 },    
        { header: this.NameLabel,                          dataIndex: 'Name',                        flex: 1 },    
        { header: this.CreatedDateLabel,                   dataIndex: 'CreatedDate',                 flex: 1 },    
        // { header: this.CreatedByIdLabel,                   dataIndex: 'CreatedById',                 flex: 1 },    
        // { header: this.LastModifiedDateLabel,              dataIndex: 'LastModifiedDate',            flex: 1 },    
        // { header: this.LastModifiedByIdLabel,              dataIndex: 'LastModifiedById',            flex: 1 },    
        // { header: this.SystemModstampLabel,                dataIndex: 'SystemModstamp',              flex: 1 },    
        // { header: this.LastActivityDateLabel,              dataIndex: 'LastActivityDate',            flex: 1 },    
        { header: this.YIF_form_complete__cLabel,          dataIndex: 'YIF_form_complete__c',        flex: 1 },    
        { header: this.Account__cLabel,                    dataIndex: 'Account__c',                  flex: 1 },    
        { header: this.Contract_signed__cLabel,            dataIndex: 'Contract_signed__c',          flex: 1 },    
        // { header: this.Update_production_dept_disks_and_specs__cLabel, dataIndex: 'Update_production_dept_disks_and_specs__c', flex: 1 },    
        // { header: this.Update_Prep_Database__cLabel,       dataIndex: 'Update_Prep_Database__c',     flex: 1 },    
        // { header: this.Update_Monogram_Spec__cLabel,       dataIndex: 'Update_Monogram_Spec__c',     flex: 1 },    
        // { header: this.Store_assignment__cLabel,           dataIndex: 'Store_assignment__c',         flex: 1 },    
        // { header: this.School_Sale_notice_created__cLabel, dataIndex: 'School_Sale_notice_created__c', flex: 1 },    
        // { header: this.School_Sale_Entered_in_Saleforce__cLabel, dataIndex: 'School_Sale_Entered_in_Saleforce__c', flex: 1 },    
        // { header: this.School_Sale_date_and_discount__cLabel, dataIndex: 'School_Sale_date_and_discount__c', flex: 1 },    
        // { header: this.School_information_updated_in_Salesforce__cLabel, dataIndex: 'School_information_updated_in_Salesforce__c', flex: 1 },    
        // { header: this.Scan_contract_to_PDF__cLabel,       dataIndex: 'Scan_contract_to_PDF__c',     flex: 1 },    
        // { header: this.Sale_week_message_update__cLabel,   dataIndex: 'Sale_week_message_update__c', flex: 1 },    
        // { header: this.Salesforce_account_type_change_to_Client__cLabel, dataIndex: 'Salesforce_account_type_change_to_Client__c', flex: 1 },    
        // { header: this.Requirement_List_signed__cLabel,    dataIndex: 'Requirement_List_signed__c',  flex: 1 },    
        // { header: this.Req_list_proofed__cLabel,           dataIndex: 'Req_list_proofed__c',         flex: 1 },    
        // { header: this.Rep_Checklist_meeting_agenda__cLabel, dataIndex: 'Rep_Checklist_meeting_agenda__c', flex: 1 },    
        // { header: this.Plaid_Approval_Form__cLabel,        dataIndex: 'Plaid_Approval_Form__c',      flex: 1 },    
        // { header: this.PDF_price_list__cLabel,             dataIndex: 'PDF_price_list__c',           flex: 1 },    
        // { header: this.On_line_SIS_saved__cLabel,          dataIndex: 'On_line_SIS_saved__c',        flex: 1 },    
        // { header: this.Artwork_approval_form_for_new_logo_items__cLabel, dataIndex: 'Artwork_approval_form_for_new_logo_items__c', flex: 1 },    
        // { header: this.Artwork_Spec_for_new_logos_Art_Dept__cLabel, dataIndex: 'Artwork_Spec_for_new_logos_Art_Dept__c', flex: 1 },    
        // { header: this.Calendar_date_in_Salesforce_checked_to_Y__cLabel, dataIndex: 'Calendar_date_in_Salesforce_checked_to_Y__c', flex: 1 },    
        // { header: this.Check_prices_of_all_customized_on_printe__cLabel, dataIndex: 'Check_prices_of_all_customized_on_printe__c', flex: 1 },    
        // { header: this.Check_web_requirements_and_pricing_to_pr__cLabel, dataIndex: 'Check_web_requirements_and_pricing_to_pr__c', flex: 1 },    
        // { header: this.Create_School_Spec_folders__cLabel, dataIndex: 'Create_School_Spec_folders__c', flex: 1 },    
        // { header: this.New_School_Info_Form__cLabel,       dataIndex: 'New_School_Info_Form__c',     flex: 1 },    
        // { header: this.New_req_list_posted__cLabel,        dataIndex: 'New_req_list_posted__c',      flex: 1 },    
        // { header: this.Monogram_specs__cLabel,             dataIndex: 'Monogram_specs__c',           flex: 1 },    
        // { header: this.Monogram_form_signed__cLabel,       dataIndex: 'Monogram_form_signed__c',     flex: 1 },    
        // { header: this.LOGO_change_requested__cLabel,      dataIndex: 'LOGO_change_requested__c',    flex: 1 },    
        // { header: this.Garment_Spec_for_added_or_changed_logo_w__cLabel, dataIndex: 'Garment_Spec_for_added_or_changed_logo_w__c', flex: 1 },    
        // { header: this.Director_approval_sale_date_and_progra__cLabel, dataIndex: 'Director_approval_sale_date_and_progra__c', flex: 1 },    
        // { header: this.Delete_design_specs_for_deleted_items__cLabel, dataIndex: 'Delete_design_specs_for_deleted_items__c', flex: 1 },    
        // { header: this.Customized_Garment_List__cLabel,    dataIndex: 'Customized_Garment_List__c',  flex: 1 }    
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});