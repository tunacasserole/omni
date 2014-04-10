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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140221155100) do

  create_table "account_grades", id: false, force: true do |t|
    t.string  "account_grade_id", limit: 32,  null: false
    t.string  "account_id",       limit: 32
    t.string  "grade_id",         limit: 32
    t.string  "grade_name",       limit: 200
    t.string  "display",          limit: 200
    t.string  "grade_order",      limit: 200
    t.boolean "is_destroyed"
  end

  add_index "account_grades", ["account_grade_id"], name: "index_account_grades_on_account_grade_id", unique: true, using: :btree

  create_table "account_tax_authorities", id: false, force: true do |t|
    t.string  "account_tax_authority_id", limit: 32,  null: false
    t.string  "display",                  limit: 200
    t.string  "account_id",               limit: 32
    t.string  "tax_authority_id",         limit: 32
    t.boolean "is_destroyed"
  end

  add_index "account_tax_authorities", ["account_tax_authority_id"], name: "index_account_tax_authorities_on_account_tax_authority_id", unique: true, using: :btree

  create_table "accounts", id: false, force: true do |t|
    t.string   "account_id",                        limit: 32,   null: false
    t.string   "site_id",                           limit: 32
    t.string   "display",                           limit: 200,  null: false
    t.string   "account_name",                      limit: 200
    t.string   "description",                       limit: 4000
    t.string   "short_name",                        limit: 200
    t.string   "state",                             limit: 200
    t.string   "account_nbr",                       limit: 200
    t.string   "account_type",                      limit: 200
    t.string   "parent_account_id",                 limit: 32
    t.string   "rep_user_id",                       limit: 32
    t.string   "webaccount",                        limit: 200
    t.string   "location_id",                       limit: 32
    t.string   "account_standing",                  limit: 200
    t.string   "account_exclusivity",               limit: 200
    t.string   "billing_line_1",                    limit: 200
    t.string   "billing_line_2",                    limit: 200
    t.string   "billing_city",                      limit: 200
    t.string   "billing_state",                     limit: 2
    t.string   "billing_zip",                       limit: 200
    t.string   "billing_country",                   limit: 200
    t.string   "billing_phone",                     limit: 200
    t.string   "billing_fax",                       limit: 200
    t.string   "shipping_line_1",                   limit: 200
    t.string   "shipping_line_2",                   limit: 200
    t.string   "shipping_city",                     limit: 200
    t.string   "shipping_state",                    limit: 2
    t.string   "shipping_zip",                      limit: 200
    t.string   "shipping_country",                  limit: 200
    t.string   "shipping_phone",                    limit: 200
    t.string   "shipping_fax",                      limit: 200
    t.string   "school_type",                       limit: 200
    t.string   "school_gender",                    limit: 200
    t.string   "from_grade_id",                     limit: 32
    t.string   "thru_grade_id",                     limit: 32
    t.string   "year_established",                  limit: 200
    t.integer  "number_of_students",                limit: 8
    t.string   "annual_tuition",                    limit: 200
    t.string   "design_code",                       limit: 200
    t.string   "level_of_income",                   limit: 200
    t.string   "uniform_policy",                    limit: 200
    t.string   "revenue_band",                      limit: 200
    t.string   "school_potential",                  limit: 200
    t.datetime "prospect_contract_expiration_date"
    t.string   "prospect_type",                     limit: 200
    t.string   "existing_uniform_provider",         limit: 200
    t.boolean  "is_footwear_program"
    t.string   "contract_type",                     limit: 200
    t.string   "rebate",                            limit: 200
    t.boolean  "is_red_label_account"
    t.boolean  "is_on_campus_store"
    t.boolean  "is_on_web"
    t.boolean  "is_destroyed"
  end

  add_index "accounts", ["account_id"], name: "index_accounts_on_account_id", unique: true, using: :btree

  create_table "adjustment_reasons", id: false, force: true do |t|
    t.string  "adjustment_reason_id",  limit: 32,  null: false
    t.string  "display",               limit: 200, null: false
    t.string  "description",           limit: 300
    t.string  "short_name",            limit: 15
    t.string  "ruleset_id",            limit: 32
    t.boolean "is_allowed_cost_entry"
    t.boolean "is_cost_adjustment"
    t.boolean "is_destroyed"
  end

  add_index "adjustment_reasons", ["adjustment_reason_id"], name: "index_adjustment_reasons_on_adjustment_reason_id", unique: true, using: :btree

  create_table "adjustments", id: false, force: true do |t|
    t.string   "adjustment_id",        limit: 32,                           null: false
    t.string   "display",              limit: 300
    t.string   "adjustment_nbr",       limit: 200
    t.string   "state",                limit: 200
    t.string   "location_id",          limit: 32
    t.string   "sku_id",               limit: 32
    t.string   "bin_id",               limit: 32
    t.string   "description",          limit: 300
    t.datetime "request_date"
    t.string   "request_user_id",      limit: 32
    t.datetime "post_date"
    t.string   "post_user_id",         limit: 32
    t.datetime "cancel_date"
    t.string   "cancel_user_id",       limit: 32
    t.string   "adjustment_reason_id", limit: 32
    t.decimal  "adjustment_units",                 precision: 11, scale: 2
    t.decimal  "adjustment_cost",                  precision: 13, scale: 4
    t.boolean  "is_destroyed"
  end

  add_index "adjustments", ["adjustment_id"], name: "index_adjustments_on_adjustment_id", unique: true, using: :btree

  create_table "allocation_details", id: false, force: true do |t|
    t.string  "allocation_detail_id",  limit: 32,                           null: false
    t.string  "transfer_id",           limit: 32
    t.string  "location_id",           limit: 32
    t.string  "allocation_id",         limit: 32
    t.string  "allocation_detail_nbr", limit: 200
    t.string  "state",                 limit: 200
    t.string  "display",               limit: 200
    t.decimal "units_needed",                      precision: 11, scale: 2
    t.decimal "units_allocated",                   precision: 11, scale: 2
    t.decimal "units_shipped",                     precision: 11, scale: 2
    t.boolean "is_destroyed"
  end

  add_index "allocation_details", ["allocation_detail_id"], name: "index_allocation_details_on_allocation_detail_id", unique: true, using: :btree

  create_table "allocation_profiles", id: false, force: true do |t|
    t.string  "allocation_profile_id",   limit: 32,                           null: false
    t.string  "display",                 limit: 200,                          null: false
    t.string  "description",             limit: 300
    t.string  "allocation_formula",      limit: 200
    t.decimal "percent_to_allocate",                 precision: 11, scale: 2
    t.decimal "need_adjustment_percent",             precision: 11, scale: 2
    t.string  "excess_demand_option",    limit: 200
    t.string  "excess_supply_option",    limit: 200
    t.string  "rounding_option",         limit: 200
    t.boolean "is_destroyed"
  end

  add_index "allocation_profiles", ["allocation_profile_id"], name: "index_allocation_profiles_on_allocation_profile_id", unique: true, using: :btree

  create_table "allocations", id: false, force: true do |t|
    t.string  "allocation_id",         limit: 32,                           null: false
    t.string  "allocatable_id",        limit: 32
    t.string  "allocatable_type",      limit: 200
    t.string  "sku_id",                limit: 32
    t.string  "location_id",           limit: 32
    t.string  "inventory_id",          limit: 32
    t.string  "allocation_profile_id", limit: 32
    t.string  "allocation_nbr",        limit: 200
    t.string  "state",                 limit: 200
    t.string  "display",               limit: 200
    t.string  "description",           limit: 500
    t.decimal "units_to_allocate",                 precision: 11, scale: 2
    t.boolean "is_destroyed"
  end

  add_index "allocations", ["allocation_id"], name: "index_allocations_on_allocation_id", unique: true, using: :btree

  create_table "application_roles", id: false, force: true do |t|
    t.string  "application_role_id", limit: 32,                 null: false
    t.string  "application_id",      limit: 32,                 null: false
    t.string  "role_id",             limit: 32,                 null: false
    t.boolean "is_enabled",                     default: false
  end

  add_index "application_roles", ["application_role_id"], name: "index_application_roles_on_application_role_id", unique: true, using: :btree

  create_table "applications", id: false, force: true do |t|
    t.string   "application_id",   limit: 32,                  null: false
    t.string   "application_code", limit: 100,                 null: false
    t.string   "hub_xtype",        limit: 200,                 null: false
    t.string   "application_name", limit: 100,                 null: false
    t.string   "description",      limit: 400,                 null: false
    t.boolean  "is_enabled",                   default: true,  null: false
    t.boolean  "is_destroyed",                 default: false, null: false
    t.integer  "revision_number",              default: 0,     null: false
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "applications", ["application_id", "is_destroyed"], name: "avail_applications", using: :btree
  add_index "applications", ["application_id"], name: "index_applications_on_application_id", unique: true, using: :btree

  create_table "applications_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "applications_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "approvals", id: false, force: true do |t|
    t.string   "approval_id",     limit: 32,   null: false
    t.string   "approver_id",     limit: 32
    t.string   "approvable_id",   limit: 32
    t.string   "approvable_type", limit: 32
    t.string   "approval_nbr",    limit: 200
    t.string   "approval_type",   limit: 200
    t.string   "state",           limit: 200
    t.string   "display",         limit: 200
    t.string   "description",     limit: 4000
    t.datetime "approval_date"
  end

  add_index "approvals", ["approval_id"], name: "index_approvals_on_approval_id", unique: true, using: :btree

  create_table "areas", id: false, force: true do |t|
    t.string   "area_id",                     limit: 32,                           null: false
    t.string   "display",                     limit: 300
    t.string   "location_id",                 limit: 32
    t.string   "area_nbr",                    limit: 200
    t.string   "description",                 limit: 300
    t.string   "short_name",                  limit: 200
    t.boolean  "is_receiving"
    t.boolean  "is_picking"
    t.boolean  "is_reserve"
    t.boolean  "is_putaway"
    t.boolean  "is_supplier_return"
    t.boolean  "is_processing"
    t.boolean  "is_shipping"
    t.boolean  "is_put_location"
    t.boolean  "is_special_handling"
    t.boolean  "is_quality_control"
    t.boolean  "is_quick_case"
    t.boolean  "is_many_sku_per_bin"
    t.decimal  "default_cube_capacity",                   precision: 11, scale: 2
    t.boolean  "is_request_cube_calculation"
    t.datetime "last_utilization_calc_date"
    t.boolean  "is_destroyed"
  end

  create_table "attachments", id: false, force: true do |t|
    t.string   "attachment_id",    limit: 32,                  null: false
    t.string   "attachable_type",  limit: 100,                 null: false
    t.string   "attachable_id",    limit: 32,                  null: false
    t.string   "file_name",        limit: 200,                 null: false
    t.string   "mime_type",        limit: 200
    t.integer  "byte_size"
    t.string   "locale",           limit: 40,                  null: false
    t.boolean  "is_enabled",                   default: true,  null: false
    t.boolean  "is_destroyed",                 default: false, null: false
    t.integer  "revision_number",              default: 0,     null: false
    t.boolean  "is_internal",                  default: false
    t.string   "attachment_type",  limit: 40
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "attachments", ["attachable_type", "attachable_id", "is_destroyed"], name: "attachable_attachments", using: :btree
  add_index "attachments", ["attachment_id"], name: "index_attachments_on_attachment_id", unique: true, using: :btree
  add_index "attachments", ["is_destroyed"], name: "index_attachments_on_is_destroyed", using: :btree

  create_table "attachments_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "attachments_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "bin_skus", id: false, force: true do |t|
    t.string   "bin_sku_id",           limit: 32,                           null: false
    t.string   "sku_alias_id",         limit: 32
    t.string   "bin_id",               limit: 32
    t.string   "sku_id",               limit: 32
    t.string   "display",              limit: 300
    t.datetime "last_activity_date"
    t.decimal  "being_received_units",             precision: 11, scale: 2
    t.decimal  "on_hand_units",                    precision: 11, scale: 2
    t.string   "pack_type",            limit: 200
    t.decimal  "due_in_units",                     precision: 11, scale: 2
    t.decimal  "due_out_units",                    precision: 11, scale: 2
    t.boolean  "is_destroyed"
  end

  create_table "bins", id: false, force: true do |t|
    t.string   "bin_id",                 limit: 32,                           null: false
    t.string   "display",                limit: 300
    t.string   "location_id",            limit: 32
    t.string   "area_id",                limit: 32
    t.string   "aisle",                  limit: 200
    t.string   "section",                limit: 200
    t.string   "level",                  limit: 200
    t.string   "position",               limit: 200
    t.string   "bin_nbr",                limit: 200
    t.string   "bin_code",               limit: 200
    t.string   "description",            limit: 300
    t.string   "bin_type",               limit: 200
    t.datetime "last_activity_date"
    t.boolean  "is_many_sku_per_bin"
    t.integer  "pick_sequence"
    t.string   "zone",                   limit: 200
    t.string   "pick_zone",              limit: 200
    t.integer  "cube_capacity"
    t.boolean  "is_area"
    t.boolean  "is_count_cartons"
    t.boolean  "is_empty"
    t.integer  "carton_count"
    t.decimal  "on_hand_cube",                       precision: 11, scale: 2
    t.decimal  "due_in_cube",                        precision: 11, scale: 2
    t.decimal  "due_out_cube",                       precision: 11, scale: 2
    t.boolean  "is_request_label_print"
    t.string   "bin_label_type",         limit: 200
    t.boolean  "is_enabled"
    t.boolean  "is_destroyed"
  end

  create_table "bom_details", id: false, force: true do |t|
    t.string  "bom_detail_id", limit: 32,                           null: false
    t.string  "display",       limit: 300,                          null: false
    t.string  "bom_id",        limit: 32
    t.string  "color_id",      limit: 32
    t.string  "sku_id",        limit: 32
    t.decimal "quantity",                  precision: 11, scale: 2
    t.decimal "waste_percent",             precision: 11, scale: 2
    t.string  "uom_code",      limit: 200
    t.boolean "is_destroyed"
  end

  create_table "boms", id: false, force: true do |t|
    t.string   "bom_id",             limit: 32,                           null: false
    t.string   "display",            limit: 300,                          null: false
    t.string   "bomable_type",       limit: 200
    t.string   "bomable_id",         limit: 32
    t.string   "bom_nbr",            limit: 200
    t.string   "description",        limit: 300
    t.string   "bom_type",           limit: 200
    t.decimal  "version",                        precision: 11, scale: 2
    t.datetime "effective_date"
    t.datetime "end_date"
    t.boolean  "is_primary_bom"
    t.decimal  "labor_hours",                    precision: 11, scale: 2
    t.decimal  "machine_hours",                  precision: 11, scale: 2
    t.decimal  "construction_hours",             precision: 11, scale: 2
    t.boolean  "is_enabled"
    t.boolean  "is_destroyed"
  end

  create_table "bookmarks", id: false, force: true do |t|
    t.string   "bookmark_id",       limit: 32,                  null: false
    t.string   "bookmarkable_type", limit: 200,                 null: false
    t.string   "bookmarkable_id",   limit: 32,                  null: false
    t.string   "user_id",                                       null: false
    t.boolean  "is_enabled",                    default: true
    t.boolean  "is_destroyed",                  default: false, null: false
    t.integer  "revision_number",               default: 0,     null: false
    t.string   "audit_created_by",  limit: 100
    t.string   "audit_updated_by",  limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "bookmarks", ["bookmark_id", "is_destroyed"], name: "avail_bookmark", using: :btree
  add_index "bookmarks", ["bookmark_id"], name: "index_bookmarks_on_bookmark_id", unique: true, using: :btree
  add_index "bookmarks", ["is_destroyed", "is_enabled"], name: "enabled_bookmarks", using: :btree
  add_index "bookmarks", ["is_destroyed"], name: "avail_bookmarks", using: :btree

  create_table "bookmarks_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "bookmarks_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "cases", id: false, force: true do |t|
    t.string   "case_id",          limit: 32,                                          null: false
    t.string   "requestor_id",     limit: 32
    t.string   "project_id",       limit: 32
    t.string   "case_nbr",         limit: 200
    t.string   "case_type",        limit: 200
    t.string   "state",            limit: 200
    t.string   "display",          limit: 200
    t.string   "description",      limit: 4000
    t.string   "tags",             limit: 200
    t.decimal  "estimated_hours",               precision: 11, scale: 4, default: 0.0
    t.decimal  "actual_hours",                  precision: 11, scale: 4, default: 0.0
    t.boolean  "is_billable"
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "cases", ["case_id"], name: "index_cases_on_case_id", unique: true, using: :btree

  create_table "cases_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "cases_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "categories", id: false, force: true do |t|
    t.string  "category_id",   limit: 32,  null: false
    t.string  "display",       limit: 200
    t.string  "category_code", limit: 200
    t.string  "description",   limit: 300
    t.string  "category_type", limit: 200
    t.boolean "is_destroyed"
  end

  add_index "categories", ["category_id"], name: "index_categories_on_category_id", unique: true, using: :btree

  create_table "checklists", id: false, force: true do |t|
    t.string "checklist_id",   limit: 32,   null: false
    t.string "checklist_nbr",  limit: 200
    t.string "checklist_type", limit: 200
    t.string "state",          limit: 200
    t.string "display",        limit: 200
    t.string "description",    limit: 2000
  end

  add_index "checklists", ["checklist_id"], name: "index_checklists_on_checklist_id", unique: true, using: :btree

  create_table "classifications", id: false, force: true do |t|
    t.string  "classification_id",  limit: 32,  null: false
    t.string  "display",            limit: 200, null: false
    t.string  "classification_nbr", limit: 200
    t.string  "description",        limit: 300
    t.string  "short_name",         limit: 15
    t.string  "planner_user_id",    limit: 32
    t.string  "department_id",      limit: 32,  null: false
    t.boolean "is_destroyed"
  end

  add_index "classifications", ["classification_id"], name: "index_classifications_on_classification_id", unique: true, using: :btree

  create_table "colors", id: false, force: true do |t|
    t.string  "color_id",          limit: 32,  null: false
    t.string  "display",           limit: 200, null: false
    t.string  "color_nbr",         limit: 200
    t.string  "description",       limit: 300
    t.string  "short_name",        limit: 15
    t.string  "concatenated_name", limit: 200
    t.string  "color_family",      limit: 200
    t.boolean "is_plaid"
    t.boolean "is_stripe"
    t.boolean "is_enabled"
    t.boolean "is_destroyed"
  end

  add_index "colors", ["color_id"], name: "index_colors_on_color_id", unique: true, using: :btree

  create_table "comm_email_addresses", id: false, force: true do |t|
    t.string  "comm_email_address_id", limit: 32,                  null: false
    t.string  "comm_email_message_id", limit: 32,                  null: false
    t.string  "address",               limit: 100,                 null: false
    t.string  "display",               limit: 200
    t.string  "address_type",          limit: 40,  default: "TO",  null: false
    t.integer "revision_number",                   default: 1,     null: false
    t.boolean "is_destroyed",                      default: false, null: false
  end

  create_table "comm_email_messages", id: false, force: true do |t|
    t.string  "comm_email_message_id", limit: 32,                  null: false
    t.string  "mail_account",          limit: 100,                 null: false
    t.string  "subject",               limit: 200
    t.text    "body"
    t.string  "direction_code",        limit: 40,                  null: false
    t.string  "priority_code",         limit: 40,                  null: false
    t.string  "content_type",          limit: 100,                 null: false
    t.string  "message_id",            limit: 200
    t.string  "category",              limit: 200
    t.integer "revision_number",                   default: 1,     null: false
    t.boolean "is_destroyed",                      default: false, null: false
  end

  create_table "comm_inbox_items", id: false, force: true do |t|
    t.string   "comm_inbox_item_id",    limit: 32,                  null: false
    t.string   "comm_email_message_id", limit: 32,                  null: false
    t.string   "inbound_account",       limit: 100,                 null: false
    t.datetime "received_at",                                       null: false
    t.datetime "processed_at",                                      null: false
    t.integer  "revision_number",                   default: 1,     null: false
    t.boolean  "is_destroyed",                      default: false, null: false
  end

  create_table "comm_outbox_items", id: false, force: true do |t|
    t.string   "comm_outbox_item_id",   limit: 32,                  null: false
    t.string   "comm_email_message_id", limit: 32,                  null: false
    t.string   "outbound_account",      limit: 100,                 null: false
    t.datetime "submitted_at"
    t.datetime "scheduled_for"
    t.integer  "attempts",                          default: 0,     null: false
    t.integer  "revision_number",                   default: 1,     null: false
    t.boolean  "is_destroyed",                      default: false, null: false
  end

  create_table "comm_sent_items", id: false, force: true do |t|
    t.string   "comm_sent_item_id",     limit: 32,                 null: false
    t.string   "comm_email_message_id", limit: 32,                 null: false
    t.datetime "scheduled_at",                                     null: false
    t.datetime "sent_at",                                          null: false
    t.integer  "revision_number",                  default: 1,     null: false
    t.boolean  "is_destroyed",                     default: false, null: false
  end

  create_table "companies", id: false, force: true do |t|
    t.string  "company_id",                 limit: 32,                           null: false
    t.string  "display",                    limit: 200,                          null: false
    t.string  "company_nbr",                limit: 200
    t.string  "description",                limit: 300
    t.string  "short_name",                 limit: 15
    t.string  "company_url",                limit: 200
    t.string  "line_1",                     limit: 200
    t.string  "line_2",                     limit: 200
    t.string  "line_3",                     limit: 200
    t.string  "line_4",                     limit: 200
    t.string  "city",                       limit: 200
    t.string  "state_code",                 limit: 2
    t.string  "zip",                        limit: 10
    t.string  "country",                    limit: 200
    t.string  "latitude",                   limit: 15
    t.string  "longitude",                  limit: 15
    t.string  "phone",                      limit: 200
    t.string  "fax",                        limit: 200
    t.decimal "beta_factor",                            precision: 11, scale: 2
    t.integer "demand_filter"
    t.integer "tracking_signal"
    t.decimal "purchase_order_header_cost",             precision: 11, scale: 2
    t.decimal "carrying_cost_percent",                  precision: 11, scale: 2
    t.boolean "is_destroyed"
  end

  add_index "companies", ["company_id"], name: "index_companies_on_company_id", unique: true, using: :btree

  create_table "contacts", id: false, force: true do |t|
    t.string  "contact_id",      limit: 32,  null: false
    t.string  "account_id",      limit: 32
    t.string  "display",         limit: 200
    t.string  "name_prefix",     limit: 200
    t.string  "first_name",      limit: 200
    t.string  "last_name",       limit: 200
    t.string  "name_suffix",     limit: 200
    t.string  "job_title",       limit: 200
    t.string  "line_1",          limit: 200
    t.string  "line_2",          limit: 200
    t.string  "city",            limit: 200
    t.string  "state_code",      limit: 2
    t.string  "zip",             limit: 200
    t.string  "country",         limit: 200
    t.string  "phone",           limit: 200
    t.string  "other_phone",     limit: 200
    t.string  "fax",             limit: 200
    t.string  "email_address",   limit: 200
    t.boolean "is_do_not_email"
    t.boolean "is_do_not_mail"
    t.boolean "is_do_not_call"
    t.boolean "is_destroyed"
  end

  add_index "contacts", ["contact_id"], name: "index_contacts_on_contact_id", unique: true, using: :btree

  create_table "container_details", id: false, force: true do |t|
    t.string   "container_detail_id",        limit: 32,                           null: false
    t.string   "display",                    limit: 300,                          null: false
    t.string   "container_detail_nbr",       limit: 200
    t.string   "container_id",               limit: 32
    t.string   "state",                      limit: 200
    t.string   "sku_id",                     limit: 32
    t.decimal  "selling_units",                          precision: 11, scale: 2
    t.decimal  "commited_units",                         precision: 11, scale: 2
    t.string   "pack_type",                  limit: 200
    t.decimal  "sell_units_per_pack",                    precision: 11, scale: 2
    t.string   "container_inventory_source", limit: 200
    t.string   "container_detail_source",    limit: 200
    t.string   "purchase_detail_id",         limit: 32
    t.string   "supplier_id",                limit: 32
    t.string   "supplier_item_identifier",   limit: 200
    t.string   "lot_identifier",             limit: 200
    t.string   "job_id",                     limit: 32
    t.string   "receipt_detail_id",          limit: 32
    t.string   "pick_id",                    limit: 32
    t.string   "origin_container_detail_id", limit: 32
    t.boolean  "is_quality_hold"
    t.boolean  "is_duty_paid"
    t.datetime "last_activity_date"
    t.datetime "last_count_date"
    t.boolean  "is_audited"
    t.boolean  "is_inspected"
    t.datetime "Inspection_date"
    t.datetime "create_date"
    t.boolean  "is_destroyed"
  end

  create_table "containers", id: false, force: true do |t|
    t.string   "container_id",          limit: 32,                           null: false
    t.string   "display",               limit: 300,                          null: false
    t.string   "container_nbr",         limit: 200,                          null: false
    t.string   "description",           limit: 300
    t.string   "container_type",        limit: 200
    t.string   "parent_container_id",   limit: 32
    t.boolean  "is_labeled"
    t.string   "barcode_nbr",           limit: 200
    t.string   "location_id",           limit: 32
    t.string   "state",                 limit: 200
    t.datetime "create_date"
    t.datetime "last_update_date"
    t.boolean  "is_located"
    t.boolean  "is_moving"
    t.boolean  "is_in_transit"
    t.string   "bin_id",                limit: 32
    t.boolean  "is_container_lost"
    t.datetime "last_verify_date"
    t.decimal  "capacity",                          precision: 13, scale: 4
    t.decimal  "capacity_weight",                   precision: 11, scale: 2
    t.decimal  "inside_length",                     precision: 11, scale: 2
    t.decimal  "inside_height",                     precision: 11, scale: 2
    t.decimal  "inside_width",                      precision: 11, scale: 2
    t.boolean  "is_outside_dimensions"
    t.decimal  "outside_length",                    precision: 11, scale: 2
    t.decimal  "outside_height",                    precision: 11, scale: 2
    t.decimal  "outside_width",                     precision: 11, scale: 2
    t.decimal  "tare_weight",                       precision: 11, scale: 2
    t.decimal  "fill_percent",                      precision: 11, scale: 2
    t.decimal  "carton_count",                      precision: 11, scale: 2
    t.decimal  "actual_weight",                     precision: 11, scale: 2
    t.decimal  "actual_cube",                       precision: 13, scale: 4
    t.decimal  "filled_percent",                    precision: 11, scale: 2
    t.boolean  "is_destroyed"
  end

  create_table "contents", id: false, force: true do |t|
    t.string   "content_id",       limit: 32,                         null: false
    t.string   "contentable_type", limit: 100
    t.string   "contentable_id",   limit: 32
    t.binary   "data",             limit: 2147483647
    t.boolean  "is_enabled",                          default: true,  null: false
    t.boolean  "is_destroyed",                        default: false, null: false
    t.integer  "revision_number",                     default: 0,     null: false
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "contents", ["content_id"], name: "index_contents_on_content_id", unique: true, using: :btree
  add_index "contents", ["is_destroyed", "contentable_id"], name: "index_contents_on_is_destroyed_and_contentable_id", using: :btree
  add_index "contents", ["is_destroyed"], name: "index_contents_on_is_destroyed", using: :btree

  create_table "contents_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "contents_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "contracts", id: false, force: true do |t|
    t.string   "contract_id",                    limit: 32,                            null: false
    t.string   "display",                        limit: 200,                           null: false
    t.string   "account_id",                     limit: 32
    t.string   "contract_nbr",                   limit: 200
    t.string   "state",                          limit: 200
    t.string   "description",                    limit: 4000
    t.string   "contract_term",                  limit: 32
    t.string   "rep_user_id",                    limit: 32
    t.string   "parker_signed_by_user_id",       limit: 32
    t.string   "customer_signed_by_user_id",     limit: 32
    t.string   "customer_signed_by_title",       limit: 200
    t.string   "activated_by_user_id",           limit: 32
    t.string   "expiration_notice_window",       limit: 200
    t.string   "special_terms",                  limit: 200
    t.decimal  "teacher_discount_percent",                    precision: 11, scale: 2
    t.decimal  "administrator_discount_percent",              precision: 11, scale: 2
    t.boolean  "is_exclusive"
    t.boolean  "is_discount_in_store"
    t.boolean  "is_discount_on_web"
    t.datetime "effective_date"
    t.datetime "end_date"
    t.datetime "parker_signed_by_date"
    t.datetime "customer_signed_by_date"
    t.datetime "activated_date"
    t.datetime "last_approved_date"
    t.datetime "contract_sent_date"
    t.datetime "contract_received_date"
    t.datetime "order_form_sent_date_date"
    t.datetime "contract_won_date"
    t.datetime "contract_lost_date"
    t.boolean  "is_destroyed"
  end

  create_table "conversions", id: false, force: true do |t|
    t.string "version", null: false
  end

  add_index "conversions", ["version"], name: "index_conversions_on_version", unique: true, using: :btree

  create_table "cost_details", id: false, force: true do |t|
    t.string  "cost_detail_id",           limit: 32,                           null: false
    t.string  "display",                  limit: 300
    t.string  "cost_id",                  limit: 32
    t.string  "cost_detail_name",         limit: 200
    t.string  "cost_source",              limit: 200
    t.string  "cost_type",                limit: 200
    t.decimal "cost_amount",                          precision: 13, scale: 4
    t.decimal "cost_percent",                         precision: 13, scale: 4
    t.string  "cost_calculation",         limit: 200
    t.boolean "is_update_inventory_cost"
    t.boolean "is_update_invoice_cost"
    t.boolean "is_destroyed"
  end

  create_table "costs", id: false, force: true do |t|
    t.string  "cost_id",      limit: 32,  null: false
    t.string  "display",      limit: 200, null: false
    t.string  "short_name",   limit: 200
    t.string  "description",  limit: 300
    t.boolean "is_destroyed"
  end

  create_table "customer_accounts", id: false, force: true do |t|
    t.string  "customer_account_id", limit: 32,   null: false
    t.string  "display",             limit: 300
    t.string  "customer_id",         limit: 32
    t.string  "account_id",          limit: 32
    t.string  "comment",             limit: 4000
    t.boolean "is_contact"
    t.boolean "is_teacher"
    t.boolean "is_administrator"
    t.boolean "is_destroyed"
  end

  create_table "customers", id: false, force: true do |t|
    t.string   "customer_id",            limit: 32,  null: false
    t.string   "display",                limit: 300, null: false
    t.string   "customer_nbr",           limit: 200
    t.datetime "registration_date"
    t.string   "user_id",                limit: 32
    t.string   "name_prefix",            limit: 200
    t.string   "first_name",             limit: 200
    t.string   "middle_name",            limit: 200
    t.string   "last_name",              limit: 200
    t.string   "name_suffix",            limit: 200
    t.string   "company",                limit: 200
    t.string   "department",             limit: 200
    t.string   "job_title",              limit: 200
    t.boolean  "is_tax_exempt"
    t.string   "tax_exempt_state",       limit: 2
    t.string   "tax_exempt_certificate", limit: 200
    t.boolean  "is_employee"
    t.string   "employee_nbr",           limit: 200
    t.boolean  "is_contractor"
    t.string   "contractor_nbr",         limit: 200
    t.boolean  "is_student"
    t.datetime "birth_date"
    t.string   "gender",                 limit: 200
    t.boolean  "is_analyst"
    t.boolean  "is_developer"
    t.string   "line_1",                 limit: 200
    t.string   "line_2",                 limit: 200
    t.string   "line_3",                 limit: 200
    t.string   "line_4",                 limit: 200
    t.string   "city",                   limit: 200
    t.string   "state_code",             limit: 2
    t.string   "zip",                    limit: 10
    t.string   "country",                limit: 200
    t.string   "latitude",               limit: 15
    t.string   "longitude",              limit: 15
    t.boolean  "is_validated"
    t.boolean  "is_residential"
    t.boolean  "is_commercial"
    t.boolean  "is_do_not_mail_to"
    t.string   "ship_line_1",            limit: 200
    t.string   "ship_line_2",            limit: 200
    t.string   "ship_line_3",            limit: 200
    t.string   "ship_line_4",            limit: 200
    t.string   "ship_city",              limit: 200
    t.string   "ship_state_code",        limit: 2
    t.string   "ship_zip",               limit: 10
    t.string   "ship_country",           limit: 200
    t.string   "ship_latitude",          limit: 15
    t.string   "ship_longitude",         limit: 15
    t.string   "phone",                  limit: 200
    t.string   "phone_extension",        limit: 10
    t.boolean  "is_do_not_call"
    t.string   "fax",                    limit: 200
    t.string   "email_address",          limit: 200
    t.boolean  "is_verified"
    t.boolean  "is_do_not_email"
    t.string   "customer_account_nbr",   limit: 200
    t.string   "customer_account_type",  limit: 200
    t.string   "customer_account_name",  limit: 200
    t.datetime "account_open_date"
    t.datetime "account_close_date"
    t.integer  "credit_limit"
    t.boolean  "is_on_hold"
    t.boolean  "is_destroyed"
  end

  create_table "daily_results", id: false, force: true do |t|
    t.string  "daily_result_id",        limit: 32,                           null: false
    t.string  "display",                limit: 300
    t.string  "sku_id",                 limit: 32
    t.string  "location_id",            limit: 32
    t.date    "date"
    t.decimal "adjusted_cost",                      precision: 11, scale: 2
    t.decimal "adjusted_retail",                    precision: 11, scale: 2
    t.decimal "adjusted_units",                     precision: 11, scale: 2
    t.decimal "backorder_cost",                     precision: 11, scale: 2
    t.decimal "backorder_retail",                   precision: 11, scale: 2
    t.decimal "backorder_units",                    precision: 11, scale: 2
    t.decimal "clearance_sale_cost",                precision: 11, scale: 2
    t.decimal "clearance_sale_retail",              precision: 11, scale: 2
    t.decimal "clearance_sale_units",               precision: 11, scale: 2
    t.decimal "consumed_cost",                      precision: 11, scale: 2
    t.decimal "consumed_retail",                    precision: 11, scale: 2
    t.decimal "consumed_units",                     precision: 11, scale: 2
    t.decimal "net_inventory_cost",                 precision: 11, scale: 2
    t.decimal "net_inventory_retail",               precision: 11, scale: 2
    t.decimal "net_inventory_units",                precision: 11, scale: 2
    t.decimal "net_sale_cost",                      precision: 11, scale: 2
    t.decimal "net_sale_retail",                    precision: 11, scale: 2
    t.decimal "net_sale_units",                     precision: 11, scale: 2
    t.decimal "produced_cost",                      precision: 11, scale: 2
    t.decimal "produced_retail",                    precision: 11, scale: 2
    t.decimal "produced_units",                     precision: 11, scale: 2
    t.decimal "promo_sale_cost",                    precision: 11, scale: 2
    t.decimal "promo_sale_retail",                  precision: 11, scale: 2
    t.decimal "promo_sale_units",                   precision: 11, scale: 2
    t.decimal "purchased_cost",                     precision: 11, scale: 2
    t.decimal "purchased_retail",                   precision: 11, scale: 2
    t.decimal "purchased_units",                    precision: 11, scale: 2
    t.decimal "received_cost",                      precision: 11, scale: 2
    t.decimal "received_retail",                    precision: 11, scale: 2
    t.decimal "received_units",                     precision: 11, scale: 2
    t.decimal "requested_cost",                     precision: 11, scale: 2
    t.decimal "requested_retail",                   precision: 11, scale: 2
    t.decimal "requested_units",                    precision: 11, scale: 2
    t.decimal "return_sale_cost",                   precision: 11, scale: 2
    t.decimal "return_sale_retail",                 precision: 11, scale: 2
    t.decimal "return_sale_units",                  precision: 11, scale: 2
    t.decimal "shipped_cost",                       precision: 11, scale: 2
    t.decimal "shipped_retail",                     precision: 11, scale: 2
    t.decimal "shipped_units",                      precision: 11, scale: 2
    t.decimal "work_in_process_cost",               precision: 11, scale: 2
    t.decimal "work_in_process_retail",             precision: 11, scale: 2
    t.decimal "work_in_process_units",              precision: 11, scale: 2
    t.boolean "is_destroyed"
  end

  add_index "daily_results", ["daily_result_id"], name: "index_daily_results_on_daily_result_id", unique: true, using: :btree
  add_index "daily_results", ["location_id"], name: "index_daily_results_on_location_id", using: :btree
  add_index "daily_results", ["sku_id"], name: "index_daily_results_on_sku_id", using: :btree

  create_table "dashboard_states", id: false, force: true do |t|
    t.string  "dashboard_state_id", limit: 32,                  null: false
    t.string  "dashboard_id",       limit: 100,                 null: false
    t.string  "user_id",            limit: 32,                  null: false
    t.integer "column_index",                                   null: false
    t.text    "definition"
    t.boolean "is_destroyed",                   default: false, null: false
    t.integer "revision_number",                default: 0,     null: false
  end

  add_index "dashboard_states", ["dashboard_id", "is_destroyed"], name: "avail_dashboard_by_id", using: :btree
  add_index "dashboard_states", ["dashboard_state_id", "is_destroyed"], name: "avail_dashboard_states", using: :btree
  add_index "dashboard_states", ["dashboard_state_id"], name: "index_dashboard_states_on_dashboard_state_id", unique: true, using: :btree

  create_table "dashlets", id: false, force: true do |t|
    t.string   "dashlet_id",       limit: 32,                  null: false
    t.string   "xtype",            limit: 200,                 null: false
    t.string   "dashlet_name",     limit: 50,                  null: false
    t.string   "summary",          limit: 200,                 null: false
    t.text     "detail"
    t.string   "version",          limit: 20,                  null: false
    t.date     "released_on"
    t.string   "logo_path",        limit: 200
    t.boolean  "is_destroyed",                 default: false, null: false
    t.integer  "revision_number",              default: 0,     null: false
    t.string   "category",         limit: 40
    t.string   "subcategory",      limit: 40
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "dashlets", ["dashlet_id", "is_destroyed"], name: "avail_dashlets", using: :btree
  add_index "dashlets", ["dashlet_id"], name: "index_dashlets_on_dashlet_id", unique: true, using: :btree

  create_table "dashlets_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "dashlets_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "departments", id: false, force: true do |t|
    t.string  "department_id",  limit: 32,  null: false
    t.string  "display",        limit: 200, null: false
    t.string  "department_nbr", limit: 200
    t.string  "description",    limit: 300
    t.string  "short_name",     limit: 15
    t.string  "buyer_user_id",  limit: 32
    t.string  "company_id",     limit: 32
    t.boolean "is_destroyed"
  end

  add_index "departments", ["department_id"], name: "index_departments_on_department_id", unique: true, using: :btree

  create_table "districts", id: false, force: true do |t|
    t.string  "district_id",  limit: 32,  null: false
    t.string  "display",      limit: 200, null: false
    t.string  "district_nbr", limit: 200
    t.string  "description",  limit: 300
    t.string  "short_name",   limit: 15
    t.string  "region_id",    limit: 32
    t.string  "user_id",      limit: 32
    t.boolean "is_destroyed"
  end

  create_table "donations", id: false, force: true do |t|
    t.string   "donation_id",     limit: 32,                           null: false
    t.string   "display",         limit: 200
    t.string   "account_id",      limit: 32
    t.datetime "donation_date"
    t.decimal  "donation_amount",             precision: 11, scale: 2
    t.boolean  "is_destroyed"
  end

  add_index "donations", ["donation_id"], name: "index_donations_on_donation_id", unique: true, using: :btree

  create_table "enrollments", id: false, force: true do |t|
    t.string   "enrollment_id",          limit: 32,  null: false
    t.string   "account_id",             limit: 32
    t.string   "display",                limit: 200
    t.string   "school_year",            limit: 200
    t.string   "grade_id",               limit: 32
    t.string   "gender",                 limit: 200
    t.string   "enrollment",             limit: 200
    t.datetime "school_year_start_date"
    t.datetime "school_year_end_date"
    t.boolean  "is_destroyed"
  end

  add_index "enrollments", ["enrollment_id"], name: "index_enrollments_on_enrollment_id", unique: true, using: :btree

  create_table "events", id: false, force: true do |t|
    t.string   "event_id",        limit: 32,  null: false
    t.string   "eventable_id",    limit: 32,  null: false
    t.string   "eventable_type",  limit: 200, null: false
    t.string   "event_type",      limit: 10,  null: false
    t.string   "user_id",         limit: 32
    t.datetime "occurred_at",                 null: false
    t.text     "message",                     null: false
    t.integer  "revision_number"
    t.boolean  "is_destroyed"
    t.string   "title",           limit: 200
  end

  add_index "events", ["event_id"], name: "index_events_on_event_id", unique: true, using: :btree

  create_table "exports", id: false, force: true do |t|
    t.string   "export_id",        limit: 32,  null: false
    t.string   "file_name",        limit: 200, null: false
    t.text     "export_criteria"
    t.integer  "total_rows"
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "exports", ["export_id"], name: "index_exports_on_export_id", unique: true, using: :btree

  create_table "exports_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "exports_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "features", id: false, force: true do |t|
    t.string   "feature_id",       limit: 32,                                          null: false
    t.string   "project_id",       limit: 32
    t.string   "feature_nbr",      limit: 200
    t.string   "feature_type",     limit: 200
    t.string   "state",            limit: 200
    t.string   "display",          limit: 200
    t.string   "description",      limit: 4000
    t.datetime "release_date"
    t.decimal  "estimated_hours",               precision: 11, scale: 4, default: 0.0
    t.decimal  "actual_hours",                  precision: 11, scale: 4, default: 0.0
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "features", ["feature_id"], name: "index_features_on_feature_id", unique: true, using: :btree

  create_table "features_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "features_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "following_entries", id: false, force: true do |t|
    t.string   "following_entry_id", limit: 32,  null: false
    t.string   "followable_type",    limit: 100, null: false
    t.string   "followable_id",      limit: 32,  null: false
    t.string   "user_id",            limit: 32,  null: false
    t.string   "performed_by_id",    limit: 32
    t.string   "performed_by_name",  limit: 100
    t.datetime "performed_at",                   null: false
    t.string   "operation",          limit: 100, null: false
    t.text     "description",                    null: false
    t.string   "subject",            limit: 100
  end

  add_index "following_entries", ["followable_id"], name: "followable_id", using: :btree
  add_index "following_entries", ["following_entry_id"], name: "index_following_entries_on_following_entry_id", unique: true, using: :btree

  create_table "forecast_profiles", id: false, force: true do |t|
    t.string  "forecast_profile_id", limit: 32,                           null: false
    t.string  "display",             limit: 300,                          null: false
    t.string  "description",         limit: 500
    t.string  "forecast_formula",    limit: 200
    t.decimal "sales_py1_weight",                precision: 11, scale: 2
    t.decimal "sales_py2_weight",                precision: 11, scale: 2
    t.decimal "sales_py3_weight",                precision: 11, scale: 2
    t.boolean "is_destroyed"
  end

  create_table "gl_accounts", id: false, force: true do |t|
    t.string  "gl_account_id",    limit: 32,  null: false
    t.string  "display",          limit: 200, null: false
    t.string  "gl_main_account",  limit: 4
    t.string  "gl_sub_account",   limit: 4
    t.boolean "is_location_fill"
    t.string  "gl_account_type",  limit: 200
    t.boolean "is_destroyed"
  end

  create_table "grades", id: false, force: true do |t|
    t.string  "grade_id",     limit: 32,  null: false
    t.string  "display",      limit: 300, null: false
    t.string  "grade_name",   limit: 200
    t.string  "short_name",   limit: 200
    t.integer "grade_order"
    t.boolean "is_destroyed"
  end

  create_table "grits_bts", id: false, force: true do |t|
    t.integer "tg_sku_id"
    t.integer "qoh_60"
    t.integer "qoh_61"
    t.integer "qoh_62"
    t.integer "qoh_63"
    t.integer "qoh_64"
    t.integer "qoh_65"
    t.integer "qoh_66"
    t.integer "qoo_60"
    t.integer "qoo_61"
    t.integer "qoo_62"
    t.integer "qoo_63"
    t.integer "qoo_64"
    t.integer "qoo_65"
    t.integer "qoo_66"
    t.integer "sold_60"
    t.integer "sold_61"
    t.integer "sold_62"
    t.integer "sold_63"
    t.integer "sold_64"
    t.integer "sold_65"
    t.integer "sold_66"
    t.integer "projected_60"
    t.integer "projected_61"
    t.integer "projected_62"
    t.integer "projected_63"
    t.integer "projected_64"
    t.integer "projected_65"
    t.integer "projected_66"
  end

  create_table "inventories", id: false, force: true do |t|
    t.string   "inventory_id",             limit: 32,                           null: false
    t.string   "sku_id",                   limit: 32
    t.string   "department_id",            limit: 32
    t.string   "location_id",              limit: 32
    t.string   "supplier_id",              limit: 32
    t.string   "forecast_profile_id",      limit: 32
    t.string   "seasonal_index_id",        limit: 32
    t.string   "display",                  limit: 300
    t.decimal  "on_hand_units",                        precision: 11, scale: 2
    t.decimal  "work_in_process_units",                precision: 11, scale: 2
    t.decimal  "supplier_on_order_units",              precision: 11, scale: 2
    t.decimal  "warehouse_on_order_units",             precision: 11, scale: 2
    t.decimal  "in_transit_units",                     precision: 11, scale: 2
    t.decimal  "non_sellable_units",                   precision: 11, scale: 2
    t.decimal  "allocated_units",                      precision: 11, scale: 2
    t.decimal  "reserved_units",                       precision: 11, scale: 2
    t.decimal  "shipping_units",                       precision: 11, scale: 2
    t.decimal  "requested_units",                      precision: 11, scale: 2
    t.decimal  "frozen_units",                         precision: 11, scale: 2
    t.decimal  "cost_pool",                            precision: 13, scale: 4
    t.decimal  "retail_pool",                          precision: 13, scale: 4
    t.decimal  "boy_units",                            precision: 11, scale: 2
    t.decimal  "boy_cost",                             precision: 13, scale: 4
    t.decimal  "boy_retail",                           precision: 13, scale: 4
    t.decimal  "last_inventory_units",                 precision: 11, scale: 2
    t.decimal  "last_inventory_cost",                  precision: 13, scale: 4
    t.decimal  "last_inventory_retail",                precision: 13, scale: 4
    t.decimal  "sale_units_ytd",                       precision: 11, scale: 2
    t.decimal  "sale_units_py1",                       precision: 11, scale: 2
    t.decimal  "sale_units_py2",                       precision: 11, scale: 2
    t.decimal  "sale_units_py3",                       precision: 11, scale: 2
    t.decimal  "sale_retail_ytd",                      precision: 11, scale: 2
    t.decimal  "sale_retail_py1",                      precision: 11, scale: 2
    t.decimal  "sale_retail_py2",                      precision: 11, scale: 2
    t.decimal  "sale_retail_py3",                      precision: 11, scale: 2
    t.decimal  "sale_cost_ytd",                        precision: 11, scale: 2
    t.decimal  "sale_cost_py1",                        precision: 11, scale: 2
    t.decimal  "sale_cost_py2",                        precision: 11, scale: 2
    t.decimal  "sale_cost_py3",                        precision: 11, scale: 2
    t.datetime "reserve_end_date"
    t.datetime "first_receipt_date"
    t.datetime "last_receipt_date"
    t.datetime "first_sale_date"
    t.datetime "last_sale_date"
    t.datetime "last_inventory_date"
    t.string   "replenishment_method",     limit: 200
    t.string   "replenishment_source",     limit: 200
    t.integer  "safety_stock_units"
    t.integer  "safety_stock_days"
    t.decimal  "smoothing_factor",                     precision: 11, scale: 2
    t.integer  "minimum_units"
    t.integer  "maximum_units"
    t.decimal  "forecast",                             precision: 11, scale: 2
    t.string   "velocity_code",            limit: 200
    t.decimal  "standard_deviation",                   precision: 11, scale: 2
    t.boolean  "is_authorized"
    t.boolean  "is_taxable"
    t.boolean  "is_special_order"
    t.boolean  "is_discontinued"
    t.boolean  "is_destroyed"
  end

  add_index "inventories", ["inventory_id"], name: "index_inventories_on_inventory_id", unique: true, using: :btree
  add_index "inventories", ["location_id"], name: "index_inventories_on_location_id", using: :btree
  add_index "inventories", ["sku_id"], name: "index_inventories_on_sku_id", using: :btree

  create_table "inventory", id: false, force: true do |t|
    t.integer "outlet_nbr",           null: false
    t.integer "stock_nbr"
    t.string  "size",       limit: 3
    t.integer "qoh"
    t.integer "drop_ship"
    t.integer "id"
  end

  create_table "jobs", id: false, force: true do |t|
    t.string   "job_id",                 limit: 32,                           null: false
    t.string   "display",                limit: 300
    t.string   "jobable_id",             limit: 32
    t.string   "jobable_type",           limit: 200
    t.string   "job_nbr",                limit: 200
    t.string   "sku_id",                 limit: 32
    t.string   "production_location_id", limit: 32
    t.string   "supplier_id",            limit: 32
    t.string   "job_description",        limit: 300
    t.string   "job_type",               limit: 200
    t.datetime "release_date"
    t.datetime "start_date"
    t.datetime "complete_date"
    t.datetime "target_complete_date"
    t.integer  "request_units"
    t.integer  "complete_units"
    t.boolean  "is_cancelled"
    t.string   "state",                  limit: 200
    t.decimal  "weight",                             precision: 11, scale: 2
    t.decimal  "height",                             precision: 11, scale: 2
    t.decimal  "bust",                               precision: 11, scale: 2
    t.decimal  "waist",                              precision: 11, scale: 2
    t.decimal  "high_hip",                           precision: 11, scale: 2
    t.decimal  "hip",                                precision: 11, scale: 2
    t.decimal  "across_shoulder_front",              precision: 11, scale: 2
    t.decimal  "across_shoulder_back",               precision: 11, scale: 2
    t.decimal  "shoulder_length",                    precision: 11, scale: 2
    t.decimal  "back_length",                        precision: 11, scale: 2
    t.decimal  "hps_to_waist",                       precision: 11, scale: 2
    t.decimal  "neck_circumference",                 precision: 11, scale: 2
    t.decimal  "arm_circumference",                  precision: 11, scale: 2
    t.decimal  "wrist_circumference",                precision: 11, scale: 2
    t.decimal  "inseam",                             precision: 11, scale: 2
    t.decimal  "outseam",                            precision: 11, scale: 2
    t.decimal  "thigh",                              precision: 11, scale: 2
    t.decimal  "arm_length",                         precision: 11, scale: 2
    t.decimal  "total_rise",                         precision: 11, scale: 2
    t.decimal  "head_circumference",                 precision: 11, scale: 2
    t.boolean  "is_destroyed"
  end

  add_index "jobs", ["job_id"], name: "index_jobs_on_job_id", unique: true, using: :btree

  create_table "labels", id: false, force: true do |t|
    t.string  "label_id",     limit: 32,  null: false
    t.string  "display",      limit: 200, null: false
    t.string  "description",  limit: 300
    t.string  "label_type",   limit: 200
    t.string  "short_name",   limit: 15
    t.boolean "is_destroyed"
  end

  create_table "location_tax_authorities", id: false, force: true do |t|
    t.string  "location_tax_authority_id", limit: 32,  null: false
    t.string  "display",                   limit: 300, null: false
    t.string  "location_id",               limit: 32
    t.string  "tax_authority_id",          limit: 32
    t.boolean "is_destroyed"
  end

  create_table "location_tax_holidays", id: false, force: true do |t|
    t.string   "location_tax_holiday_id", limit: 32,                           null: false
    t.string   "display",                 limit: 300
    t.string   "location_id",             limit: 32
    t.string   "short_name",              limit: 15
    t.datetime "effective_date"
    t.datetime "end_date"
    t.string   "description",             limit: 300
    t.boolean  "is_tax_holiday"
    t.decimal  "price_cutoff",                        precision: 11, scale: 2
    t.boolean  "is_destroyed"
  end

  create_table "location_users", id: false, force: true do |t|
    t.string  "location_user_id",       limit: 32,  null: false
    t.string  "display",                limit: 300
    t.string  "user_id",                limit: 32
    t.string  "location_id",            limit: 32
    t.boolean "is_manager"
    t.boolean "is_cashier"
    t.boolean "is_sales"
    t.boolean "is_back_office"
    t.string  "short_password",         limit: 10
    t.boolean "is_destroyed"
    t.boolean "is_purchase_approver_1"
    t.boolean "is_purchase_approver_2"
    t.boolean "is_purchase_approver_3"
  end

  create_table "locations", id: false, force: true do |t|
    t.string   "location_id",                  limit: 32,  null: false
    t.string   "display",                      limit: 200, null: false
    t.string   "description",                  limit: 300
    t.string   "short_name",                   limit: 200
    t.string   "location_nbr",                 limit: 200
    t.string   "location_brand",               limit: 200
    t.string   "line_1",                       limit: 200
    t.string   "line_2",                       limit: 200
    t.string   "line_3",                       limit: 200
    t.string   "line_4",                       limit: 200
    t.string   "city",                         limit: 200
    t.string   "state_code",                   limit: 2
    t.string   "zip",                          limit: 10
    t.string   "country",                      limit: 200
    t.string   "latitude",                     limit: 15
    t.string   "longitude",                    limit: 15
    t.string   "phone",                        limit: 200
    t.string   "fax",                          limit: 200
    t.boolean  "is_owned"
    t.boolean  "is_store"
    t.boolean  "is_temporary_store"
    t.boolean  "is_webstore"
    t.boolean  "is_factory"
    t.boolean  "is_warehouse"
    t.datetime "open_date"
    t.datetime "close_date"
    t.string   "parent_location_id",           limit: 32
    t.string   "district_id",                  limit: 32
    t.string   "price_book_id",                limit: 32
    t.string   "promo_price_book_id",          limit: 32
    t.integer  "selling_square_feet"
    t.integer  "storage_square_feet"
    t.string   "location_url",                 limit: 200
    t.boolean  "is_enabled"
    t.string   "time_zone",                    limit: 200
    t.string   "sunday_open_time",             limit: 200
    t.string   "sunday_close_time",            limit: 200
    t.string   "monday_open_time",             limit: 200
    t.string   "monday_close_time",            limit: 200
    t.string   "tuesday_open_time",            limit: 200
    t.string   "tuesday_close_time",           limit: 200
    t.string   "wednesday_open_time",          limit: 200
    t.string   "wednesday_close_time",         limit: 200
    t.string   "thursday_open_time",           limit: 200
    t.string   "thursday_close_time",          limit: 200
    t.string   "friday_open_time",             limit: 200
    t.string   "friday_close_time",            limit: 200
    t.string   "saturday_open_time",           limit: 200
    t.string   "saturday_close_time",          limit: 200
    t.string   "merchant_identifier",          limit: 15
    t.string   "merchant_name",                limit: 200
    t.string   "merchant_time_zone",           limit: 200
    t.string   "merchant_location",            limit: 200
    t.string   "merchant_sic",                 limit: 200
    t.string   "merchant_industry",            limit: 15
    t.string   "merchant_acquirer_bin",        limit: 200
    t.string   "merchant_agent",               limit: 200
    t.string   "merchant_chain",               limit: 200
    t.string   "merchant_store",               limit: 200
    t.string   "merchant_terminal",            limit: 200
    t.string   "merchant_v_number",            limit: 15
    t.string   "merchant_pri_auth_phone",      limit: 15
    t.string   "merchant_sec_auth_phone",      limit: 15
    t.string   "merchant_pri_settle_phone",    limit: 15
    t.string   "merchant_sec_settle_phone",    limit: 15
    t.string   "merchant_amex_identifier",     limit: 15
    t.string   "merchant_discover_identifier", limit: 15
    t.string   "merchant_diners_identifier",   limit: 15
    t.string   "merchant_sharing_groups",      limit: 15
    t.string   "merchant_reimbursement",       limit: 2
    t.string   "merchant_settle_agent",        limit: 200
    t.string   "merchant_bank_aba",            limit: 15
    t.boolean  "is_destroyed"
  end

  add_index "locations", ["location_id"], name: "index_locations_on_location_id", unique: true, using: :btree

  create_table "lookups", id: false, force: true do |t|
    t.string   "lookup_id",        limit: 32,                  null: false
    t.string   "code",             limit: 100,                 null: false
    t.string   "category",         limit: 100,                 null: false
    t.string   "default_text",     limit: 100,                 null: false
    t.integer  "position",                     default: 0,     null: false
    t.boolean  "is_enabled",                   default: true,  null: false
    t.boolean  "is_destroyed",                 default: false, null: false
    t.integer  "revision_number",              default: 0,     null: false
    t.integer  "code_int"
    t.string   "depends_on",       limit: 200
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "lookups", ["category", "is_enabled", "is_destroyed"], name: "lookup_enabled", using: :btree
  add_index "lookups", ["lookup_id", "is_destroyed"], name: "index_lookups_on_lookup_id_and_is_destroyed", using: :btree
  add_index "lookups", ["lookup_id"], name: "index_lookups_on_lookup_id", unique: true, using: :btree

  create_table "lookups_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "lookups_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "mark_wip", id: false, force: true do |t|
    t.integer "id",         null: false
    t.integer "outlet_nbr"
    t.integer "stock_nbr"
    t.string  "size"
    t.integer "cut_wip"
    t.integer "plant_wip"
    t.integer "cont_wip"
    t.integer "status_id"
  end

  create_table "modules", id: false, force: true do |t|
    t.string   "module_code",      limit: 32,                  null: false
    t.string   "description",      limit: 200,                 null: false
    t.boolean  "is_enabled",                   default: true,  null: false
    t.boolean  "is_destroyed",                 default: false, null: false
    t.integer  "revision_number",              default: 0,     null: false
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "modules", ["module_code", "is_destroyed"], name: "avail_modules", using: :btree
  add_index "modules", ["module_code"], name: "index_modules_on_module_code", unique: true, using: :btree

  create_table "modules_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "modules_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "notes", id: false, force: true do |t|
    t.string   "note_id",          limit: 32,                  null: false
    t.string   "notable_type",     limit: 100,                 null: false
    t.string   "notable_id",       limit: 32,                  null: false
    t.text     "detail",                                       null: false
    t.string   "category",         limit: 40
    t.boolean  "is_internal",                  default: false, null: false
    t.boolean  "is_destroyed",                 default: false, null: false
    t.integer  "revision_number",              default: 0,     null: false
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "notes", ["note_id"], name: "index_notes_on_note_id", unique: true, using: :btree

  create_table "notes_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "notes_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "order_details", id: false, force: true do |t|
    t.string   "order_detail_id",           limit: 32,                           null: false
    t.string   "display",                   limit: 300
    t.string   "order_id",                  limit: 32
    t.string   "order_detail_nbr",          limit: 200
    t.string   "sku_id",                    limit: 32
    t.string   "sku_alias_id",              limit: 32
    t.string   "delivery_method",           limit: 200
    t.string   "pickup_location_id",        limit: 32
    t.string   "ship_to_name",              limit: 200
    t.string   "ship_line_1",               limit: 200
    t.string   "ship_line_2",               limit: 200
    t.string   "ship_line_3",               limit: 200
    t.string   "ship_line_4",               limit: 200
    t.string   "ship_city",                 limit: 200
    t.string   "ship_state_code",           limit: 2
    t.string   "ship_zip",                  limit: 10
    t.string   "ship_country",              limit: 200
    t.string   "ship_latitude",             limit: 15
    t.string   "ship_longitude",            limit: 15
    t.boolean  "is_residential"
    t.boolean  "is_commercial"
    t.string   "phone",                     limit: 200
    t.string   "email_address",             limit: 200
    t.string   "account_id",                limit: 32
    t.string   "grade_id",                  limit: 32
    t.string   "gender",                    limit: 200
    t.string   "sales_user_id",             limit: 32
    t.datetime "promised_date"
    t.string   "state",                     limit: 200
    t.string   "serial_number",             limit: 200
    t.decimal  "order_units",                           precision: 11, scale: 2
    t.decimal  "retail_price",                          precision: 11, scale: 2
    t.decimal  "sale_price",                            precision: 11, scale: 2
    t.decimal  "sales_tax_rate",                        precision: 13, scale: 4
    t.string   "price_type",                limit: 200
    t.boolean  "is_taxable_product"
    t.boolean  "is_tax_charged"
    t.decimal  "shipping_amount",                       precision: 11, scale: 2
    t.decimal  "discount_percent",                      precision: 13, scale: 4
    t.decimal  "discount_amount",                       precision: 11, scale: 2
    t.string   "customer_discount_reason",  limit: 200
    t.string   "customer_return_reason",    limit: 200
    t.string   "customer_cancel_reason",    limit: 200
    t.datetime "cancel_date"
    t.string   "reference_order_detail_id", limit: 32
    t.boolean  "is_cancelled"
    t.boolean  "is_layaway"
    t.boolean  "is_destroyed"
  end

  add_index "order_details", ["order_detail_id"], name: "index_order_details_on_order_detail_id", unique: true, using: :btree

  create_table "orders", id: false, force: true do |t|
    t.string   "order_id",                limit: 32,                           null: false
    t.string   "display",                 limit: 300
    t.string   "location_id",             limit: 32
    t.string   "terminal_id",             limit: 32
    t.string   "order_nbr",               limit: 200
    t.string   "customer_id",             limit: 32
    t.datetime "order_start_date"
    t.datetime "order_date"
    t.datetime "price_lookup_date"
    t.string   "user_id",                 limit: 32
    t.string   "order_source",            limit: 200
    t.boolean  "is_tax_exempt_date"
    t.boolean  "is_tax_exempt_customer"
    t.boolean  "is_trade_discount_order"
    t.decimal  "order_total",                         precision: 11, scale: 2
    t.string   "state",                   limit: 200
    t.boolean  "is_destroyed"
  end

  add_index "orders", ["order_id"], name: "index_orders_on_order_id", unique: true, using: :btree

  create_table "orders_hd", id: false, force: true do |t|
    t.integer  "order_nbr",                                              null: false
    t.integer  "outlet_nbr",                                             null: false
    t.integer  "school_nbr",                                             null: false
    t.integer  "status",                                                 null: false
    t.integer  "priority"
    t.datetime "date_putin",                                             null: false
    t.integer  "custid",                                                 null: false
    t.datetime "date_ship"
    t.string   "fill_partial",       limit: 1
    t.integer  "nbr_ships"
    t.decimal  "discount",                       precision: 5, scale: 2
    t.string   "entered_by",         limit: 8,                           null: false
    t.integer  "is_percentage"
    t.datetime "close_date"
    t.integer  "closing_id",                                             null: false
    t.integer  "is_closed",                                              null: false
    t.decimal  "postage",                        precision: 5, scale: 2
    t.decimal  "tax",                            precision: 5, scale: 2
    t.string   "comment",            limit: 250
    t.string   "viewed_by",          limit: 8
    t.datetime "viewed_date"
    t.integer  "dbman_order_nbr"
    t.integer  "allow_partial_fill",                                     null: false
    t.datetime "date_auto_fill_run"
    t.string   "temp_order_nbr",     limit: 17
    t.decimal  "total",                          precision: 8, scale: 2
    t.integer  "web_order"
  end

  add_index "orders_hd", ["order_nbr"], name: "index_orders_hd_on_order_nbr", unique: true, using: :btree

  create_table "orders_li", id: false, force: true do |t|
    t.integer "lineitemid",                                               null: false
    t.integer "order_nbr",                                                null: false
    t.integer "stock_nbr",                                                null: false
    t.string  "size",                 limit: 3,                           null: false
    t.decimal "price",                            precision: 7, scale: 2
    t.decimal "cost",                             precision: 7, scale: 2, null: false
    t.integer "qty_ordered"
    t.integer "qty_shipped"
    t.integer "status"
    t.string  "comments",             limit: 50
    t.decimal "discount",                         precision: 7, scale: 2
    t.integer "is_percentage"
    t.decimal "extra_charge",                     precision: 7, scale: 2
    t.integer "extra_charge_type",                                        null: false
    t.string  "extra_charge_comment", limit: 150
  end

  add_index "orders_li", ["order_nbr"], name: "index_orders_li_on_order_nbr", using: :btree

  create_table "payments", id: false, force: true do |t|
    t.string   "payment_id",                  limit: 32,                           null: false
    t.string   "display",                     limit: 300
    t.string   "payment_nbr",                 limit: 200
    t.string   "order_id",                    limit: 32
    t.string   "customer_id",                 limit: 32
    t.string   "terminal_id",                 limit: 32
    t.string   "location_id",                 limit: 32
    t.string   "tender_id",                   limit: 32
    t.string   "voucher_id",                  limit: 32
    t.datetime "payment_date"
    t.decimal  "payment_amount",                          precision: 11, scale: 2
    t.decimal  "layaway_deposit_amount",                  precision: 11, scale: 2
    t.string   "account_holder",              limit: 200
    t.string   "account_number",              limit: 200
    t.datetime "expiration_date"
    t.string   "ccv_code",                    limit: 200
    t.string   "serial_number",               limit: 200
    t.integer  "routing_number"
    t.string   "state_code",                  limit: 2
    t.string   "license_number",              limit: 15
    t.datetime "birth_date"
    t.boolean  "is_prior_authorized_capture"
    t.string   "payment_authorization_code",  limit: 15
    t.string   "avs_response",                limit: 15
    t.string   "state",                       limit: 200
    t.boolean  "is_destroyed"
  end

  add_index "payments", ["payment_id"], name: "index_payments_on_payment_id", unique: true, using: :btree

  create_table "period_results", id: false, force: true do |t|
    t.string  "period_result_id",           limit: 32,                           null: false
    t.string  "display",                    limit: 300
    t.string  "sku_id",                     limit: 32
    t.string  "location_id",                limit: 32
    t.string  "period_id",                  limit: 32
    t.decimal "adjusted_cost",                          precision: 11, scale: 2
    t.decimal "adjusted_retail",                        precision: 11, scale: 2
    t.decimal "adjusted_units",                         precision: 11, scale: 2
    t.decimal "backorder_cost",                         precision: 11, scale: 2
    t.decimal "backorder_retail",                       precision: 11, scale: 2
    t.decimal "backorder_units",                        precision: 11, scale: 2
    t.decimal "clearance_sale_cost",                    precision: 11, scale: 2
    t.decimal "clearance_sale_retail",                  precision: 11, scale: 2
    t.decimal "clearance_sale_units",                   precision: 11, scale: 2
    t.decimal "consumed_cost",                          precision: 11, scale: 2
    t.decimal "consumed_retail",                        precision: 11, scale: 2
    t.decimal "consumed_units",                         precision: 11, scale: 2
    t.decimal "net_inventory_cost",                     precision: 11, scale: 2
    t.decimal "net_inventory_retail",                   precision: 11, scale: 2
    t.decimal "net_inventory_units",                    precision: 11, scale: 2
    t.decimal "net_sale_cost",                          precision: 11, scale: 2
    t.decimal "net_sale_retail",                        precision: 11, scale: 2
    t.decimal "net_sale_units",                         precision: 11, scale: 2
    t.decimal "produced_cost",                          precision: 11, scale: 2
    t.decimal "produced_retail",                        precision: 11, scale: 2
    t.decimal "produced_units",                         precision: 11, scale: 2
    t.decimal "promo_sale_cost",                        precision: 11, scale: 2
    t.decimal "promo_sale_retail",                      precision: 11, scale: 2
    t.decimal "promo_sale_units",                       precision: 11, scale: 2
    t.decimal "purchased_cost",                         precision: 11, scale: 2
    t.decimal "purchased_retail",                       precision: 11, scale: 2
    t.decimal "purchased_units",                        precision: 11, scale: 2
    t.decimal "received_cost",                          precision: 11, scale: 2
    t.decimal "received_retail",                        precision: 11, scale: 2
    t.decimal "received_units",                         precision: 11, scale: 2
    t.decimal "requested_cost",                         precision: 11, scale: 2
    t.decimal "requested_retail",                       precision: 11, scale: 2
    t.decimal "requested_units",                        precision: 11, scale: 2
    t.decimal "return_sale_cost",                       precision: 11, scale: 2
    t.decimal "return_sale_retail",                     precision: 11, scale: 2
    t.decimal "return_sale_units",                      precision: 11, scale: 2
    t.decimal "shipped_cost",                           precision: 11, scale: 2
    t.decimal "shipped_retail",                         precision: 11, scale: 2
    t.decimal "shipped_units",                          precision: 11, scale: 2
    t.decimal "work_in_process_cost",                   precision: 11, scale: 2
    t.decimal "work_in_process_retail",                 precision: 11, scale: 2
    t.decimal "work_in_process_units",                  precision: 11, scale: 2
    t.decimal "professional_discount_cost",             precision: 11, scale: 2
    t.decimal "employee_discount_cost",                 precision: 11, scale: 2
    t.decimal "manager_discount_cost",                  precision: 11, scale: 2
    t.decimal "ending_inventory_cost",                  precision: 11, scale: 2
    t.decimal "ending_inventory_retail",                precision: 11, scale: 2
    t.decimal "ending_inventory_units",                 precision: 11, scale: 2
    t.boolean "is_destroyed"
  end

  add_index "period_results", ["location_id"], name: "index_period_results_on_location_id", using: :btree
  add_index "period_results", ["period_result_id"], name: "index_period_results_on_period_result_id", unique: true, using: :btree
  add_index "period_results", ["sku_id"], name: "index_period_results_on_sku_id", using: :btree

  create_table "periods", id: false, force: true do |t|
    t.string   "period_id",     limit: 32,  null: false
    t.string   "display",       limit: 200
    t.datetime "start_date"
    t.datetime "end_date"
    t.string   "year_number",   limit: 4
    t.string   "period_number", limit: 2
    t.boolean  "is_destroyed"
  end

  create_table "permissions", id: false, force: true do |t|
    t.string  "permission_id",   limit: 32,                 null: false
    t.string  "role_id",         limit: 32,                 null: false
    t.string  "privilege_id",    limit: 32,                 null: false
    t.boolean "is_enabled",                 default: true,  null: false
    t.boolean "is_destroyed",               default: false, null: false
    t.integer "revision_number",            default: 0,     null: false
  end

  add_index "permissions", ["permission_id"], name: "index_permissions_on_permission_id", unique: true, using: :btree
  add_index "permissions", ["role_id", "is_destroyed"], name: "index_permissions_on_role_id_and_is_destroyed", using: :btree

  create_table "picks", id: false, force: true do |t|
    t.string   "pick_id",                 limit: 32,  null: false
    t.string   "display",                 limit: 300
    t.string   "state",                   limit: 200
    t.string   "pick_nbr",                limit: 200
    t.string   "pickable_id",             limit: 32
    t.string   "pickable_type",           limit: 200
    t.string   "fulfillment_location_id", limit: 32
    t.string   "job_id",                  limit: 32
    t.integer  "request_units"
    t.integer  "complete_units"
    t.datetime "release_date"
    t.datetime "start_date"
    t.datetime "complete_date"
    t.datetime "ship_date"
    t.boolean  "is_destroyed"
  end

  add_index "picks", ["pick_id"], name: "index_picks_on_pick_id", unique: true, using: :btree

  create_table "price_books", id: false, force: true do |t|
    t.string  "price_book_id",   limit: 32,  null: false
    t.string  "display",         limit: 200, null: false
    t.string  "description",     limit: 300
    t.string  "price_book_type", limit: 200
    t.string  "short_name",      limit: 15
    t.boolean "is_destroyed"
  end

  create_table "price_changes", id: false, force: true do |t|
    t.string  "price_change_id", limit: 32,  null: false
    t.string  "display",         limit: 300, null: false
    t.boolean "is_destroyed"
  end

  create_table "privileges", id: false, force: true do |t|
    t.string  "privilege_code",  limit: 100,                 null: false
    t.string  "module_code",     limit: 40,                  null: false
    t.string  "description",     limit: 200,                 null: false
    t.boolean "is_enabled",                  default: true,  null: false
    t.boolean "is_destroyed",                default: false, null: false
    t.integer "revision_number",             default: 0,     null: false
    t.string  "privilege_id",    limit: 32,                  null: false
    t.string  "model_name",      limit: 200
    t.string  "assoc_name",      limit: 200
    t.boolean "op_create",                   default: false, null: false
    t.boolean "op_read",                     default: false, null: false
    t.boolean "op_update",                   default: false, null: false
    t.boolean "op_delete",                   default: false, null: false
    t.boolean "op_custom",                   default: false, null: false
  end

  add_index "privileges", ["privilege_code"], name: "index_privileges_on_privilege_code", unique: true, using: :btree

  create_table "product_types", id: false, force: true do |t|
    t.string  "product_type_id", limit: 32,  null: false
    t.string  "display",         limit: 200, null: false
    t.string  "description",     limit: 300
    t.string  "short_name",      limit: 15
    t.boolean "is_fabric"
    t.boolean "is_trim"
    t.boolean "is_converted"
    t.boolean "is_labor"
    t.boolean "is_shipping"
    t.boolean "is_destroyed"
  end

  create_table "products", id: false, force: true do |t|
    t.string  "display",      limit: 200, null: false
    t.string  "product_nbr",  limit: 200
    t.string  "description",  limit: 300
    t.string  "category_id",  limit: 32
    t.boolean "is_destroyed"
    t.string  "product_id",   limit: 32
  end

  create_table "projection_details", id: false, force: true do |t|
    t.string   "projection_detail_id",   limit: 32,                           null: false
    t.string   "projection_detail_nbr",  limit: 200
    t.string   "projection_id",          limit: 32
    t.string   "projection_location_id", limit: 32
    t.string   "forecast_profile_id",    limit: 32
    t.string   "inventory_id",           limit: 32
    t.string   "sku_id",                 limit: 32
    t.string   "location_id",            limit: 32
    t.string   "display",                limit: 200
    t.string   "state",                  limit: 200
    t.integer  "first_forecast_units"
    t.integer  "last_forecast_units"
    t.integer  "current_approved_units"
    t.datetime "last_forecast_date"
    t.integer  "projection_1_units"
    t.integer  "projection_2_units"
    t.integer  "projection_3_units"
    t.integer  "projection_4_units"
    t.integer  "sale_units_ytd"
    t.integer  "sale_units_py1"
    t.integer  "sale_units_py2"
    t.integer  "sale_units_py3"
    t.decimal  "on_hand",                            precision: 11, scale: 2
    t.decimal  "on_order",                           precision: 11, scale: 2
    t.decimal  "sd_raw",                             precision: 11, scale: 2
    t.decimal  "sd_floor",                           precision: 11, scale: 2
    t.decimal  "sd_ceiling",                         precision: 11, scale: 2
    t.decimal  "sd_smooth",                          precision: 11, scale: 2
    t.decimal  "sd_percent",                         precision: 11, scale: 2
    t.decimal  "coverage_allowed",                   precision: 11, scale: 2
    t.decimal  "coverage_complete",                  precision: 11, scale: 2
    t.decimal  "custom_need",                        precision: 11, scale: 2
    t.decimal  "generic_need",                       precision: 11, scale: 2
    t.decimal  "total_need",                         precision: 11, scale: 2
    t.decimal  "usable",                             precision: 11, scale: 2
    t.decimal  "unusable",                           precision: 11, scale: 2
    t.decimal  "average_sales",                      precision: 11, scale: 2
    t.decimal  "standard_deviation",                 precision: 11, scale: 2
    t.boolean  "is_destroyed"
    t.string   "audit_created_by",       limit: 200
    t.string   "audit_updated_by",       limit: 200
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "projection_details", ["projection_detail_id"], name: "index_projection_details_on_projection_detail_id", unique: true, using: :btree

  create_table "projection_locations", id: false, force: true do |t|
    t.string   "projection_location_id", limit: 32,  null: false
    t.string   "projection_id",          limit: 32
    t.string   "location_id",            limit: 32
    t.string   "display",                limit: 200
    t.datetime "approval_date"
    t.string   "state",                  limit: 200
    t.boolean  "is_destroyed"
  end

  add_index "projection_locations", ["projection_location_id"], name: "index_projection_locations_on_projection_location_id", unique: true, using: :btree

  create_table "projection_reasons", id: false, force: true do |t|
    t.string  "projection_reason_id", limit: 32,  null: false
    t.string  "display",              limit: 200, null: false
    t.string  "description",          limit: 300
    t.string  "short_name",           limit: 15
    t.boolean "is_destroyed"
  end

  create_table "projections", id: false, force: true do |t|
    t.string "projection_id",          limit: 32,  null: false
    t.string "forecast_profile_id",    limit: 32
    t.string "department_id",          limit: 32
    t.string "projection_closer_id",   limit: 32
    t.string "projection_approver_id", limit: 32
    t.string "projection_type",        limit: 32
    t.string "plan_year",              limit: 32
    t.string "state",                  limit: 200
    t.string "display",                limit: 300
    t.string "description",            limit: 300
    t.string "approval_3_date"
    t.string "approval_4_date"
    t.string "version",                limit: 200
    t.string "audit_updated_at"
    t.string "audit_created_at"
    t.string "audit_created_by",       limit: 200
    t.string "audit_updated_by",       limit: 200
    t.string "is_destroyed"
  end

  add_index "projections", ["projection_id"], name: "index_projections_on_projection_id", unique: true, using: :btree

  create_table "projects", id: false, force: true do |t|
    t.string   "project_id",       limit: 32,                                          null: false
    t.string   "project_nbr",      limit: 200
    t.string   "project_type",     limit: 200
    t.string   "state",            limit: 200
    t.string   "display",          limit: 200
    t.string   "description",      limit: 2000
    t.datetime "release_date"
    t.decimal  "estimated_days",                precision: 11, scale: 4, default: 0.0
    t.decimal  "actual_days",                   precision: 11, scale: 4, default: 0.0
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "projects", ["project_id"], name: "index_projects_on_project_id", unique: true, using: :btree

  create_table "projects_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "projects_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "purchase_allocations", id: false, force: true do |t|
    t.string  "purchase_allocation_id",  limit: 32,                           null: false
    t.string  "purchase_detail_id",      limit: 32
    t.string  "allocation_id",           limit: 32
    t.string  "location_id",             limit: 32
    t.string  "display",                 limit: 200
    t.string  "purchase_allocation_nbr", limit: 200
    t.string  "state",                   limit: 200
    t.decimal "units_needed",                        precision: 11, scale: 2
    t.decimal "units_allocated",                     precision: 11, scale: 2
    t.decimal "units_shipped",                       precision: 11, scale: 2
    t.boolean "is_destroyed"
  end

  add_index "purchase_allocations", ["purchase_allocation_id"], name: "index_purchase_allocations_on_purchase_allocation_id", unique: true, using: :btree

  create_table "purchase_details", id: false, force: true do |t|
    t.string  "purchase_detail_id",       limit: 32,                            null: false
    t.string  "display",                  limit: 300
    t.string  "purchase_id",              limit: 32
    t.string  "purchase_detail_nbr",      limit: 200
    t.string  "state",                    limit: 200
    t.string  "sku_id",                   limit: 32
    t.string  "sku_supplier_id",          limit: 32
    t.string  "supplier_item_identifier", limit: 200
    t.string  "description",              limit: 2000
    t.string  "color_name",               limit: 200
    t.string  "size_name",                limit: 200
    t.string  "sku_alias",                limit: 200
    t.string  "allocation_profile_id",    limit: 32
    t.string  "order_multiple_type",      limit: 200
    t.string  "order_pack_type",          limit: 200
    t.decimal "units_ordered",                         precision: 11, scale: 2
    t.decimal "order_pack_size",                       precision: 11, scale: 2
    t.decimal "order_cost_units",                      precision: 11, scale: 2
    t.decimal "order_multiple",                        precision: 11, scale: 2
    t.decimal "selling_units_approved",                precision: 11, scale: 2
    t.decimal "selling_units_cancelled",               precision: 11, scale: 2
    t.decimal "selling_units_received",                precision: 11, scale: 2
    t.decimal "supplier_cost",                         precision: 13, scale: 4
    t.decimal "invoice_cost",                          precision: 13, scale: 4
    t.decimal "inventory_cost",                        precision: 13, scale: 4
    t.decimal "extra_cost",                            precision: 13, scale: 4
    t.boolean "is_destroyed"
  end

  add_index "purchase_details", ["purchase_detail_id"], name: "index_purchase_details_on_purchase_detail_id", unique: true, using: :btree

  create_table "purchases", id: false, force: true do |t|
    t.string   "purchase_id",                          limit: 32,                           null: false
    t.string   "display",                              limit: 300,                          null: false
    t.string   "purchase_nbr",                         limit: 200
    t.string   "supplier_id",                          limit: 32
    t.string   "location_id",                          limit: 32
    t.string   "purchase_type",                        limit: 32
    t.string   "purchase_source",                      limit: 32
    t.string   "state",                                limit: 200
    t.datetime "order_date"
    t.string   "allocation_profile_id",                limit: 32
    t.string   "ordered_by_user_id",                   limit: 32
    t.datetime "ship_date"
    t.datetime "delivery_date"
    t.datetime "cancel_not_shipped_by_date"
    t.datetime "cancel_not_received_by_date"
    t.datetime "approval_1_date"
    t.datetime "approval_2_date"
    t.datetime "approval_3_date"
    t.datetime "first_receipt_date"
    t.datetime "cancelled_date"
    t.string   "payment_term",                         limit: 200
    t.string   "freight_term",                         limit: 200
    t.string   "ship_via",                             limit: 200
    t.string   "fob_point",                            limit: 200
    t.boolean  "is_phone_order"
    t.string   "confirmed_by_user_id",                 limit: 32
    t.string   "master_purchase_id",                   limit: 32
    t.string   "carrier_supplier_id",                  limit: 32
    t.boolean  "is_special_order"
    t.boolean  "is_ship_cancel"
    t.integer  "estimated_lead_time_days",             limit: 3
    t.string   "purchase_approver_1_user_id",          limit: 32
    t.string   "purchase_approver_2_user_id",          limit: 32
    t.string   "purchase_approver_3_user_id",          limit: 32
    t.datetime "last_receipt_date"
    t.string   "pay_to_supplier_id",                   limit: 32
    t.string   "ship_thru_supplier_id",                limit: 32
    t.string   "supplier_address_1",                   limit: 200
    t.string   "supplier_address_2",                   limit: 200
    t.string   "supplier_address_3",                   limit: 200
    t.string   "supplier_address_4",                   limit: 200
    t.string   "supplier_city",                        limit: 200
    t.string   "supplier_state_code",                  limit: 200
    t.string   "supplier_zip",                         limit: 200
    t.string   "supplier_country",                     limit: 200
    t.string   "purchase_approver_1_location_user_id", limit: 32
    t.string   "purchase_approver_2_location_user_id", limit: 32
    t.string   "purchase_approver_3_location_user_id", limit: 32
    t.string   "department_id",                        limit: 32
    t.string   "classification_id",                    limit: 32
    t.string   "subclass_id",                          limit: 32
    t.string   "style_id",                             limit: 32
    t.decimal  "adjustment_percent",                               precision: 13, scale: 4
    t.string   "mass_update_type",                     limit: 200
    t.boolean  "is_update_all_details"
    t.boolean  "is_update_blank_details"
    t.boolean  "is_include_conversions"
    t.boolean  "is_use_need_units"
    t.string   "audit_created_by",                     limit: 200
    t.string   "audit_updated_by",                     limit: 200
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
    t.boolean  "is_destroyed"
  end

  add_index "purchases", ["purchase_id"], name: "index_purchases_on_purchase_id", unique: true, using: :btree

  create_table "purchases_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "purchases_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "receipt_allocations", id: false, force: true do |t|
    t.string  "receipt_allocation_id",  limit: 32,                           null: false
    t.string  "receipt_allocation_nbr", limit: 200
    t.string  "receipt_detail_id",      limit: 32
    t.string  "location_id",            limit: 32
    t.string  "display",                limit: 300
    t.string  "state",                  limit: 300
    t.decimal "units_needed",                       precision: 11, scale: 2
    t.decimal "units_allocated",                    precision: 11, scale: 2
    t.decimal "units_shipped",                      precision: 11, scale: 2
    t.boolean "is_destroyed"
  end

  add_index "receipt_allocations", ["receipt_allocation_id"], name: "index_receipt_allocations_on_receipt_allocation_id", unique: true, using: :btree

  create_table "receipt_details", id: false, force: true do |t|
    t.string  "receipt_detail_id",     limit: 32,                           null: false
    t.string  "receipt_id",            limit: 32
    t.string  "receipt_line_nbr",      limit: 200
    t.string  "purchase_id",           limit: 32
    t.string  "purchase_detail_id",    limit: 32
    t.string  "allocation_profile_id", limit: 32
    t.string  "sku_id",                limit: 32
    t.string  "sku_alias",             limit: 32
    t.string  "display",               limit: 300
    t.string  "state",                 limit: 200
    t.decimal "received_units",                    precision: 11, scale: 2
    t.decimal "receipt_pack_size",                 precision: 11, scale: 2
    t.string  "receipt_pack_type",     limit: 200
    t.boolean "is_destroyed"
  end

  add_index "receipt_details", ["receipt_detail_id"], name: "index_receipt_details_on_receipt_detail_id", unique: true, using: :btree

  create_table "receipt_formats", id: false, force: true do |t|
    t.string  "receipt_format_id",               limit: 32,                            null: false
    t.string  "display",                         limit: 200,                           null: false
    t.string  "description",                     limit: 2000
    t.string  "icon_url",                        limit: 200
    t.decimal "icon_width",                                   precision: 13, scale: 4
    t.decimal "paper_width",                                  precision: 13, scale: 4
    t.string  "top_name",                        limit: 200
    t.text    "feedback_message"
    t.text    "return_policy"
    t.string  "website_message",                 limit: 200
    t.text    "promotional_message"
    t.string  "message_separator",               limit: 200
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

  add_index "receipt_formats", ["receipt_format_id"], name: "index_receipt_formats_on_receipt_format_id", unique: true, using: :btree

  create_table "receipt_purchases", id: false, force: true do |t|
    t.string  "receipt_purchase_id", limit: 32,  null: false
    t.string  "display",             limit: 300
    t.string  "receipt_id",          limit: 32
    t.string  "purchase_id",         limit: 32
    t.boolean "is_destroyed"
  end

  add_index "receipt_purchases", ["receipt_purchase_id"], name: "index_receipt_purchases_on_receipt_purchase_id", unique: true, using: :btree

  create_table "receipts", id: false, force: true do |t|
    t.string   "receipt_id",                  limit: 32,  null: false
    t.string   "allocation_profile_id",       limit: 32
    t.string   "carrier_supplier_id",         limit: 32
    t.string   "accepted_by_user_id",         limit: 32
    t.string   "completed_by_user_id",        limit: 32
    t.string   "location_id",                 limit: 32
    t.string   "display",                     limit: 300
    t.string   "state",                       limit: 300
    t.string   "receipt_nbr",                 limit: 200
    t.datetime "create_date"
    t.datetime "ship_date"
    t.datetime "appointment_date"
    t.integer  "appointment_duration"
    t.datetime "start_date"
    t.datetime "accept_date"
    t.datetime "complete_date"
    t.string   "trailer_identifier",          limit: 200
    t.string   "pro_number",                  limit: 200
    t.string   "bill_of_lading_number",       limit: 200
    t.string   "packing_slip_number",         limit: 200
    t.string   "seal_1_number",               limit: 200
    t.string   "seal_2_number",               limit: 200
    t.string   "seal_3_number",               limit: 200
    t.string   "asn_number",                  limit: 200
    t.string   "standard_carrier_alpha_code", limit: 4
    t.string   "ship_point",                  limit: 200
    t.string   "ship_via",                    limit: 200
    t.string   "freight_terms",               limit: 200
    t.string   "invoice_number",              limit: 200
    t.boolean  "is_expected_asn"
    t.boolean  "is_destroyed"
  end

  add_index "receipts", ["receipt_id"], name: "index_receipts_on_receipt_id", unique: true, using: :btree

  create_table "regions", id: false, force: true do |t|
    t.string  "region_id",    limit: 32,  null: false
    t.string  "display",      limit: 200, null: false
    t.string  "region_nbr",   limit: 200
    t.string  "description",  limit: 300
    t.string  "short_name",   limit: 15
    t.string  "company_id",   limit: 32
    t.string  "user_id",      limit: 32
    t.boolean "is_destroyed"
  end

  add_index "regions", ["region_id"], name: "index_regions_on_region_id", unique: true, using: :btree

  create_table "rms_bts", id: false, force: true do |t|
    t.integer "ItemID"
    t.string  "Style"
    t.string  "StockNbr"
    t.string  "Description"
    t.string  "Color"
    t.string  "Size"
    t.string  "Variance"
    t.string  "Supplier"
    t.integer "QOH"
    t.integer "ItemQOH"
    t.string  "ItemDescrip"
    t.integer "QOO"
    t.integer "ItemQOO"
    t.string  "SalesPrice"
    t.string  "Cost"
    t.integer "JAN_2012"
    t.integer "JAN_2013"
    t.integer "FEB_2012"
    t.integer "FEB_2013"
    t.integer "MAR_2012"
    t.integer "MAR_2013"
    t.integer "APR_2012"
    t.integer "APR_2013"
    t.integer "MAY_2012"
    t.integer "MAY_2013"
    t.integer "JUN_2012"
    t.integer "JUN_2013"
    t.integer "JUL_2012"
    t.integer "JUL_2013"
    t.integer "AUG_2012"
    t.integer "AUG_2013"
    t.integer "SEP_2012"
    t.integer "SEP_2013"
    t.integer "OCT_2012"
    t.integer "OCT_2013"
    t.integer "NOV_2012"
    t.integer "NOV_2013"
    t.integer "DEC_2012"
    t.integer "DEC_2013"
    t.integer "TOT_2010"
    t.integer "TOT_2011"
    t.integer "TOT_2012"
    t.integer "TOT_2013"
  end

  create_table "rms_item_dynamics", id: false, force: true do |t|
    t.integer "ID"
    t.integer "ItemID"
    t.integer "StoreID"
    t.integer "TaxID"
    t.integer "Quantity"
    t.integer "QuantityCommitted"
    t.integer "ReorderPoint"
    t.integer "RestockLevel"
    t.string  "LastReceived"
    t.string  "LastSold"
    t.integer "SnapShotQuantity"
    t.integer "SnapShotQuantityCommitted"
    t.string  "DeltaQuantity"
    t.string  "DeltaQuantityCommitted"
    t.string  "SnapShotTime"
    t.string  "DBTimeStamp"
    t.string  "SnapShotPrice"
    t.string  "SnapShotPriceA"
    t.string  "SnapShotPriceB"
    t.string  "SnapShotPriceC"
    t.string  "SnapShotSalePrice"
    t.string  "SnapShotSaleStartDate"
    t.string  "SnapShotSaleEndDate"
    t.string  "SnapShotCost"
    t.string  "SnapShotLastCost"
    t.integer "SnapShotReplacementCost"
    t.integer "SnapShotPriceLowerBound"
    t.integer "SnapShotPriceUpperBound"
    t.string  "SnapShotReorderPoint"
    t.string  "SnapShotRestockLevel"
    t.integer "SnapShotTaxID"
    t.string  "Price"
    t.string  "Cost"
    t.string  "PriceLevelA"
    t.string  "PriceLevelB"
    t.string  "PriceLevelC"
    t.string  "MSRP"
    t.string  "SalePrice"
    t.string  "SaleStartDate"
    t.string  "SaleEndDate"
    t.integer "LowerBound"
    t.integer "UpperBound"
    t.integer "BuydownPrice"
    t.integer "BuydownQuantity"
  end

  create_table "rms_items", id: false, force: true do |t|
    t.string  "BinLocation"
    t.integer "BuydownPrice"
    t.integer "BuydownQuantity"
    t.integer "CommissionAmount"
    t.integer "CommissionMaximum"
    t.integer "CommissionMode"
    t.integer "CommissionPercentProfit"
    t.integer "CommissionPercentSale"
    t.string  "Description"
    t.integer "FoodStampable"
    t.integer "HQID"
    t.integer "ItemNotDiscountable"
    t.string  "LastReceived"
    t.string  "LastUpdated"
    t.string  "Notes"
    t.integer "QuantityCommitted"
    t.integer "SerialNumberCount"
    t.integer "TareWeightPercent"
    t.integer "ID"
    t.string  "ItemLookupCode"
    t.integer "DepartmentID"
    t.integer "CategoryID"
    t.integer "MessageID"
    t.string  "Price"
    t.string  "PriceA"
    t.string  "PriceB"
    t.string  "PriceC"
    t.string  "SalePrice"
    t.string  "SaleStartDate"
    t.string  "SaleEndDate"
    t.integer "QuantityDiscountID"
    t.integer "TaxID"
    t.integer "ItemType"
    t.string  "Cost"
    t.integer "Quantity"
    t.integer "ReorderPoint"
    t.integer "RestockLevel"
    t.integer "TareWeight"
    t.integer "SupplierID"
    t.integer "TagAlongItem"
    t.integer "TagAlongQuantity"
    t.integer "ParentItem"
    t.integer "ParentQuantity"
    t.integer "BarcodeFormat"
    t.integer "PriceLowerBound"
    t.integer "PriceUpperBound"
    t.string  "PictureName"
    t.string  "LastSold"
    t.string  "ExtendedDescription"
    t.string  "SubDescription1"
    t.string  "SubDescription2"
    t.string  "SubDescription3"
    t.string  "UnitOfMeasure"
    t.integer "SubCategoryID"
    t.integer "QuantityEntryNotAllowed"
    t.integer "PriceMustBeEntered"
    t.string  "BlockSalesReason"
    t.integer "BlockSalesAfterDate"
    t.integer "Weight"
    t.integer "Taxable"
    t.string  "DBTimeStamp"
    t.integer "BlockSalesBeforeDate"
    t.string  "LastCost"
    t.integer "ReplacementCost"
    t.integer "WebItem"
    t.integer "BlockSalesType"
    t.integer "BlockSalesScheduleID"
    t.integer "SaleType"
    t.integer "SaleScheduleID"
    t.integer "Consignment"
    t.integer "Inactive"
    t.integer "LastCounted"
    t.integer "DoNotOrder"
    t.string  "MSRP"
    t.string  "DateCreated"
    t.string  "Content"
    t.string  "UsuallyShip"
    t.integer "NumberFormat"
    t.integer "ItemCannotBeRet"
    t.integer "ItemCannotBeSold"
    t.integer "IsAutogenerated"
    t.integer "IsGlobalvoucher"
    t.integer "DeleteZeroBalanceEntry"
    t.integer "TenderID"
  end

  create_table "roles", id: false, force: true do |t|
    t.string   "role_id",          limit: 32,                  null: false
    t.string   "role_code",        limit: 50,                  null: false
    t.string   "description",      limit: 400,                 null: false
    t.boolean  "is_enabled",                   default: true,  null: false
    t.boolean  "is_destroyed",                 default: false, null: false
    t.integer  "revision_number",              default: 0,     null: false
    t.boolean  "auto_assign",                                  null: false
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "roles", ["role_id"], name: "index_roles_on_role_id", unique: true, using: :btree

  create_table "roles_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "roles_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "rules", id: false, force: true do |t|
    t.string  "rule_id",         limit: 32,  null: false
    t.string  "display",         limit: 300, null: false
    t.string  "ruleset_id",      limit: 32
    t.string  "rule_type",       limit: 200
    t.string  "input_attribute", limit: 200
    t.string  "model_name",      limit: 200
    t.string  "attribute_name",  limit: 200
    t.string  "rule_action",     limit: 200
    t.boolean "is_active"
    t.string  "rule_seq",        limit: 200
    t.boolean "is_destroyed"
  end

  create_table "rulesets", id: false, force: true do |t|
    t.string  "ruleset_id",   limit: 32,  null: false
    t.string  "display",      limit: 200, null: false
    t.string  "ruleset_code", limit: 200
    t.string  "description",  limit: 300
    t.boolean "is_active"
    t.boolean "is_destroyed"
  end

  create_table "seasonal_indexes", id: false, force: true do |t|
    t.string  "seasonal_index_id",   limit: 32,  null: false
    t.string  "display",             limit: 300, null: false
    t.string  "seasonal_index_name", limit: 200
    t.boolean "is_destroyed"
  end

  create_table "seeds", id: false, force: true do |t|
    t.string "version", null: false
  end

  add_index "seeds", ["version"], name: "index_seeds_on_version", unique: true, using: :btree

  create_table "sequences", id: false, force: true do |t|
    t.string  "sequence_code", limit: 100,             null: false
    t.string  "prefix",        limit: 10
    t.integer "padding",                   default: 8, null: false
    t.integer "value",                     default: 1, null: false
  end

  add_index "sequences", ["sequence_code"], name: "index_sequences_on_sequence_code", unique: true, using: :btree

  create_table "shipment_details", id: false, force: true do |t|
    t.string  "shipment_detail_id", limit: 32,  null: false
    t.string  "display",            limit: 300, null: false
    t.string  "shipment_id",        limit: 32
    t.string  "pick_id",            limit: 32
    t.integer "ship_units"
    t.string  "box_number",         limit: 200
    t.integer "received_units"
    t.string  "container_id",       limit: 32
    t.boolean "is_destroyed"
  end

  create_table "shipments", id: false, force: true do |t|
    t.string   "shipment_id",             limit: 32,                           null: false
    t.string   "display",                 limit: 300
    t.string   "state",                   limit: 200
    t.string   "shipment_nbr",            limit: 200
    t.string   "location_id",             limit: 32
    t.string   "shippable_type",          limit: 200
    t.string   "shippable_id",            limit: 32
    t.string   "supplier_id",             limit: 32
    t.string   "tracking_number",         limit: 200
    t.datetime "create_date"
    t.datetime "ship_date"
    t.datetime "receipt_date"
    t.datetime "estimated_delivery_date"
    t.decimal  "shipping_cost",                       precision: 11, scale: 2
    t.string   "ship_name",               limit: 200
    t.string   "ship_line_1",             limit: 200
    t.string   "ship_line_2",             limit: 200
    t.string   "ship_line_3",             limit: 200
    t.string   "ship_line_4",             limit: 200
    t.string   "ship_city",               limit: 200
    t.string   "ship_state_code",         limit: 2
    t.string   "ship_zip",                limit: 10
    t.string   "ship_country",            limit: 200
    t.string   "ship_latitude",           limit: 15
    t.string   "ship_longitude",          limit: 15
    t.boolean  "is_residential"
    t.boolean  "is_commercial"
    t.string   "phone",                   limit: 200
    t.string   "email_address",           limit: 200
    t.boolean  "is_destroyed"
  end

  create_table "shipping_rates", id: false, force: true do |t|
    t.string  "shipping_rate_id",   limit: 32,                           null: false
    t.string  "display",            limit: 300,                          null: false
    t.string  "supplier_id",        limit: 32
    t.string  "shipping_rate_name", limit: 200
    t.decimal "shipping_charge",                precision: 11, scale: 2
    t.decimal "minimum_sale",                   precision: 11, scale: 2
    t.decimal "maximum_sale",                   precision: 11, scale: 2
    t.boolean "is_destroyed"
  end

  create_table "size_group_details", id: false, force: true do |t|
    t.string  "size_group_detail_id", limit: 32,  null: false
    t.string  "display",              limit: 300, null: false
    t.string  "size_group_id",        limit: 32
    t.string  "size_id",              limit: 32
    t.integer "display_order"
    t.boolean "is_enabled"
    t.boolean "is_destroyed"
  end

  add_index "size_group_details", ["size_group_detail_id"], name: "index_size_group_details_on_size_group_detail_id", using: :btree
  add_index "size_group_details", ["size_group_id"], name: "index_size_group_details_on_size_group_id", using: :btree

  create_table "size_groups", id: false, force: true do |t|
    t.string  "size_group_id",     limit: 32,  null: false
    t.string  "display",           limit: 200
    t.string  "size_group_nbr",    limit: 200
    t.string  "description",       limit: 300
    t.string  "short_name",        limit: 200
    t.string  "concatenated_name", limit: 200
    t.boolean "is_enabled"
    t.boolean "is_destroyed"
  end

  add_index "size_groups", ["size_group_id"], name: "index_size_groups_on_size_group_id", using: :btree

  create_table "sizes", id: false, force: true do |t|
    t.string  "size_id",           limit: 32,  null: false
    t.string  "display",           limit: 200, null: false
    t.string  "size_nbr",          limit: 200
    t.string  "description",       limit: 300
    t.string  "size_type",         limit: 200
    t.string  "short_name",        limit: 15
    t.string  "concatenated_name", limit: 200
    t.string  "dimension_1",       limit: 15
    t.string  "dimension_2",       limit: 15
    t.boolean "is_enabled"
    t.boolean "is_destroyed"
  end

  add_index "sizes", ["size_id"], name: "index_sizes_on_size_id", unique: true, using: :btree

  create_table "sku_aliases", id: false, force: true do |t|
    t.string  "sku_alias_id",   limit: 32,  null: false
    t.string  "display",        limit: 300, null: false
    t.string  "sku_id",         limit: 32
    t.string  "sku_alias",      limit: 200
    t.string  "sku_alias_type", limit: 200
    t.boolean "is_primary"
    t.string  "pack_type",      limit: 200
    t.integer "pack_size"
    t.boolean "is_destroyed"
  end

  create_table "sku_price_requests", id: false, force: true do |t|
    t.string   "sku_price_request_id",          limit: 32,                           null: false
    t.string   "display",                       limit: 300
    t.string   "state",                         limit: 200
    t.string   "user_id",                       limit: 32
    t.datetime "request_date"
    t.string   "sku_id",                        limit: 32
    t.string   "location_id",                   limit: 32
    t.string   "customer_id",                   limit: 32
    t.string   "account_id",                    limit: 32
    t.string   "request_price_book_id",         limit: 32
    t.datetime "price_date"
    t.decimal  "permanent_sku_retail",                      precision: 11, scale: 2
    t.integer  "permanent_units"
    t.string   "price_book_id",                 limit: 32
    t.string   "sku_price_id",                  limit: 32
    t.decimal  "promo_sku_retail",                          precision: 11, scale: 2
    t.decimal  "promo_percent",                             precision: 13, scale: 4
    t.decimal  "promo_amount",                              precision: 11, scale: 2
    t.integer  "promo_units"
    t.integer  "regular_units"
    t.integer  "maximum_promo_units"
    t.string   "sku_promo_price_id",            limit: 32
    t.string   "sales_category",                limit: 200
    t.decimal  "professional_discount_percent",             precision: 13, scale: 4
    t.decimal  "employee_discount_percent",                 precision: 13, scale: 4
    t.decimal  "school_discount_percent",                   precision: 13, scale: 4
    t.boolean  "is_destroyed"
  end

  create_table "sku_prices", id: false, force: true do |t|
    t.string   "sku_price_id",    limit: 32,                           null: false
    t.string   "display",         limit: 300,                          null: false
    t.string   "sku_id",          limit: 32
    t.string   "price_book_id",   limit: 32
    t.datetime "effective_date"
    t.decimal  "retail_price",                precision: 11, scale: 2
    t.integer  "price_units"
    t.string   "sales_category",  limit: 200
    t.string   "price_change_id", limit: 32
    t.boolean  "is_destroyed"
    t.boolean  "is_indexed"
  end

  create_table "sku_promo_prices", id: false, force: true do |t|
    t.string   "sku_promo_price_id",  limit: 32,                           null: false
    t.string   "display",             limit: 300,                          null: false
    t.string   "sku_id",              limit: 32
    t.string   "price_book_id",       limit: 32
    t.datetime "effective_date"
    t.datetime "end_date"
    t.integer  "regular_units"
    t.integer  "promo_units"
    t.decimal  "promo_percent",                   precision: 13, scale: 4
    t.decimal  "promo_amount",                    precision: 11, scale: 2
    t.decimal  "promo_price",                     precision: 11, scale: 2
    t.integer  "maximum_promo_units"
    t.string   "sales_category",      limit: 200
    t.string   "promotion_id",        limit: 32
    t.boolean  "is_destroyed"
  end

  create_table "sku_substitutes", id: false, force: true do |t|
    t.string   "sku_substitute_id",   limit: 32,  null: false
    t.string   "display",             limit: 300, null: false
    t.string   "sku_id",              limit: 32
    t.string   "substitute_sku_id",   limit: 32
    t.string   "sku_substitute_type", limit: 200
    t.datetime "effective_date"
    t.datetime "end_date"
    t.integer  "priority"
    t.boolean  "is_destroyed"
  end

  create_table "sku_suppliers", id: false, force: true do |t|
    t.string  "sku_supplier_id",           limit: 32,                           null: false
    t.string  "display",                   limit: 300
    t.string  "sku_id",                    limit: 32
    t.string  "supplier_id",               limit: 32
    t.string  "supplier_item_identifier",  limit: 200
    t.string  "description",               limit: 300
    t.boolean "is_primary_supplier"
    t.boolean "is_manufacturer"
    t.boolean "is_discontinued"
    t.integer "supplier_cost_units"
    t.decimal "supplier_cost",                         precision: 13, scale: 4
    t.integer "master_pack_units"
    t.string  "master_pack_uom_code",      limit: 200
    t.decimal "master_pack_length",                    precision: 11, scale: 2
    t.decimal "master_pack_height",                    precision: 11, scale: 2
    t.decimal "master_pack_width",                     precision: 11, scale: 2
    t.decimal "master_pack_weight",                    precision: 11, scale: 2
    t.integer "inner_pack_units"
    t.string  "inner_pack_uom_code",       limit: 200
    t.decimal "inner_pack_length",                     precision: 11, scale: 2
    t.decimal "inner_pack_height",                     precision: 11, scale: 2
    t.decimal "inner_pack_width",                      precision: 11, scale: 2
    t.decimal "inner_pack_weight",                     precision: 11, scale: 2
    t.string  "pack_type",                 limit: 200
    t.integer "minimum_order_units"
    t.decimal "minimum_order_value",                   precision: 11, scale: 2
    t.decimal "minimum_order_weight",                  precision: 11, scale: 2
    t.decimal "minimum_order_cube",                    precision: 11, scale: 2
    t.string  "order_multiple_type",       limit: 200
    t.decimal "extra_cost",                            precision: 13, scale: 4
    t.boolean "is_included_extra_cost"
    t.string  "cost_id",                   limit: 32
    t.string  "origin_country",            limit: 200
    t.string  "freight_term",              limit: 200
    t.boolean "is_conveyable_master_pack"
    t.boolean "is_conveyable_inner_pack"
    t.integer "pallet_tie"
    t.integer "pallet_high"
    t.string  "pallet_container_id",       limit: 32
    t.boolean "is_destroyed"
    t.boolean "is_indexed"
  end

  create_table "skus", id: false, force: true do |t|
    t.string   "sku_id",                  limit: 32,                           null: false
    t.string   "source",                  limit: 200
    t.string   "source_id",               limit: 200
    t.string   "mark_stock",              limit: 200
    t.string   "mark_size",               limit: 200
    t.string   "sku_nbr",                 limit: 200
    t.string   "state",                   limit: 200
    t.string   "display",                 limit: 200
    t.string   "description",             limit: 300
    t.string   "short_name",              limit: 15
    t.string   "pos_name",                limit: 200
    t.string   "design_code",             limit: 10
    t.string   "maintenance_level",       limit: 200
    t.string   "conversion_type",         limit: 200
    t.string   "generic_sku_id",          limit: 32
    t.string   "add_on_sku_id",           limit: 32
    t.string   "account_id",              limit: 32
    t.string   "style_color_size_id",     limit: 32
    t.string   "style_id",                limit: 32
    t.string   "size_id",                 limit: 32
    t.string   "subclass_id",             limit: 32
    t.string   "classification_id",       limit: 32
    t.string   "department_id",           limit: 32
    t.string   "buyer_user_id",           limit: 32
    t.string   "product_type_id",         limit: 32
    t.string   "supplier_id",             limit: 32
    t.string   "color_id",                limit: 32
    t.string   "color_name",              limit: 200
    t.string   "color_short_name",        limit: 15
    t.string   "brand",                   limit: 200
    t.datetime "effective_date"
    t.datetime "discontinued_date"
    t.datetime "out_of_stock_date"
    t.string   "fabric_content",          limit: 200
    t.decimal  "initial_retail_price",                precision: 11, scale: 2
    t.decimal  "suggested_retail_price",              precision: 11, scale: 2
    t.decimal  "smoothing_factor",                    precision: 11, scale: 2
    t.string   "replenishment_method",    limit: 200
    t.integer  "minimum_on_hand_units"
    t.integer  "maximum_on_hand_units"
    t.string   "pack_type",               limit: 200
    t.string   "replenishment_source",    limit: 200
    t.string   "sell_unit_uom_code",      limit: 200
    t.decimal  "sell_unit_length",                    precision: 11, scale: 2
    t.decimal  "sell_unit_height",                    precision: 11, scale: 2
    t.decimal  "sell_unit_width",                     precision: 11, scale: 2
    t.decimal  "sell_unit_weight",                    precision: 11, scale: 2
    t.string   "order_uom_code",          limit: 200
    t.string   "order_package_type",      limit: 200
    t.integer  "garment_pieces"
    t.string   "stock_nbr",               limit: 200
    t.decimal  "conversion_cost",                     precision: 13, scale: 4
    t.decimal  "first_cost",                          precision: 13, scale: 4
    t.decimal  "last_cost",                           precision: 13, scale: 4
    t.decimal  "average_cost",                        precision: 13, scale: 4
    t.decimal  "on_hand_units",                       precision: 11, scale: 2
    t.decimal  "cost_pool",                           precision: 13, scale: 4
    t.decimal  "retail_pool",                         precision: 13, scale: 4
    t.boolean  "is_not_stocked"
    t.boolean  "is_converted"
    t.boolean  "is_enabled"
    t.boolean  "is_conveyable_sell_unit"
    t.boolean  "is_discountable"
    t.boolean  "is_taxable"
    t.boolean  "is_updated_average_cost"
    t.boolean  "is_special_order"
    t.boolean  "is_special_size"
    t.boolean  "is_destroyed"
    t.boolean  "is_indexed"
  end

  add_index "skus", ["sku_id"], name: "index_skus_on_sku_id", unique: true, using: :btree
  add_index "skus", ["style_id"], name: "index_skus_on_style_id", using: :btree

  create_table "stock_ledger_activities", id: false, force: true do |t|
    t.string   "stock_ledger_activity_id", limit: 32,                           null: false
    t.string   "display",                  limit: 300
    t.string   "stockable_type",           limit: 200
    t.string   "stockable_id",             limit: 32
    t.string   "ruleset_id",               limit: 32
    t.string   "sku_id",                   limit: 32
    t.string   "location_id",              limit: 32
    t.string   "supplier_id",              limit: 32
    t.string   "customer_id",              limit: 32
    t.string   "account_id",               limit: 32
    t.decimal  "units",                                precision: 11, scale: 2
    t.decimal  "cost",                                 precision: 13, scale: 4
    t.decimal  "retail",                               precision: 13, scale: 4
    t.datetime "create_date"
    t.datetime "activity_date"
    t.datetime "posted_date"
    t.boolean  "is_destroyed"
  end

  add_index "stock_ledger_activities", ["stock_ledger_activity_id"], name: "index_stock_ledger_activities_on_stock_ledger_activity_id", unique: true, using: :btree

  create_table "stock_ledger_activity_logs", id: false, force: true do |t|
    t.string  "stock_ledger_activity_log_id",  limit: 32,  null: false
    t.string  "display",                       limit: 300
    t.string  "stock_ledger_activity_id",      limit: 32
    t.string  "stock_ledger_activity_log_nbr", limit: 200
    t.string  "model_name",                    limit: 200
    t.string  "attribute_name",                limit: 200
    t.string  "row_id",                        limit: 32
    t.string  "rule_action",                   limit: 200
    t.boolean "is_destroyed"
  end

  create_table "style_color_sizes", id: false, force: true do |t|
    t.string  "style_color_size_id",       limit: 32,                           null: false
    t.string  "display",                   limit: 300,                          null: false
    t.string  "state",                     limit: 200
    t.string  "style_color_id",            limit: 32
    t.string  "size_id",                   limit: 32
    t.string  "sku_id",                    limit: 32
    t.string  "sku_name",                  limit: 200
    t.string  "pos_name",                  limit: 200
    t.decimal "fabric_bom_adjust_percent",             precision: 11, scale: 2
    t.boolean "is_special_order"
    t.boolean "is_not_available"
    t.boolean "is_destroyed"
    t.boolean "is_indexed"
  end

  add_index "style_color_sizes", ["style_color_size_id"], name: "index_style_color_sizes_on_style_color_size_id", unique: true, using: :btree

  create_table "style_colors", id: false, force: true do |t|
    t.string  "style_color_id",       limit: 32,                           null: false
    t.string  "display",              limit: 300,                          null: false
    t.string  "state",                limit: 200
    t.string  "style_id",             limit: 32
    t.string  "color_id",             limit: 32
    t.string  "short_name",           limit: 15
    t.string  "concatenated_name",    limit: 200
    t.string  "fabric_content",       limit: 200
    t.decimal "initial_retail_price",             precision: 11, scale: 2
    t.boolean "is_destroyed"
    t.boolean "is_indexed"
  end

  add_index "style_colors", ["style_color_id"], name: "index_style_colors_on_style_color_id", unique: true, using: :btree

  create_table "style_locations", id: false, force: true do |t|
    t.string  "style_location_id",            limit: 32,                           null: false
    t.string  "display",                      limit: 300,                          null: false
    t.string  "state",                        limit: 200
    t.string  "style_id",                     limit: 32
    t.string  "location_id",                  limit: 32
    t.boolean "is_authorized"
    t.boolean "is_taxable"
    t.boolean "is_special_order"
    t.boolean "is_discontinued"
    t.string  "replenishment_method",         limit: 200
    t.string  "replenishment_source",         limit: 200
    t.string  "supplier_id",                  limit: 32
    t.integer "safety_stock_units"
    t.integer "safety_stock_days"
    t.boolean "is_override_demand_exception"
    t.decimal "smoothing_factor",                         precision: 11, scale: 2
    t.string  "forecast_profile_id",          limit: 32
    t.boolean "is_soq_override"
    t.integer "minimum_units"
    t.integer "maximum_units"
    t.string  "seasonal_index_id",            limit: 32
    t.boolean "is_destroyed"
  end

  add_index "style_locations", ["style_location_id"], name: "index_style_locations_on_style_location_id", unique: true, using: :btree

  create_table "style_supplier_colors", id: false, force: true do |t|
    t.string  "style_supplier_color_id", limit: 32,  null: false
    t.string  "display",                 limit: 300, null: false
    t.string  "style_supplier_id",       limit: 32
    t.string  "style_color_id",          limit: 32
    t.boolean "is_destroyed"
  end

  add_index "style_supplier_colors", ["style_supplier_color_id"], name: "index_style_supplier_colors_on_style_supplier_color_id", unique: true, using: :btree

  create_table "style_suppliers", id: false, force: true do |t|
    t.string  "style_supplier_id",         limit: 32,                           null: false
    t.string  "display",                   limit: 300
    t.string  "state",                     limit: 200
    t.string  "style_id",                  limit: 32
    t.string  "supplier_id",               limit: 32
    t.string  "description",               limit: 300
    t.boolean "is_primary"
    t.boolean "is_manufacturer"
    t.boolean "is_discontinued"
    t.integer "supplier_cost_units"
    t.decimal "supplier_cost",                         precision: 13, scale: 4
    t.integer "master_pack_units"
    t.string  "master_pack_uom_code",      limit: 200
    t.decimal "master_pack_length",                    precision: 11, scale: 2
    t.decimal "master_pack_height",                    precision: 11, scale: 2
    t.decimal "master_pack_width",                     precision: 11, scale: 2
    t.decimal "master_pack_weight",                    precision: 11, scale: 2
    t.integer "inner_pack_units"
    t.string  "inner_pack_uom_code",       limit: 200
    t.decimal "inner_pack_length",                     precision: 11, scale: 2
    t.decimal "inner_pack_height",                     precision: 11, scale: 2
    t.decimal "inner_pack_width",                      precision: 11, scale: 2
    t.decimal "inner_pack_weight",                     precision: 11, scale: 2
    t.string  "pack_type",                 limit: 200
    t.integer "minimum_order_units"
    t.decimal "minimum_order_value",                   precision: 11, scale: 2
    t.decimal "minimum_order_weight",                  precision: 11, scale: 2
    t.decimal "minimum_order_cube",                    precision: 11, scale: 2
    t.string  "order_multiple_type",       limit: 200
    t.decimal "extra_cost",                            precision: 13, scale: 4
    t.boolean "is_included_extra_cost"
    t.string  "origin_country",            limit: 200
    t.string  "freight_term",              limit: 200
    t.boolean "is_conveyable_master_pack"
    t.boolean "is_conveyable_inner_pack"
    t.integer "pallet_tie"
    t.integer "pallet_high"
    t.boolean "is_destroyed"
  end

  add_index "style_suppliers", ["style_supplier_id"], name: "index_style_suppliers_on_style_supplier_id", unique: true, using: :btree

  create_table "styles", id: false, force: true do |t|
    t.string   "style_id",                limit: 32,                           null: false
    t.string   "site_id",                 limit: 32
    t.string   "display",                 limit: 200
    t.string   "style_nbr",               limit: 200
    t.string   "description",             limit: 300
    t.string   "short_name",              limit: 200
    t.string   "concatenated_name",       limit: 200
    t.string   "pos_name",                limit: 200
    t.datetime "effective_date"
    t.datetime "discontinued_date"
    t.datetime "out_of_stock_date"
    t.string   "subclass_id",             limit: 32
    t.string   "product_id",              limit: 32
    t.string   "buyer_user_id",           limit: 32
    t.string   "brand",                   limit: 200
    t.string   "product_type_id",         limit: 32
    t.string   "fabric_content",          limit: 200
    t.string   "storage_code",            limit: 200
    t.string   "design_code",             limit: 200
    t.decimal  "initial_retail_price",                precision: 11, scale: 2
    t.decimal  "suggested_retail_price",              precision: 11, scale: 2
    t.decimal  "planning_retail_price",               precision: 11, scale: 2
    t.decimal  "smoothing_factor",                    precision: 11, scale: 2
    t.string   "replenishment_method",    limit: 200
    t.string   "replenishment_source",    limit: 200
    t.integer  "minimum_on_hand_units"
    t.integer  "maximum_on_hand_units"
    t.string   "pack_type",               limit: 200
    t.boolean  "is_not_stocked"
    t.string   "sell_unit_uom_code",      limit: 200
    t.decimal  "sell_unit_length",                    precision: 11, scale: 2
    t.decimal  "sell_unit_height",                    precision: 11, scale: 2
    t.decimal  "sell_unit_width",                     precision: 11, scale: 2
    t.decimal  "sell_unit_weight",                    precision: 11, scale: 2
    t.boolean  "is_conveyable_sell_unit"
    t.boolean  "is_discountable"
    t.boolean  "is_taxable"
    t.string   "supplier_id",             limit: 32
    t.string   "order_uom_code",          limit: 200
    t.string   "order_package_type",      limit: 200
    t.integer  "garment_pieces"
    t.boolean  "is_special_order"
    t.boolean  "is_converted"
    t.string   "add_on_sku_id",           limit: 32
    t.string   "account_id",              limit: 32
    t.string   "conversion_type",         limit: 200
    t.string   "maintenance_level",       limit: 200
    t.boolean  "is_convertible"
    t.boolean  "is_converted_heatset"
    t.boolean  "is_converted_sewn"
    t.string   "generic_style_id",        limit: 32
    t.string   "size_group_id",           limit: 32
    t.string   "sku_name_method",         limit: 200
    t.boolean  "is_alterable"
    t.boolean  "is_usually_altered"
    t.boolean  "is_enabled"
    t.string   "state",                   limit: 200
    t.boolean  "is_destroyed"
    t.boolean  "is_indexed"
    t.string   "audit_created_by",        limit: 200
    t.string   "audit_updated_by",        limit: 200
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "styles", ["style_id"], name: "index_styles_on_style_id", unique: true, using: :btree
  add_index "styles", ["subclass_id"], name: "index_styles_on_subclass_id", using: :btree

  create_table "subclasses", id: false, force: true do |t|
    t.string  "subclass_id",               limit: 32,                           null: false
    t.string  "display",                   limit: 200,                          null: false
    t.string  "subclass_nbr",              limit: 200
    t.string  "description",               limit: 300
    t.string  "short_name",                limit: 15
    t.string  "classification_id",         limit: 32
    t.decimal "markup_percent_high_limit",             precision: 11, scale: 2
    t.decimal "markup_percent_low_limit",              precision: 11, scale: 2
    t.boolean "is_destroyed"
  end

  add_index "subclasses", ["subclass_id"], name: "index_subclasses_on_subclass_id", unique: true, using: :btree

  create_table "supplier_contacts", id: false, force: true do |t|
    t.string  "supplier_contact_id",  limit: 32,  null: false
    t.string  "display",              limit: 300
    t.string  "supplier_id",          limit: 32
    t.string  "first_name",           limit: 200
    t.string  "last_name",            limit: 200
    t.string  "name_prefix",          limit: 200
    t.string  "name_suffix",          limit: 200
    t.string  "department",           limit: 200
    t.string  "job_title",            limit: 200
    t.string  "phone",                limit: 200
    t.string  "fax",                  limit: 200
    t.string  "email_address",        limit: 200
    t.boolean "is_order_contact"
    t.boolean "is_return_contact"
    t.boolean "is_payment_contact"
    t.boolean "is_executive_contact"
    t.boolean "is_destroyed"
  end

  create_table "supplier_rating_subjects", id: false, force: true do |t|
    t.string  "supplier_rating_subject_id",   limit: 32,                           null: false
    t.string  "display",                      limit: 200
    t.string  "description",                  limit: 300
    t.string  "supplier_rating_subject_type", limit: 200
    t.decimal "weighting_percent",                        precision: 11, scale: 2
    t.boolean "is_destroyed"
  end

  create_table "supplier_ratings", id: false, force: true do |t|
    t.string   "supplier_rating_id",         limit: 32,  null: false
    t.string   "display",                    limit: 300
    t.string   "supplier_id",                limit: 32
    t.string   "supplier_rating_subject_id", limit: 32
    t.datetime "rating_date"
    t.integer  "rating_value"
    t.boolean  "is_destroyed"
  end

  create_table "suppliers", id: false, force: true do |t|
    t.string  "supplier_id",                   limit: 32,                           null: false
    t.string  "display",                       limit: 300
    t.string  "supplier_name",                 limit: 200
    t.string  "supplier_nbr",                  limit: 200
    t.integer "supplier_ucc_prefix"
    t.string  "description",                   limit: 300
    t.string  "short_name",                    limit: 15
    t.string  "legacy_supplier_code",          limit: 4
    t.integer "duns_number"
    t.string  "line_1",                        limit: 200
    t.string  "line_2",                        limit: 200
    t.string  "line_3",                        limit: 200
    t.string  "line_4",                        limit: 200
    t.string  "city",                          limit: 200
    t.string  "state_code",                    limit: 2
    t.string  "zip",                           limit: 10
    t.string  "country",                       limit: 200
    t.string  "latitude",                      limit: 15
    t.string  "longitude",                     limit: 15
    t.string  "phone",                         limit: 200
    t.string  "fax",                           limit: 200
    t.string  "supplier_url",                  limit: 200
    t.string  "default_ship_thru_supplier_id", limit: 32
    t.string  "shipping_point",                limit: 200
    t.string  "ship_via",                      limit: 200
    t.string  "freight_term",                  limit: 200
    t.decimal "minimum_order_cost",                        precision: 11, scale: 2
    t.integer "minimum_order_units"
    t.integer "minimum_weight"
    t.decimal "minimum_cube",                              precision: 11, scale: 2
    t.boolean "is_ship_cancel"
    t.string  "return_policy",                 limit: 300
    t.integer "lead_time",                     limit: 3
    t.decimal "safety_stock_days",                         precision: 11, scale: 2
    t.boolean "is_calculated_lead_time"
    t.string  "replenishment_method",          limit: 200
    t.boolean "is_dynamic_safety_stock"
    t.string  "default_pay_to_supplier_id",    limit: 32
    t.string  "default_payment_term",          limit: 200
    t.string  "bank_name",                     limit: 200
    t.string  "bank_account_name",             limit: 200
    t.string  "bank_account_type",             limit: 200
    t.integer "bank_routing_nbr"
    t.string  "bank_account",                  limit: 15
    t.string  "gl_account_id",                 limit: 32
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

  add_index "suppliers", ["supplier_id"], name: "index_suppliers_on_supplier_id", unique: true, using: :btree

  create_table "system_options", id: false, force: true do |t|
    t.string  "system_option_id",                   limit: 32,                           null: false
    t.string  "display",                            limit: 200
    t.string  "price_book_id",                      limit: 32
    t.decimal "professional_discount_percent",                  precision: 11, scale: 2
    t.decimal "employee_discount_percent",                      precision: 11, scale: 2
    t.string  "regular_sale_ruleset_id",            limit: 32
    t.string  "promo_sale_ruleset_id",              limit: 32
    t.string  "clearance_sale_ruleset_id",          limit: 32
    t.string  "transfer_request_ruleset_id",        limit: 32
    t.string  "transfer_ship_ruleset_id",           limit: 32
    t.string  "transfer_transit_ruleset_id",        limit: 32
    t.string  "transfer_receive_ruleset_id",        limit: 32
    t.string  "transfer_close_ruleset_id",          limit: 32
    t.string  "transfer_cancel_ruleset_id",         limit: 32
    t.boolean "is_charge_ship_location"
    t.string  "transfer_gl_account_id",             limit: 32
    t.string  "discrepancy_gl_account_id",          limit: 32
    t.string  "overage_gl_account_id",              limit: 32
    t.string  "shortage_gl_account_id",             limit: 32
    t.string  "sales_tax_gl_account_id",            limit: 32
    t.integer "consecutive_invalid_login_attempts"
    t.integer "purchase_approval_1_maximum_amount"
    t.integer "purchase_approval_2_maximum_amount"
    t.boolean "is_destroyed"
  end

  create_table "t_barcode", id: false, force: true do |t|
    t.string "barcode_id",         limit: 32
    t.string "origin_type",        limit: 20, null: false
    t.string "display",            limit: 20
    t.string "barcode_nbr",                   null: false
    t.string "barcode_serial_nbr", limit: 20, null: false
    t.string "scan_code",          limit: 40, null: false
    t.string "container_nbr",                 null: false
    t.string "container_id",       limit: 32
    t.string "is_destroyed"
    t.string "is_arch_select"
  end

  create_table "t_barcode_origin", id: false, force: true do |t|
    t.string "id",                 limit: 32
    t.string "barcode_origin_nbr",             null: false
    t.string "description",        limit: 200
    t.string "short_name",         limit: 40
  end

  create_table "t_bin", id: false, force: true do |t|
    t.string "bin_id",              limit: 32,  null: false
    t.string "display",             limit: 40
    t.string "location_id",         limit: 32,  null: false
    t.string "area_id",             limit: 32
    t.string "area_short_name",     limit: 20,  null: false
    t.string "aisle",               limit: 20
    t.string "section",             limit: 20
    t.string "level",               limit: 20
    t.string "position",            limit: 20
    t.string "bin_nbr",                         null: false
    t.string "bin_code",            limit: 3,   null: false
    t.string "description",         limit: 200
    t.string "bin_type",                        null: false
    t.string "last_activity_date",              null: false
    t.string "is_many_sku_per_bin"
    t.string "pick_sequence"
    t.string "zone",                limit: 20
    t.string "pick_zone",           limit: 20
    t.string "cube_capacity"
  end

  create_table "t_carton_type", id: false, force: true do |t|
    t.string "ID",               limit: 32
    t.string "carton_type_id",   limit: 20
    t.string "carton_nbr",                   null: false
    t.string "display",          limit: 20
    t.string "description",      limit: 200
    t.string "short_name",       limit: 40
    t.string "length"
    t.string "width"
    t.string "depth"
    t.string "last_update_date"
    t.string "last_update_user"
  end

  create_table "t_container", id: false, force: true do |t|
    t.string "container_id",           limit: 200
    t.string "display",                limit: 200
    t.string "container_nbr",                      null: false
    t.string "description"
    t.string "container_type",         limit: 200
    t.string "parent_container_id",    limit: 32
    t.string "container_type_id",      limit: 32
    t.string "is_labeled"
    t.string "location_id",            limit: 32
    t.string "status",                 limit: 1
    t.string "create_date"
    t.string "last_update_date"
    t.string "is_located"
    t.string "is_moving"
    t.string "is_in_transit"
    t.string "bin_id",                 limit: 32
    t.string "vehicle_id",             limit: 32
    t.string "capacity"
    t.string "inside_length"
    t.string "inside_height"
    t.string "inside_width"
    t.string "has_outside_dimensions"
    t.string "outside_length"
    t.string "outside_height"
    t.string "outside_width"
    t.string "tare_weight"
    t.string "fill_percent"
    t.string "capacity_weight"
    t.string "carton_count"
    t.string "actual_weight"
    t.string "actual_cube"
    t.string "filled_percent"
    t.string "container_lost"
    t.string "last_location_verify"
    t.string "last_update"
    t.string "is_destroyed"
    t.string "SSCC",                   limit: 200
    t.string "inventory_good"
    t.string "is_empty"
    t.string "carton_type",            limit: 32
    t.string "Recovered_Flag"
    t.string "is_arch_select"
  end

  create_table "t_container_detail", id: false, force: true do |t|
    t.string "id",                   limit: 32
    t.string "display",              limit: 200
    t.string "container_detail_nbr",             null: false
    t.string "description",          limit: 200
    t.string "parent_container_id",  limit: 32
    t.string "status",                           null: false
    t.string "SKU_ID",                           null: false
    t.string "sales_units",                      null: false
    t.string "master_packs"
    t.string "master_pack_qty"
    t.string "master_pack_type",     limit: 200
    t.string "create_date",                      null: false
    t.string "last_update_date",                 null: false
    t.string "inventory_source",     limit: 32
    t.string "container_source",     limit: 32
    t.string "is_destroyed"
    t.string "parent_container_nbr"
    t.string "inventory_good",                   null: false
    t.string "OSKU_ID",              limit: 200
    t.string "Recovered_Flag"
    t.string "is_arch_select"
  end

  create_table "t_container_type", id: false, force: true do |t|
    t.string "id",                 limit: 32
    t.string "container_type_nbr",             null: false
    t.string "display",            limit: 200
    t.string "description",        limit: 200
    t.string "short_name",         limit: 200
  end

  create_table "t_master_pack_codes", id: false, force: true do |t|
    t.string "id",                   limit: 32
    t.string "master_pack_uom_nbr",              null: false
    t.string "description",          limit: 200
    t.string "short_name",           limit: 30
    t.string "master_pack_uom_code", limit: 20
  end

  create_table "t_message_type", id: false, force: true do |t|
    t.string "id",               limit: 200
    t.string "msg_nbr",                      null: false
    t.string "display",          limit: 200
    t.string "message_code",     limit: 10
    t.string "language_code"
    t.string "message_type"
    t.string "message_severity", limit: 1
    t.string "num_parm"
    t.string "text_template",    limit: 200
    t.string "p1_name",          limit: 200
    t.string "is_required_p1"
    t.string "p2_name",          limit: 200
    t.string "is_required_p2"
    t.string "p3_name",          limit: 200
    t.string "is_required_p3"
    t.string "p4_name",          limit: 200
    t.string "is_required_p4"
    t.string "p5_name",          limit: 200
    t.string "is_required_p5"
    t.string "p6_name",          limit: 200
    t.string "is_required_p6"
    t.string "p7_name",          limit: 200
    t.string "is_required_p7"
    t.string "p8_name",          limit: 200
    t.string "is_required_p8"
    t.string "p9_name",          limit: 200
    t.string "is_required_p9"
    t.string "p10_name",         limit: 200
    t.string "is_required_p10"
    t.string "is_destroyed"
  end

  create_table "t_move_log", id: false, force: true do |t|
    t.string "ID",                      limit: 200
    t.string "move_log_number",                     null: false
    t.string "display",                 limit: 200
    t.string "message_type_id",         limit: 200
    t.string "message_type_code",       limit: 200
    t.string "message_template",        limit: 200
    t.string "severity",                limit: 1
    t.string "timestamp_date"
    t.string "language_code"
    t.string "location_id",             limit: 32
    t.string "location_short_name",     limit: 200
    t.string "parent_container_id",     limit: 32
    t.string "parent_container_number"
    t.string "parent_container_type"
    t.string "parent_barcode_id",       limit: 32
    t.string "parent_barcode_number"
    t.string "container_id",            limit: 32
    t.string "container_number"
    t.string "container_type"
    t.string "barcode_id",              limit: 32
    t.string "barcode",                 limit: 200
    t.string "device_name",             limit: 200
    t.string "vehcicle_id",             limit: 32
    t.string "vehicle_name",            limit: 200
    t.string "user_id",                 limit: 32
    t.string "user_name",               limit: 200
    t.string "log_text",                limit: 200
    t.string "p1_name",                 limit: 200
    t.string "p1",                      limit: 200
    t.string "p2_name",                 limit: 200
    t.string "p2",                      limit: 200
    t.string "p3_name",                 limit: 200
    t.string "p3",                      limit: 200
    t.string "p4_name",                 limit: 200
    t.string "p4",                      limit: 200
    t.string "p5_name",                 limit: 200
    t.string "p5",                      limit: 200
    t.string "p6_name",                 limit: 200
    t.string "p6",                      limit: 200
    t.string "p7_name",                 limit: 200
    t.string "p7",                      limit: 200
    t.string "p8_name",                 limit: 200
    t.string "p8",                      limit: 200
    t.string "p9_name",                 limit: 200
    t.string "p9",                      limit: 200
    t.string "p10_name",                limit: 200
    t.string "p10",                     limit: 200
    t.string "is_destroyed"
    t.string "user_number"
  end

  create_table "t_sku", id: false, force: true do |t|
    t.string "ID",                                  null: false
    t.string "stock_nbr",                           null: false
    t.string "size",                   limit: 200,  null: false
    t.string "status",                 limit: 200
    t.string "SKU",                    limit: 200
    t.string "description",            limit: 200
    t.string "separator",              limit: 1
    t.string "default_separator"
    t.string "dummy_sku"
    t.string "empty_sku"
    t.string "OSKU_ID",                limit: 32
    t.string "update_ts"
    t.string "Mark_QOH"
    t.string "Mark_Inv_ts"
    t.string "Mark_QOH_Prior"
    t.string "Mark_Prior_Inv_ts"
    t.string "sales_units"
    t.string "sales_units_located"
    t.string "containers_in_question"
    t.string "Inventory_talley_ts"
    t.string "container_count"
    t.string "Alt_mark_SKU",           limit: 200
    t.string "OMNI_SKU",               limit: 2000
    t.string "TG_SKU",                 limit: 2000
  end

  create_table "t_sku_scan", id: false, force: true do |t|
    t.string "ID",                    null: false
    t.string "SKU_ID"
    t.string "stock_nbr"
    t.string "size",      limit: 200
    t.string "SKU_Scan",  limit: 200
    t.string "Scan_Type", limit: 1
  end

  create_table "t_wuser", id: false, force: true do |t|
    t.string "id",                  limit: 200
    t.string "user_id",                         null: false
    t.string "badge_number"
    t.string "badge_scan"
    t.string "name_first",          limit: 200
    t.string "name_last",           limit: 200
    t.string "status"
    t.string "language_preference"
    t.string "login_status"
    t.string "last_update"
    t.string "last_login"
    t.string "create_date"
    t.string "user_guid",           limit: 200
    t.string "temp_id_flag"
    t.string "display_name",        limit: 200
  end

  create_table "tasks", id: false, force: true do |t|
    t.string   "task_id",          limit: 32,   null: false
    t.string   "taskable_id",      limit: 32
    t.string   "taskable_type",    limit: 32
    t.string   "task_nbr",         limit: 200
    t.string   "task_type",        limit: 200
    t.string   "state",            limit: 200
    t.string   "display",          limit: 200
    t.string   "description",      limit: 4000
    t.datetime "task_due"
    t.datetime "task_start"
    t.datetime "task_end"
    t.string   "owner_id",         limit: 32
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "tasks", ["task_id"], name: "index_tasks_on_task_id", unique: true, using: :btree

  create_table "tasks_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "tasks_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "tax_authorities", id: false, force: true do |t|
    t.string  "tax_authority_id",        limit: 32,  null: false
    t.string  "display",                 limit: 200
    t.string  "description",             limit: 300
    t.string  "tax_authority_type",      limit: 200
    t.string  "short_name",              limit: 15
    t.string  "state_code",              limit: 2
    t.string  "filing_frequency",        limit: 200
    t.boolean "is_tax_when_no_presence"
    t.boolean "is_destroyed"
  end

  create_table "tax_authority_rates", id: false, force: true do |t|
    t.string   "tax_authority_rate_id", limit: 32,                           null: false
    t.string   "display",               limit: 300
    t.string   "tax_authority_id",      limit: 32
    t.datetime "effective_date"
    t.datetime "end_date"
    t.decimal  "tax_percent",                       precision: 13, scale: 4
    t.boolean  "is_destroyed"
  end

  create_table "tenders", id: false, force: true do |t|
    t.string  "tender_id",                      limit: 32,                           null: false
    t.string  "display",                        limit: 200
    t.string  "description",                    limit: 300
    t.string  "short_name",                     limit: 200
    t.string  "tender_type",                    limit: 200
    t.boolean "is_allow_over_tendering"
    t.boolean "is_open_cash_drawer"
    t.boolean "is_required_signature"
    t.boolean "is_allow_multiple_entry"
    t.boolean "is_print_duplicate_receipt"
    t.boolean "is_allow_cash_back"
    t.decimal "maximum_tender_amount",                      precision: 11, scale: 2
    t.string  "display_order",                  limit: 200
    t.boolean "is_verify_via_edc"
    t.integer "cash_back_limit"
    t.decimal "cash_back_fee",                              precision: 11, scale: 2
    t.string  "gl_account_id",                  limit: 32
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

  add_index "tenders", ["tender_id"], name: "index_tenders_on_tender_id", unique: true, using: :btree

  create_table "terminals", id: false, force: true do |t|
    t.string   "terminal_id",              limit: 32,  null: false
    t.string   "display",                  limit: 300
    t.string   "location_id",              limit: 32
    t.string   "till_id",                  limit: 32
    t.string   "terminal_nbr",             limit: 200
    t.string   "mac_address",              limit: 15
    t.string   "local_server_ip",          limit: 15
    t.string   "hq_server_url",            limit: 200
    t.datetime "override_sale_date"
    t.string   "receipt_printer_url",      limit: 200
    t.string   "receipt_printer_ip",       limit: 15
    t.string   "receipt_format_id",        limit: 32
    t.string   "tag_printer_url",          limit: 200
    t.string   "tag_printer_ip",           limit: 15
    t.string   "pin_pad_port",             limit: 200
    t.boolean  "is_net_display_enabled"
    t.boolean  "is_login_per_transaction"
    t.boolean  "is_destroyed"
  end

  add_index "terminals", ["terminal_id"], name: "index_terminals_on_terminal_id", unique: true, using: :btree

  create_table "till_activities", id: false, force: true do |t|
    t.string   "till_activity_id",     limit: 32,                           null: false
    t.string   "display",              limit: 300
    t.string   "till_id",              limit: 32
    t.string   "till_activity_nbr",    limit: 200
    t.datetime "till_activity_date"
    t.string   "till_activity_reason", limit: 200
    t.string   "tender_id",            limit: 32
    t.integer  "activity_count"
    t.decimal  "activity_amount",                  precision: 11, scale: 2
    t.string   "payment_id",           limit: 32
    t.string   "user_id",              limit: 32
    t.boolean  "is_destroyed"
  end

  create_table "till_audits", id: false, force: true do |t|
    t.string   "till_audit_id",     limit: 32,                           null: false
    t.string   "display",           limit: 300
    t.string   "till_id",           limit: 32
    t.datetime "audit_date"
    t.string   "tender_id",         limit: 32
    t.integer  "system_count"
    t.decimal  "system_amount",                 precision: 11, scale: 2
    t.integer  "audit_count"
    t.decimal  "audit_amount",                  precision: 11, scale: 2
    t.datetime "gl_interface_date"
    t.boolean  "is_destroyed"
  end

  create_table "till_details", id: false, force: true do |t|
    t.string  "till_detail_id", limit: 32,                           null: false
    t.string  "display",        limit: 300
    t.string  "till_id",        limit: 32
    t.string  "tender_id",      limit: 32
    t.integer "tender_count"
    t.decimal "tender_amount",              precision: 11, scale: 2
    t.boolean "is_destroyed"
  end

  create_table "tills", id: false, force: true do |t|
    t.string  "till_id",      limit: 32,  null: false
    t.string  "display",      limit: 300
    t.string  "location_id",  limit: 32
    t.string  "till_nbr",     limit: 200
    t.boolean "is_destroyed"
  end

  add_index "tills", ["till_id"], name: "index_tills_on_till_id", unique: true, using: :btree

  create_table "transfer_hd", id: false, force: true do |t|
    t.integer  "id",                           null: false
    t.integer  "from_outlet_nbr",              null: false
    t.integer  "to_outlet_nbr",                null: false
    t.datetime "datetime",                     null: false
    t.string   "tracking_nbr",     limit: 200
    t.integer  "status_id",                    null: false
    t.integer  "user_id",                      null: false
    t.datetime "ship_date"
    t.integer  "accepted_user_id"
    t.string   "comment",          limit: 150
  end

  create_table "transfer_li", id: false, force: true do |t|
    t.integer  "id",                    null: false
    t.integer  "transfer_id",           null: false
    t.integer  "stock_nbr",             null: false
    t.string   "size",        limit: 3, null: false
    t.integer  "qty",                   null: false
    t.datetime "datetime",              null: false
    t.string   "box_nbr"
    t.integer  "status_id",             null: false
  end

  create_table "transfer_reasons", id: false, force: true do |t|
    t.string  "transfer_reason_id",     limit: 32,  null: false
    t.string  "display",                limit: 200
    t.string  "description",            limit: 300
    t.string  "short_name",             limit: 200
    t.integer "target_processing_days"
    t.boolean "is_destroyed"
  end

  create_table "transfers", id: false, force: true do |t|
    t.string   "transfer_id",             limit: 32,                           null: false
    t.string   "display",                 limit: 300
    t.string   "state",                   limit: 200
    t.string   "transfer_nbr",            limit: 200
    t.string   "requesting_location_id",  limit: 32
    t.string   "fulfillment_location_id", limit: 32
    t.string   "description",             limit: 300
    t.string   "sku_id",                  limit: 32
    t.string   "transfer_reason_id",      limit: 32
    t.decimal  "request_units",                       precision: 11, scale: 2
    t.datetime "request_date"
    t.string   "request_user_id",         limit: 32
    t.datetime "ship_date"
    t.datetime "cancel_date"
    t.string   "cancel_user_id",          limit: 32
    t.boolean  "is_destroyed"
  end

  add_index "transfers", ["transfer_id"], name: "index_transfers_on_transfer_id", unique: true, using: :btree

  create_table "uniform_details", id: false, force: true do |t|
    t.string  "uniform_detail_id",  limit: 32,                           null: false
    t.string  "display",            limit: 200
    t.string  "uniform_id",         limit: 32
    t.string  "style_id",           limit: 32
    t.string  "color_id",           limit: 32
    t.string  "style_color_id",     limit: 32
    t.string  "uniform_detail_nbr", limit: 200
    t.string  "state",              limit: 200
    t.string  "from_grade_id",      limit: 32
    t.string  "thru_grade_id",      limit: 32
    t.boolean "is_required_male"
    t.boolean "is_required_female"
    t.boolean "is_optional_male"
    t.boolean "is_optional_female"
    t.boolean "is_includes_logo"
    t.boolean "is_requires_logo"
    t.string  "uniform_source",     limit: 200
    t.decimal "discount_percent",               precision: 11, scale: 2
    t.decimal "retail_price",                   precision: 11, scale: 2
    t.decimal "price_units",                    precision: 11, scale: 2
    t.boolean "is_approved"
    t.boolean "is_destroyed"
  end

  create_table "uniform_lookups", id: false, force: true do |t|
    t.string   "uniform_lookup_id",  limit: 32,                           null: false
    t.string   "display",            limit: 200
    t.string   "uniform_lookup_nbr", limit: 200
    t.string   "uniform_id",         limit: 32
    t.string   "account_id",         limit: 32
    t.string   "contract_id",        limit: 32
    t.string   "category_id",        limit: 32
    t.string   "product_id",         limit: 32
    t.string   "style_id",           limit: 32
    t.string   "color_id",           limit: 32
    t.string   "size_id",            limit: 32
    t.string   "sku_id",             limit: 32
    t.string   "grade_id",           limit: 32
    t.datetime "date_created"
    t.boolean  "is_required_male"
    t.boolean  "is_required_female"
    t.boolean  "is_optional_male"
    t.boolean  "is_optional_female"
    t.boolean  "is_includes_logo"
    t.boolean  "is_requires_logo"
    t.decimal  "discount_percent",               precision: 11, scale: 2
    t.string   "mark_uniform_key",   limit: 200
    t.string   "mark_stock_number",  limit: 200
    t.string   "mark_grades",        limit: 200
    t.decimal  "price_adjustment_1",             precision: 11, scale: 2
    t.decimal  "price_adjustment_2",             precision: 11, scale: 2
    t.string   "uniform_source",     limit: 32
    t.boolean  "is_approved"
    t.boolean  "is_destroyed"
  end

  create_table "uniforms", id: false, force: true do |t|
    t.string  "uniform_id",                     limit: 32,                            null: false
    t.string  "account_id",                     limit: 32
    t.string  "contract_id",                    limit: 32
    t.string  "display",                        limit: 200
    t.string  "uniform_nbr",                    limit: 200
    t.string  "uniform_name",                   limit: 200
    t.string  "description",                    limit: 4000
    t.string  "state",                          limit: 200
    t.string  "school_year",                    limit: 200
    t.decimal "discount_percent",                    precision: 11, scale: 2
    t.decimal "teacher_discount_percent",                    precision: 11, scale: 2
    t.decimal "administrator_discount_percent",              precision: 11, scale: 2
    t.boolean "is_discount_in_store"
    t.boolean "is_discount_on_web"
    t.boolean "is_free_shipping"
    t.boolean "is_destroyed"
  end

  create_table "user_roles", id: false, force: true do |t|
    t.string   "user_role_id",     limit: 32,                  null: false
    t.string   "user_id",          limit: 32,                  null: false
    t.string   "role_id",          limit: 32,                  null: false
    t.boolean  "is_enabled",                   default: true,  null: false
    t.boolean  "is_destroyed",                 default: false, null: false
    t.integer  "revision_number",              default: 0,     null: false
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "user_roles", ["user_id", "is_destroyed"], name: "index_user_roles_on_user_id_and_is_destroyed", using: :btree
  add_index "user_roles", ["user_role_id"], name: "index_user_roles_on_user_role_id", unique: true, using: :btree

  create_table "user_roles_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "user_roles_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "users", id: false, force: true do |t|
    t.string   "user_id",            limit: 32,                  null: false
    t.string   "email_address",      limit: 100,                 null: false
    t.string   "first_name",         limit: 100,                 null: false
    t.string   "last_name",          limit: 100,                 null: false
    t.string   "secret_question",    limit: 100
    t.string   "secret_answer",      limit: 100
    t.string   "secret_password",    limit: 100
    t.string   "user_name",          limit: 200
    t.string   "encrypted_password", limit: 200
    t.string   "sso_plugin_code",    limit: 10,                  null: false
    t.string   "api_token",          limit: 10,                  null: false
    t.boolean  "is_locked",                      default: false, null: false
    t.integer  "status",                         default: 0,     null: false
    t.boolean  "is_sys_admin",                   default: false, null: false
    t.boolean  "is_destroyed",                   default: false, null: false
    t.integer  "revision_number",                default: 0,     null: false
    t.string   "full_name",          limit: 200
    t.string   "user_cn",            limit: 200
    t.string   "audit_created_by",   limit: 100
    t.string   "audit_updated_by",   limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
  end

  add_index "users", ["api_token", "is_destroyed"], name: "index_users_on_api_token_and_is_destroyed", using: :btree
  add_index "users", ["email_address", "is_destroyed"], name: "index_users_on_email_address_and_is_destroyed", using: :btree
  add_index "users", ["is_destroyed", "email_address"], name: "index_users_on_is_destroyed_and_email_address", using: :btree
  add_index "users", ["user_id"], name: "index_users_on_user_id", unique: true, using: :btree
  add_index "users", ["user_name", "is_destroyed"], name: "index_users_on_user_name_and_is_destroyed", using: :btree

  create_table "users_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "users_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

  create_table "vendors", id: false, force: true do |t|
    t.string  "vendor_id",       limit: 32,                  null: false
    t.string  "name",            limit: 100,                 null: false
    t.string  "description",     limit: 400,                 null: false
    t.boolean "is_enabled",                  default: true,  null: false
    t.boolean "is_destroyed",                default: false, null: false
    t.integer "revision_number",             default: 0,     null: false
  end

  add_index "vendors", ["vendor_id", "is_destroyed"], name: "avail_vendors", using: :btree
  add_index "vendors", ["vendor_id"], name: "index_vendors_on_vendor_id", unique: true, using: :btree

  create_table "vouchers", id: false, force: true do |t|
    t.string   "voucher_id",      limit: 32,                           null: false
    t.string   "display",         limit: 200
    t.string   "customer_id",     limit: 32
    t.string   "voucher_nbr",     limit: 200
    t.string   "voucher_type",    limit: 200
    t.decimal  "initial_balance",             precision: 11, scale: 2
    t.decimal  "current_balance",             precision: 11, scale: 2
    t.datetime "issue_date"
    t.datetime "expiration_date"
    t.string   "state",           limit: 200
    t.boolean  "is_destroyed"
  end

  create_table "web_hooks", id: false, force: true do |t|
    t.string   "web_hook_id",                                 null: false
    t.string   "receive_url",      limit: 400,                null: false
    t.string   "head_attribute",   limit: 50
    t.string   "head_value"
    t.string   "post_attribute",   limit: 50
    t.string   "post_value"
    t.string   "user_id",                                     null: false
    t.boolean  "is_enabled",                   default: true
    t.integer  "is_destroyed",                 default: 1
    t.string   "audit_created_by", limit: 100
    t.string   "audit_updated_by", limit: 100
    t.datetime "audit_created_at"
    t.datetime "audit_updated_at"
    t.integer  "revision_number",              default: 1
  end

  add_index "web_hooks", ["web_hook_id"], name: "index_web_hooks_on_web_hook_id", unique: true, using: :btree

  create_table "web_hooks_aa", id: false, force: true do |t|
    t.string "attribute_audit_id", limit: 32, null: false
    t.string "model_audit_id",     limit: 32, null: false
    t.string "attribute_name",     limit: 60, null: false
    t.text   "before"
    t.text   "after"
  end

  create_table "web_hooks_ma", id: false, force: true do |t|
    t.string   "model_audit_id", limit: 32,  null: false
    t.string   "model_id",       limit: 32,  null: false
    t.string   "user_id",        limit: 200, null: false
    t.string   "action",         limit: 20,  null: false
    t.datetime "audited_at"
  end

end
