require 'prawn'
class Omni::Print::Manager < Omni::Print::Base

  def self.run(print_id)
    # Omni::Print::Base.constants
    # Prawn::Document.generate("implicit.pdf") do |pdf|
    #   pdf.text "Hello World"
    # end
    # FileUtils.mv(File.join(@@home_dir, 'implicit.pdf'), @@pdf_dir)

  end
end
