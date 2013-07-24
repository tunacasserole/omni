# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130708114825) do

  create_table "accounts", :id => false, :force => true do |t|
    t.string  "account_id",                        :limit => 32,  :null => false
    t.string  "master_record_id",                  :limit => 6
    t.string  "account_name",                      :limit => 300
    t.string  "account_type",                      :limit => 15
    t.string  "parent_id",                         :limit => 100, :null => false
    t.string  "billing_street",                    :limit => 100
    t.string  "billing_city",                      :limit => 100
    t.string  "billing_state",                     :limit => 100, :null => false
    t.string  "billing_zip",                       :limit => 100
    t.string  "billing_country",                   :limit => 100
    t.string  "billing_lattitude",                 :limit => 100
    t.string  "billing_longitude",                 :limit => 100
    t.string  "shipping_street",                   :limit => 100
    t.string  "shipping_city",                     :limit => 100
    t.string  "shipping_state",                    :limit => 100
    t.string  "shipping_zip",                      :limit => 100
    t.string  "shipping_country",                  :limit => 100
    t.string  "shipping_lattitude",                :limit => 100
    t.string  "shipping_longitude",                :limit => 100
    t.string  "phone",                             :limit => 100
    t.string  "fax",                               :limit => 100
    t.string  "account_number",                    :limit => 100
    t.string  "website",                           :limit => 100
    t.string  "sic",                               :limit => 100
    t.string  "industry",                          :limit => 100
    t.string  "annual_revenue",                    :limit => 100
    t.string  "employees",                         :limit => 100
    t.string  "ownership",                         :limit => 100
    t.string  "ticker_symbol",                     :limit => 100
    t.string  "description",                       :limit => 100
    t.string  "rating",                            :limit => 100
    t.string  "site",                              :limit => 100
    t.string  "owner_id",                          :limit => 100
    t.string  "created_date",                      :limit => 100
    t.string  "created_by_id",                     :limit => 100
    t.string  "last_modified_date",                :limit => 100
    t.string  "last_modified_by_id",               :limit => 100
    t.string  "system_mod_date",                   :limit => 100
    t.string  "last_activity_date",                :limit => 100
    t.string  "jigsaw",                            :limit => 100
    t.string  "jigsaw_company_id",                 :limit => 100
    t.string  "account_source",                    :limit => 100
    t.string  "sic_desc",                          :limit => 100
    t.string  "tg_outlet",                         :limit => 100
    t.string  "school_code",                       :limit => 100
    t.string  "sales_rep_id",                      :limit => 100
    t.string  "monogramming",                      :limit => 100
    t.string  "denomination",                      :limit => 100
    t.string  "enrollment",                        :limit => 100
    t.string  "low_grade",                         :limit => 100
    t.string  "high_grade",                        :limit => 100
    t.string  "year_established",                  :limit => 100
    t.string  "rebate",                            :limit => 100
    t.string  "contract_type",                     :limit => 100
    t.string  "plaid_1",                           :limit => 100
    t.string  "pe_program",                        :limit => 100
    t.string  "scrip",                             :limit => 100
    t.string  "school_start_date",                 :limit => 100
    t.string  "email_1",                           :limit => 100
    t.string  "name_1",                            :limit => 100
    t.string  "email_2",                           :limit => 100
    t.string  "plaid_2",                           :limit => 100
    t.string  "name_2",                            :limit => 100
    t.string  "email_3",                           :limit => 100
    t.string  "name_3",                            :limit => 100
    t.string  "special_flier",                     :limit => 100
    t.string  "sales_rep_phone",                   :limit => 100
    t.string  "pdf_flier",                         :limit => 100
    t.string  "school_deliver_comments",           :limit => 100
    t.string  "mass_date",                         :limit => 100
    t.string  "special_contract",                  :limit => 100
    t.string  "picture_day",                       :limit => 100
    t.boolean "is_changes"
    t.boolean "is_logo_approval_change_add_items"
    t.boolean "is_logo_change_new_logo"
    t.boolean "is_logo_approval_change_new"
    t.boolean "is_added_logo_items"
    t.boolean "general_comments"
    t.string  "pdf_sale_flier",                    :limit => 100
    t.string  "email_to",                          :limit => 100
    t.string  "x2_sided_fliers",                   :limit => 100
    t.string  "x4_sided_fliers",                   :limit => 100
    t.string  "po_forms",                          :limit => 100
    t.string  "bo_forms",                          :limit => 100
    t.string  "price_lists",                       :limit => 100
    t.string  "special_instructions",              :limit => 100
    t.string  "monogrammed_outterwear",            :limit => 100
    t.string  "jacket_program",                    :limit => 100
    t.string  "school_delivery",                   :limit => 100
    t.boolean "is_destroyed"
  end

  create_table "adjustment_reasons", :id => false, :force => true do |t|
    t.string  "adjustment_reason_id",  :limit => 32,  :null => false
    t.string  "display",               :limit => 100, :null => false
    t.string  "description",           :limit => 300
    t.string  "short_name",            :limit => 15
    t.string  "ruleset_id",            :limit => 32,  :null => false
    t.boolean "is_allowed_cost_entry"
    t.boolean "is_cost_adjustment"
    t.boolean "is_destroyed"
  end

  add_index "adjustment_reasons", ["adjustment_reason_id"], :name => "index_adjustment_reasons_on_adjustment_reason_id", :unique => true

  create_table "adjustments", :id => false, :force => true do |t|
    t.string  "adjustment_id",        :limit => 32,                                 :null => false
    t.string  "display",              :limit => 300
    t.string  "adjustment_nbr",       :limit => 11,                                 :null => false
    t.string  "state",                :limit => 100
    t.string  "location_id",          :limit => 32,                                 :null => false
    t.string  "sku_id",               :limit => 32,                                 :null => false
    t.string  "bin_id",               :limit => 32
    t.string  "description",          :limit => 300
    t.date    "request_date"
    t.string  "request_user_id",      :limit => 32
    t.date    "post_date"
    t.string  "post_user_id",         :limit => 32
    t.date    "cancel_date"
    t.string  "cancel_user_id",       :limit => 32
    t.string  "adjustment_reason_id", :limit => 32,                                 :null => false
    t.decimal "adjustment_units",                    :precision => 11, :scale => 2
    t.decimal "adjustment_cost",                     :precision => 13, :scale => 4
    t.boolean "is_destroyed"
  end

  add_index "adjustments", ["adjustment_id"], :name => "index_adjustments_on_adjustment_id", :unique => true

  create_table "application_roles", :id => false, :force => true do |t|
    t.string  "application_role_id", :limit => 32,                    :null => false
    t.string  "application_id",      :limit => 32,                    :null => false
    t.string  "role_id",             :limit => 32,                    :null => false
    t.boolean "is_enabled",                        :default => false
  end

  add_index "application_roles", ["application_role_id"], :name => "index_application_roles_on_application_role_id", :unique => true

  create_table "applications", :id => false, :force => true do |t|
    t.string   "application_id",   :limit => 32,                     :null => false
    t.string   "application_code", :limit => 100,                    :null => false
    t.string   "hub_xtype",        :limit => 200,                    :null => false
    t.string   "application_name", :limit => 100,                    :null => false
    t.string   "description",      :limit => 400,                    :null => false
    t.boolean  "is_enabled",                      :default => true,  :null => false
    t.boolean  "is_destroyed",                    :default => false, :null => false
    t.integer  "revision_number",                 :default => 0,     :null => false
    t.string   "audit_created_by", :limit => 100
    t.string   "audit_updated_by", :limit => 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "applications", ["application_id", "is_destroyed"], :name => "avail_applications"
  add_index "applications", ["application_id"], :name => "index_applications_on_application_id", :unique => true

  create_table "applications_aa", :id => false, :force => true do |t|
    t.string "attribute_audit_id", :limit => 32, :null => false
    t.string "model_audit_id",     :limit => 32, :null => false
    t.string "attribute_name",     :limit => 60, :null => false
    t.text   "before"
    t.text   "after"
  end

  create_table "applications_ma", :id => false, :force => true do |t|
    t.string   "model_audit_id", :limit => 32,  :null => false
    t.string   "model_id",       :limit => 32,  :null => false
    t.string   "user_id",        :limit => 200, :null => false
    t.string   "action",         :limit => 20,  :null => false
    t.datetime "audited_at"
  end

  create_table "areas", :id => false, :force => true do |t|
    t.string  "area_id",                     :limit => 32,                                 :null => false
    t.string  "display",                     :limit => 300,                                :null => false
    t.string  "location_id",                 :limit => 32,                                 :null => false
    t.string  "area_nbr",                    :limit => 11,                                 :null => false
    t.string  "description",                 :limit => 300
    t.string  "short_name",                  :limit => 100,                                :null => false
    t.boolean "is_receiving"
    t.boolean "is_picking"
    t.boolean "is_reserve"
    t.boolean "is_putaway"
    t.boolean "is_supplier_return"
    t.boolean "is_processing"
    t.boolean "is_shipping"
    t.boolean "is_put_location"
    t.boolean "is_special_handling"
    t.boolean "is_quality_control"
    t.boolean "is_quick_case"
    t.boolean "is_many_sku_per_bin"
    t.decimal "default_cube_capacity",                      :precision => 11, :scale => 2
    t.boolean "is_request_cube_calculation"
    t.date    "last_utilization_calc_date"
    t.boolean "is_destroyed"
  end

  add_index "areas", ["area_id"], :name => "index_areas_on_area_id", :unique => true

  create_table "attachments", :id => false, :force => true do |t|
    t.string   "attachment_id",    :limit => 32,                     :null => false
    t.string   "attachable_type",  :limit => 100,                    :null => false
    t.string   "attachable_id",    :limit => 32,                     :null => false
    t.string   "content_id",                                         :null => false
    t.string   "file_name",        :limit => 200,                    :null => false
    t.string   "mime_type",        :limit => 200
    t.integer  "byte_size"
    t.string   "locale",           :limit => 40,                     :null => false
    t.boolean  "is_enabled",                      :default => true,  :null => false
    t.boolean  "is_destroyed",                    :default => false, :null => false
    t.integer  "revision_number",                 :default => 0,     :null => false
    t.string   "audit_created_by", :limit => 100
    t.string   "audit_updated_by", :limit => 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "attachments", ["attachable_type", "attachable_id", "is_destroyed"], :name => "attachable_attachments"
  add_index "attachments", ["attachment_id"], :name => "index_attachments_on_attachment_id", :unique => true
  add_index "attachments", ["is_destroyed"], :name => "index_attachments_on_is_destroyed"

  create_table "attachments_aa", :id => false, :force => true do |t|
    t.string "attribute_audit_id", :limit => 32, :null => false
    t.string "model_audit_id",     :limit => 32, :null => false
    t.string "attribute_name",     :limit => 60, :null => false
    t.text   "before"
    t.text   "after"
  end

  create_table "attachments_ma", :id => false, :force => true do |t|
    t.string   "model_audit_id", :limit => 32,  :null => false
    t.string   "model_id",       :limit => 32,  :null => false
    t.string   "user_id",        :limit => 200, :null => false
    t.string   "action",         :limit => 20,  :null => false
    t.datetime "audited_at"
  end

  create_table "bin_skus", :id => false, :force => true do |t|
    t.string  "sku_alias_id",         :limit => 32
    t.date    "last_activity_date"
    t.decimal "being_received_units",                :precision => 11, :scale => 2
    t.decimal "on_hand_units",                       :precision => 11, :scale => 2
    t.string  "pack_type",            :limit => 100
    t.decimal "due_in_units",                        :precision => 11, :scale => 2
    t.decimal "due_out_units",                       :precision => 11, :scale => 2
    t.boolean "is_destroyed"
    t.string  "bin_sku_id",           :limit => 32,                                 :null => false
    t.string  "display",              :limit => 300,                                :null => false
    t.string  "bin_id",               :limit => 32,                                 :null => false
    t.string  "sku_id",               :limit => 32,                                 :null => false
  end

  add_index "bin_skus", ["bin_sku_id"], :name => "index_bin_skus_on_bin_sku_id", :unique => true

  create_table "bins", :id => false, :force => true do |t|
    t.string  "bin_id",                 :limit => 32,                                 :null => false
    t.string  "display",                :limit => 300,                                :null => false
    t.string  "location_id",            :limit => 32,                                 :null => false
    t.string  "area_id",                :limit => 32,                                 :null => false
    t.string  "aisle",                  :limit => 100
    t.string  "section",                :limit => 100
    t.string  "level",                  :limit => 100
    t.string  "position",               :limit => 100
    t.string  "bin_nbr",                :limit => 11
    t.string  "bin_code",               :limit => 100
    t.string  "description",            :limit => 300
    t.string  "bin_type",               :limit => 100
    t.date    "last_activity_date"
    t.boolean "is_many_sku_per_bin"
    t.decimal "pick_sequence",                         :precision => 9,  :scale => 0
    t.string  "zone",                   :limit => 100
    t.string  "pick_zone",              :limit => 100
    t.decimal "cube_capacity",                         :precision => 9,  :scale => 0
    t.boolean "is_area"
    t.boolean "is_count_cartons"
    t.boolean "is_empty"
    t.decimal "carton_count",                          :precision => 9,  :scale => 0
    t.decimal "on_hand_cube",                          :precision => 11, :scale => 2
    t.decimal "due_in_cube",                           :precision => 11, :scale => 2
    t.decimal "due_out_cube",                          :precision => 11, :scale => 2
    t.boolean "is_request_label_print"
    t.string  "bin_label_type",         :limit => 100
    t.boolean "is_enabled"
    t.boolean "is_destroyed"
  end

  add_index "bins", ["bin_id"], :name => "index_bins_on_bin_id", :unique => true

  create_table "bom_details", :id => false, :force => true do |t|
    t.string  "bom_detail_id", :limit => 32,                                 :null => false
    t.string  "display",       :limit => 300,                                :null => false
    t.string  "bom_id",        :limit => 32
    t.string  "color_id",      :limit => 32
    t.string  "sku_id",        :limit => 32
    t.decimal "quantity",                     :precision => 11, :scale => 2
    t.decimal "waste_percent",                :precision => 11, :scale => 2
    t.string  "uom_code",      :limit => 100
    t.boolean "is_destroyed"
  end

  add_index "bom_details", ["bom_detail_id"], :name => "index_bom_details_on_bom_detail_id", :unique => true

  create_table "boms", :id => false, :force => true do |t|
    t.string  "bom_id",             :limit => 32,                                 :null => false
    t.string  "display",            :limit => 300,                                :null => false
    t.string  "bomable_type",       :limit => 100
    t.string  "bomable_id",         :limit => 32
    t.string  "bom_nbr",            :limit => 11
    t.string  "description",        :limit => 300
    t.string  "bom_type",           :limit => 100,                                :null => false
    t.decimal "version",                           :precision => 11, :scale => 2
    t.date    "effective_date"
    t.date    "end_date"
    t.boolean "is_primary_bom"
    t.decimal "labor_hours",                       :precision => 11, :scale => 2
    t.decimal "machine_hours",                     :precision => 11, :scale => 2
    t.decimal "construction_hours",                :precision => 11, :scale => 2
    t.boolean "is_enabled"
    t.boolean "is_destroyed"
  end

  add_index "boms", ["bom_id"], :name => "index_boms_on_bom_id", :unique => true

  create_table "categories", :id => false, :force => true do |t|
    t.string  "category_id",   :limit => 32,  :null => false
    t.string  "display",       :limit => 100, :null => false
    t.string  "category_code", :limit => 100, :null => false
    t.string  "description",   :limit => 300
    t.string  "category_type", :limit => 100
    t.boolean "is_destroyed"
  end

  add_index "categories", ["category_id"], :name => "index_categories_on_category_id", :unique => true

  create_table "checklists", :id => false, :force => true do |t|
    t.string  "checklist_id"
    t.string  "OwnerId"
    t.integer "IsDeleted"
    t.string  "Name"
    t.string  "CreatedDate"
    t.string  "CreatedById"
    t.string  "LastModifiedDate"
    t.string  "LastModifiedById"
    t.string  "SystemModstamp"
    t.string  "LastActivityDate"
    t.string  "YIF_form_complete__c"
    t.string  "Account__c"
    t.string  "Contract_signed__c"
    t.string  "Update_production_dept_disks_and_specs__c"
    t.string  "Update_Prep_Database__c"
    t.string  "Update_Monogram_Spec__c"
    t.string  "Store_assignment__c"
    t.string  "School_Sale_notice_created__c"
    t.string  "School_Sale_Entered_in_Saleforce__c"
    t.string  "School_Sale_date_and_discount__c"
    t.string  "School_information_updated_in_Salesforce__c"
    t.string  "Scan_contract_to_PDF__c"
    t.string  "Sale_week_message_update__c"
    t.string  "Salesforce_account_type_change_to_Client__c"
    t.string  "Requirement_List_signed__c"
    t.string  "Req_list_proofed__c"
    t.string  "Rep_Checklist_meeting_agenda__c"
    t.string  "Plaid_Approval_Form__c"
    t.string  "PDF_price_list__c"
    t.string  "On_line_SIS_saved__c"
    t.string  "Artwork_approval_form_for_new_logo_items__c"
    t.string  "Artwork_Spec_for_new_logos_Art_Dept__c"
    t.string  "Calendar_date_in_Salesforce_checked_to_Y__c"
    t.string  "Check_prices_of_all_customized_on_printe__c"
    t.string  "Check_web_requirements_and_pricing_to_pr__c"
    t.string  "Create_School_Spec_folders__c"
    t.string  "New_School_Info_Form__c"
    t.string  "New_req_list_posted__c"
    t.string  "Monogram_specs__c"
    t.string  "Monogram_form_signed__c"
    t.string  "LOGO_change_requested__c"
    t.string  "Garment_Spec_for_added_or_changed_logo_w__c"
    t.string  "Director_approval_sale_date_and_progra__c"
    t.string  "Delete_design_specs_for_deleted_items__c"
    t.string  "Customized_Garment_List__c"
  end

  create_table "classifications", :id => false, :force => true do |t|
    t.string  "classification_id",  :limit => 32,  :null => false
    t.string  "display",            :limit => 100, :null => false
    t.string  "classification_nbr", :limit => 6
    t.string  "description",        :limit => 300
    t.string  "short_name",         :limit => 15
    t.string  "planner_user_id",    :limit => 32
    t.string  "department_id",      :limit => 32,  :null => false
    t.boolean "is_destroyed"
  end

  add_index "classifications", ["classification_id"], :name => "index_classifications_on_classification_id", :unique => true

  create_table "colors", :id => false, :force => true do |t|
    t.string  "color_id",          :limit => 32,  :null => false
    t.string  "display",           :limit => 100, :null => false
    t.string  "color_nbr",         :limit => 6
    t.string  "description",       :limit => 300
    t.string  "short_name",        :limit => 15
    t.string  "concatenated_name", :limit => 100, :null => false
    t.boolean "is_plaid"
    t.boolean "is_stripe"
    t.string  "color_family",      :limit => 100, :null => false
    t.boolean "is_discontinued"
    t.boolean "is_destroyed"
  end

  add_index "colors", ["color_id"], :name => "index_colors_on_color_id", :unique => true

  create_table "companies", :id => false, :force => true do |t|
    t.string  "company_id",                 :limit => 32,                                 :null => false
    t.string  "display",                    :limit => 100,                                :null => false
    t.string  "company_nbr",                :limit => 6
    t.string  "description",                :limit => 300
    t.string  "short_name",                 :limit => 15
    t.string  "company_url",                :limit => 100
    t.string  "line_1",                     :limit => 100,                                :null => false
    t.string  "line_2",                     :limit => 100
    t.string  "line_3",                     :limit => 100
    t.string  "line_4",                     :limit => 100
    t.string  "city",                       :limit => 100,                                :null => false
    t.string  "state_code",                 :limit => 2
    t.string  "zip",                        :limit => 10,                                 :null => false
    t.string  "country",                    :limit => 100
    t.string  "latitude",                   :limit => 15
    t.string  "longitude",                  :limit => 15
    t.string  "phone",                      :limit => 30,                                 :null => false
    t.string  "fax",                        :limit => 30
    t.decimal "beta_factor",                               :precision => 11, :scale => 2
    t.decimal "demand_filter",                             :precision => 9,  :scale => 0
    t.decimal "tracking_signal",                           :precision => 9,  :scale => 0
    t.decimal "purchase_order_header_cost",                :precision => 11, :scale => 2
    t.decimal "carrying_cost_percent",                     :precision => 11, :scale => 2
    t.boolean "is_destroyed"
  end

  add_index "companies", ["company_id"], :name => "index_companies_on_company_id", :unique => true

  create_table "contacts", :id => false, :force => true do |t|
    t.string  "contact_id"
    t.integer "IsDeleted"
    t.string  "MasterRecordId"
    t.string  "AccountId"
    t.string  "Salutation"
    t.string  "FirstName"
    t.string  "LastName"
    t.string  "OtherStreet"
    t.string  "OtherCity"
    t.string  "OtherState"
    t.string  "OtherPostalCode"
    t.string  "OtherCountry"
    t.string  "OtherLatitude"
    t.string  "OtherLongitude"
    t.string  "MailingStreet"
    t.string  "MailingCity"
    t.string  "MailingState"
    t.string  "MailingPostalCode"
    t.string  "MailingCountry"
    t.string  "MailingLatitude"
    t.string  "MailingLongitude"
    t.string  "Phone"
    t.string  "Fax"
    t.string  "MobilePhone"
    t.string  "HomePhone"
    t.string  "OtherPhone"
    t.string  "AssistantPhone"
    t.string  "ReportsToId"
    t.string  "Email"
    t.string  "Title"
    t.string  "Department"
    t.string  "AssistantName"
    t.string  "LeadSource"
    t.string  "Birthdate"
    t.string  "Description"
    t.string  "OwnerId"
    t.integer "HasOptedOutOfEmail"
    t.integer "HasOptedOutOfFax"
    t.integer "DoNotCall"
    t.string  "CreatedDate"
    t.string  "CreatedById"
    t.string  "LastModifiedDate"
    t.string  "LastModifiedById"
    t.string  "SystemModstamp"
    t.string  "LastActivityDate"
    t.string  "LastCURequestDate"
    t.string  "LastCUUpdateDate"
    t.string  "EmailBouncedReason"
    t.string  "EmailBouncedDate"
    t.string  "Jigsaw"
    t.string  "JigsawContactId"
  end

  create_table "container_details", :id => false, :force => true do |t|
    t.string  "container_detail_id",        :limit => 32,                                 :null => false
    t.string  "display",                    :limit => 300,                                :null => false
    t.string  "container_detail_nbr",       :limit => 11
    t.string  "container_id",               :limit => 32
    t.string  "state",                      :limit => 100
    t.string  "sku_id",                     :limit => 32
    t.decimal "selling_units",                             :precision => 11, :scale => 2
    t.decimal "commited_units",                            :precision => 11, :scale => 2
    t.string  "pack_type",                  :limit => 100
    t.decimal "sell_units_per_pack",                       :precision => 11, :scale => 2
    t.string  "container_inventory_source", :limit => 100
    t.string  "container_detail_source",    :limit => 100
    t.string  "purchase_detail_id",         :limit => 32
    t.string  "supplier_id",                :limit => 32
    t.string  "supplier_item_identifier",   :limit => 100
    t.string  "lot_identifier",             :limit => 100
    t.string  "work_order_id",              :limit => 32
    t.string  "receipt_detail_id",          :limit => 32
    t.string  "pick_ticket_id",             :limit => 32
    t.string  "origin_container_detail_id", :limit => 32
    t.boolean "is_quality_hold"
    t.boolean "is_duty_paid"
    t.date    "last_activity_date"
    t.date    "last_count_date"
    t.boolean "is_audited"
    t.boolean "is_inspected"
    t.date    "Inspection_date"
    t.date    "create_date"
    t.boolean "is_destroyed"
  end

  add_index "container_details", ["container_detail_id"], :name => "index_container_details_on_container_detail_id", :unique => true

  create_table "containers", :id => false, :force => true do |t|
    t.string  "container_id",          :limit => 32,                                 :null => false
    t.string  "display",               :limit => 300,                                :null => false
    t.string  "container_nbr",         :limit => 11,                                 :null => false
    t.string  "description",           :limit => 300
    t.string  "container_type",        :limit => 100
    t.string  "parent_container_id",   :limit => 32
    t.boolean "is_labeled"
    t.string  "barcode_nbr",           :limit => 100
    t.string  "location_id",           :limit => 32
    t.string  "state",                 :limit => 100
    t.date    "create_date"
    t.date    "last_update_date"
    t.boolean "is_located"
    t.boolean "is_moving"
    t.boolean "is_in_transit"
    t.string  "bin_id",                :limit => 32
    t.boolean "is_container_lost"
    t.date    "last_verify_date"
    t.decimal "capacity",                             :precision => 13, :scale => 4
    t.decimal "capacity_weight",                      :precision => 11, :scale => 2
    t.decimal "inside_length",                        :precision => 11, :scale => 2
    t.decimal "inside_height",                        :precision => 11, :scale => 2
    t.decimal "inside_width",                         :precision => 11, :scale => 2
    t.boolean "is_outside_dimensions"
    t.decimal "outside_length",                       :precision => 11, :scale => 2
    t.decimal "outside_height",                       :precision => 11, :scale => 2
    t.decimal "outside_width",                        :precision => 11, :scale => 2
    t.decimal "tare_weight",                          :precision => 11, :scale => 2
    t.decimal "fill_percent",                         :precision => 11, :scale => 2
    t.decimal "carton_count",                         :precision => 11, :scale => 2
    t.decimal "actual_weight",                        :precision => 11, :scale => 2
    t.decimal "actual_cube",                          :precision => 13, :scale => 4
    t.decimal "filled_percent",                       :precision => 11, :scale => 2
    t.boolean "is_destroyed"
  end

  add_index "containers", ["container_id"], :name => "index_containers_on_container_id", :unique => true

  create_table "contents", :id => false, :force => true do |t|
    t.string  "content_id",       :limit => 32,                            :null => false
    t.string  "contentable_type", :limit => 100
    t.string  "contentable_id",   :limit => 32
    t.binary  "data",             :limit => 2147483647
    t.boolean "is_enabled",                             :default => true,  :null => false
    t.boolean "is_destroyed",                           :default => false, :null => false
    t.integer "revision_number",                        :default => 0,     :null => false
  end

  add_index "contents", ["content_id"], :name => "index_contents_on_content_id", :unique => true
  add_index "contents", ["is_destroyed"], :name => "index_contents_on_is_destroyed"

  create_table "contracts", :id => false, :force => true do |t|
    t.string  "contract_id"
    t.string  "AccountId"
    t.integer "OwnerExpirationNotice"
    t.string  "StartDate"
    t.string  "BillingStreet"
    t.string  "BillingCity"
    t.string  "BillingState"
    t.string  "BillingPostalCode"
    t.string  "BillingCountry"
    t.string  "BillingLatitude"
    t.string  "BillingLongitude"
    t.string  "ShippingStreet"
    t.string  "ShippingCity"
    t.string  "ShippingState"
    t.string  "ShippingPostalCode"
    t.string  "ShippingCountry"
    t.string  "ShippingLatitude"
    t.string  "ShippingLongitude"
    t.integer "ContractTerm"
    t.string  "OwnerId"
    t.string  "Status"
    t.string  "CompanySignedId"
    t.string  "CompanySignedDate"
    t.string  "CustomerSignedId"
    t.string  "CustomerSignedTitle"
    t.string  "CustomerSignedDate"
    t.string  "SpecialTerms"
    t.string  "ActivatedById"
    t.string  "ActivatedDate"
    t.string  "StatusCode"
    t.string  "Description"
    t.string  "Name"
    t.integer "IsDeleted"
    t.string  "ContractNumber"
    t.string  "LastApprovedDate"
    t.string  "CreatedDate"
    t.string  "CreatedById"
    t.string  "LastModifiedDate"
    t.string  "LastModifiedById"
    t.string  "SystemModstamp"
    t.string  "LastActivityDate"
  end

  create_table "cost_details", :id => false, :force => true do |t|
    t.string  "cost_detail_id",           :limit => 32,                                 :null => false
    t.string  "display",                  :limit => 300
    t.string  "cost_model_id",            :limit => 32,                                 :null => false
    t.string  "cost_detail_name",         :limit => 100,                                :null => false
    t.string  "cost_source",              :limit => 100
    t.string  "cost_type",                :limit => 100
    t.decimal "cost_amount",                             :precision => 13, :scale => 4
    t.decimal "cost_percent",                            :precision => 13, :scale => 4
    t.boolean "is_update_inventory_cost"
    t.boolean "is_update_invoice_cost"
    t.boolean "is_destroyed"
  end

  add_index "cost_details", ["cost_detail_id"], :name => "index_cost_details_on_cost_detail_id", :unique => true

  create_table "cost_models", :id => false, :force => true do |t|
    t.string  "cost_model_id", :limit => 32,  :null => false
    t.string  "display",       :limit => 300, :null => false
    t.string  "short_name",    :limit => 15,  :null => false
    t.string  "description",   :limit => 300
    t.boolean "is_active"
    t.boolean "is_destroyed"
  end

  add_index "cost_models", ["cost_model_id"], :name => "index_cost_models_on_cost_model_id", :unique => true

  create_table "costs", :id => false, :force => true do |t|
    t.string  "cost_id",                 :limit => 32,                                 :null => false
    t.string  "display",                 :limit => 300,                                :null => false
    t.string  "sku_id",                  :limit => 32,                                 :null => false
    t.decimal "first_cost",                             :precision => 13, :scale => 4
    t.decimal "last_cost",                              :precision => 13, :scale => 4
    t.decimal "average_cost",                           :precision => 13, :scale => 4
    t.decimal "on_hand_units",                          :precision => 11, :scale => 2
    t.decimal "cost_pool",                              :precision => 13, :scale => 4
    t.decimal "retail_pool",                            :precision => 13, :scale => 4
    t.boolean "is_updated_average_cost"
    t.boolean "is_destroyed"
  end

  add_index "costs", ["cost_id"], :name => "index_costs_on_cost_id", :unique => true

  create_table "customer_sites", :id => false, :force => true do |t|
    t.string  "customer_site_id", :limit => 32,  :null => false
    t.string  "display",          :limit => 300, :null => false
    t.string  "customer_id",      :limit => 32,  :null => false
    t.string  "site_id",          :limit => 32,  :null => false
    t.string  "comment",          :limit => 300
    t.boolean "is_site_contact"
    t.boolean "is_teacher"
    t.boolean "is_administrator"
    t.boolean "is_destroyed"
  end

  add_index "customer_sites", ["customer_site_id"], :name => "index_customer_sites_on_customer_site_id", :unique => true

  create_table "customers", :id => false, :force => true do |t|
    t.string  "customer_id",            :limit => 32,                                :null => false
    t.string  "display",                :limit => 300,                               :null => false
    t.string  "customer_nbr",           :limit => 11,                                :null => false
    t.date    "registration_date"
    t.string  "user_id",                :limit => 32
    t.string  "name_prefix",            :limit => 100
    t.string  "first_name",             :limit => 100
    t.string  "middle_name",            :limit => 100
    t.string  "last_name",              :limit => 100,                               :null => false
    t.string  "name_suffix",            :limit => 100
    t.string  "company",                :limit => 100
    t.string  "department",             :limit => 100
    t.string  "job_title",              :limit => 100
    t.boolean "is_tax_exempt"
    t.string  "tax_exempt_state",       :limit => 2
    t.string  "tax_exempt_certificate", :limit => 100
    t.boolean "is_employee"
    t.string  "employee_nbr",           :limit => 11
    t.boolean "is_contractor"
    t.string  "contractor_nbr",         :limit => 11
    t.boolean "is_student"
    t.date    "birth_date"
    t.string  "gender",                 :limit => 100
    t.boolean "is_analyst"
    t.boolean "is_developer"
    t.string  "line_1",                 :limit => 100
    t.string  "line_2",                 :limit => 100
    t.string  "line_3",                 :limit => 100
    t.string  "line_4",                 :limit => 100
    t.string  "city",                   :limit => 100
    t.string  "state_code",             :limit => 2
    t.string  "zip",                    :limit => 10
    t.string  "country",                :limit => 100
    t.string  "latitude",               :limit => 15
    t.string  "longitude",              :limit => 15
    t.boolean "is_validated"
    t.boolean "is_residential"
    t.boolean "is_commercial"
    t.boolean "is_do_not_mail_to"
    t.string  "ship_line_1",            :limit => 100
    t.string  "ship_line_2",            :limit => 100
    t.string  "ship_line_3",            :limit => 100
    t.string  "ship_line_4",            :limit => 100
    t.string  "ship_city",              :limit => 100
    t.string  "ship_state_code",        :limit => 2
    t.string  "ship_zip",               :limit => 10
    t.string  "ship_country",           :limit => 100
    t.string  "ship_latitude",          :limit => 15
    t.string  "ship_longitude",         :limit => 15
    t.string  "phone",                  :limit => 30
    t.string  "phone_extension",        :limit => 10
    t.boolean "is_do_not_call"
    t.string  "fax",                    :limit => 30
    t.string  "email_address",          :limit => 200
    t.boolean "is_verified"
    t.boolean "is_do_not_email"
    t.string  "customer_account_nbr",   :limit => 11
    t.string  "customer_account_type",  :limit => 100
    t.string  "customer_account_name",  :limit => 100
    t.date    "account_open_date"
    t.date    "account_close_date"
    t.decimal "credit_limit",                          :precision => 9, :scale => 0
    t.boolean "is_on_hold"
    t.boolean "is_destroyed"
  end

  add_index "customers", ["customer_id"], :name => "index_customers_on_customer_id", :unique => true

  create_table "daily_results", :id => false, :force => true do |t|
    t.string  "daily_result_id",        :limit => 32,                                 :null => false
    t.string  "display",                :limit => 300,                                :null => false
    t.string  "sku_id",                 :limit => 32,                                 :null => false
    t.string  "location_id",            :limit => 32,                                 :null => false
    t.date    "date",                                                                 :null => false
    t.decimal "adjusted_cost",                         :precision => 11, :scale => 2
    t.decimal "adjusted_retail",                       :precision => 11, :scale => 2
    t.decimal "adjusted_units",                        :precision => 11, :scale => 2
    t.decimal "backorder_cost",                        :precision => 11, :scale => 2
    t.decimal "backorder_retail",                      :precision => 11, :scale => 2
    t.decimal "backorder_units",                       :precision => 11, :scale => 2
    t.decimal "clearance_sale_cost",                   :precision => 11, :scale => 2
    t.decimal "clearance_sale_retail",                 :precision => 11, :scale => 2
    t.decimal "clearance_sale_units",                  :precision => 11, :scale => 2
    t.decimal "consumed_cost",                         :precision => 11, :scale => 2
    t.decimal "consumed_retail",                       :precision => 11, :scale => 2
    t.decimal "consumed_units",                        :precision => 11, :scale => 2
    t.decimal "net_inventory_cost",                    :precision => 11, :scale => 2
    t.decimal "net_inventory_retail",                  :precision => 11, :scale => 2
    t.decimal "net_inventory_units",                   :precision => 11, :scale => 2
    t.decimal "net_sale_cost",                         :precision => 11, :scale => 2
    t.decimal "net_sale_retail",                       :precision => 11, :scale => 2
    t.decimal "net_sale_units",                        :precision => 11, :scale => 2
    t.decimal "produced_cost",                         :precision => 11, :scale => 2
    t.decimal "produced_retail",                       :precision => 11, :scale => 2
    t.decimal "produced_units",                        :precision => 11, :scale => 2
    t.decimal "promo_sale_cost",                       :precision => 11, :scale => 2
    t.decimal "promo_sale_retail",                     :precision => 11, :scale => 2
    t.decimal "promo_sale_units",                      :precision => 11, :scale => 2
    t.decimal "purchased_cost",                        :precision => 11, :scale => 2
    t.decimal "purchased_retail",                      :precision => 11, :scale => 2
    t.decimal "purchased_units",                       :precision => 11, :scale => 2
    t.decimal "received_cost",                         :precision => 11, :scale => 2
    t.decimal "received_retail",                       :precision => 11, :scale => 2
    t.decimal "received_units",                        :precision => 11, :scale => 2
    t.decimal "requested_cost",                        :precision => 11, :scale => 2
    t.decimal "requested_retail",                      :precision => 11, :scale => 2
    t.decimal "requested_units",                       :precision => 11, :scale => 2
    t.decimal "return_sale_cost",                      :precision => 11, :scale => 2
    t.decimal "return_sale_retail",                    :precision => 11, :scale => 2
    t.decimal "return_sale_units",                     :precision => 11, :scale => 2
    t.decimal "shipped_cost",                          :precision => 11, :scale => 2
    t.decimal "shipped_retail",                        :precision => 11, :scale => 2
    t.decimal "shipped_units",                         :precision => 11, :scale => 2
    t.decimal "work_in_process_cost",                  :precision => 11, :scale => 2
    t.decimal "work_in_process_retail",                :precision => 11, :scale => 2
    t.decimal "work_in_process_units",                 :precision => 11, :scale => 2
    t.boolean "is_destroyed"
  end

  add_index "daily_results", ["daily_result_id"], :name => "index_daily_results_on_daily_result_id", :unique => true

  create_table "dashlets", :id => false, :force => true do |t|
    t.string   "dashlet_id",       :limit => 32,                     :null => false
    t.string   "component",        :limit => 200,                    :null => false
    t.string   "name",             :limit => 50,                     :null => false
    t.string   "summary",          :limit => 200,                    :null => false
    t.text     "detail"
    t.string   "vendor_id",        :limit => 40,                     :null => false
    t.string   "version",          :limit => 20,                     :null => false
    t.date     "released_on"
    t.string   "logo_path",        :limit => 200
    t.boolean  "is_destroyed",                    :default => false, :null => false
    t.integer  "revision_number",                 :default => 0,     :null => false
    t.string   "audit_created_by", :limit => 100
    t.string   "audit_updated_by", :limit => 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "dashlets", ["dashlet_id", "is_destroyed"], :name => "avail_dashlets"
  add_index "dashlets", ["dashlet_id"], :name => "index_dashlets_on_dashlet_id", :unique => true

  create_table "dashlets_aa", :id => false, :force => true do |t|
    t.string "attribute_audit_id", :limit => 32, :null => false
    t.string "model_audit_id",     :limit => 32, :null => false
    t.string "attribute_name",     :limit => 60, :null => false
    t.text   "before"
    t.text   "after"
  end

  create_table "dashlets_ma", :id => false, :force => true do |t|
    t.string   "model_audit_id", :limit => 32,  :null => false
    t.string   "model_id",       :limit => 32,  :null => false
    t.string   "user_id",        :limit => 200, :null => false
    t.string   "action",         :limit => 20,  :null => false
    t.datetime "audited_at"
  end

  create_table "departments", :id => false, :force => true do |t|
    t.string  "department_id",  :limit => 32,  :null => false
    t.string  "display",        :limit => 100, :null => false
    t.string  "department_nbr", :limit => 6
    t.string  "description",    :limit => 300
    t.string  "short_name",     :limit => 15
    t.string  "buyer_user_id",  :limit => 32
    t.string  "company_id",     :limit => 32,  :null => false
    t.boolean "is_destroyed"
  end

  add_index "departments", ["department_id"], :name => "index_departments_on_department_id", :unique => true

  create_table "districts", :id => false, :force => true do |t|
    t.string  "district_id",  :limit => 32,  :null => false
    t.string  "display",      :limit => 100, :null => false
    t.string  "district_nbr", :limit => 6
    t.string  "description",  :limit => 300
    t.string  "short_name",   :limit => 15
    t.string  "region_id",    :limit => 32,  :null => false
    t.string  "user_id",      :limit => 32
    t.boolean "is_destroyed"
  end

  add_index "districts", ["district_id"], :name => "index_districts_on_district_id", :unique => true

  create_table "donations", :id => false, :force => true do |t|
    t.string  "donation_id"
    t.string  "OwnerId"
    t.integer "IsDeleted"
    t.string  "Name"
    t.string  "CreatedDate"
    t.string  "CreatedById"
    t.string  "LastModifiedDate"
    t.string  "LastModifiedById"
    t.string  "SystemModstamp"
    t.string  "LastActivityDate"
    t.string  "Account__c"
    t.string  "Date__c"
    t.string  "Benefit__c"
    t.string  "No_of_Cards__c"
    t.integer "Amount__c"
    t.string  "Recipient__c"
    t.string  "Note__c"
  end

  create_table "event_meta", :id => false, :force => true do |t|
    t.string  "machine_meta_id", :limit => 32,  :null => false
    t.string  "event_meta_id",   :limit => 32,  :null => false
    t.string  "account_id",      :limit => 32
    t.string  "project_id",      :limit => 32
    t.string  "package_name",    :limit => 100
    t.string  "event_name",      :limit => 100, :null => false
    t.string  "description",     :limit => 500
    t.integer "revision_number"
    t.boolean "is_destroyed"
  end

  add_index "event_meta", ["event_meta_id"], :name => "index_event_meta_on_event_meta_id", :unique => true

  create_table "events", :id => false, :force => true do |t|
    t.string   "event_id",        :limit => 32,  :null => false
    t.string   "eventable_id",    :limit => 32,  :null => false
    t.string   "eventable_type",  :limit => 200, :null => false
    t.string   "event_type",      :limit => 10,  :null => false
    t.string   "user_id",         :limit => 32
    t.datetime "occurred_at",                    :null => false
    t.text     "message",                        :null => false
    t.integer  "revision_number"
    t.boolean  "is_destroyed"
    t.string   "title",           :limit => 200
  end

  add_index "events", ["event_id"], :name => "index_events_on_event_id", :unique => true

  create_table "events_aa", :id => false, :force => true do |t|
    t.string "attribute_audit_id", :limit => 32, :null => false
    t.string "model_audit_id",     :limit => 32, :null => false
    t.string "attribute_name",     :limit => 60, :null => false
    t.text   "before"
    t.text   "after"
  end

  create_table "events_ma", :id => false, :force => true do |t|
    t.string   "model_audit_id", :limit => 32,  :null => false
    t.string   "model_id",       :limit => 32,  :null => false
    t.string   "user_id",        :limit => 200, :null => false
    t.string   "action",         :limit => 20,  :null => false
    t.datetime "audited_at"
  end

  create_table "exports", :id => false, :force => true do |t|
    t.string  "export_id",       :limit => 32,  :null => false
    t.string  "file_name",       :limit => 200, :null => false
    t.text    "export_criteria"
    t.integer "total_rows"
  end

  add_index "exports", ["export_id"], :name => "index_exports_on_export_id", :unique => true

  create_table "forecast_profiles", :id => false, :force => true do |t|
    t.string  "forecast_profile_id",    :limit => 32,                                 :null => false
    t.string  "display",                :limit => 300,                                :null => false
    t.decimal "sales_py1_weight",                      :precision => 11, :scale => 2
    t.decimal "sales_py2_weight",                      :precision => 11, :scale => 2
    t.decimal "sales_py3_weight",                      :precision => 11, :scale => 2
    t.string  "contract_year_1_weight", :limit => 100
    t.string  "contract_year_2_weight", :limit => 100
    t.string  "contract_year_3_weight", :limit => 100
    t.string  "contract_year_4_weight", :limit => 100
    t.string  "contract_year_5_weight", :limit => 100
    t.string  "forecast_formula",       :limit => 100
    t.boolean "is_destroyed"
  end

  create_table "gl_accounts", :id => false, :force => true do |t|
    t.string  "gl_account_id",    :limit => 32,  :null => false
    t.string  "display",          :limit => 100, :null => false
    t.string  "gl_main_account",  :limit => 4,   :null => false
    t.string  "gl_sub_account",   :limit => 4
    t.boolean "is_location_fill"
    t.string  "gl_account_type",  :limit => 100
    t.boolean "is_destroyed"
  end

  add_index "gl_accounts", ["gl_account_id"], :name => "index_gl_accounts_on_gl_account_id", :unique => true

  create_table "grades", :id => false, :force => true do |t|
    t.string  "grade_id",     :limit => 32,  :null => false
    t.string  "display",      :limit => 300, :null => false
    t.string  "gradeset",     :limit => 100
    t.string  "grade_name",   :limit => 100
    t.string  "short_name",   :limit => 15
    t.integer "grade_order"
    t.boolean "is_destroyed"
  end

  add_index "grades", ["grade_id"], :name => "index_grades_on_grade_id", :unique => true

  create_table "imports", :id => false, :force => true do |t|
    t.string  "import_id",     :limit => 32,  :null => false
    t.string  "display",       :limit => 100
    t.string  "source_system", :limit => 100
    t.string  "target_system", :limit => 100
    t.string  "source_table",  :limit => 100
    t.string  "target_table",  :limit => 100
    t.text    "argument_hash"
    t.string  "state",         :limit => 100
    t.boolean "is_destryoed"
  end

  create_table "inventories", :id => false, :force => true do |t|
    t.string  "inventory_id",             :limit => 32,                                 :null => false
    t.string  "display",                  :limit => 300,                                :null => false
    t.string  "sku_id",                   :limit => 32,                                 :null => false
    t.string  "location_id",              :limit => 32,                                 :null => false
    t.decimal "on_hand_units",                           :precision => 11, :scale => 2
    t.decimal "in_transit_units",                        :precision => 11, :scale => 2
    t.decimal "non_sellable_units",                      :precision => 11, :scale => 2
    t.decimal "allocated_units",                         :precision => 11, :scale => 2
    t.decimal "reserved_units",                          :precision => 11, :scale => 2
    t.decimal "shipping_units",                          :precision => 11, :scale => 2
    t.decimal "work_in_process_units",                   :precision => 11, :scale => 2
    t.decimal "requested_units",                         :precision => 11, :scale => 2
    t.decimal "frozen_units",                            :precision => 11, :scale => 2
    t.decimal "supplier_on_order_units",                 :precision => 11, :scale => 2
    t.decimal "warehouse_on_order_units",                :precision => 11, :scale => 2
    t.decimal "cost_pool",                               :precision => 13, :scale => 4
    t.decimal "retail_pool",                             :precision => 13, :scale => 4
    t.decimal "boy_units",                               :precision => 11, :scale => 2
    t.decimal "boy_cost",                                :precision => 13, :scale => 4
    t.decimal "boy_retail",                              :precision => 13, :scale => 4
    t.decimal "last_inventory_units",                    :precision => 11, :scale => 2
    t.decimal "last_inventory_cost",                     :precision => 13, :scale => 4
    t.decimal "last_inventory_retail",                   :precision => 13, :scale => 4
    t.date    "reserve_end_date"
    t.date    "first_receipt_date"
    t.date    "last_receipt_date"
    t.date    "first_sale_date"
    t.date    "last_sale_date"
    t.date    "last_inventory_date"
    t.boolean "is_destroyed"
  end

  add_index "inventories", ["inventory_id"], :name => "index_inventories_on_inventory_id", :unique => true

  create_table "labels", :id => false, :force => true do |t|
    t.string  "label_id",     :limit => 32,  :null => false
    t.string  "display",      :limit => 100, :null => false
    t.string  "description",  :limit => 300
    t.string  "label_type",   :limit => 100, :null => false
    t.string  "short_name",   :limit => 15
    t.boolean "is_destroyed"
  end

  add_index "labels", ["label_id"], :name => "index_labels_on_label_id", :unique => true

  create_table "leads", :id => false, :force => true do |t|
    t.string  "lead_id",                  :limit => 32, :null => false
    t.boolean "is_destroyed"
    t.string  "master_record_id"
    t.string  "salutation"
    t.string  "first_name"
    t.string  "last_name"
    t.string  "title"
    t.string  "company"
    t.string  "street"
    t.string  "city"
    t.string  "state_province"
    t.string  "postal_code"
    t.string  "country"
    t.string  "latitude"
    t.string  "longitude"
    t.string  "phone"
    t.string  "mobile_phone"
    t.string  "fax"
    t.string  "email"
    t.string  "website"
    t.string  "description"
    t.string  "lead_source"
    t.string  "state"
    t.string  "industry"
    t.string  "rating"
    t.string  "annual_revenue"
    t.string  "employees"
    t.string  "owner_id"
    t.boolean "is_opted_out_email"
    t.boolean "is_converted"
    t.string  "converted_date"
    t.string  "converted_account_id"
    t.string  "converted_contact_id"
    t.string  "converted_opportunity_id"
    t.boolean "is_unread_by_owner"
    t.string  "created_date"
    t.string  "created_by_id"
    t.string  "last_modified_date"
    t.string  "last_modified_by_id"
    t.string  "system_mod_date"
    t.string  "last_activity_date"
    t.boolean "is_do_not_call"
    t.boolean "is_opted_out_fax"
    t.string  "last_transfer_date"
    t.string  "jigsaw"
    t.string  "jigsaw_contact_id"
    t.string  "email_bounce_reason"
    t.string  "email_bounce_date"
    t.string  "correlation_id"
    t.string  "correlation_data"
    t.string  "web_source"
    t.string  "low_grade"
    t.string  "high_grade"
    t.string  "enrollment"
    t.string  "current_vendor"
    t.string  "denomination"
    t.string  "territory"
    t.string  "sales_rep"
    t.string  "county"
    t.string  "contract_term"
    t.string  "expiration_date"
    t.string  "plaid"
    t.string  "notes"
    t.string  "samples"
    t.string  "date_last_verified"
    t.string  "lead_type"
    t.string  "charter_number"
    t.string  "district"
    t.string  "region"
  end

  create_table "location_tax_authorities", :id => false, :force => true do |t|
    t.string  "location_tax_authority_id", :limit => 32,  :null => false
    t.string  "display",                   :limit => 300, :null => false
    t.string  "location_id",               :limit => 32,  :null => false
    t.string  "tax_authority_id",          :limit => 32,  :null => false
    t.boolean "is_destroyed"
  end

  add_index "location_tax_authorities", ["location_tax_authority_id"], :name => "index_location_tax_authorities_on_location_tax_authority_id", :unique => true

  create_table "location_tax_holidays", :id => false, :force => true do |t|
    t.string  "location_tax_holiday_id", :limit => 32,                                 :null => false
    t.string  "display",                 :limit => 300,                                :null => false
    t.string  "location_id",             :limit => 32,                                 :null => false
    t.string  "short_name",              :limit => 15,                                 :null => false
    t.date    "effective_date"
    t.date    "end_date"
    t.string  "description",             :limit => 300
    t.boolean "is_tax_holiday"
    t.decimal "price_cutoff",                           :precision => 11, :scale => 2
    t.boolean "is_destroyed"
  end

  add_index "location_tax_holidays", ["location_tax_holiday_id"], :name => "index_location_tax_holidays_on_location_tax_holiday_id", :unique => true

  create_table "location_users", :id => false, :force => true do |t|
    t.string  "location_user_id", :limit => 32,  :null => false
    t.string  "display",          :limit => 300, :null => false
    t.string  "user_id",          :limit => 32,  :null => false
    t.string  "location_id",      :limit => 32,  :null => false
    t.boolean "is_manager"
    t.boolean "is_cashier"
    t.boolean "is_sales"
    t.boolean "is_back_office"
    t.string  "short_password",   :limit => 10
    t.boolean "is_destroyed"
  end

  add_index "location_users", ["location_user_id"], :name => "index_location_users_on_location_user_id", :unique => true

  create_table "locations", :id => false, :force => true do |t|
    t.string  "location_id",                  :limit => 32,                                :null => false
    t.string  "display",                      :limit => 100,                               :null => false
    t.string  "description",                  :limit => 300
    t.string  "short_name",                   :limit => 100
    t.string  "location_nbr",                 :limit => 11
    t.string  "location_brand",               :limit => 100
    t.string  "line_1",                       :limit => 100,                               :null => false
    t.string  "line_2",                       :limit => 100
    t.string  "line_3",                       :limit => 100
    t.string  "line_4",                       :limit => 100
    t.string  "city",                         :limit => 100,                               :null => false
    t.string  "state_code",                   :limit => 2
    t.string  "zip",                          :limit => 10,                                :null => false
    t.string  "country",                      :limit => 100
    t.string  "latitude",                     :limit => 15
    t.string  "longitude",                    :limit => 15
    t.string  "phone",                        :limit => 30,                                :null => false
    t.string  "fax",                          :limit => 30
    t.boolean "is_owned"
    t.boolean "is_store"
    t.boolean "is_temporary_store"
    t.boolean "is_webstore"
    t.boolean "is_factory"
    t.boolean "is_warehouse"
    t.date    "open_date"
    t.date    "close_date"
    t.string  "parent_location_id",           :limit => 32
    t.string  "district_id",                  :limit => 32,                                :null => false
    t.string  "price_book_id",                :limit => 32
    t.string  "promo_price_book_id",          :limit => 32
    t.decimal "selling_square_feet",                         :precision => 9, :scale => 0
    t.decimal "storage_square_feet",                         :precision => 9, :scale => 0
    t.string  "location_url",                 :limit => 100
    t.boolean "is_enabled"
    t.string  "time_zone",                    :limit => 100
    t.string  "sunday_open_time",             :limit => 100
    t.string  "sunday_close_time",            :limit => 100
    t.string  "monday_open_time",             :limit => 100
    t.string  "monday_close_time",            :limit => 100
    t.string  "tuesday_open_time",            :limit => 100
    t.string  "tuesday_close_time",           :limit => 100
    t.string  "wednesday_open_time",          :limit => 100
    t.string  "wednesday_close_time",         :limit => 100
    t.string  "thursday_open_time",           :limit => 100
    t.string  "thursday_close_time",          :limit => 100
    t.string  "friday_open_time",             :limit => 100
    t.string  "friday_close_time",            :limit => 100
    t.string  "saturday_open_time",           :limit => 100
    t.string  "saturday_close_time",          :limit => 100
    t.string  "merchant_identifier",          :limit => 15
    t.string  "merchant_name",                :limit => 30
    t.string  "merchant_time_zone",           :limit => 6
    t.string  "merchant_location",            :limit => 6
    t.string  "merchant_sic",                 :limit => 6
    t.string  "merchant_industry",            :limit => 15
    t.string  "merchant_acquirer_bin",        :limit => 6
    t.string  "merchant_agent",               :limit => 6
    t.string  "merchant_chain",               :limit => 6
    t.string  "merchant_store",               :limit => 6
    t.string  "merchant_terminal",            :limit => 6
    t.string  "merchant_v_number",            :limit => 15
    t.string  "merchant_pri_auth_phone",      :limit => 15
    t.string  "merchant_sec_auth_phone",      :limit => 15
    t.string  "merchant_pri_settle_phone",    :limit => 15
    t.string  "merchant_sec_settle_phone",    :limit => 15
    t.string  "merchant_amex_identifier",     :limit => 15
    t.string  "merchant_discover_identifier", :limit => 15
    t.string  "merchant_diners_identifier",   :limit => 15
    t.string  "merchant_sharing_groups",      :limit => 15
    t.string  "merchant_reimbursement",       :limit => 2
    t.string  "merchant_settle_agent",        :limit => 6
    t.string  "merchant_bank_aba",            :limit => 15
    t.boolean "is_destroyed"
  end

  add_index "locations", ["location_id"], :name => "index_locations_on_location_id", :unique => true

  create_table "logs", :id => false, :force => true do |t|
    t.string  "log_id",       :limit => 32,   :null => false
    t.string  "logable_id",   :limit => 32,   :null => false
    t.string  "logable_type", :limit => 200
    t.string  "log_nbr",      :limit => 20
    t.string  "log_type",     :limit => 200
    t.string  "log_title",    :limit => 200
    t.string  "log_message",  :limit => 1000
    t.boolean "is_destroyed"
  end

  create_table "lookups", :id => false, :force => true do |t|
    t.string   "lookup_id",        :limit => 32,                     :null => false
    t.string   "code",             :limit => 100,                    :null => false
    t.string   "category",         :limit => 100,                    :null => false
    t.string   "default_text",     :limit => 100,                    :null => false
    t.integer  "position",                        :default => 0,     :null => false
    t.boolean  "is_enabled",                      :default => true,  :null => false
    t.boolean  "is_destroyed",                    :default => false, :null => false
    t.integer  "revision_number",                 :default => 0,     :null => false
    t.integer  "code_int"
    t.string   "audit_created_by", :limit => 100
    t.string   "audit_updated_by", :limit => 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
    t.string   "depends_on",       :limit => 200
  end

  add_index "lookups", ["category", "is_enabled", "is_destroyed"], :name => "lookup_enabled"
  add_index "lookups", ["lookup_id", "is_destroyed"], :name => "index_lookups_on_lookup_id_and_is_destroyed"
  add_index "lookups", ["lookup_id"], :name => "index_lookups_on_lookup_id", :unique => true

  create_table "lookups_aa", :id => false, :force => true do |t|
    t.string "attribute_audit_id", :limit => 32, :null => false
    t.string "model_audit_id",     :limit => 32, :null => false
    t.string "attribute_name",     :limit => 60, :null => false
    t.text   "before"
    t.text   "after"
  end

  create_table "lookups_ma", :id => false, :force => true do |t|
    t.string   "model_audit_id", :limit => 32,  :null => false
    t.string   "model_id",       :limit => 32,  :null => false
    t.string   "user_id",        :limit => 200, :null => false
    t.string   "action",         :limit => 20,  :null => false
    t.datetime "audited_at"
  end

  create_table "machine_meta", :id => false, :force => true do |t|
    t.string  "model_meta_id",   :limit => 32,  :null => false
    t.string  "machine_meta_id", :limit => 32,  :null => false
    t.string  "account_id",      :limit => 32
    t.string  "project_id",      :limit => 32
    t.string  "package_name",    :limit => 100
    t.string  "machine_name",    :limit => 100, :null => false
    t.string  "initial_state",   :limit => 100, :null => false
    t.string  "description",     :limit => 500
    t.integer "revision_number"
    t.boolean "is_destroyed"
  end

  add_index "machine_meta", ["machine_meta_id"], :name => "index_machine_meta_on_machine_meta_id", :unique => true

  create_table "modules", :id => false, :force => true do |t|
    t.string  "module_code",     :limit => 32,                     :null => false
    t.string  "description",     :limit => 200,                    :null => false
    t.boolean "is_enabled",                     :default => true,  :null => false
    t.boolean "is_destroyed",                   :default => false, :null => false
    t.integer "revision_number",                :default => 0,     :null => false
  end

  add_index "modules", ["module_code", "is_destroyed"], :name => "avail_modules"
  add_index "modules", ["module_code"], :name => "index_modules_on_module_code", :unique => true

  create_table "notes", :id => false, :force => true do |t|
    t.string   "note_id",          :limit => 32,                     :null => false
    t.string   "notable_type",     :limit => 100,                    :null => false
    t.string   "notable_id",       :limit => 32,                     :null => false
    t.text     "detail",                                             :null => false
    t.string   "category",         :limit => 40
    t.boolean  "is_internal",                     :default => false, :null => false
    t.boolean  "is_destroyed",                    :default => false, :null => false
    t.integer  "revision_number",                 :default => 0,     :null => false
    t.string   "audit_created_by", :limit => 100
    t.string   "audit_updated_by", :limit => 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "notes", ["note_id"], :name => "index_notes_on_note_id", :unique => true

  create_table "notes_aa", :id => false, :force => true do |t|
    t.string "attribute_audit_id", :limit => 32, :null => false
    t.string "model_audit_id",     :limit => 32, :null => false
    t.string "attribute_name",     :limit => 60, :null => false
    t.text   "before"
    t.text   "after"
  end

  create_table "notes_ma", :id => false, :force => true do |t|
    t.string   "model_audit_id", :limit => 32,  :null => false
    t.string   "model_id",       :limit => 32,  :null => false
    t.string   "user_id",        :limit => 200, :null => false
    t.string   "action",         :limit => 20,  :null => false
    t.datetime "audited_at"
  end

  create_table "order_details", :id => false, :force => true do |t|
    t.string  "ship_longitude",            :limit => 15
    t.boolean "is_residential"
    t.boolean "is_commercial"
    t.string  "phone",                     :limit => 30
    t.string  "email_address",             :limit => 200
    t.string  "site_id",                   :limit => 32
    t.string  "grade_id",                  :limit => 32
    t.string  "gender",                    :limit => 100
    t.string  "sales_user_id",             :limit => 32
    t.date    "promised_date"
    t.string  "state",                     :limit => 100
    t.string  "serial_number",             :limit => 100
    t.decimal "order_units",                              :precision => 11, :scale => 2
    t.decimal "retail_price",                             :precision => 11, :scale => 2
    t.decimal "sale_price",                               :precision => 11, :scale => 2
    t.decimal "sales_tax_rate",                           :precision => 13, :scale => 4
    t.string  "price_type",                :limit => 100
    t.boolean "is_taxable_product"
    t.boolean "is_tax_charged"
    t.decimal "shipping_amount",                          :precision => 11, :scale => 2
    t.decimal "discount_percent",                         :precision => 13, :scale => 4
    t.decimal "discount_amount",                          :precision => 11, :scale => 2
    t.string  "customer_discount_reason",  :limit => 100
    t.string  "customer_return_reason",    :limit => 100
    t.string  "customer_cancel_reason",    :limit => 100
    t.date    "cancel_date"
    t.string  "reference_order_detail_id", :limit => 32
    t.boolean "is_cancelled"
    t.boolean "is_layaway"
    t.boolean "is_destroyed"
    t.string  "order_detail_id",           :limit => 32,                                 :null => false
    t.string  "display",                   :limit => 300
    t.string  "order_id",                  :limit => 32
    t.string  "order_line_nbr",            :limit => 11
    t.string  "sku_id",                    :limit => 32,                                 :null => false
    t.string  "sku_alias_id",              :limit => 32,                                 :null => false
    t.string  "delivery_method",           :limit => 100,                                :null => false
    t.string  "pickup_location_id",        :limit => 32
    t.string  "ship_to_name",              :limit => 100
    t.string  "ship_line_1",               :limit => 100
    t.string  "ship_line_2",               :limit => 100
    t.string  "ship_line_3",               :limit => 100
    t.string  "ship_line_4",               :limit => 100
    t.string  "ship_city",                 :limit => 100
    t.string  "ship_state_code",           :limit => 2
    t.string  "ship_zip",                  :limit => 10
    t.string  "ship_country",              :limit => 100
    t.string  "ship_latitude",             :limit => 15
  end

  add_index "order_details", ["order_detail_id"], :name => "index_order_details_on_order_detail_id", :unique => true

  create_table "orders", :id => false, :force => true do |t|
    t.string  "order_id",                :limit => 32,                                 :null => false
    t.string  "display",                 :limit => 300
    t.string  "location_id",             :limit => 32,                                 :null => false
    t.string  "terminal_id",             :limit => 32
    t.string  "customer_order_nbr",      :limit => 11
    t.string  "customer_id",             :limit => 32,                                 :null => false
    t.date    "order_start_date"
    t.date    "order_date",                                                            :null => false
    t.date    "price_lookup_date"
    t.string  "user_id",                 :limit => 32
    t.string  "order_source",            :limit => 100,                                :null => false
    t.boolean "is_tax_exempt_date"
    t.boolean "is_tax_exempt_customer"
    t.boolean "is_trade_discount_order"
    t.decimal "order_total",                            :precision => 11, :scale => 2
    t.string  "state",                   :limit => 100
    t.boolean "is_destroyed"
  end

  add_index "orders", ["order_id"], :name => "index_orders_on_order_id", :unique => true

  create_table "payments", :id => false, :force => true do |t|
    t.string  "payment_id",                  :limit => 32,                                 :null => false
    t.string  "display",                     :limit => 300
    t.string  "payment_nbr",                 :limit => 11,                                 :null => false
    t.string  "order_id",                    :limit => 32
    t.string  "customer_id",                 :limit => 32
    t.string  "terminal_id",                 :limit => 32
    t.string  "location_id",                 :limit => 32
    t.string  "tender_id",                   :limit => 32
    t.string  "voucher_id",                  :limit => 32
    t.date    "payment_date"
    t.decimal "payment_amount",                             :precision => 11, :scale => 2
    t.decimal "layaway_deposit_amount",                     :precision => 11, :scale => 2
    t.string  "account_holder",              :limit => 100
    t.string  "account_number",              :limit => 100
    t.date    "expiration_date"
    t.string  "ccv_code",                    :limit => 6
    t.string  "serial_number",               :limit => 100
    t.integer "routing_number"
    t.string  "state_code",                  :limit => 2
    t.string  "license_number",              :limit => 15
    t.date    "birth_date"
    t.boolean "is_prior_authorized_capture"
    t.string  "payment_authorization_code",  :limit => 15
    t.string  "avs_response",                :limit => 15
    t.string  "state",                       :limit => 100
    t.boolean "is_destroyed"
  end

  add_index "payments", ["payment_id"], :name => "index_payments_on_payment_id", :unique => true

  create_table "period_results", :id => false, :force => true do |t|
    t.string  "period_result_id",           :limit => 32,                                 :null => false
    t.string  "display",                    :limit => 300,                                :null => false
    t.string  "sku_id",                     :limit => 32,                                 :null => false
    t.string  "location_id",                :limit => 32,                                 :null => false
    t.string  "period_id",                  :limit => 32,                                 :null => false
    t.decimal "adjusted_cost",                             :precision => 11, :scale => 2
    t.decimal "adjusted_retail",                           :precision => 11, :scale => 2
    t.decimal "adjusted_units",                            :precision => 11, :scale => 2
    t.decimal "backorder_cost",                            :precision => 11, :scale => 2
    t.decimal "backorder_retail",                          :precision => 11, :scale => 2
    t.decimal "backorder_units",                           :precision => 11, :scale => 2
    t.decimal "clearance_sale_cost",                       :precision => 11, :scale => 2
    t.decimal "clearance_sale_retail",                     :precision => 11, :scale => 2
    t.decimal "clearance_sale_units",                      :precision => 11, :scale => 2
    t.decimal "consumed_cost",                             :precision => 11, :scale => 2
    t.decimal "consumed_retail",                           :precision => 11, :scale => 2
    t.decimal "consumed_units",                            :precision => 11, :scale => 2
    t.decimal "net_inventory_cost",                        :precision => 11, :scale => 2
    t.decimal "net_inventory_retail",                      :precision => 11, :scale => 2
    t.decimal "net_inventory_units",                       :precision => 11, :scale => 2
    t.decimal "net_sale_cost",                             :precision => 11, :scale => 2
    t.decimal "net_sale_retail",                           :precision => 11, :scale => 2
    t.decimal "net_sale_units",                            :precision => 11, :scale => 2
    t.decimal "produced_cost",                             :precision => 11, :scale => 2
    t.decimal "produced_retail",                           :precision => 11, :scale => 2
    t.decimal "produced_units",                            :precision => 11, :scale => 2
    t.decimal "promo_sale_cost",                           :precision => 11, :scale => 2
    t.decimal "promo_sale_retail",                         :precision => 11, :scale => 2
    t.decimal "promo_sale_units",                          :precision => 11, :scale => 2
    t.decimal "purchased_cost",                            :precision => 11, :scale => 2
    t.decimal "purchased_retail",                          :precision => 11, :scale => 2
    t.decimal "purchased_units",                           :precision => 11, :scale => 2
    t.decimal "received_cost",                             :precision => 11, :scale => 2
    t.decimal "received_retail",                           :precision => 11, :scale => 2
    t.decimal "received_units",                            :precision => 11, :scale => 2
    t.decimal "requested_cost",                            :precision => 11, :scale => 2
    t.decimal "requested_retail",                          :precision => 11, :scale => 2
    t.decimal "requested_units",                           :precision => 11, :scale => 2
    t.decimal "return_sale_cost",                          :precision => 11, :scale => 2
    t.decimal "return_sale_retail",                        :precision => 11, :scale => 2
    t.decimal "return_sale_units",                         :precision => 11, :scale => 2
    t.decimal "shipped_cost",                              :precision => 11, :scale => 2
    t.decimal "shipped_retail",                            :precision => 11, :scale => 2
    t.decimal "shipped_units",                             :precision => 11, :scale => 2
    t.decimal "work_in_process_cost",                      :precision => 11, :scale => 2
    t.decimal "work_in_process_retail",                    :precision => 11, :scale => 2
    t.decimal "work_in_process_units",                     :precision => 11, :scale => 2
    t.decimal "professional_discount_cost",                :precision => 11, :scale => 2
    t.decimal "employee_discount_cost",                    :precision => 11, :scale => 2
    t.decimal "manager_discount_cost",                     :precision => 11, :scale => 2
    t.decimal "ending_inventory_cost",                     :precision => 11, :scale => 2
    t.decimal "ending_inventory_retail",                   :precision => 11, :scale => 2
    t.decimal "ending_inventory_units",                    :precision => 11, :scale => 2
    t.boolean "is_destroyed"
  end

  add_index "period_results", ["period_result_id"], :name => "index_period_results_on_period_result_id", :unique => true

  create_table "periods", :id => false, :force => true do |t|
    t.string  "period_id",     :limit => 32,  :null => false
    t.string  "display",       :limit => 100, :null => false
    t.date    "start_date",                   :null => false
    t.date    "end_date",                     :null => false
    t.string  "year_number",   :limit => 4,   :null => false
    t.string  "period_number", :limit => 2,   :null => false
    t.boolean "is_destroyed"
  end

  add_index "periods", ["period_id"], :name => "index_periods_on_period_id", :unique => true

  create_table "permissions", :id => false, :force => true do |t|
    t.string  "permission_id",   :limit => 32,                    :null => false
    t.string  "role_id",         :limit => 32,                    :null => false
    t.string  "privilege_id",    :limit => 32,                    :null => false
    t.boolean "is_enabled",                    :default => true,  :null => false
    t.boolean "is_destroyed",                  :default => false, :null => false
    t.integer "revision_number",               :default => 0,     :null => false
  end

  add_index "permissions", ["permission_id"], :name => "index_permissions_on_permission_id", :unique => true
  add_index "permissions", ["role_id", "is_destroyed"], :name => "index_permissions_on_role_id_and_is_destroyed"

  create_table "pick_tickets", :id => false, :force => true do |t|
    t.string  "pick_ticket_id",          :limit => 32,                                :null => false
    t.string  "display",                 :limit => 300
    t.string  "state",                   :limit => 100
    t.string  "pick_ticket_nbr",         :limit => 11
    t.string  "pickable_id",             :limit => 32
    t.string  "pickable_type",           :limit => 100
    t.string  "fulfillment_location_id", :limit => 32
    t.string  "work_order_id",           :limit => 32
    t.decimal "request_units",                          :precision => 9, :scale => 0
    t.decimal "complete_units",                         :precision => 9, :scale => 0
    t.date    "release_date"
    t.date    "start_date"
    t.date    "complete_date"
    t.date    "ship_date"
    t.boolean "is_destroyed"
  end

  add_index "pick_tickets", ["pick_ticket_id"], :name => "index_pick_tickets_on_pick_ticket_id", :unique => true

  create_table "price_books", :id => false, :force => true do |t|
    t.string  "price_book_id",   :limit => 32,  :null => false
    t.string  "display",         :limit => 100, :null => false
    t.string  "description",     :limit => 300
    t.string  "price_book_type", :limit => 100
    t.string  "short_name",      :limit => 15
    t.boolean "is_destroyed"
  end

  add_index "price_books", ["price_book_id"], :name => "index_price_books_on_price_book_id", :unique => true

  create_table "price_changes", :id => false, :force => true do |t|
    t.string  "price_change_id", :limit => 32,  :null => false
    t.string  "display",         :limit => 300, :null => false
    t.boolean "is_destroyed"
  end

  add_index "price_changes", ["price_change_id"], :name => "index_price_changes_on_price_change_id", :unique => true

  create_table "privileges", :id => false, :force => true do |t|
    t.string  "privilege_code",  :limit => 100,                    :null => false
    t.string  "module_code",     :limit => 40,                     :null => false
    t.string  "description",     :limit => 200,                    :null => false
    t.boolean "is_enabled",                     :default => true,  :null => false
    t.boolean "is_destroyed",                   :default => false, :null => false
    t.integer "revision_number",                :default => 0,     :null => false
    t.string  "privilege_id",    :limit => 32,                     :null => false
    t.string  "model_name",      :limit => 200
    t.string  "assoc_name",      :limit => 200
    t.boolean "op_create",                      :default => false, :null => false
    t.boolean "op_read",                        :default => false, :null => false
    t.boolean "op_update",                      :default => false, :null => false
    t.boolean "op_delete",                      :default => false, :null => false
    t.boolean "op_custom",                      :default => false, :null => false
  end

  add_index "privileges", ["privilege_code"], :name => "index_privileges_on_privilege_code", :unique => true

  create_table "product_types", :id => false, :force => true do |t|
    t.string  "product_type_id", :limit => 32,  :null => false
    t.string  "display",         :limit => 100, :null => false
    t.string  "description",     :limit => 300
    t.string  "short_name",      :limit => 15
    t.boolean "is_fabric"
    t.boolean "is_trim"
    t.boolean "is_converted"
    t.boolean "is_labor"
    t.boolean "is_shipping"
    t.boolean "is_destroyed"
  end

  add_index "product_types", ["product_type_id"], :name => "index_product_types_on_product_type_id", :unique => true

  create_table "products", :id => false, :force => true do |t|
    t.string  "product_id",   :limit => 32,  :null => false
    t.string  "display",      :limit => 100, :null => false
    t.string  "product_nbr",  :limit => 6
    t.string  "description",  :limit => 300
    t.string  "category_id",  :limit => 32,  :null => false
    t.boolean "is_destroyed"
  end

  add_index "products", ["product_id"], :name => "index_products_on_product_id", :unique => true

  create_table "program_colors", :id => false, :force => true do |t|
    t.string  "program_color_id", :limit => 32,  :null => false
    t.string  "display",          :limit => 300, :null => false
    t.string  "program_style_id", :limit => 32,  :null => false
    t.string  "style_color_id",   :limit => 32,  :null => false
    t.boolean "is_active"
    t.boolean "is_destroyed"
    t.string  "style_id",         :limit => 32
    t.string  "color_id",         :limit => 32
  end

  add_index "program_colors", ["program_color_id"], :name => "index_program_colors_on_program_color_id", :unique => true

  create_table "program_products", :id => false, :force => true do |t|
    t.string  "program_product_id", :limit => 32,                                 :null => false
    t.string  "display",            :limit => 300,                                :null => false
    t.string  "program_id",         :limit => 32,                                 :null => false
    t.string  "product_id",         :limit => 32,                                 :null => false
    t.string  "from_grade_id",      :limit => 32,                                 :null => false
    t.string  "thru_grade_id",      :limit => 32,                                 :null => false
    t.string  "uniform_source",     :limit => 100
    t.boolean "is_required_male"
    t.boolean "is_required_female"
    t.boolean "is_optional_male"
    t.boolean "is_optional_female"
    t.boolean "is_includes_logo"
    t.decimal "discount_percent",                  :precision => 11, :scale => 2
    t.boolean "is_active"
    t.boolean "is_destroyed"
  end

  add_index "program_products", ["program_product_id"], :name => "index_program_products_on_program_product_id", :unique => true

  create_table "program_styles", :id => false, :force => true do |t|
    t.string  "program_style_id",   :limit => 32,                                 :null => false
    t.string  "display",            :limit => 300,                                :null => false
    t.string  "program_product_id", :limit => 32,                                 :null => false
    t.string  "style_id",           :limit => 32,                                 :null => false
    t.decimal "retail_price",                      :precision => 11, :scale => 2
    t.decimal "price_units",                       :precision => 9,  :scale => 0
    t.boolean "is_destroyed"
  end

  add_index "program_styles", ["program_style_id"], :name => "index_program_styles_on_program_style_id", :unique => true

  create_table "programs", :id => false, :force => true do |t|
    t.string  "program_id",                     :limit => 32,                                 :null => false
    t.string  "display",                        :limit => 300,                                :null => false
    t.string  "program_nbr",                    :limit => 11,                                 :null => false
    t.string  "site_id",                        :limit => 32,                                 :null => false
    t.string  "program_name",                   :limit => 100
    t.string  "description",                    :limit => 300
    t.date    "effective_date"
    t.date    "end_date"
    t.date    "contract_sent_date"
    t.date    "contract_received_date"
    t.date    "order_form_sent_date"
    t.date    "contract_won_date"
    t.date    "contract_lost_date"
    t.boolean "is_exclusive"
    t.decimal "teacher_discount_percent",                      :precision => 11, :scale => 2
    t.decimal "administrator_discount_percent",                :precision => 11, :scale => 2
    t.boolean "is_discount_in_store"
    t.boolean "is_discount_on_web"
    t.boolean "is_active"
    t.boolean "is_destroyed"
  end

  add_index "programs", ["program_id"], :name => "index_programs_on_program_id", :unique => true

  create_table "projection_details", :id => false, :force => true do |t|
    t.string  "projection_detail_id",        :limit => 32,  :null => false
    t.string  "display",                     :limit => 200
    t.string  "projection_id",               :limit => 32
    t.string  "projection_line_nbr",         :limit => 20
    t.string  "forecast_profile_id",         :limit => 32
    t.string  "sku_id",                      :limit => 32
    t.string  "location_id",                 :limit => 32
    t.integer "forecast_units"
    t.integer "proposed_units"
    t.integer "approved_units"
    t.integer "closed_units"
    t.integer "projection_2_units"
    t.integer "projection_update_units"
    t.integer "projection_adjustment_units"
    t.integer "sale_units_ytd"
    t.integer "sale_units_py1"
    t.integer "sale_units_py2"
    t.integer "sale_units_py3"
    t.integer "number_of_schools"
    t.integer "average_contract_year"
    t.integer "years_active"
    t.integer "average_sales"
    t.integer "standard_deviation"
    t.boolean "is_destroyed"
  end

  create_table "projection_locations", :id => false, :force => true do |t|
    t.string  "projection_location_id", :limit => 32,  :null => false
    t.string  "projection_id",          :limit => 32
    t.string  "location_id",            :limit => 32
    t.string  "display",                :limit => 100
    t.string  "state",                  :limit => 100
    t.boolean "is_destroyed"
  end

  create_table "projection_reasons", :id => false, :force => true do |t|
    t.string  "projection_reason_id", :limit => 32,  :null => false
    t.string  "display",              :limit => 100, :null => false
    t.string  "description",          :limit => 300
    t.string  "short_name",           :limit => 15
    t.boolean "is_destroyed"
  end

  add_index "projection_reasons", ["projection_reason_id"], :name => "index_projection_reasons_on_projection_reason_id", :unique => true

  create_table "projections", :id => false, :force => true do |t|
    t.string  "projection_id",       :limit => 32,  :null => false
    t.string  "department_id",       :limit => 32
    t.string  "forecast_profile_id", :limit => 32
    t.string  "state",               :limit => 100
    t.string  "display",             :limit => 300
    t.string  "short_name",          :limit => 50
    t.string  "description",         :limit => 300
    t.string  "plan_year",           :limit => 32
    t.string  "projection_type",     :limit => 32
    t.string  "version",             :limit => 100
    t.boolean "is_destroyed"
  end

  create_table "purchase_details", :id => false, :force => true do |t|
    t.decimal "supplier_cost",                           :precision => 13, :scale => 4
    t.decimal "invoice_cost",                            :precision => 13, :scale => 4
    t.decimal "inventory_cost",                          :precision => 13, :scale => 4
    t.decimal "extra_cost",                              :precision => 13, :scale => 4
    t.boolean "is_destroyed"
    t.string  "purchase_detail_id",       :limit => 32,                                 :null => false
    t.string  "display",                  :limit => 300,                                :null => false
    t.string  "purchase_id",              :limit => 32
    t.string  "purchase_line_nbr",        :limit => 11
    t.string  "sku_id",                   :limit => 32
    t.string  "supplier_item_identifier", :limit => 30
    t.string  "description",              :limit => 300
    t.string  "color_name",               :limit => 100
    t.string  "size_name",                :limit => 100
    t.string  "sku_alias",                :limit => 30
    t.string  "state",                    :limit => 100
    t.decimal "units_ordered",                           :precision => 11, :scale => 2
    t.decimal "order_pack_size",                         :precision => 11, :scale => 2
    t.string  "order_pack_type",          :limit => 100
    t.decimal "order_cost_units",                        :precision => 11, :scale => 2
    t.string  "order_multiple_type",      :limit => 100
    t.decimal "order_multiple",                          :precision => 11, :scale => 2
    t.decimal "units_approved",                          :precision => 11, :scale => 2
    t.decimal "units_cancelled",                         :precision => 11, :scale => 2
  end

  add_index "purchase_details", ["purchase_detail_id"], :name => "index_purchase_details_on_purchase_detail_id", :unique => true

  create_table "purchases", :id => false, :force => true do |t|
    t.string  "purchase_id",                 :limit => 32,                                :null => false
    t.string  "display",                     :limit => 300,                               :null => false
    t.string  "purchase_order_nbr",          :limit => 11
    t.string  "supplier_id",                 :limit => 32
    t.string  "location_id",                 :limit => 32
    t.string  "purchase_type",               :limit => 32
    t.string  "purchase_source",             :limit => 32
    t.string  "state",                       :limit => 100
    t.date    "order_date"
    t.string  "ordered_by_user_id",          :limit => 32
    t.date    "ship_date"
    t.date    "delivery_date"
    t.date    "cancel_not_shipped_by_date"
    t.date    "cancel_not_received_by_date"
    t.date    "approval_date"
    t.string  "approved_by_user_id",         :limit => 32
    t.date    "first_receipt_date"
    t.date    "cancelled_date"
    t.string  "cancelled_by_user_id",        :limit => 32
    t.string  "payment_term",                :limit => 100
    t.string  "freight_term",                :limit => 100
    t.string  "ship_via",                    :limit => 100
    t.boolean "is_phone_order"
    t.string  "confirmed_by_user_id",        :limit => 32
    t.string  "master_purchase_id",          :limit => 32
    t.string  "carrier_supplier_id",         :limit => 32
    t.boolean "is_special_order"
    t.boolean "is_ship_cancel"
    t.decimal "estimated_lead_time_days",                   :precision => 9, :scale => 0
    t.boolean "is_destroyed"
  end

  add_index "purchases", ["purchase_id"], :name => "index_purchases_on_purchase_id", :unique => true

  create_table "receipt_details", :id => false, :force => true do |t|
    t.string  "receipt_detail_id",  :limit => 32,                                 :null => false
    t.string  "display",            :limit => 300,                                :null => false
    t.string  "receipt_id",         :limit => 32
    t.string  "receipt_line_nbr",   :limit => 11
    t.string  "purchase_detail_id", :limit => 32
    t.decimal "received_units",                    :precision => 11, :scale => 2
    t.string  "state",              :limit => 100
    t.boolean "is_destroyed"
  end

  add_index "receipt_details", ["receipt_detail_id"], :name => "index_receipt_details_on_receipt_detail_id", :unique => true

  create_table "receipt_formats", :id => false, :force => true do |t|
    t.string  "receipt_format_id",               :limit => 32,                                 :null => false
    t.string  "display",                         :limit => 100,                                :null => false
    t.string  "description",                     :limit => 300
    t.string  "icon_url",                        :limit => 200
    t.decimal "icon_width",                                     :precision => 13, :scale => 4
    t.decimal "paper_width",                                    :precision => 13, :scale => 4
    t.string  "top_name",                        :limit => 100
    t.text    "feedback_message"
    t.text    "return_policy"
    t.string  "website_message",                 :limit => 200
    t.text    "promotional_message"
    t.string  "message_separator",               :limit => 100
    t.boolean "is_date_in_header"
    t.boolean "is_time_in_header"
    t.boolean "is_location_name_in_header"
    t.boolean "is_location_number_in_header"
    t.boolean "is_order_number_in_header"
    t.boolean "is_cashier_name_in_header"
    t.boolean "is_cashier_number_in_header"
    t.boolean "is_salesperson_name_in_header"
    t.boolean "is_salesperson_number_in_header"
    t.boolean "is_customer_name_in_header"
    t.boolean "is_date_in_footer"
    t.boolean "is_time_in_footer"
    t.boolean "is_location_name_in_footer"
    t.boolean "is_location_number_in_footer"
    t.boolean "is_order_number_in_footer"
    t.boolean "is_cashier_name_in_footer"
    t.boolean "is_cashier_number_in_footer"
    t.boolean "is_salesperson_name_in_footer"
    t.boolean "is_salesperson_number_in_footer"
    t.boolean "is_customer_name_in_footer"
    t.boolean "is_destroyed"
  end

  add_index "receipt_formats", ["receipt_format_id"], :name => "index_receipt_formats_on_receipt_format_id", :unique => true

  create_table "receipts", :id => false, :force => true do |t|
    t.string  "receipt_id",                  :limit => 32,                                :null => false
    t.string  "display",                     :limit => 300,                               :null => false
    t.string  "receipt_nbr",                 :limit => 11
    t.string  "location_id",                 :limit => 32
    t.string  "carrier_supplier_id",         :limit => 32
    t.string  "trailer_identifier",          :limit => 100
    t.date    "create_date"
    t.date    "ship_date"
    t.date    "appointment_date"
    t.decimal "appointment_duration",                       :precision => 9, :scale => 0
    t.date    "start_date"
    t.date    "complete_date"
    t.string  "completed_by_user_id",        :limit => 32
    t.string  "pro_number",                  :limit => 100
    t.string  "bill_of_lading_number",       :limit => 100
    t.string  "packing_slip_number",         :limit => 100
    t.string  "seal_1_number",               :limit => 100
    t.string  "seal_2_number",               :limit => 100
    t.string  "seal_3_number",               :limit => 100
    t.string  "asn_number",                  :limit => 100
    t.boolean "is_expected_asn"
    t.string  "standard_carrier_alpha_code", :limit => 4
    t.string  "ship_point",                  :limit => 100
    t.string  "ship_via",                    :limit => 100
    t.string  "freight_terms",               :limit => 100
    t.string  "invoice_number",              :limit => 100
    t.string  "state",                       :limit => 100
    t.boolean "is_destroyed"
  end

  add_index "receipts", ["receipt_id"], :name => "index_receipts_on_receipt_id", :unique => true

  create_table "regions", :id => false, :force => true do |t|
    t.string  "region_id",    :limit => 32,  :null => false
    t.string  "display",      :limit => 100, :null => false
    t.string  "region_nbr",   :limit => 6
    t.string  "description",  :limit => 300
    t.string  "short_name",   :limit => 15
    t.string  "company_id",   :limit => 32,  :null => false
    t.string  "user_id",      :limit => 32
    t.boolean "is_destroyed"
  end

  add_index "regions", ["region_id"], :name => "index_regions_on_region_id", :unique => true

  create_table "roles", :id => false, :force => true do |t|
    t.string   "role_id",          :limit => 32,                     :null => false
    t.string   "role_code",        :limit => 50,                     :null => false
    t.string   "description",      :limit => 400,                    :null => false
    t.boolean  "is_enabled",                      :default => true,  :null => false
    t.boolean  "is_destroyed",                    :default => false, :null => false
    t.integer  "revision_number",                 :default => 0,     :null => false
    t.boolean  "auto_assign",                                        :null => false
    t.string   "audit_created_by", :limit => 100
    t.string   "audit_updated_by", :limit => 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "roles", ["role_id"], :name => "index_roles_on_role_id", :unique => true

  create_table "roles_aa", :id => false, :force => true do |t|
    t.string "attribute_audit_id", :limit => 32, :null => false
    t.string "model_audit_id",     :limit => 32, :null => false
    t.string "attribute_name",     :limit => 60, :null => false
    t.text   "before"
    t.text   "after"
  end

  create_table "roles_ma", :id => false, :force => true do |t|
    t.string   "model_audit_id", :limit => 32,  :null => false
    t.string   "model_id",       :limit => 32,  :null => false
    t.string   "user_id",        :limit => 200, :null => false
    t.string   "action",         :limit => 20,  :null => false
    t.datetime "audited_at"
  end

  create_table "rules", :id => false, :force => true do |t|
    t.string  "rule_id",         :limit => 32,  :null => false
    t.string  "display",         :limit => 300, :null => false
    t.string  "ruleset_id",      :limit => 32,  :null => false
    t.string  "rule_type",       :limit => 100
    t.string  "input_attribute", :limit => 100
    t.string  "model_name",      :limit => 100
    t.string  "attribute_name",  :limit => 100
    t.string  "rule_action",     :limit => 100
    t.boolean "is_active"
    t.string  "rule_seq",        :limit => 6
    t.boolean "is_destroyed"
  end

  add_index "rules", ["rule_id"], :name => "index_rules_on_rule_id", :unique => true

  create_table "rulesets", :id => false, :force => true do |t|
    t.string  "ruleset_id",   :limit => 32,  :null => false
    t.string  "display",      :limit => 100, :null => false
    t.string  "ruleset_code", :limit => 100
    t.string  "description",  :limit => 300
    t.boolean "is_active"
    t.boolean "is_destroyed"
  end

  add_index "rulesets", ["ruleset_id"], :name => "index_rulesets_on_ruleset_id", :unique => true

  create_table "seasonal_indexes", :id => false, :force => true do |t|
    t.string  "seasonal_index_id",   :limit => 32,  :null => false
    t.string  "display",             :limit => 300, :null => false
    t.string  "seasonal_index_name", :limit => 100, :null => false
    t.boolean "is_destroyed"
  end

  add_index "seasonal_indexes", ["seasonal_index_id"], :name => "index_seasonal_indexes_on_seasonal_index_id", :unique => true

  create_table "seeds", :id => false, :force => true do |t|
    t.string "version", :null => false
  end

  add_index "seeds", ["version"], :name => "index_seeds_on_version", :unique => true

  create_table "sequences", :id => false, :force => true do |t|
    t.string  "sequence_code", :limit => 100,                :null => false
    t.string  "prefix",        :limit => 10
    t.integer "padding",                      :default => 8, :null => false
    t.integer "value",                        :default => 1, :null => false
  end

  add_index "sequences", ["sequence_code"], :name => "index_sequences_on_sequence_code", :unique => true

  create_table "shipment_details", :id => false, :force => true do |t|
    t.string  "shipment_detail_id", :limit => 32,                                :null => false
    t.string  "display",            :limit => 300,                               :null => false
    t.string  "shipment_id",        :limit => 32,                                :null => false
    t.string  "pick_ticket_id",     :limit => 32,                                :null => false
    t.decimal "ship_units",                        :precision => 9, :scale => 0
    t.decimal "received_units",                    :precision => 9, :scale => 0
    t.string  "container_id",       :limit => 32
    t.boolean "is_destroyed"
  end

  add_index "shipment_details", ["shipment_detail_id"], :name => "index_shipment_details_on_shipment_detail_id", :unique => true

  create_table "shipments", :id => false, :force => true do |t|
    t.string  "shipment_id",             :limit => 32,                                 :null => false
    t.string  "display",                 :limit => 300
    t.string  "state",                   :limit => 100
    t.string  "shipment_nbr",            :limit => 11
    t.string  "location_id",             :limit => 32,                                 :null => false
    t.string  "shippable_type",          :limit => 100
    t.string  "shippable_id",            :limit => 32
    t.string  "supplier_id",             :limit => 32
    t.string  "tracking_number",         :limit => 100
    t.date    "create_date",                                                           :null => false
    t.date    "ship_date"
    t.date    "receipt_date"
    t.date    "estimated_delivery_date"
    t.decimal "shipping_cost",                          :precision => 11, :scale => 2
    t.string  "ship_name",               :limit => 100
    t.string  "ship_line_1",             :limit => 100
    t.string  "ship_line_2",             :limit => 100
    t.string  "ship_line_3",             :limit => 100
    t.string  "ship_line_4",             :limit => 100
    t.string  "ship_city",               :limit => 100
    t.string  "ship_state_code",         :limit => 2
    t.string  "ship_zip",                :limit => 10
    t.string  "ship_country",            :limit => 100
    t.string  "ship_latitude",           :limit => 15
    t.string  "ship_longitude",          :limit => 15
    t.boolean "is_residential"
    t.boolean "is_commercial"
    t.string  "phone",                   :limit => 30
    t.string  "email_address",           :limit => 200
    t.boolean "is_destroyed"
  end

  add_index "shipments", ["shipment_id"], :name => "index_shipments_on_shipment_id", :unique => true

  create_table "shipping_rates", :id => false, :force => true do |t|
    t.string  "shipping_rate_id",   :limit => 32,                                 :null => false
    t.string  "display",            :limit => 300,                                :null => false
    t.string  "supplier_id",        :limit => 32,                                 :null => false
    t.string  "shipping_rate_name", :limit => 100,                                :null => false
    t.decimal "shipping_charge",                   :precision => 11, :scale => 2
    t.decimal "minimum_sale",                      :precision => 11, :scale => 2
    t.decimal "maximum_sale",                      :precision => 11, :scale => 2
    t.boolean "is_destroyed"
  end

  add_index "shipping_rates", ["shipping_rate_id"], :name => "index_shipping_rates_on_shipping_rate_id", :unique => true

  create_table "site_donations", :id => false, :force => true do |t|
    t.string  "site_donation_id", :limit => 32,                                 :null => false
    t.string  "display",          :limit => 300,                                :null => false
    t.string  "site_id",          :limit => 32,                                 :null => false
    t.date    "donation_date",                                                  :null => false
    t.decimal "donation_amount",                 :precision => 11, :scale => 2, :null => false
    t.boolean "is_destroyed"
  end

  add_index "site_donations", ["site_donation_id"], :name => "index_site_donations_on_site_donation_id", :unique => true

  create_table "site_enrollments", :id => false, :force => true do |t|
    t.string  "site_enrollment_id",     :limit => 32,                                :null => false
    t.string  "display",                :limit => 300,                               :null => false
    t.string  "site_id",                :limit => 32,                                :null => false
    t.string  "school_year",            :limit => 100,                               :null => false
    t.string  "grade_id",               :limit => 32,                                :null => false
    t.string  "gender",                 :limit => 100,                               :null => false
    t.date    "school_year_start_date"
    t.date    "school_year_end_date"
    t.decimal "enrollment",                            :precision => 9, :scale => 0, :null => false
    t.boolean "is_destroyed"
  end

  add_index "site_enrollments", ["site_enrollment_id"], :name => "index_site_enrollments_on_site_enrollment_id", :unique => true

  create_table "site_tax_authorities", :id => false, :force => true do |t|
    t.string  "site_tax_authority_id", :limit => 32,  :null => false
    t.string  "display",               :limit => 300, :null => false
    t.string  "site_id",               :limit => 32,  :null => false
    t.string  "tax_authority_id",      :limit => 32,  :null => false
    t.boolean "is_destroyed"
  end

  add_index "site_tax_authorities", ["site_tax_authority_id"], :name => "index_site_tax_authorities_on_site_tax_authority_id", :unique => true

  create_table "sites", :id => false, :force => true do |t|
    t.string  "site_id",           :limit => 32,  :null => false
    t.string  "display",           :limit => 300, :null => false
    t.string  "site_name",         :limit => 100, :null => false
    t.string  "parent_site_id",    :limit => 32
    t.string  "school_nbr",        :limit => 11,  :null => false
    t.string  "description",       :limit => 300
    t.string  "short_name",        :limit => 15
    t.string  "concatenated_name", :limit => 6
    t.string  "site_type",         :limit => 100, :null => false
    t.string  "location_id",       :limit => 32
    t.boolean "is_on_web"
    t.string  "gradeset",          :limit => 100
    t.string  "site_gender",       :limit => 100
    t.string  "line_1",            :limit => 100, :null => false
    t.string  "line_2",            :limit => 100
    t.string  "line_3",            :limit => 100
    t.string  "line_4",            :limit => 100
    t.string  "city",              :limit => 100, :null => false
    t.string  "state_code",        :limit => 2
    t.string  "zip",               :limit => 10,  :null => false
    t.string  "country",           :limit => 100
    t.string  "latitude",          :limit => 15
    t.string  "longitude",         :limit => 15
    t.string  "phone",             :limit => 30,  :null => false
    t.string  "fax",               :limit => 30
    t.boolean "is_destroyed"
  end

  add_index "sites", ["site_id"], :name => "index_sites_on_site_id", :unique => true

  create_table "size_group_details", :id => false, :force => true do |t|
    t.string  "size_group_detail_id", :limit => 32,  :null => false
    t.string  "display",              :limit => 300, :null => false
    t.string  "size_group_id",        :limit => 32
    t.string  "size_id",              :limit => 32
    t.integer "display_order"
    t.boolean "is_destroyed"
  end

  add_index "size_group_details", ["size_group_detail_id"], :name => "index_size_group_details_on_size_group_detail_id", :unique => true

  create_table "size_groups", :id => false, :force => true do |t|
    t.string  "size_group_id",     :limit => 32,  :null => false
    t.string  "display",           :limit => 100, :null => false
    t.string  "size_group_nbr",    :limit => 6
    t.string  "description",       :limit => 300
    t.string  "short_name",        :limit => 100
    t.string  "concatenated_name", :limit => 6,   :null => false
    t.boolean "is_destroyed"
  end

  add_index "size_groups", ["size_group_id"], :name => "index_size_groups_on_size_group_id", :unique => true

  create_table "sizes", :id => false, :force => true do |t|
    t.string  "size_id",           :limit => 32,  :null => false
    t.string  "display",           :limit => 100, :null => false
    t.string  "size_nbr",          :limit => 6
    t.string  "description",       :limit => 300
    t.string  "size_type",         :limit => 100, :null => false
    t.string  "short_name",        :limit => 15
    t.string  "concatenated_name", :limit => 6,   :null => false
    t.string  "dimension_1",       :limit => 15
    t.string  "dimension_2",       :limit => 15
    t.boolean "is_destroyed"
  end

  add_index "sizes", ["size_id"], :name => "index_sizes_on_size_id", :unique => true

  create_table "sku_aliases", :id => false, :force => true do |t|
    t.string  "sku_alias_id",   :limit => 32,                                :null => false
    t.string  "display",        :limit => 300,                               :null => false
    t.string  "sku_id",         :limit => 32
    t.string  "sku_alias",      :limit => 30
    t.string  "sku_alias_type", :limit => 100
    t.boolean "is_primary"
    t.string  "pack_type",      :limit => 100
    t.decimal "pack_size",                     :precision => 9, :scale => 0
    t.boolean "is_destroyed"
  end

  add_index "sku_aliases", ["sku_alias_id"], :name => "index_sku_aliases_on_sku_alias_id", :unique => true

  create_table "sku_locations", :id => false, :force => true do |t|
    t.string  "sku_location_id",                    :limit => 32,                                 :null => false
    t.string  "display",                            :limit => 300,                                :null => false
    t.string  "sku_id",                             :limit => 32
    t.string  "location_id",                        :limit => 32
    t.boolean "is_authorized"
    t.boolean "is_taxable"
    t.boolean "is_special_order"
    t.boolean "is_discontinued"
    t.string  "replenishment_method",               :limit => 100
    t.string  "replenishment_source",               :limit => 100
    t.string  "supplier_id",                        :limit => 32
    t.decimal "safety_stock_units",                                :precision => 9,  :scale => 0
    t.decimal "safety_stock_days",                                 :precision => 9,  :scale => 0
    t.boolean "is_override_demand_exception"
    t.decimal "smoothing_factor",                                  :precision => 11, :scale => 2
    t.string  "forecast_profile_id",                :limit => 32
    t.boolean "is_soq_override"
    t.decimal "minimum_units",                                     :precision => 9,  :scale => 0
    t.decimal "maximum_units",                                     :precision => 9,  :scale => 0
    t.string  "seasonal_index_id",                  :limit => 32
    t.decimal "forecast",                                          :precision => 11, :scale => 2
    t.decimal "economic_order",                                    :precision => 9,  :scale => 0
    t.decimal "demand_filter_count",                               :precision => 9,  :scale => 0
    t.decimal "tracking_signal_count",                             :precision => 9,  :scale => 0
    t.decimal "tracking_signal",                                   :precision => 11, :scale => 2
    t.decimal "tracking_signal_signed_deviation",                  :precision => 11, :scale => 2
    t.decimal "tracking_signal_absolute_deviation",                :precision => 11, :scale => 2
    t.date    "next_review_date"
    t.string  "velocity_code",                      :limit => 6
    t.decimal "standard_deviation",                                :precision => 11, :scale => 2
    t.decimal "order_point",                                       :precision => 9,  :scale => 0
    t.boolean "is_destroyed"
  end

  add_index "sku_locations", ["sku_location_id"], :name => "index_sku_locations_on_sku_location_id", :unique => true

  create_table "sku_price_requests", :id => false, :force => true do |t|
    t.string  "sku_price_request_id",          :limit => 32,                                 :null => false
    t.string  "display",                       :limit => 300
    t.string  "state",                         :limit => 100
    t.string  "user_id",                       :limit => 32
    t.date    "request_date"
    t.string  "sku_id",                        :limit => 32
    t.string  "location_id",                   :limit => 32
    t.string  "customer_id",                   :limit => 32
    t.string  "site_id",                       :limit => 32
    t.string  "request_price_book_id",         :limit => 32
    t.date    "price_date"
    t.decimal "permanent_sku_retail",                         :precision => 11, :scale => 2
    t.decimal "permanent_units",                              :precision => 9,  :scale => 0
    t.string  "price_book_id",                 :limit => 32
    t.string  "sku_price_id",                  :limit => 32
    t.decimal "promo_sku_retail",                             :precision => 11, :scale => 2
    t.decimal "promo_percent",                                :precision => 13, :scale => 4
    t.decimal "promo_amount",                                 :precision => 11, :scale => 2
    t.decimal "promo_units",                                  :precision => 9,  :scale => 0
    t.decimal "regular_units",                                :precision => 9,  :scale => 0
    t.decimal "maximum_promo_units",                          :precision => 9,  :scale => 0
    t.string  "sku_promo_price_id",            :limit => 32
    t.string  "sales_category",                :limit => 100
    t.decimal "professional_discount_percent",                :precision => 13, :scale => 4
    t.decimal "employee_discount_percent",                    :precision => 13, :scale => 4
    t.decimal "school_discount_percent",                      :precision => 13, :scale => 4
    t.boolean "is_destroyed"
  end

  add_index "sku_price_requests", ["sku_price_request_id"], :name => "index_sku_price_requests_on_sku_price_request_id", :unique => true

  create_table "sku_prices", :id => false, :force => true do |t|
    t.string  "sku_price_id",    :limit => 32,                                 :null => false
    t.string  "display",         :limit => 300,                                :null => false
    t.string  "sku_id",          :limit => 32
    t.string  "price_book_id",   :limit => 32
    t.date    "effective_date"
    t.decimal "retail_price",                   :precision => 11, :scale => 2
    t.decimal "price_units",                    :precision => 9,  :scale => 0
    t.string  "sales_category",  :limit => 100
    t.string  "price_change_id", :limit => 32
    t.boolean "is_destroyed"
  end

  add_index "sku_prices", ["sku_price_id"], :name => "index_sku_prices_on_sku_price_id", :unique => true

  create_table "sku_promo_prices", :id => false, :force => true do |t|
    t.string  "sku_promo_price_id",  :limit => 32,                                 :null => false
    t.string  "display",             :limit => 300,                                :null => false
    t.string  "sku_id",              :limit => 32
    t.string  "price_book_id",       :limit => 32
    t.date    "effective_date"
    t.date    "end_date"
    t.decimal "regular_units",                      :precision => 9,  :scale => 0
    t.decimal "promo_units",                        :precision => 9,  :scale => 0
    t.decimal "promo_percent",                      :precision => 13, :scale => 4
    t.decimal "promo_amount",                       :precision => 11, :scale => 2
    t.decimal "promo_price",                        :precision => 11, :scale => 2
    t.decimal "maximum_promo_units",                :precision => 9,  :scale => 0
    t.string  "sales_category",      :limit => 100
    t.string  "promotion_id",        :limit => 32
    t.boolean "is_destroyed"
  end

  add_index "sku_promo_prices", ["sku_promo_price_id"], :name => "index_sku_promo_prices_on_sku_promo_price_id", :unique => true

  create_table "sku_substitutes", :id => false, :force => true do |t|
    t.string  "sku_substitute_id",   :limit => 32,                                :null => false
    t.string  "display",             :limit => 300,                               :null => false
    t.string  "sku_id",              :limit => 32
    t.string  "substitute_sku_id",   :limit => 32
    t.string  "sku_substitute_type", :limit => 100
    t.date    "effective_date"
    t.date    "end_date"
    t.decimal "priority",                           :precision => 9, :scale => 0
    t.boolean "is_destroyed"
  end

  add_index "sku_substitutes", ["sku_substitute_id"], :name => "index_sku_substitutes_on_sku_substitute_id", :unique => true

  create_table "sku_suppliers", :id => false, :force => true do |t|
    t.string  "sku_supplier_id",           :limit => 32,                                 :null => false
    t.string  "display",                   :limit => 300
    t.string  "sku_id",                    :limit => 32
    t.string  "supplier_id",               :limit => 32
    t.string  "supplier_item_identifier",  :limit => 30
    t.string  "description",               :limit => 300
    t.boolean "is_primary_supplier"
    t.boolean "is_manufacturer"
    t.boolean "is_discontinued"
    t.decimal "supplier_cost_units",                      :precision => 9,  :scale => 0
    t.decimal "supplier_cost",                            :precision => 13, :scale => 4
    t.decimal "master_pack_units",                        :precision => 9,  :scale => 0
    t.string  "master_pack_uom_code",      :limit => 100
    t.decimal "master_pack_length",                       :precision => 11, :scale => 2
    t.decimal "master_pack_height",                       :precision => 11, :scale => 2
    t.decimal "master_pack_width",                        :precision => 11, :scale => 2
    t.decimal "master_pack_weight",                       :precision => 11, :scale => 2
    t.decimal "inner_pack_units",                         :precision => 9,  :scale => 0
    t.string  "inner_pack_uom_code",       :limit => 100
    t.decimal "inner_pack_length",                        :precision => 11, :scale => 2
    t.decimal "inner_pack_height",                        :precision => 11, :scale => 2
    t.decimal "inner_pack_width",                         :precision => 11, :scale => 2
    t.decimal "inner_pack_weight",                        :precision => 11, :scale => 2
    t.string  "pack_type",                 :limit => 100
    t.decimal "minimum_order_units",                      :precision => 9,  :scale => 0
    t.decimal "minimum_order_value",                      :precision => 11, :scale => 2
    t.decimal "minimum_order_weight",                     :precision => 11, :scale => 2
    t.decimal "minimum_order_cube",                       :precision => 11, :scale => 2
    t.string  "order_multiple_type",       :limit => 100
    t.decimal "extra_cost",                               :precision => 13, :scale => 4
    t.boolean "is_included_extra_cost"
    t.string  "cost_model_id",             :limit => 32
    t.string  "origin_country",            :limit => 100
    t.string  "freight_term",              :limit => 100
    t.boolean "is_conveyable_master_pack"
    t.boolean "is_conveyable_inner_pack"
    t.decimal "pallet_tie",                               :precision => 9,  :scale => 0
    t.decimal "pallet_high",                              :precision => 9,  :scale => 0
    t.string  "pallet_container_id",       :limit => 32
    t.boolean "is_destroyed"
  end

  add_index "sku_suppliers", ["sku_supplier_id"], :name => "index_sku_suppliers_on_sku_supplier_id", :unique => true

  create_table "skus", :id => false, :force => true do |t|
    t.string  "sku_id",                  :limit => 32,                                 :null => false
    t.string  "display",                 :limit => 100,                                :null => false
    t.string  "sku_nbr",                 :limit => 11
    t.string  "description",             :limit => 300
    t.string  "short_name",              :limit => 15
    t.string  "pos_name",                :limit => 30
    t.string  "design_code",             :limit => 10
    t.string  "state",                   :limit => 100
    t.string  "maintenance_level",       :limit => 100
    t.boolean "is_converted"
    t.string  "generic_sku_id",          :limit => 32
    t.string  "add_on_sku_id",           :limit => 32
    t.string  "site_id",                 :limit => 32
    t.string  "conversion_type",         :limit => 100
    t.string  "style_color_size_id",     :limit => 32
    t.string  "style_id",                :limit => 32
    t.string  "color_id",                :limit => 32
    t.string  "color_name",              :limit => 100
    t.string  "color_short_name",        :limit => 15
    t.string  "size_id",                 :limit => 32
    t.date    "effective_date"
    t.date    "discontinued_date"
    t.date    "out_of_stock_date"
    t.boolean "is_enabled"
    t.string  "subclass_id",             :limit => 32
    t.string  "buyer_user_id",           :limit => 32
    t.string  "brand",                   :limit => 100
    t.string  "product_type_id",         :limit => 32
    t.string  "fabric_content",          :limit => 100
    t.decimal "initial_retail_price",                   :precision => 11, :scale => 2
    t.decimal "suggested_retail_price",                 :precision => 11, :scale => 2
    t.decimal "smoothing_factor",                       :precision => 11, :scale => 2
    t.string  "replenishment_method",    :limit => 100
    t.decimal "minimum_on_hand_units",                  :precision => 9,  :scale => 0
    t.decimal "maximum_on_hand_units",                  :precision => 9,  :scale => 0
    t.string  "pack_type",               :limit => 100
    t.string  "replenishment_source",    :limit => 100
    t.boolean "is_not_stocked"
    t.string  "sell_unit_uom_code",      :limit => 100
    t.decimal "sell_unit_length",                       :precision => 11, :scale => 2
    t.decimal "sell_unit_height",                       :precision => 11, :scale => 2
    t.decimal "sell_unit_width",                        :precision => 11, :scale => 2
    t.decimal "sell_unit_weight",                       :precision => 11, :scale => 2
    t.boolean "is_conveyable_sell_unit"
    t.boolean "is_discountable"
    t.boolean "is_taxable"
    t.string  "supplier_id",             :limit => 32
    t.string  "order_uom_code",          :limit => 100
    t.string  "order_package_type",      :limit => 100
    t.decimal "garment_pieces",                         :precision => 9,  :scale => 0
    t.boolean "is_special_order"
    t.boolean "is_special_size"
    t.boolean "is_destroyed"
  end

  add_index "skus", ["sku_id"], :name => "index_skus_on_sku_id", :unique => true

  create_table "state_meta", :id => false, :force => true do |t|
    t.string  "machine_meta_id", :limit => 32,  :null => false
    t.string  "state_meta_id",   :limit => 32,  :null => false
    t.string  "state_name",      :limit => 100, :null => false
    t.string  "description",     :limit => 500
    t.boolean "is_destroyed"
  end

  add_index "state_meta", ["state_meta_id"], :name => "index_state_meta_on_state_meta_id", :unique => true

  create_table "stock_ledger_activities", :id => false, :force => true do |t|
    t.string  "stock_ledger_activity_id", :limit => 32,                                 :null => false
    t.string  "display",                  :limit => 300,                                :null => false
    t.string  "stockable_type",           :limit => 100,                                :null => false
    t.string  "stockable_id",             :limit => 32,                                 :null => false
    t.string  "ruleset_id",               :limit => 32,                                 :null => false
    t.string  "sku_id",                   :limit => 32,                                 :null => false
    t.string  "location_id",              :limit => 32,                                 :null => false
    t.string  "supplier_id",              :limit => 32
    t.string  "customer_id",              :limit => 32
    t.string  "site_id",                  :limit => 32
    t.decimal "units",                                   :precision => 11, :scale => 2
    t.decimal "cost",                                    :precision => 13, :scale => 4
    t.decimal "retail",                                  :precision => 13, :scale => 4
    t.date    "create_date"
    t.date    "activity_date"
    t.date    "posted_date"
    t.boolean "is_destroyed"
  end

  add_index "stock_ledger_activities", ["stock_ledger_activity_id"], :name => "index_stock_ledger_activities_on_stock_ledger_activity_id", :unique => true

  create_table "stock_ledger_activity_logs", :id => false, :force => true do |t|
    t.string  "stock_ledger_activity_log_id", :limit => 32,  :null => false
    t.string  "display",                      :limit => 300, :null => false
    t.string  "stock_ledger_activity_id",     :limit => 32,  :null => false
    t.string  "activity_log_nbr",             :limit => 11,  :null => false
    t.string  "model_meta_id",                :limit => 32,  :null => false
    t.string  "attribute_meta_id",            :limit => 32,  :null => false
    t.string  "row_id",                       :limit => 32,  :null => false
    t.string  "rule_action",                  :limit => 100
    t.boolean "is_destroyed"
  end

  add_index "stock_ledger_activity_logs", ["stock_ledger_activity_log_id"], :name => "index_stock_ledger_activity_logs_on_stock_ledger_activity_log_id", :unique => true

  create_table "style_color_sizes", :id => false, :force => true do |t|
    t.string  "style_color_size_id",       :limit => 32,                                 :null => false
    t.string  "display",                   :limit => 300,                                :null => false
    t.string  "style_color_id",            :limit => 32
    t.string  "size_id",                   :limit => 32
    t.string  "sku_id",                    :limit => 32
    t.string  "sku_name",                  :limit => 100
    t.string  "pos_name",                  :limit => 30
    t.boolean "is_special_order"
    t.boolean "is_not_available"
    t.decimal "fabric_bom_adjust_percent",                :precision => 11, :scale => 2
    t.boolean "is_destroyed"
    t.string  "state",                     :limit => 100
  end

  add_index "style_color_sizes", ["style_color_size_id"], :name => "index_style_color_sizes_on_style_color_size_id", :unique => true

  create_table "style_colors", :id => false, :force => true do |t|
    t.string  "style_color_id",    :limit => 32,  :null => false
    t.string  "display",           :limit => 300, :null => false
    t.string  "style_id",          :limit => 32
    t.string  "color_id",          :limit => 32
    t.string  "short_name",        :limit => 15
    t.string  "concatenated_name", :limit => 6
    t.boolean "is_destroyed"
    t.string  "state",             :limit => 100
  end

  add_index "style_colors", ["style_color_id"], :name => "index_style_colors_on_style_color_id", :unique => true

  create_table "style_locations", :id => false, :force => true do |t|
    t.string  "style_location_id",            :limit => 32,                                 :null => false
    t.string  "display",                      :limit => 300,                                :null => false
    t.string  "style_id",                     :limit => 32
    t.string  "location_id",                  :limit => 32
    t.boolean "is_authorized"
    t.boolean "is_taxable"
    t.boolean "is_special_order"
    t.boolean "is_discontinued"
    t.string  "replenishment_method",         :limit => 100
    t.string  "replenishment_source",         :limit => 100
    t.string  "supplier_id",                  :limit => 32
    t.decimal "safety_stock_units",                          :precision => 9,  :scale => 0
    t.decimal "safety_stock_days",                           :precision => 9,  :scale => 0
    t.boolean "is_override_demand_exception"
    t.decimal "smoothing_factor",                            :precision => 11, :scale => 2
    t.string  "forecast_profile_id",          :limit => 32
    t.boolean "is_soq_override"
    t.decimal "minimum_units",                               :precision => 9,  :scale => 0
    t.decimal "maximum_units",                               :precision => 9,  :scale => 0
    t.string  "seasonal_index_id",            :limit => 32
    t.boolean "is_destroyed"
    t.string  "state",                        :limit => 100
  end

  add_index "style_locations", ["style_location_id"], :name => "index_style_locations_on_style_location_id", :unique => true

  create_table "style_supplier_colors", :id => false, :force => true do |t|
    t.string  "style_supplier_color_id", :limit => 32,  :null => false
    t.string  "display",                 :limit => 300, :null => false
    t.string  "style_supplier_id",       :limit => 32
    t.string  "style_color_id",          :limit => 32
    t.boolean "is_destroyed"
  end

  add_index "style_supplier_colors", ["style_supplier_color_id"], :name => "index_style_supplier_colors_on_style_supplier_color_id", :unique => true

  create_table "style_suppliers", :id => false, :force => true do |t|
    t.string  "style_supplier_id",         :limit => 32,                                 :null => false
    t.string  "display",                   :limit => 300
    t.string  "style_id",                  :limit => 32
    t.string  "supplier_id",               :limit => 32
    t.string  "description",               :limit => 300
    t.boolean "is_primary_supplier"
    t.boolean "is_manufacturer"
    t.boolean "is_discontinued"
    t.decimal "supplier_cost_units",                      :precision => 9,  :scale => 0
    t.decimal "supplier_cost",                            :precision => 13, :scale => 4
    t.decimal "master_pack_units",                        :precision => 9,  :scale => 0
    t.string  "master_pack_uom_code",      :limit => 100
    t.decimal "master_pack_length",                       :precision => 11, :scale => 2
    t.decimal "master_pack_height",                       :precision => 11, :scale => 2
    t.decimal "master_pack_width",                        :precision => 11, :scale => 2
    t.decimal "master_pack_weight",                       :precision => 11, :scale => 2
    t.decimal "inner_pack_units",                         :precision => 9,  :scale => 0
    t.string  "inner_pack_uom_code",       :limit => 100
    t.decimal "inner_pack_length",                        :precision => 11, :scale => 2
    t.decimal "inner_pack_height",                        :precision => 11, :scale => 2
    t.decimal "inner_pack_width",                         :precision => 11, :scale => 2
    t.decimal "inner_pack_weight",                        :precision => 11, :scale => 2
    t.string  "pack_type",                 :limit => 100
    t.decimal "minimum_order_units",                      :precision => 9,  :scale => 0
    t.decimal "minimum_order_value",                      :precision => 11, :scale => 2
    t.decimal "minimum_order_weight",                     :precision => 11, :scale => 2
    t.decimal "minimum_order_cube",                       :precision => 11, :scale => 2
    t.string  "order_multiple_type",       :limit => 100
    t.decimal "extra_cost",                               :precision => 13, :scale => 4
    t.boolean "is_included_extra_cost"
    t.string  "origin_country",            :limit => 100
    t.string  "freight_term",              :limit => 100
    t.boolean "is_conveyable_master_pack"
    t.boolean "is_conveyable_inner_pack"
    t.decimal "pallet_tie",                               :precision => 9,  :scale => 0
    t.decimal "pallet_high",                              :precision => 9,  :scale => 0
    t.boolean "is_destroyed"
    t.string  "state",                     :limit => 100
  end

  add_index "style_suppliers", ["style_supplier_id"], :name => "index_style_suppliers_on_style_supplier_id", :unique => true

  create_table "styles", :id => false, :force => true do |t|
    t.string   "style_id",                :limit => 32,                                 :null => false
    t.string   "display",                 :limit => 100,                                :null => false
    t.string   "style_nbr",               :limit => 11
    t.string   "description",             :limit => 300
    t.string   "short_name",              :limit => 15
    t.string   "concatenated_name",       :limit => 30
    t.string   "pos_name",                :limit => 30
    t.date     "effective_date"
    t.date     "discontinued_date"
    t.date     "out_of_stock_date"
    t.string   "subclass_id",             :limit => 32
    t.string   "product_id",              :limit => 32
    t.string   "buyer_user_id",           :limit => 32
    t.string   "brand",                   :limit => 100
    t.string   "product_type_id",         :limit => 32
    t.string   "fabric_content",          :limit => 100
    t.string   "storage_code",            :limit => 6
    t.decimal  "initial_retail_price",                   :precision => 11, :scale => 2
    t.decimal  "suggested_retail_price",                 :precision => 11, :scale => 2
    t.decimal  "planning_retail_price",                  :precision => 11, :scale => 2
    t.decimal  "smoothing_factor",                       :precision => 11, :scale => 2
    t.string   "replenishment_method",    :limit => 100
    t.string   "replenishment_source",    :limit => 100
    t.decimal  "minimum_on_hand_units",                  :precision => 9,  :scale => 0
    t.decimal  "maximum_on_hand_units",                  :precision => 9,  :scale => 0
    t.string   "pack_type",               :limit => 100
    t.boolean  "is_not_stocked"
    t.string   "sell_unit_uom_code",      :limit => 100
    t.decimal  "sell_unit_length",                       :precision => 11, :scale => 2
    t.decimal  "sell_unit_height",                       :precision => 11, :scale => 2
    t.decimal  "sell_unit_width",                        :precision => 11, :scale => 2
    t.decimal  "sell_unit_weight",                       :precision => 11, :scale => 2
    t.boolean  "is_conveyable_sell_unit"
    t.boolean  "is_discountable"
    t.boolean  "is_taxable"
    t.string   "supplier_id",             :limit => 32
    t.string   "order_uom_code",          :limit => 100
    t.string   "order_package_type",      :limit => 100
    t.decimal  "garment_pieces",                         :precision => 9,  :scale => 0
    t.boolean  "is_special_order"
    t.string   "maintenance_level",       :limit => 100
    t.boolean  "is_convertible"
    t.boolean  "is_converted_heatset"
    t.string   "generic_style_id",        :limit => 32
    t.string   "size_group_id",           :limit => 32
    t.string   "sku_name_method",         :limit => 100
    t.boolean  "is_converted_sewn"
    t.boolean  "is_alterable"
    t.boolean  "is_usually_altered"
    t.boolean  "is_enabled"
    t.string   "state",                   :limit => 100
    t.boolean  "is_destroyed"
    t.string   "audit_created_by",        :limit => 100
    t.string   "audit_updated_by",        :limit => 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "styles", ["style_id"], :name => "index_styles_on_style_id", :unique => true

  create_table "styles_aa", :id => false, :force => true do |t|
    t.string "attribute_audit_id", :limit => 32, :null => false
    t.string "model_audit_id",     :limit => 32, :null => false
    t.string "attribute_name",     :limit => 60, :null => false
    t.text   "before"
    t.text   "after"
  end

  create_table "styles_ma", :id => false, :force => true do |t|
    t.string   "model_audit_id", :limit => 32,  :null => false
    t.string   "model_id",       :limit => 32,  :null => false
    t.string   "user_id",        :limit => 200, :null => false
    t.string   "action",         :limit => 20,  :null => false
    t.datetime "audited_at"
  end

  create_table "subclasses", :id => false, :force => true do |t|
    t.string  "subclass_id",               :limit => 32,                                 :null => false
    t.string  "display",                   :limit => 100,                                :null => false
    t.string  "subclass_nbr",              :limit => 6
    t.string  "description",               :limit => 300
    t.string  "short_name",                :limit => 15
    t.string  "classification_id",         :limit => 32,                                 :null => false
    t.decimal "markup_percent_high_limit",                :precision => 11, :scale => 2
    t.decimal "markup_percent_low_limit",                 :precision => 11, :scale => 2
    t.boolean "is_destroyed"
  end

  add_index "subclasses", ["subclass_id"], :name => "index_subclasses_on_subclass_id", :unique => true

  create_table "supplier_contacts", :id => false, :force => true do |t|
    t.string  "supplier_contact_id",  :limit => 32,  :null => false
    t.string  "display",              :limit => 300, :null => false
    t.string  "supplier_id",          :limit => 32,  :null => false
    t.string  "first_name",           :limit => 100, :null => false
    t.string  "last_name",            :limit => 100, :null => false
    t.string  "name_prefix",          :limit => 100
    t.string  "name_suffix",          :limit => 100
    t.string  "department",           :limit => 100
    t.string  "job_title",            :limit => 100
    t.string  "phone",                :limit => 30
    t.string  "fax",                  :limit => 30
    t.string  "email_address",        :limit => 200
    t.boolean "is_order_contact"
    t.boolean "is_return_contact"
    t.boolean "is_payment_contact"
    t.boolean "is_executive_contact"
    t.boolean "is_destroyed"
  end

  add_index "supplier_contacts", ["supplier_contact_id"], :name => "index_supplier_contacts_on_supplier_contact_id", :unique => true

  create_table "supplier_rating_subjects", :id => false, :force => true do |t|
    t.string  "supplier_rating_subject_id",   :limit => 32,                                 :null => false
    t.string  "display",                      :limit => 100,                                :null => false
    t.string  "description",                  :limit => 300
    t.string  "supplier_rating_subject_type", :limit => 100
    t.decimal "weighting_percent",                           :precision => 11, :scale => 2
    t.boolean "is_destroyed"
  end

  add_index "supplier_rating_subjects", ["supplier_rating_subject_id"], :name => "index_supplier_rating_subjects_on_supplier_rating_subject_id", :unique => true

  create_table "supplier_ratings", :id => false, :force => true do |t|
    t.string  "supplier_rating_id",         :limit => 32,  :null => false
    t.string  "display",                    :limit => 300, :null => false
    t.string  "supplier_id",                :limit => 32,  :null => false
    t.string  "supplier_rating_subject_id", :limit => 32,  :null => false
    t.date    "rating_date"
    t.integer "rating_value"
    t.boolean "is_destroyed"
  end

  add_index "supplier_ratings", ["supplier_rating_id"], :name => "index_supplier_ratings_on_supplier_rating_id", :unique => true

  create_table "suppliers", :id => false, :force => true do |t|
    t.string  "supplier_id",                   :limit => 32,                                 :null => false
    t.string  "display",                       :limit => 300
    t.string  "supplier_name",                 :limit => 100,                                :null => false
    t.string  "supplier_nbr",                  :limit => 11
    t.integer "supplier_ucc_prefix"
    t.string  "description",                   :limit => 300
    t.string  "short_name",                    :limit => 15
    t.string  "legacy_supplier_code",          :limit => 4
    t.integer "duns_number"
    t.string  "line_1",                        :limit => 100
    t.string  "line_2",                        :limit => 100
    t.string  "line_3",                        :limit => 100
    t.string  "line_4",                        :limit => 100
    t.string  "city",                          :limit => 100
    t.string  "state_code",                    :limit => 2
    t.string  "zip",                           :limit => 10
    t.string  "country",                       :limit => 100
    t.string  "latitude",                      :limit => 15
    t.string  "longitude",                     :limit => 15
    t.string  "phone",                         :limit => 30
    t.string  "fax",                           :limit => 30
    t.string  "supplier_url",                  :limit => 100
    t.string  "default_ship_thru_supplier_id", :limit => 32
    t.string  "shipping_point",                :limit => 100
    t.string  "ship_via",                      :limit => 100
    t.string  "freight_term",                  :limit => 100
    t.decimal "minimum_order_cost",                           :precision => 11, :scale => 2
    t.decimal "minimum_order_units",                          :precision => 9,  :scale => 0
    t.decimal "minimum_weight",                               :precision => 9,  :scale => 0
    t.decimal "minimum_cube",                                 :precision => 11, :scale => 2
    t.boolean "is_ship_cancel"
    t.string  "return_policy",                 :limit => 300
    t.decimal "lead_time",                                    :precision => 11, :scale => 2
    t.decimal "safety_stock_days",                            :precision => 11, :scale => 2
    t.boolean "is_calculated_lead_time"
    t.string  "replenishment_method",          :limit => 100
    t.boolean "is_dynamic_safety_stock"
    t.string  "default_pay_to_supplier_id",    :limit => 32
    t.string  "default_payment_term",          :limit => 100
    t.string  "bank_name",                     :limit => 100
    t.string  "bank_account_name",             :limit => 100
    t.string  "bank_account_type",             :limit => 100
    t.integer "bank_routing_nbr"
    t.string  "bank_account",                  :limit => 15
    t.string  "gl_account_id",                 :limit => 32
    t.integer "tax_identifier"
    t.boolean "is_required_1099"
    t.boolean "is_edi_capable"
    t.boolean "is_one_time"
    t.boolean "is_employee"
    t.boolean "is_payee"
    t.boolean "is_merchandise"
    t.boolean "is_supply"
    t.boolean "is_expense"
    t.boolean "is_creditor"
    t.boolean "is_freight"
    t.boolean "is_factory"
    t.boolean "is_3pl"
    t.boolean "is_agent"
    t.boolean "is_outbound_shipper"
    t.boolean "is_on_payment_hold"
    t.boolean "is_enabled"
    t.boolean "is_destroyed"
  end

  add_index "suppliers", ["supplier_id"], :name => "index_suppliers_on_supplier_id", :unique => true

  create_table "system_options", :id => false, :force => true do |t|
    t.string  "system_option_id",                   :limit => 32,                                 :null => false
    t.string  "display",                            :limit => 100
    t.string  "price_book_id",                      :limit => 32,                                 :null => false
    t.decimal "professional_discount_percent",                     :precision => 11, :scale => 2
    t.decimal "employee_discount_percent",                         :precision => 11, :scale => 2
    t.string  "regular_sale_ruleset_id",            :limit => 32
    t.string  "promo_sale_ruleset_id",              :limit => 32
    t.string  "clearance_sale_ruleset_id",          :limit => 32
    t.string  "transfer_request_ruleset_id",        :limit => 32
    t.string  "transfer_ship_ruleset_id",           :limit => 32
    t.string  "transfer_transit_ruleset_id",        :limit => 32
    t.string  "transfer_receive_ruleset_id",        :limit => 32
    t.string  "transfer_close_ruleset_id",          :limit => 32
    t.string  "transfer_cancel_ruleset_id",         :limit => 32
    t.boolean "is_charge_ship_location"
    t.string  "transfer_gl_account_id",             :limit => 32
    t.string  "discrepancy_gl_account_id",          :limit => 32
    t.string  "overage_gl_account_id",              :limit => 32
    t.string  "shortage_gl_account_id",             :limit => 32
    t.string  "sales_tax_gl_account_id",            :limit => 32
    t.integer "consecutive_invalid_login_attempts"
    t.boolean "is_destroyed"
  end

  add_index "system_options", ["system_option_id"], :name => "index_system_options_on_system_option_id", :unique => true

  create_table "tax_authorities", :id => false, :force => true do |t|
    t.string  "tax_authority_id",        :limit => 32,  :null => false
    t.string  "display",                 :limit => 100, :null => false
    t.string  "description",             :limit => 300
    t.string  "tax_authority_type",      :limit => 100
    t.string  "short_name",              :limit => 15
    t.string  "state_code",              :limit => 2,   :null => false
    t.string  "filing_frequency",        :limit => 100
    t.boolean "is_tax_when_no_presence"
    t.boolean "is_destroyed"
  end

  add_index "tax_authorities", ["tax_authority_id"], :name => "index_tax_authorities_on_tax_authority_id", :unique => true

  create_table "tax_authority_rates", :id => false, :force => true do |t|
    t.string  "tax_authority_rate_id", :limit => 32,                                 :null => false
    t.string  "display",               :limit => 300,                                :null => false
    t.string  "tax_authority_id",      :limit => 32,                                 :null => false
    t.date    "effective_date"
    t.date    "end_date"
    t.decimal "tax_percent",                          :precision => 13, :scale => 4
    t.boolean "is_destroyed"
  end

  add_index "tax_authority_rates", ["tax_authority_rate_id"], :name => "index_tax_authority_rates_on_tax_authority_rate_id", :unique => true

  create_table "tenders", :id => false, :force => true do |t|
    t.string  "tender_id",                      :limit => 32,                                 :null => false
    t.string  "display",                        :limit => 100,                                :null => false
    t.string  "description",                    :limit => 300,                                :null => false
    t.string  "short_name",                     :limit => 100,                                :null => false
    t.string  "tender_type",                    :limit => 100
    t.boolean "is_allow_over_tendering"
    t.boolean "is_open_cash_drawer"
    t.boolean "is_required_signature"
    t.boolean "is_allow_multiple_entry"
    t.boolean "is_print_duplicate_receipt"
    t.boolean "is_allow_cash_back"
    t.decimal "maximum_tender_amount",                         :precision => 11, :scale => 2
    t.string  "display_order",                  :limit => 6
    t.boolean "is_verify_via_edc"
    t.decimal "cash_back_limit",                               :precision => 9,  :scale => 0
    t.decimal "cash_back_fee",                                 :precision => 11, :scale => 2
    t.string  "gl_account_id",                  :limit => 32
    t.integer "validation_mask"
    t.boolean "is_credit_card"
    t.boolean "is_required_account_holder"
    t.boolean "is_required_account_number"
    t.boolean "is_required_expiration_date"
    t.boolean "is_required_ccv_code"
    t.boolean "is_required_postal_code"
    t.boolean "is_required_serial_number"
    t.boolean "is_required_routing_number"
    t.boolean "is_required_state"
    t.boolean "is_required_license_number"
    t.boolean "is_required_birth_date"
    t.boolean "is_required_avs_response"
    t.boolean "is_update_till"
    t.boolean "is_accept_business_credit_card"
    t.boolean "is_enabled_for_web"
    t.boolean "is_enabled_for_pos"
    t.boolean "is_enabled_for_phone"
    t.boolean "is_destroyed"
  end

  add_index "tenders", ["tender_id"], :name => "index_tenders_on_tender_id", :unique => true

  create_table "terminals", :id => false, :force => true do |t|
    t.string  "terminal_id",              :limit => 32,  :null => false
    t.string  "display",                  :limit => 300, :null => false
    t.string  "location_id",              :limit => 32,  :null => false
    t.string  "till_id",                  :limit => 32
    t.string  "terminal_nbr",             :limit => 6,   :null => false
    t.string  "mac_address",              :limit => 15,  :null => false
    t.string  "local_server_ip",          :limit => 15,  :null => false
    t.string  "hq_server_url",            :limit => 200, :null => false
    t.date    "override_sale_date"
    t.string  "receipt_printer_url",      :limit => 200, :null => false
    t.string  "receipt_printer_ip",       :limit => 15,  :null => false
    t.string  "receipt_format_id",        :limit => 32
    t.string  "tag_printer_url",          :limit => 200
    t.string  "tag_printer_ip",           :limit => 15
    t.string  "pin_pad_port",             :limit => 6
    t.boolean "is_net_display_enabled"
    t.boolean "is_login_per_transaction"
    t.boolean "is_destroyed"
  end

  add_index "terminals", ["terminal_id"], :name => "index_terminals_on_terminal_id", :unique => true

  create_table "till_activities", :id => false, :force => true do |t|
    t.string  "till_activity_id",     :limit => 32,                                 :null => false
    t.string  "display",              :limit => 300,                                :null => false
    t.string  "till_id",              :limit => 32
    t.string  "till_activity_nbr",    :limit => 11
    t.date    "till_activity_date"
    t.string  "till_activity_reason", :limit => 100
    t.string  "tender_id",            :limit => 32
    t.decimal "activity_count",                      :precision => 9,  :scale => 0
    t.decimal "activity_amount",                     :precision => 11, :scale => 2
    t.string  "payment_id",           :limit => 32
    t.string  "user_id",              :limit => 32
    t.boolean "is_destroyed"
  end

  add_index "till_activities", ["till_activity_id"], :name => "index_till_activities_on_till_activity_id", :unique => true

  create_table "till_audits", :id => false, :force => true do |t|
    t.string  "till_audit_id",     :limit => 32,                                 :null => false
    t.string  "display",           :limit => 300,                                :null => false
    t.string  "till_id",           :limit => 32
    t.date    "audit_date"
    t.string  "tender_id",         :limit => 32
    t.decimal "system_count",                     :precision => 9,  :scale => 0
    t.decimal "system_amount",                    :precision => 11, :scale => 2
    t.decimal "audit_count",                      :precision => 9,  :scale => 0
    t.decimal "audit_amount",                     :precision => 11, :scale => 2
    t.date    "gl_interface_date"
    t.boolean "is_destroyed"
  end

  add_index "till_audits", ["till_audit_id"], :name => "index_till_audits_on_till_audit_id", :unique => true

  create_table "till_details", :id => false, :force => true do |t|
    t.string  "till_detail_id", :limit => 32,                                 :null => false
    t.string  "display",        :limit => 300,                                :null => false
    t.string  "till_id",        :limit => 32
    t.string  "tender_id",      :limit => 32
    t.decimal "tender_count",                  :precision => 9,  :scale => 0
    t.decimal "tender_amount",                 :precision => 11, :scale => 2
    t.boolean "is_destroyed"
  end

  add_index "till_details", ["till_detail_id"], :name => "index_till_details_on_till_detail_id", :unique => true

  create_table "tills", :id => false, :force => true do |t|
    t.string  "till_id",      :limit => 32,  :null => false
    t.string  "display",      :limit => 300, :null => false
    t.string  "location_id",  :limit => 32,  :null => false
    t.string  "till_nbr",     :limit => 6
    t.boolean "is_destroyed"
  end

  add_index "tills", ["till_id"], :name => "index_tills_on_till_id", :unique => true

  create_table "transfer_reasons", :id => false, :force => true do |t|
    t.string  "transfer_reason_id", :limit => 32,  :null => false
    t.string  "display",            :limit => 100, :null => false
    t.string  "description",        :limit => 300
    t.string  "short_name",         :limit => 100
    t.boolean "is_destroyed"
  end

  add_index "transfer_reasons", ["transfer_reason_id"], :name => "index_transfer_reasons_on_transfer_reason_id", :unique => true

  create_table "transfers", :id => false, :force => true do |t|
    t.string  "transfer_id",             :limit => 32,                                 :null => false
    t.string  "display",                 :limit => 300
    t.string  "state",                   :limit => 100
    t.string  "transfer_nbr",            :limit => 11
    t.string  "requesting_location_id",  :limit => 32,                                 :null => false
    t.string  "fulfillment_location_id", :limit => 32,                                 :null => false
    t.string  "description",             :limit => 300
    t.string  "sku_id",                  :limit => 32,                                 :null => false
    t.string  "transfer_reason_id",      :limit => 32,                                 :null => false
    t.decimal "request_units",                          :precision => 11, :scale => 2
    t.date    "request_date"
    t.string  "request_user_id",         :limit => 32
    t.date    "ship_date"
    t.date    "cancel_date"
    t.string  "cancel_user_id",          :limit => 32
    t.boolean "is_destroyed"
  end

  add_index "transfers", ["transfer_id"], :name => "index_transfers_on_transfer_id", :unique => true

  create_table "transition_meta", :id => false, :force => true do |t|
    t.string  "event_meta_id",      :limit => 32,  :null => false
    t.string  "transition_meta_id", :limit => 32,  :null => false
    t.string  "account_id",         :limit => 32
    t.string  "project_id",         :limit => 32
    t.string  "package_name",       :limit => 100
    t.string  "transition_name",    :limit => 100
    t.string  "from_state",         :limit => 100, :null => false
    t.string  "to_state",           :limit => 100, :null => false
    t.string  "before_transition",  :limit => 100
    t.string  "after_transition",   :limit => 100
    t.string  "description",        :limit => 500
    t.integer "revision_number"
    t.boolean "is_destroyed"
  end

  add_index "transition_meta", ["transition_meta_id"], :name => "index_transition_meta_on_transition_meta_id", :unique => true

  create_table "user_roles", :id => false, :force => true do |t|
    t.string   "user_role_id",     :limit => 32,                     :null => false
    t.string   "user_id",          :limit => 32,                     :null => false
    t.string   "role_id",          :limit => 32,                     :null => false
    t.boolean  "is_enabled",                      :default => true,  :null => false
    t.boolean  "is_destroyed",                    :default => false, :null => false
    t.integer  "revision_number",                 :default => 0,     :null => false
    t.string   "audit_created_by", :limit => 100
    t.string   "audit_updated_by", :limit => 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "user_roles", ["user_id", "is_destroyed"], :name => "index_user_roles_on_user_id_and_is_destroyed"
  add_index "user_roles", ["user_role_id"], :name => "index_user_roles_on_user_role_id", :unique => true

  create_table "user_roles_aa", :id => false, :force => true do |t|
    t.string "attribute_audit_id", :limit => 32, :null => false
    t.string "model_audit_id",     :limit => 32, :null => false
    t.string "attribute_name",     :limit => 60, :null => false
    t.text   "before"
    t.text   "after"
  end

  create_table "user_roles_ma", :id => false, :force => true do |t|
    t.string   "model_audit_id", :limit => 32,  :null => false
    t.string   "model_id",       :limit => 32,  :null => false
    t.string   "user_id",        :limit => 200, :null => false
    t.string   "action",         :limit => 20,  :null => false
    t.datetime "audited_at"
  end

  create_table "users", :id => false, :force => true do |t|
    t.string   "user_id",            :limit => 32,                     :null => false
    t.string   "email_address",      :limit => 100,                    :null => false
    t.string   "first_name",         :limit => 100,                    :null => false
    t.string   "last_name",          :limit => 100,                    :null => false
    t.string   "secret_question",    :limit => 100
    t.string   "secret_answer",      :limit => 100
    t.string   "secret_password",    :limit => 100
    t.string   "user_name",          :limit => 200
    t.string   "encrypted_password", :limit => 200
    t.string   "sso_plugin_code",    :limit => 10,                     :null => false
    t.string   "api_token",          :limit => 10,                     :null => false
    t.boolean  "is_locked",                         :default => false, :null => false
    t.integer  "status",                            :default => 0,     :null => false
    t.boolean  "is_sys_admin",                      :default => false, :null => false
    t.boolean  "is_destroyed",                      :default => false, :null => false
    t.integer  "revision_number",                   :default => 0,     :null => false
    t.string   "audit_created_by",   :limit => 100
    t.string   "audit_updated_by",   :limit => 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
    t.string   "full_name",          :limit => 200
  end

  add_index "users", ["api_token", "is_destroyed"], :name => "index_users_on_api_token_and_is_destroyed"
  add_index "users", ["email_address", "is_destroyed"], :name => "index_users_on_email_address_and_is_destroyed"
  add_index "users", ["user_id"], :name => "index_users_on_user_id", :unique => true
  add_index "users", ["user_name", "is_destroyed"], :name => "index_users_on_user_name_and_is_destroyed"

  create_table "users_aa", :id => false, :force => true do |t|
    t.string "attribute_audit_id", :limit => 32, :null => false
    t.string "model_audit_id",     :limit => 32, :null => false
    t.string "attribute_name",     :limit => 60, :null => false
    t.text   "before"
    t.text   "after"
  end

  create_table "users_ma", :id => false, :force => true do |t|
    t.string   "model_audit_id", :limit => 32,  :null => false
    t.string   "model_id",       :limit => 32,  :null => false
    t.string   "user_id",        :limit => 200, :null => false
    t.string   "action",         :limit => 20,  :null => false
    t.datetime "audited_at"
  end

  create_table "vendors", :id => false, :force => true do |t|
    t.string  "vendor_id",       :limit => 32,                     :null => false
    t.string  "name",            :limit => 100,                    :null => false
    t.string  "description",     :limit => 400,                    :null => false
    t.boolean "is_enabled",                     :default => true,  :null => false
    t.boolean "is_destroyed",                   :default => false, :null => false
    t.integer "revision_number",                :default => 0,     :null => false
  end

  add_index "vendors", ["vendor_id", "is_destroyed"], :name => "avail_vendors"
  add_index "vendors", ["vendor_id"], :name => "index_vendors_on_vendor_id", :unique => true

  create_table "vouchers", :id => false, :force => true do |t|
    t.string  "voucher_id",      :limit => 32,                                 :null => false
    t.string  "display",         :limit => 300,                                :null => false
    t.string  "customer_id",     :limit => 32,                                 :null => false
    t.string  "voucher_nbr",     :limit => 11,                                 :null => false
    t.string  "voucher_type",    :limit => 100
    t.decimal "initial_balance",                :precision => 11, :scale => 2
    t.decimal "current_balance",                :precision => 11, :scale => 2
    t.date    "issue_date"
    t.date    "expiration_date"
    t.string  "state",           :limit => 100
    t.boolean "is_destroyed"
  end

  add_index "vouchers", ["voucher_id"], :name => "index_vouchers_on_voucher_id", :unique => true

  create_table "work_orders", :id => false, :force => true do |t|
    t.string  "work_order_id",          :limit => 32,                                 :null => false
    t.string  "display",                :limit => 300,                                :null => false
    t.string  "workable_id",            :limit => 32
    t.string  "workable_type",          :limit => 100
    t.string  "work_order_nbr",         :limit => 11,                                 :null => false
    t.string  "sku_id",                 :limit => 32
    t.string  "production_location_id", :limit => 32,                                 :null => false
    t.string  "supplier_id",            :limit => 32
    t.string  "work_order_description", :limit => 300
    t.string  "work_order_type",        :limit => 100,                                :null => false
    t.date    "release_date"
    t.date    "start_date"
    t.date    "complete_date"
    t.date    "target_complete_date"
    t.decimal "request_units",                         :precision => 9,  :scale => 0
    t.decimal "complete_units",                        :precision => 9,  :scale => 0
    t.boolean "is_cancelled"
    t.string  "state",                  :limit => 100
    t.decimal "weight",                                :precision => 11, :scale => 2
    t.decimal "height",                                :precision => 11, :scale => 2
    t.decimal "bust",                                  :precision => 11, :scale => 2
    t.decimal "waist",                                 :precision => 11, :scale => 2
    t.decimal "high_hip",                              :precision => 11, :scale => 2
    t.decimal "hip",                                   :precision => 11, :scale => 2
    t.decimal "across_shoulder_front",                 :precision => 11, :scale => 2
    t.decimal "across_shoulder_back",                  :precision => 11, :scale => 2
    t.decimal "shoulder_length",                       :precision => 11, :scale => 2
    t.decimal "back_length",                           :precision => 11, :scale => 2
    t.decimal "hps_to_waist",                          :precision => 11, :scale => 2
    t.decimal "neck_circumference",                    :precision => 11, :scale => 2
    t.decimal "arm_circumference",                     :precision => 11, :scale => 2
    t.decimal "wrist_circumference",                   :precision => 11, :scale => 2
    t.decimal "inseam",                                :precision => 11, :scale => 2
    t.decimal "outseam",                               :precision => 11, :scale => 2
    t.decimal "thigh",                                 :precision => 11, :scale => 2
    t.decimal "arm_length",                            :precision => 11, :scale => 2
    t.decimal "total_rise",                            :precision => 11, :scale => 2
    t.decimal "head_circumference",                    :precision => 11, :scale => 2
    t.boolean "is_destroyed"
  end

  add_index "work_orders", ["work_order_id"], :name => "index_work_orders_on_work_order_id", :unique => true

end
