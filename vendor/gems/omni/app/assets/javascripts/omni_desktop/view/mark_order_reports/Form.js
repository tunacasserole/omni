Ext.define('Omni.view.mark_order_reports.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-mark_order_reports-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'id',
      value:      this.record.get('id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      idLabel:                                Omni.i18n.model.MarkOrderReport.id,    
      stock_nbrLabel:                         Omni.i18n.model.MarkOrderReport.stock_nbr,    
      sizeLabel:                              Omni.i18n.model.MarkOrderReport.size,    
      qtyLabel:                               Omni.i18n.model.MarkOrderReport.qty,    
      year_enteredLabel:                      Omni.i18n.model.MarkOrderReport.year_entered    
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

            { xtype: 'textfield', name: 'id',                             fieldLabel: this.idLabel                          , allowBlank: false },    
            { xtype: 'textfield', name: 'stock_nbr',                      fieldLabel: this.stock_nbrLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'size',                           fieldLabel: this.sizeLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'qty',                            fieldLabel: this.qtyLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'year_entered',                   fieldLabel: this.year_enteredLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit MarkOrderReports',
      newTitle: 'New Mark Order Report',
      newSubtitle: 'Complete the following to create a new Mark Order Report'
    });
    // TITLES (End)

    this.callParent();
    
  }

});