class Omni::Util::User

  def self.id(options={})
    Buildit::User.current ? Buildit::User.current.user_id : '811166D4D50A11E2B45820C9D04AARON'
  end


end
