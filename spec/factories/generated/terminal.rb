FactoryGirl.define do  factory :terminal, :class => Omni::Terminal do |o|
    o.terminal_id                       'terminal_id'
    o.display                           'display'
    o.location_id                       'location_id'
    o.terminal_nbr                      'terminal_nbr'
    o.mac_address                       'mac_address'
    o.local_server_ip                   'local_server_ip'
    o.hq_server_url                     'hq_server_url'
    o.receipt_printer_url               'receipt_printer_url'
    o.receipt_printer_ip                'receipt_printer_ip'
  end
end
