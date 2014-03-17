class Omni::Sync::SizeGroupDetail < Omni::Sync::Base

  def self.go
    excel_to_seed('SizeGroupDetail','size_group_details')
  end

  def self.map_to_db(row)
    size_group_id = Omni::SizeGroup.where(concatenated_name: row['size_group']).first ? Omni::SizeGroup.where(concatenated_name: row['size_group']).first.size_group_id : '00000NOSIZEGROUPFOUNDXXXXXXXXXXX'

    if Omni::Size.where(display: row['size']).first
      size_id = Omni::Size.where(display: row['size']).first.size_id
      size_group_detail = Omni::SizeGroupDetail.new(
        # display: row['display'],
        display_order: row['display_order'],
        size_group_id: size_group_id,
        size_id: size_id
       )

      puts "size_group_detail could not be created for #{row['display'].to_s} due to: #{size_group_detail.errors.full_messages}" unless size_group_detail.save
    else
      puts "no size found for #{row['size']}"
    end
  end

  def self.de_dup
    delete_count = 0
    size_group_detailss = Omni::SizeGroupDetail.all
    size_group_detailss.each do |s|
      used_count = Omni::SizeGroupDetailGroupDetail.where(size_group_details_id: s.size_group_details_id).count
      next if used_count > 0
      dup_count = Omni::SizeGroupDetail.where(display: s.display).count
      next if dup_count < 2
      delete_count += 1
      s.delete if dup_count > 1
    end

    puts "delete_count is #{delete_count}"
  end

end
