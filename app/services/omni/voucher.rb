class Omni::Voucher::Service
  include Buildit::Service::Base

  service 'Voucher', 'Omni.service'

  connected_mode(Buildit::Service::Backend::Crud) do |config|
    config.model = Omni::Voucher
  end

end # class Omni::Voucher::Service