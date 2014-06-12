class Omni::Data::Sync::Account

  def self.go
    excel_to_seed('Account','accounts')
  end

  def self.map_to_db(row)
    location_id = Omni::Location.where(display: row['location_name']).first.location_id if Omni::Location.where(display: row['location_name']).first

    account = Omni::Account.new(
      display: row['display'],
      account_name: row['account_name'],
      school_nbr: row['school_nbr'],
      billing_line_1: row['line_1'],
      billing_line_2: row['line_2'],
      billing_city: row['city'],
      billing_state: row['state_code'],
      billing_zip: row['zip'],
      billing_country: row['country'],
      billing_phone: row['phone'],
      location_id: location_id,
      school_gender: row['school_gender'],
      is_on_web: row['is_on_web'],
      is_exclusive: row['is_exclusive']
     )

    puts "account could not be created for #{row['display'].to_s} due to: #{account.errors.full_messages}" unless account.save
  end

  def self.de_dup
    delete_count = 0
    accountss = Omni::Account.all
    accountss.each do |s|
      used_count = Omni::AccountGroupDetail.where(accounts_id: s.accounts_id).count
      next if used_count > 0
      dup_count = Omni::Account.where(display: s.display).count
      next if dup_count < 2
      delete_count += 1
      s.delete if dup_count > 1
    end

    puts "delete_count is #{delete_count}"
  end

  def self.upcase_all
    Omni::Account.all.each do |x|
      puts x.display
      x.display = x.display.upcase
      x.account_name = x.account_name.upcase
      x.save
    end
  end

  def self.descriptions
    Omni::Account.all.each do |x|
      x.description = x.display.gsub!(/\s+/, "")
      x.save
    end
  end
end
