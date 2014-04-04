#
#                   Copyright (c) 2012 BUILDIT.IO, Inc.
#                          ALL RIGHTS RESERVED
#
#  THIS PROGRAM CONTAINS PROPRIETARY INFORMATION OF BUILDIT.IO, INC.
#  --------------------------------------------------------------------
#
#  THIS PROGRAM CONTAINS THE CONFIDENTIAL AND/OR PROPRIETARY INFORMATION
#  OF BUILDIT.IO, INC. ANY DUPLICATION, MODIFICATION, DISTRIBUTION, PUBLIC
#  PERFORMANCE, OR PUBLIC DISPLAY OF THIS PROGRAM, OR ANY PORTION OR
#  DERIVATION THEREOF WITHOUT THE EXPRESS WRITTEN CONSENT OF
#  BUILDIT.IO, INC. IS STRICTLY PROHIBITED.  USE OR DISCLOSURE OF THIS
#  PROGRAM DOES NOT CONVEY ANY RIGHTS TO REPRODUCE, DISCLOSE OR DISTRIBUTE
#  ITS CONTENTS, OR TO MANUFACTURE, USE, OR SELL ANYTHING THAT CONTAINS IN
#  WHOLE OR IN PART ANY ASPECT OF THIS PROGRAM.
#


class Omni::Util::Data::Search

  # The following is a centralized mechanism for performing all of the search capabilities provided
  # by the full-text search engine. This may be utilized via external clients that are routed through
  # the Direct controller, or anywhere throughout the server side classes as needed.
  # Unlike conventional ActiveRecord based queries (AREL), this mechanism requires that the underlying
  # model support searching via SOLR. If the model does not support searching, the method will be
  # exited with a total count of zero(0) and an empty collection.
  #
  def self.perform(params={})

    result    = 0, []

    model     = params.delete(:model)
    page      = params.delete(:page)     || 1
    start     = params.delete(:start)    || 0
    limit     = params.delete(:limit)    || 25
    sorters   = params.delete(:sort)     || []
    ouch  = params.delete(:search)   || {}

    criteria  = params.delete(:criteria)

    search_supported = false

    begin
      search_supported = model.searchable?
    rescue
    end

    return result unless search_supported

    includes = fetch_mappings(model) || []
    ordering = fetch_ordering(sorters)
    query = model.search(:include => includes) do
      fulltext criteria
      order_by(ordering.first, ordering.last) if ordering != []
      paginate :page => page, :per_page => limit
    end

    return marshall_models(model, query.results), query.total

  end # def self.perform



  private

  def self.fetch_ordering(sorters)
    ordering = []
    unless sorters.nil? || sorters == {} || sorters == []
      defn = sorters.first
      direction = (defn['direction'] == 'ASC' ? :asc : :desc)
      ordering = [defn['property'], direction]
    end
    ordering
  end # def fetch_ordering

  def self.fetch_mappings(model)
    result = []

    model.buildit_mapped_attributes.each do |k,v|
      assoc = v[:to].split('.').first
      result << assoc.to_sym unless result.include?(assoc.to_sym)
    end

    result
  end # def fetch_mappings

  def self.marshall_models(model, models_array)
    results = []

    models_array.each do |rec|
      row = {}
      rec.attributes.each do |k, v|
        val = (v.kind_of?(BigDecimal) ? v.to_i : v)
        row.merge!(k => val)
      end

      (model.buildit_mapped_attributes || {}).each do |k, v|
        result = rec
        v[:to].split('.').each { |path| result = result.send(path) unless result.nil? }
        row.merge!({k.to_s => result})
      end
      results << row
    end

    results
  end # def marshall_models

end # class Buildit::Util::Search
