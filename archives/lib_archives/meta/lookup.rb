class Omni::Meta::Lookup < Omni::Import::Base

  def self.run_all
    @@lookups = Omni::Import::Base.excel_to_hash @@data_folder, @@data_file, 'lookups'
    if Buildit::Lookup.all.count < @@lookups.count()
      @@lookups.each do |row|
        #puts row['code']
        category = row['category'].to_s.strip.tr(' ','_').upcase
        code = row['code'].to_s.strip.sub("'","").upcase.sub('.0','')
        default_text = row['default_text'].to_s.sub("'","")
        position = row['display_order']
        if !Buildit::Lookup.where(:category => category, :code => code).first
          l = Buildit::Lookup.create(:code => code, :category => category, :default_text => default_text, :position => position) 
          debugger if !l.valid?
        end
      end
    end
  end 

  def self.load_meta
    # destroy existing meta
    #Buildit::LookupMeta.all.each {|x| x.destroy}
    #Buildit::LookupCategoryMeta.all.each {|x| x.destroy}
    # grab lookup values from core_data workbook
    @@lookups = Omni::Import::Base.excel_to_hash @@data_folder, @@data_file, 'lookups'
    if Buildit::LookupMeta.all.count < @@lookups.count
      @@lookups.each do |row|
        category = row['category'].to_s.strip.tr(' ','_').upcase
        puts '  category: ' + row['category'] + '  code: ' + row['code']
        # Create Category
        Buildit::LookupCategoryMeta.all(:category_name => category).first
        cat_meta = Buildit::LookupCategoryMeta.all(:category_name => category).first || Buildit::LookupCategoryMeta.new(:category_name => category)
        cat_meta.display_name = category
        cat_meta.project_id = '0C391A30852011E28A1F123139183A42'
        cat_meta.package_name = 'omni'        
        cat_meta.save
        # Create Lookup
        code = row['code'].to_s.strip.sub("'","").sub('.0','').upcase
        lookup_meta = Buildit::LookupMeta.all(:lookup_category_meta_id => cat_meta.lookup_category_meta_id, :code => code).first || Buildit::LookupMeta.new(:lookup_category_meta_id => cat_meta.lookup_category_meta_id, :code => code)
        lookup_meta.project_id = '0C391A30852011E28A1F123139183A42'
        lookup_meta.package_name = 'omni'
        lookup_meta.code = code
        lookup_meta.default_text = row['default_text'].to_s.sub("'","")
        lookup_meta.position = row['display_order']     
        lookup_meta.save

      end
    end
  end 

end  