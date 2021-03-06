class AddIndexes < ActiveRecord::Migration
  def change
    add_index(:accounts, [:account_id], :unique => true) unless index_exists?(:accounts, [:account_id], :unique => true)
    add_index(:contacts, [:contact_id], :unique => true) unless index_exists?(:contacts, [:contact_id], :unique => true)
    add_index(:donations, [:donation_id], :unique => true) unless index_exists?(:donations, [:donation_id], :unique => true)
    add_index(:account_grades, [:account_grade_id], :unique => true) unless index_exists?(:account_grades, [:account_grade_id], :unique => true)
    add_index(:enrollments, [:enrollment_id], :unique => true) unless index_exists?(:enrollments, [:enrollment_id], :unique => true)
    add_index(:account_tax_authorities, [:account_tax_authority_id], :unique => true) unless index_exists?(:account_tax_authorities, [:account_tax_authority_id], :unique => true)
    add_index(:adjustments, [:adjustment_id], :unique => true) unless index_exists?(:adjustments, [:adjustment_id], :unique => true)
    add_index(:adjustment_reasons, [:adjustment_reason_id], :unique => true) unless index_exists?(:adjustment_reasons, [:adjustment_reason_id], :unique => true)
    add_index(:allocations, [:allocation_id], :unique => true) unless index_exists?(:allocations, [:allocation_id], :unique => true)
    add_index(:allocation_details, [:allocation_detail_id], :unique => true) unless index_exists?(:allocation_details, [:allocation_detail_id], :unique => true)
    add_index(:allocation_profiles, [:allocation_profile_id], :unique => true) unless index_exists?(:allocation_profiles, [:allocation_profile_id], :unique => true)
    add_index(:categories,      [:category_id],      :unique => true) unless index_exists?(:categories,      [:category_id],      :unique => true)
    add_index(:classifications, [:classification_id], :unique => true) unless index_exists?(:classifications, [:classification_id], :unique => true)
    add_index(:colors, [:color_id], :unique => true) unless index_exists?(:colors, [:color_id], :unique => true)
    add_index(:companies, [:company_id], :unique => true) unless index_exists?(:companies, [:company_id], :unique => true)
    add_index(:departments, [:department_id], :unique => true) unless index_exists?(:departments, [:department_id], :unique => true)
    add_index(:daily_results, [:daily_result_id], :unique => true) unless index_exists?(:daily_results, [:daily_result_id], :unique => true)
    # add_index(:daily_results, [:sku_id], :unique => false) unless index_exists?(:daily_results, [:sku_id], :unique => false)
    # add_index(:daily_results, [:location_id], :unique => false) unless index_exists?(:daily_results, [:location_id], :unique => false)
    add_index(:inventories, [:inventory_id], :unique => true) unless index_exists?(:inventories, [:inventory_id], :unique => true)
    # add_index(:inventories, [:sku_id], :unique => false) unless index_exists?(:inventories, [:sku_id], :unique => false)
    # add_index(:inventories, [:location_id], :unique => false) unless index_exists?(:inventories, [:location_id], :unique => false)
    add_index(:jobs, [:job_id], :unique => true) unless index_exists?(:jobs, [:job_id], :unique => true)
    add_index(:locations, [:location_id], :unique => true) unless index_exists?(:locations, [:location_id], :unique => true)
    add_index(:orders, [:order_id], :unique => true) unless index_exists?(:orders, [:order_id], :unique => true)
    add_index(:order_details, [:order_detail_id], :unique => true) unless index_exists?(:order_details, [:order_detail_id], :unique => true)
    add_index(:period_results, [:period_result_id], :unique => true) unless index_exists?(:period_results, [:period_result_id], :unique => true)
    # add_index(:period_results, [:sku_id], :unique => false) unless index_exists?(:period_results, [:sku_id], :unique => false)
    # add_index(:period_results, [:location_id], :unique => false) unless index_exists?(:period_results, [:location_id], :unique => false)
    add_index(:payments, [:payment_id], :unique => true) unless index_exists?(:payments, [:payment_id], :unique => true)
    add_index(:picks, [:pick_id], :unique => true) unless index_exists?(:picks, [:pick_id], :unique => true)
    add_index(:orders_hd, [:order_nbr], :unique => true) unless index_exists?(:orders_hd, [:order_nbr], :unique => true)
    add_index(:orders_li, [:order_nbr], :unique => false) unless index_exists?(:orders_li, [:order_nbr], :unique => false)
    add_index(:projections, [:projection_id], :unique => true) unless index_exists?(:projections, [:projection_id], :unique => true)
    add_index(:projection_details, [:projection_detail_id], :unique => true) unless index_exists?(:projection_details, [:projection_detail_id], :unique => true)
    add_index(:projection_locations, [:projection_location_id], :unique => true) unless index_exists?(:projection_locations, [:projection_location_id], :unique => true)
    add_index(:purchases, [:purchase_id], :unique => true) unless index_exists?(:purchases, [:purchase_id], :unique => true)
    add_index(:purchase_details, [:purchase_detail_id], :unique => true) unless index_exists?(:purchase_details, [:purchase_detail_id], :unique => true)
    add_index(:purchase_allocations, [:purchase_allocation_id], :unique => true) unless index_exists?(:purchase_allocations, [:purchase_allocation_id], :unique => true)
    add_index(:receipts, [:receipt_id], :unique => true) unless index_exists?(:receipts, [:receipt_id], :unique => true)
    add_index(:receipt_details, [:receipt_detail_id], :unique => true) unless index_exists?(:receipt_details, [:receipt_detail_id], :unique => true)
    add_index(:receipt_allocations, [:receipt_allocation_id], :unique => true) unless index_exists?(:receipt_allocations, [:receipt_allocation_id], :unique => true)
    add_index(:receipt_formats, [:receipt_format_id], :unique => true) unless index_exists?(:receipt_formats, [:receipt_format_id], :unique => true)
    add_index(:receipt_purchases, [:receipt_purchase_id], :unique => true) unless index_exists?(:receipt_purchases, [:receipt_purchase_id], :unique => true)
    add_index(:regions, [:region_id], :unique => true) unless index_exists?(:regions, [:region_id], :unique => true)
    add_index(:sizes, [:size_id], :unique => true) unless index_exists?(:sizes, [:size_id], :unique => true)
    add_index(:size_groups, [:size_group_id], :unique => false) unless index_exists?(:size_groups, [:size_group_id], :unique => false)
    # add_index(:size_group_details, [:size_group_id], :unique => false) unless index_exists?(:size_group_details, [:size_group_id], :unique => false)
    add_index(:size_group_details, [:size_group_detail_id], :unique => false) unless index_exists?(:size_group_details, [:size_group_detail_id], :unique => false)
    add_index(:stock_ledger_activities, [:stock_ledger_activity_id], :unique => true) unless index_exists?(:stock_ledger_activities, [:stock_ledger_activity_id], :unique => true)
    add_index(:skus, [:sku_id], :unique => true) unless index_exists?(:skus, [:sku_id], :unique => true)
    add_index(:sku_aliases, [:sku_alias_id], :unique => true) unless index_exists?(:sku_aliases, [:sku_alias_id], :unique => true)
    add_index(:sku_prices, [:sku_price_id], :unique => true) unless index_exists?(:sku_prices, [:sku_price_id], :unique => true)
    add_index(:sku_suppliers, [:sku_supplier_id], :unique => true) unless index_exists?(:sku_suppliers, [:sku_supplier_id], :unique => true)
    add_index(:skus, [:style_id], :unique => false) unless index_exists?(:skus, [:style_id], :unique => false)
    add_index(:styles, [:style_id], :unique => true) unless index_exists?(:styles, [:style_id], :unique => true)
    # add_index(:styles, [:subclass_id], :unique => false) unless index_exists?(:styles, [:subclass_id], :unique => false)
    add_index(:style_colors, [:style_color_id], :unique => true) unless index_exists?(:style_colors, [:style_color_id], :unique => true)
    add_index(:style_suppliers, [:style_supplier_id], :unique => true) unless index_exists?(:style_suppliers, [:style_supplier_id], :unique => true)
    add_index(:style_supplier_colors, [:style_supplier_color_id], :unique => true) unless index_exists?(:style_supplier_colors, [:style_supplier_color_id], :unique => true)
    add_index(:style_locations, [:style_location_id], :unique => true) unless index_exists?(:style_locations, [:style_location_id], :unique => true)
    add_index(:style_color_sizes, [:style_color_size_id], :unique => true) unless index_exists?(:style_color_sizes, [:style_color_size_id], :unique => true)
    add_index(:subclasses, [:subclass_id], :unique => true) unless index_exists?(:subclasses, [:subclass_id], :unique => true)
    add_index(:suppliers, [:supplier_id], :unique => true) unless index_exists?(:suppliers, [:supplier_id], :unique => true)
    add_index(:tenders, [:tender_id], :unique => true) unless index_exists?(:tenders, [:tender_id], :unique => true)
    add_index(:transfers, [:transfer_id], :unique => true) unless index_exists?(:transfers, [:transfer_id], :unique => true)
    add_index(:tills, [:till_id], :unique => true) unless index_exists?(:tills, [:till_id], :unique => true)
    add_index(:terminals, [:terminal_id], :unique => true) unless index_exists?(:terminals, [:terminal_id], :unique => true)
    # add_index(:styles, [:display], :unique => true) unless index_exists?(:styles, [:display], :unique => true)
    # add_index(:skus_load, [:style_name], :unique => false) unless index_exists?(:styles, [:style_name], :unique => false)
    # add_index(:skus_load, [:color_name], :unique => false) unless index_exists?(:styles, [:color_name], :unique => false)
  end
end
