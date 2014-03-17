Ext.define('Omni.view.periods.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-periods-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'period_id',
      value:      this.record.get('period_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      period_idLabel:                         Omni.i18n.model.Period.period_id,    
      displayLabel:                           Omni.i18n.model.Period.display,    
      start_dateLabel:                        Omni.i18n.model.Period.start_date,    
      end_dateLabel:                          Omni.i18n.model.Period.end_date,    
      year_numberLabel:                       Omni.i18n.model.Period.year_number,    
      period_numberLabel:                     Omni.i18n.model.Period.period_number,    
      is_destroyedLabel:                      Omni.i18n.model.Period.is_destroyed    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
          /*
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField: 'name', 
              queryField: 'name', 
              valueField: 'value_field', 
              itemTpl:'{name}',
              name: 'attribute_name', 
              fieldLabel: this.attribute_nameLabel, 
              allowBlank: true 
            }
          */

            { xtype: 'textfield', name: 'period_id',                      fieldLabel: this.period_idLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'start_date',                     fieldLabel: this.start_dateLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'end_date',                       fieldLabel: this.end_dateLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'year_number',                    fieldLabel: this.year_numberLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'period_number',                  fieldLabel: this.period_numberLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Periods',
      newTitle: 'New Period',
      newSubtitle: 'Complete the following to create a new Period'
    });
    // TITLES (End)

    this.callParent();
    
  }

});