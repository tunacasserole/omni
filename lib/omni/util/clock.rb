require 'progress_bar'

class Omni::Util::Clock

  # The following is a utility class for timing processes, outputting progress info and eventually, creating progress bars

  def self.go(options={})

    row  = options.delete(:row) || 0
    interval  = options.delete(:interval)  || 1000
    message  = options.delete(:message) || 'processing'
    verbose   = options.delete(:verbose)  || true
    total  = options.delete(:total) || 0
    pct_complete = total == 0 ? 0 : (row.to_f / total.to_f * 100).to_i
    # bar = ProgressBar.new(1000)
    puts "#{stamp} #{pct_complete}% (#{row}/#{total}): #{message}" if verbose && (row % interval == 0)

  end


  def self.stamp(options={})
    message  = options.delete(:message)
    "== #{Time.now.strftime("%H:%M:%S").yellow} #{message}"
  end

end
