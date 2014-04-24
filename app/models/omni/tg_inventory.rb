class Omni::TgInventory < ActiveRecord::Base
  # METADATA (Start) ====================================================================
  self.table_name                 = :tg_inventory
  self.primary_key                = :ITEM
  # METADATA (End)

  # BEHAVIOR (Start) ====================================================================
  # supports_fulltext
  # BEHAVIOR (End)

  # VALIDATIONS (Start) =================================================================
  # validates :id,                        :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  # default :id,                          with: :guid
  # DEFAULTS (End)

  # ASSOCIATIONS (Start) ================================================================
  # ASSOCIATIONS (End)

  # MAPPED ATTRIBUTES (Start) ===========================================================
  # MAPPED ATTRIBUTES (End)

  # ORDERING (Start) ====================================================================
  # ORDERING (End)

  # INDEXING (Start) ====================================================================
  # searchable do
  #   integer   :stock_nbr
  #   string    :size

  #   # text     :stock_nbr, using: :stock_nbr
  #   # text     :size, using: :size
  # end
  # INDEXING (End)

  # HOOKS (Start) =======================================================================
  # HOOKS (End)

  # STATES (Start) ====================================================================
  # STATES (End)

  # HELPERS (Start) =====================================================================
  # HELPERS (End)


  def display_as
    # self.display
  end
end # class Omni::TgInventory
