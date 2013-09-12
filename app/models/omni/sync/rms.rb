  class Omni::Sync::Rms

  def self.inventories
    puts "Omni::Sync::Rms.inventories"
    # Process each time dynamics row and create an Omni inventory row where on_hand_units = SnapShotQuantity
    data = Omni::RmsItemDynamic.where(:LastSold > Date.parse('31-12-2010'))
    
    puts  "DONE EXPORTING FROM RMS AT: #{Time.now.to_s}"
  end

  def self.period_results
    puts "Omni::Sync::Rms.period_results"
    # Process each row from Bob's extract and an Omni perion_results row where work_in_process_units = qoo


    puts  "DONE EXPORTING FROM RMS AT: #{Time.now.to_s}"
  end

end