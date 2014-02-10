module Omni::Attachment

  def self.included(base)
    base.send(:include, InstanceMethods)
    base.send(:extend,  ClassMethods)

    # initializer calls here
    base.hook :after_create,   :process_file,   10

  end

  module ClassMethods
  end


  module InstanceMethods
      # self.receipt.upload if self.type == 'PACKING_LIST'

    def process_file
      # self.attachable.upload if attachable_type == 'Omni::Receipt'
      # x = Omni::ReceiptPackingList.new
      # x.upload self
    end

  end

end
