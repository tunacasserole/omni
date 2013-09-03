class Omni::Meta::Csv < Omni::Meta::Base
  
  def self.run(model)
    model = @@m
    template_folder = File.join(Dir.home, 'Dropbox', 'omni', 'data', 'templates')
    template_file =  File.join(template_folder, "csv_templates.csv") 
    #content = ::ERB.new('').result(binding)
    File.open(template_file, 'a') {|file| file.print ''}

    contents = Buildit::Util::File.read_contents(template_file)
    contents << model.model_name + ',' + 'display,'
   
    @@attributes.reject {|row| row["mapping_\ntype"] == 'mapped' or row["attribute_name"] == 'display' or row["attribute_name"] == 'is_destroyed' or row["attribute_name"] == model.primary_attribute}.each_with_index do |row, i| 
      contents << "*" if row["allows_\nnull"] == 'FALSE'
      contents << "(l)" if row['lookups'] == 'TRUE'
      contents << "#{row['attribute_name']},"
      #contents << "," if a.attribute_name != 'is_destroyed'
    end

    contents.chop!
    contents << "\n"
    File.open(template_file, 'w') {|file| file.print contents}
  end

end