class Omni::Data::Sync::Till

  def self.go
    # create a till detail row for every tender type for every till in the system
    Omni::Till.all.each { |till| Omni::Tender.all.each { |tender| till.till_details.create( tender_id: tender.tender_id ) } }
  end

end


