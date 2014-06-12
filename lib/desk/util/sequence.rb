class Omni::Util::Sequence

  def self.update
    Buildit::Sequence.all.each do |s|
      table_name = s.sequence_code.chop.chop.chop.chop.tableize
      puts "resequencing #{table_name}"
      next unless ActiveRecord::Base.connection.table_exists? table_name

      count_sql = "select count(*) from #{table_name}"
      count = ActiveRecord::Base.connection.execute count_sql
      next unless count.first[0] > 0

      max_sql = "SELECT max(CONVERT(SUBSTRING_INDEX(#{s.sequence_code},'-',-1),UNSIGNED INTEGER)) AS num FROM #{table_name} ORDER BY num;"
      result = ActiveRecord::Base.connection.execute max_sql
      next unless result.first[0]

      s.value = result.first[0] + 1
      s.save
    end
  end

  def self.re_sequence(model_name)
      sequence_code = table_name.chop.upcase + "_NBR"
      data = "Omni::#{model_name}".constantize.all.order("#{sequence_code}")
      data.each_with_index {|x| x.send(sequence_code, i + 999)}

      # # reset last_used_nbr in sequences table
      # seq = Buildit::Sequence.where(sequence_code: sequence_code).first
      # if seq
      #   seq.value = new_max
      #   seq.save
      # else
      #   puts "sequence entry not found for #{sequence_code}"
      # end
    end

    def self.seq(table_name)
      sequence_code = table_name.chop.upcase + "_NBR"
      seq = Buildit::Sequence.where(sequence_code: sequence_code).first
      if seq
        seq.value = 1000
        seq.save
      else
        puts "sequence entry not found for #{sequence_code}"
      end
    end
end
