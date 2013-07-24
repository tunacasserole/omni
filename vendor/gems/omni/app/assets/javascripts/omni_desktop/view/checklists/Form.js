Ext.define('Omni.view.checklists.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-checklists-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'checklist_id',
      value:      this.record.get('checklist_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
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
      Customized_Garment_List__cLabel:        Omni.i18n.model.Checklist.Customized_Garment_List__c    
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

            { xtype: 'textfield', name: 'checklist_id',                   fieldLabel: this.checklist_idLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'OwnerId',                        fieldLabel: this.OwnerIdLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'IsDeleted',                      fieldLabel: this.IsDeletedLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'Name',                           fieldLabel: this.NameLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'CreatedDate',                    fieldLabel: this.CreatedDateLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'CreatedById',                    fieldLabel: this.CreatedByIdLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'LastModifiedDate',               fieldLabel: this.LastModifiedDateLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'LastModifiedById',               fieldLabel: this.LastModifiedByIdLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'SystemModstamp',                 fieldLabel: this.SystemModstampLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'LastActivityDate',               fieldLabel: this.LastActivityDateLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'YIF_form_complete__c',           fieldLabel: this.YIF_form_complete__cLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'Account__c',                     fieldLabel: this.Account__cLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'Contract_signed__c',             fieldLabel: this.Contract_signed__cLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'Update_production_dept_disks_and_specs__c',fieldLabel: this.Update_production_dept_disks_and_specs__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Update_Prep_Database__c',        fieldLabel: this.Update_Prep_Database__cLabel     , allowBlank: false },    
            { xtype: 'textfield', name: 'Update_Monogram_Spec__c',        fieldLabel: this.Update_Monogram_Spec__cLabel     , allowBlank: false },    
            { xtype: 'textfield', name: 'Store_assignment__c',            fieldLabel: this.Store_assignment__cLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'School_Sale_notice_created__c',  fieldLabel: this.School_Sale_notice_created__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'School_Sale_Entered_in_Saleforce__c',fieldLabel: this.School_Sale_Entered_in_Saleforce__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'School_Sale_date_and_discount__c',fieldLabel: this.School_Sale_date_and_discount__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'School_information_updated_in_Salesforce__c',fieldLabel: this.School_information_updated_in_Salesforce__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Scan_contract_to_PDF__c',        fieldLabel: this.Scan_contract_to_PDF__cLabel     , allowBlank: false },    
            { xtype: 'textfield', name: 'Sale_week_message_update__c',    fieldLabel: this.Sale_week_message_update__cLabel , allowBlank: false },    
            { xtype: 'textfield', name: 'Salesforce_account_type_change_to_Client__c',fieldLabel: this.Salesforce_account_type_change_to_Client__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Requirement_List_signed__c',     fieldLabel: this.Requirement_List_signed__cLabel  , allowBlank: false },    
            { xtype: 'textfield', name: 'Req_list_proofed__c',            fieldLabel: this.Req_list_proofed__cLabel         , allowBlank: false },    
            { xtype: 'textfield', name: 'Rep_Checklist_meeting_agenda__c',fieldLabel: this.Rep_Checklist_meeting_agenda__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Plaid_Approval_Form__c',         fieldLabel: this.Plaid_Approval_Form__cLabel      , allowBlank: false },    
            { xtype: 'textfield', name: 'PDF_price_list__c',              fieldLabel: this.PDF_price_list__cLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'On_line_SIS_saved__c',           fieldLabel: this.On_line_SIS_saved__cLabel        , allowBlank: false },    
            { xtype: 'textfield', name: 'Artwork_approval_form_for_new_logo_items__c',fieldLabel: this.Artwork_approval_form_for_new_logo_items__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Artwork_Spec_for_new_logos_Art_Dept__c',fieldLabel: this.Artwork_Spec_for_new_logos_Art_Dept__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Calendar_date_in_Salesforce_checked_to_Y__c',fieldLabel: this.Calendar_date_in_Salesforce_checked_to_Y__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Check_prices_of_all_customized_on_printe__c',fieldLabel: this.Check_prices_of_all_customized_on_printe__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Check_web_requirements_and_pricing_to_pr__c',fieldLabel: this.Check_web_requirements_and_pricing_to_pr__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Create_School_Spec_folders__c',  fieldLabel: this.Create_School_Spec_folders__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'New_School_Info_Form__c',        fieldLabel: this.New_School_Info_Form__cLabel     , allowBlank: false },    
            { xtype: 'textfield', name: 'New_req_list_posted__c',         fieldLabel: this.New_req_list_posted__cLabel      , allowBlank: false },    
            { xtype: 'textfield', name: 'Monogram_specs__c',              fieldLabel: this.Monogram_specs__cLabel           , allowBlank: false },    
            { xtype: 'textfield', name: 'Monogram_form_signed__c',        fieldLabel: this.Monogram_form_signed__cLabel     , allowBlank: false },    
            { xtype: 'textfield', name: 'LOGO_change_requested__c',       fieldLabel: this.LOGO_change_requested__cLabel    , allowBlank: false },    
            { xtype: 'textfield', name: 'Garment_Spec_for_added_or_changed_logo_w__c',fieldLabel: this.Garment_Spec_for_added_or_changed_logo_w__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Director_approval_sale_date_and_progra__c',fieldLabel: this.Director_approval_sale_date_and_progra__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Delete_design_specs_for_deleted_items__c',fieldLabel: this.Delete_design_specs_for_deleted_items__cLabel, allowBlank: false },    
            { xtype: 'textfield', name: 'Customized_Garment_List__c',     fieldLabel: this.Customized_Garment_List__cLabel  , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Checklists',
      newTitle: 'New Checklist',
      newSubtitle: 'Complete the following to create a new Checklist'
    });
    // TITLES (End)

    this.callParent();
    
  }

});