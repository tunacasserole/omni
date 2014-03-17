FactoryGirl.define do
  factory Buildit::Note do
   sequence(:detail) {|n| "test #{n}"}
  end
  factory Buildit::User do
   sequence(:email_address) {|n| "test #{n}"}
   sequence(:first_name) {|n| "test #{n}"}
   sequence(:last_name) {|n| "test #{n}"}
   sequence(:password) {|n| "test #{n}"}
   sequence(:password_confirmation) {|n| "test #{n}"}
  end
end
