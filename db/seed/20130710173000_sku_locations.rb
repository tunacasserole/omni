Omni::PeriodResult.all.each do |pr|
  Omni::SkuLocation.create(:sku_id => pr.sku_id, :location_id => pr.location_id)
end