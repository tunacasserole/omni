class AlterSkus < ActiveRecord::Migration
  def change
    cols = ActiveRecord::Base.connection.columns(:skus).map {|x| x.name}
    ['mark_stock', 'mark_size', 'buckhead_identifier', 'grits_identifier' ].each do |col|
     t.column   :state,                           :string,            :null  =>  true,    :limit   => 100
         add_column(:skus, col, :string, :limit => 100, :null => true) unless cols.include?(col)
    end
  end
end
