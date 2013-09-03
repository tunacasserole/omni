class CreateOmniRmsItemDynamics < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('rms_item_dynamics')
      create_table(:rms_item_dynamics, :id => false) do |t|
        t.column   :ID,                              :integer,           :null  =>  true
        t.column   :ItemID,                          :integer,           :null  =>  true
        t.column   :StoreID,                         :integer,           :null  =>  true
        t.column   :TaxID,                           :integer,           :null  =>  true
        t.column   :Quantity,                        :integer,           :null  =>  true
        t.column   :QuantityCommitted,               :integer,           :null  =>  true
        t.column   :ReorderPoint,                    :integer,           :null  =>  true
        t.column   :RestockLevel,                    :integer,           :null  =>  true
        t.column   :LastReceived,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :LastSold,                        :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotQuantity,                :integer,           :null  =>  true
        t.column   :SnapShotQuantityCommitted,       :integer,           :null  =>  true
        t.column   :DeltaQuantity,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :DeltaQuantityCommitted,          :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotTime,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :DBTimeStamp,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotPrice,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotPriceA,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotPriceB,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotPriceC,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotSalePrice,               :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotSaleStartDate,           :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotSaleEndDate,             :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotCost,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotLastCost,                :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotReplacementCost,         :integer,           :null  =>  true
        t.column   :SnapShotPriceLowerBound,         :integer,           :null  =>  true
        t.column   :SnapShotPriceUpperBound,         :integer,           :null  =>  true
        t.column   :SnapShotReorderPoint,            :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotRestockLevel,            :string,            :null  =>  true,    :limit   => 255
        t.column   :SnapShotTaxID,                   :integer,           :null  =>  true
        t.column   :Price,                           :string,            :null  =>  true,    :limit   => 255
        t.column   :Cost,                            :string,            :null  =>  true,    :limit   => 255
        t.column   :PriceLevelA,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :PriceLevelB,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :PriceLevelC,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :MSRP,                            :string,            :null  =>  true,    :limit   => 255
        t.column   :SalePrice,                       :string,            :null  =>  true,    :limit   => 255
        t.column   :SaleStartDate,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :SaleEndDate,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :LowerBound,                      :integer,           :null  =>  true
        t.column   :UpperBound,                      :integer,           :null  =>  true
        t.column   :BuydownPrice,                    :integer,           :null  =>  true
        t.column   :BuydownQuantity,                 :integer,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
