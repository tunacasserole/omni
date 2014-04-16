class Omni::Data::Sync::Supplier < Omni::Data::Sync::Base

  def self.go
    excel_to_seed('Supplier','suppliers')
  end

  def self.map_to_db(row)
    supplier = Omni::Supplier.new(
      supplier_name: row['supplier_name'],
      # supplier_nbr: row['supplier_nbr'],
      description: row['description'],
      line_1: row['line_1'],
      line_2: row['line_2'],
      city: row['city'],
      state_code: row['state_code'],
      zip: row['zip'],
      country: row['country'],
      phone: row['phone'],
      legacy_supplier_code: row['legacy_supplier_code'],
      # default_payment_term: row['default_payment_term'],
     )

    puts "supplier could not be created for #{row['supplier_name'].to_s} due to: #{supplier.errors.full_messages}" unless supplier.save
  end

  def self.update_descriptions
    Omni::Supplier.all.each do |x|
      next if x.description
      puts "x.display is #{x.display} and stripped is #{x.display.strip}"
      x.description = x.display
      x.save
    end# update_descriptions
  end

  def self.update_guids
    Omni::Supplier.all.each do |x|
      # puts x.supplier_id
      x.supplier_id = Buildit::Util::Guid.generate
      x.save
    end
  end

end


