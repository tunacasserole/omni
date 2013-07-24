Ext.define('Omni.view.periods.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-periods-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      start_dateLabel:                            Omni.i18n.model.Period.start_date,
      end_dateLabel:                              Omni.i18n.model.Period.end_date,
      year_numberLabel:                           Omni.i18n.model.Period.year_number,
      period_numberLabel:                         Omni.i18n.model.Period.period_number
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype: 'fieldset',
          title: 'General',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'start_date',                     fieldLabel: this.start_dateLabel,                 allowBlank: false,  disabled: false,    xtype: 'datefield'        },
            { name: 'end_date',                       fieldLabel: this.end_dateLabel,                   allowBlank: false,  disabled: false,    xtype: 'datefield'        },
            { name: 'year_number',                    fieldLabel: this.year_numberLabel,                allowBlank: false,  disabled: false,    xtype: 'textfield'        },
            { name: 'period_number',                  fieldLabel: this.period_numberLabel,              allowBlank: false,  disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
