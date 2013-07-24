Ext.define('Omni.model.Checklist', {
  extend: 'Ext.data.Model',

  fields: [
      { name: 'checklist_id',                type: 'string'   },
      { name: 'OwnerId',                     type: 'string'   },
      { name: 'IsDeleted',                   type: 'integer'  },
      { name: 'Name',                        type: 'string'   },
      { name: 'CreatedDate',                 type: 'string'   },
      { name: 'CreatedById',                 type: 'string'   },
      { name: 'LastModifiedDate',            type: 'string'   },
      { name: 'LastModifiedById',            type: 'string'   },
      { name: 'SystemModstamp',              type: 'string'   },
      { name: 'LastActivityDate',            type: 'string'   },
      { name: 'YIF_form_complete__c',        type: 'string'   },
      { name: 'Account__c',                  type: 'string'   },
      { name: 'Contract_signed__c',          type: 'string'   },
      { name: 'Update_production_dept_disks_and_specs__c', type: 'string'   },
      { name: 'Update_Prep_Database__c',     type: 'string'   },
      { name: 'Update_Monogram_Spec__c',     type: 'string'   },
      { name: 'Store_assignment__c',         type: 'string'   },
      { name: 'School_Sale_notice_created__c', type: 'string'   },
      { name: 'School_Sale_Entered_in_Saleforce__c', type: 'string'   },
      { name: 'School_Sale_date_and_discount__c', type: 'string'   },
      { name: 'School_information_updated_in_Salesforce__c', type: 'string'   },
      { name: 'Scan_contract_to_PDF__c',     type: 'string'   },
      { name: 'Sale_week_message_update__c', type: 'string'   },
      { name: 'Salesforce_account_type_change_to_Client__c', type: 'string'   },
      { name: 'Requirement_List_signed__c',  type: 'string'   },
      { name: 'Req_list_proofed__c',         type: 'string'   },
      { name: 'Rep_Checklist_meeting_agenda__c', type: 'string'   },
      { name: 'Plaid_Approval_Form__c',      type: 'string'   },
      { name: 'PDF_price_list__c',           type: 'string'   },
      { name: 'On_line_SIS_saved__c',        type: 'string'   },
      { name: 'Artwork_approval_form_for_new_logo_items__c', type: 'string'   },
      { name: 'Artwork_Spec_for_new_logos_Art_Dept__c', type: 'string'   },
      { name: 'Calendar_date_in_Salesforce_checked_to_Y__c', type: 'string'   },
      { name: 'Check_prices_of_all_customized_on_printe__c', type: 'string'   },
      { name: 'Check_web_requirements_and_pricing_to_pr__c', type: 'string'   },
      { name: 'Create_School_Spec_folders__c', type: 'string'   },
      { name: 'New_School_Info_Form__c',     type: 'string'   },
      { name: 'New_req_list_posted__c',      type: 'string'   },
      { name: 'Monogram_specs__c',           type: 'string'   },
      { name: 'Monogram_form_signed__c',     type: 'string'   },
      { name: 'LOGO_change_requested__c',    type: 'string'   },
      { name: 'Garment_Spec_for_added_or_changed_logo_w__c', type: 'string'   },
      { name: 'Director_approval_sale_date_and_progra__c', type: 'string'   },
      { name: 'Delete_design_specs_for_deleted_items__c', type: 'string'   },
      { name: 'Customized_Garment_List__c',  type: 'string'   }
    ],

  idProperty: 'checklist_id',

  proxy: {
    type: 'direct',
    api: {
      create:  Omni.service.Checklist.create,
      read:    Omni.service.Checklist.read,
      update:  Omni.service.Checklist.update,
      destroy: Omni.service.Checklist.destroy
    },
    reader: {
      type : 'json',
      root : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

});