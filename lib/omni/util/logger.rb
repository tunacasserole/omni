class Omni::Util::Logger

  # This is a wrapper class for calling the rails logger

  def self.go(message, options={})

    # log types "info,warn,error,fatal, and debug (don't use debug - doesn't shew up for some reason)"

    time  = options.delete(:time) || true

    if time
      logger.info { "#{time_stamp} #{message}" }
    else
      logger.info { message }
    end

    # logger.info "info testing***************************"
    # logger.warn "warn testing***************************"
    # logger.error "error testing***************************"
  end

  # private

  def self.time_stamp
    "== #{Time.now.strftime("%H:%M:%S").yellow}"
  end

end
