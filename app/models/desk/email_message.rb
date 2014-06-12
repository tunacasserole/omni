class Desk::EmailMessage < ActiveRecord::Base

  # MIXINS (Start) ======================================================================
  # include Buildit::Comm::Email::Helpers
  # MIXINS (End)

  # METADATA (Start) ====================================================================
  self.table_name   = :email_messages
  self.primary_key  = :email_message_id

  # VALIDATIONS (Start) =================================================================
  validates :email_message_id,                        :presence      => true
  # VALIDATIONS (End)

  # DEFAULTS (Start) ====================================================================
  default :email_message_id,                          with: :guid
  # DEFAULTS (End)

  def notify
    puts "notifying"

    # if self.email_addresses.length > 0
    #   message = Buildit::Comm::Email::Message.create(
    #       subject: self.subject,
    #       body: self.body
    #   )

    #   message.send_to self.email_addresses
    #   message.queue
    #   Buildit::Comm::Email::OutboundService.process
    #   email_addresses.each { |x| puts x}
    # end
  end # def notify
end
