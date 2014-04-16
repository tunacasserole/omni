class Omni::Data::Sync::SizeGroup < Omni::Data::Sync::Base

  def self.go
    excel_to_seed('SizeGroup','size_groups')
  end

  def self.map_to_db(row)
    size_group = Omni::SizeGroup.new(
      concatenated_name: row['short_name'],
      short_name: row['short_name'],
      display: row['long_name'],
     )

    puts "size_group could not be created for #{row['long_name'].to_s}" unless size_group.save
  end

  def self.de_dup
    delete_count = 0
    size_groupss = Omni::SizeGroup.all
    size_groupss.each do |s|
      used_count = Omni::SizeGroupGroupDetail.where(size_groups_id: s.size_groups_id).count
      next if used_count > 0
      dup_count = Omni::SizeGroup.where(display: s.display).count
      next if dup_count < 2
      delete_count += 1
      s.delete if dup_count > 1
    end

    puts "delete_count is #{delete_count}"
  end

end
