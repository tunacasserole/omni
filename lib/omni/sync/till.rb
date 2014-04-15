class Omni::Sync::Till < Omni::Sync::Base

  def self.go
    Omni::Till.all.each { |till| Omni::Tender.all.each { |tender| till.till_details.create( tender_id: tender.tender_id ) } }
  end

end


