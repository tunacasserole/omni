class Desk::Helper::Sequence

  def self.update
    Buildit::Sequence.all.each do |s|
      table_name = s.sequence_code.chop.chop.chop.chop.tableize
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
end
