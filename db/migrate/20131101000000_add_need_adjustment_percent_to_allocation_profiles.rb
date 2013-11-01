class AddNeedAdjustmentPercentToAllocationProfiles < ActiveRecord::Migration
  def change

    add_column :allocation_profiles, :need_adjustment_percent,        :decimal,           :null  =>  true,    :scale   => 2,          :precision  => 11

  end
end