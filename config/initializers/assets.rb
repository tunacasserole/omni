class Exception
  def blame_file!( file )
    # puts "CULPRIT >> '#{file.to_s}' # #{self.to_s}"
  end
end

Rails.application.config.assets.precompile << 'omni_desktop.css'
Rails.application.config.assets.precompile << 'omni_desktop.js'