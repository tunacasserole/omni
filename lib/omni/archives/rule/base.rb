class Omni::Rule::Base
# Class for running rules engine

def self.run(sla)
  logger.debug "\n\n *************- SLA ruleset: #{sla.ruleset.display.yellow}, rules: #{sla.ruleset.rules.count.to_s.yellow}\n\n"
  sla.ruleset.rules.select {|x| x.is_active}.each do |r|
    logger.debug ' - rule: ' + r.rule_action + ' ' + r.input_attribute + ' from ' + r.model_name + '.' + r.attribute_name
    update_row = ('Omni::' + r.model_name).constantize.where(:sku_id => sla.sku_id, :location_id => sla.location_id).first
    update_row.save
    logger.debug r.rule_action.upcase.cyan
    case r.rule_action
    when 'SUBTRACT'
      new_value = update_row.send(r.attribute_name) - sla.send(r.input_attribute) 
      logger.debug "*** SUBTRACTING #{sla.send(r.input_attribute)} from #{update_row.send(r.attribute_name)} = #{new_value}"  
    when 'ADD'
      new_value = update_row.send(r.attribute_name) + sla.send(r.input_attribute)
      logger.debug "*** ADDING #{update_row.send(r.attribute_name)} plus #{sla.send(r.input_attribute)} = #{new_value}"  
    when 'DATE'
      logger.debug "*** SETTING DATES ***"
      new_value = Date.today
    end
    logger.debug "**** UPDATING ****"
    logger.debug "**** new value: " + new_value.to_s
    #debugger
    update_row.send(r.attribute_name + '=', new_value)
    update_row.save
    #sla_log = Omni::StockLedgerActivityLog.create(:stock_ledger_activity_id => sla.stock_ledger_activity_id, :table_name => r.attribute_name, :column_name => r.attribute_name, :table_key_id => update_row.send(r.attribute_name.foreign_key), :stock_ledger_rule_action => r.rule_action)
    logger.debug "**** WROTE LOG ****"
  end
  logger.debug "**** POSTING SLA ****"
  sla.state = 'Posted' #Jason
  sla.posted_date = Date.today
  sla.save
end

end