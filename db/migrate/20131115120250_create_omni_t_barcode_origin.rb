class CreateOmniTBarcodeOrigin < ActiveRecord::Migration
  def change
  	# ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	# unless (@connection.columns('t_barcode_origin').count > 0 || @connection.columns('T_BARCODE_ORIGIN').count > 0)
      create_table(:t_barcode_origin, :id => false) do |t|
        t.column   :id,                              :string,            null: true,    limit: 32
        t.column   :barcode_origin_nbr,              :string,            null: false
        t.column   :description,                     :string,            null: true,    limit: 200
        t.column   :short_name,                      :string,            null: true,    :limit   => 40
      end
    # end
    # ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
