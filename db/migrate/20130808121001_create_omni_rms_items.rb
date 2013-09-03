class CreateOmniRmsItems < ActiveRecord::Migration
  def change
  	#ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('rms_items')
      create_table(:rms_items, :id => false) do |t|
        t.column   :BinLocation,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :BuydownPrice,                    :integer,           :null  =>  true
        t.column   :BuydownQuantity,                 :integer,           :null  =>  true
        t.column   :CommissionAmount,                :integer,           :null  =>  true
        t.column   :CommissionMaximum,               :integer,           :null  =>  true
        t.column   :CommissionMode,                  :integer,           :null  =>  true
        t.column   :CommissionPercentProfit,         :integer,           :null  =>  true
        t.column   :CommissionPercentSale,           :integer,           :null  =>  true
        t.column   :Description,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :FoodStampable,                   :integer,           :null  =>  true
        t.column   :HQID,                            :integer,           :null  =>  true
        t.column   :ItemNotDiscountable,             :integer,           :null  =>  true
        t.column   :LastReceived,                    :string,            :null  =>  true,    :limit   => 255
        t.column   :LastUpdated,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :Notes,                           :string,            :null  =>  true,    :limit   => 255
        t.column   :QuantityCommitted,               :integer,           :null  =>  true
        t.column   :SerialNumberCount,               :integer,           :null  =>  true
        t.column   :TareWeightPercent,               :integer,           :null  =>  true
        t.column   :ID,                              :integer,           :null  =>  true
        t.column   :ItemLookupCode,                  :string,            :null  =>  true,    :limit   => 255
        t.column   :DepartmentID,                    :integer,           :null  =>  true
        t.column   :CategoryID,                      :integer,           :null  =>  true
        t.column   :MessageID,                       :integer,           :null  =>  true
        t.column   :Price,                           :string,            :null  =>  true,    :limit   => 255
        t.column   :PriceA,                          :string,            :null  =>  true,    :limit   => 255
        t.column   :PriceB,                          :string,            :null  =>  true,    :limit   => 255
        t.column   :PriceC,                          :string,            :null  =>  true,    :limit   => 255
        t.column   :SalePrice,                       :string,            :null  =>  true,    :limit   => 255
        t.column   :SaleStartDate,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :SaleEndDate,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :QuantityDiscountID,              :integer,           :null  =>  true
        t.column   :TaxID,                           :integer,           :null  =>  true
        t.column   :ItemType,                        :integer,           :null  =>  true
        t.column   :Cost,                            :string,            :null  =>  true,    :limit   => 255
        t.column   :Quantity,                        :integer,           :null  =>  true
        t.column   :ReorderPoint,                    :integer,           :null  =>  true
        t.column   :RestockLevel,                    :integer,           :null  =>  true
        t.column   :TareWeight,                      :integer,           :null  =>  true
        t.column   :SupplierID,                      :integer,           :null  =>  true
        t.column   :TagAlongItem,                    :integer,           :null  =>  true
        t.column   :TagAlongQuantity,                :integer,           :null  =>  true
        t.column   :ParentItem,                      :integer,           :null  =>  true
        t.column   :ParentQuantity,                  :integer,           :null  =>  true
        t.column   :BarcodeFormat,                   :integer,           :null  =>  true
        t.column   :PriceLowerBound,                 :integer,           :null  =>  true
        t.column   :PriceUpperBound,                 :integer,           :null  =>  true
        t.column   :PictureName,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :LastSold,                        :string,            :null  =>  true,    :limit   => 255
        t.column   :ExtendedDescription,             :string,            :null  =>  true,    :limit   => 255
        t.column   :SubDescription1,                 :string,            :null  =>  true,    :limit   => 255
        t.column   :SubDescription2,                 :string,            :null  =>  true,    :limit   => 255
        t.column   :SubDescription3,                 :string,            :null  =>  true,    :limit   => 255
        t.column   :UnitOfMeasure,                   :string,            :null  =>  true,    :limit   => 255
        t.column   :SubCategoryID,                   :integer,           :null  =>  true
        t.column   :QuantityEntryNotAllowed,         :integer,           :null  =>  true
        t.column   :PriceMustBeEntered,              :integer,           :null  =>  true
        t.column   :BlockSalesReason,                :string,            :null  =>  true,    :limit   => 255
        t.column   :BlockSalesAfterDate,             :integer,           :null  =>  true
        t.column   :Weight,                          :integer,           :null  =>  true
        t.column   :Taxable,                         :integer,           :null  =>  true
        t.column   :DBTimeStamp,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :BlockSalesBeforeDate,            :integer,           :null  =>  true
        t.column   :LastCost,                        :string,            :null  =>  true,    :limit   => 255
        t.column   :ReplacementCost,                 :integer,           :null  =>  true
        t.column   :WebItem,                         :integer,           :null  =>  true
        t.column   :BlockSalesType,                  :integer,           :null  =>  true
        t.column   :BlockSalesScheduleID,            :integer,           :null  =>  true
        t.column   :SaleType,                        :integer,           :null  =>  true
        t.column   :SaleScheduleID,                  :integer,           :null  =>  true
        t.column   :Consignment,                     :integer,           :null  =>  true
        t.column   :Inactive,                        :integer,           :null  =>  true
        t.column   :LastCounted,                     :integer,           :null  =>  true
        t.column   :DoNotOrder,                      :integer,           :null  =>  true
        t.column   :MSRP,                            :string,            :null  =>  true,    :limit   => 255
        t.column   :DateCreated,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :Content,                         :string,            :null  =>  true,    :limit   => 255
        t.column   :UsuallyShip,                     :string,            :null  =>  true,    :limit   => 255
        t.column   :NumberFormat,                    :integer,           :null  =>  true
        t.column   :ItemCannotBeRet,                 :integer,           :null  =>  true
        t.column   :ItemCannotBeSold,                :integer,           :null  =>  true
        t.column   :IsAutogenerated,                 :integer,           :null  =>  true
        t.column   :IsGlobalvoucher,                 :integer,           :null  =>  true
        t.column   :DeleteZeroBalanceEntry,          :integer,           :null  =>  true
        t.column   :TenderID,                        :integer,           :null  =>  true
      end
    end
    #ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
