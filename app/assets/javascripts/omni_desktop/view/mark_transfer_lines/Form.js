Ext.define('Omni.view.mark_transfer_lines.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-mark_transfer_lines-Form',


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
      idLabel:                                Omni.i18n.model.MarkTransferLine.id,    
      transfer_idLabel:                       Omni.i18n.model.MarkTransferLine.transfer_id,    
      stock_nbrLabel:                         Omni.i18n.model.MarkTransferLine.stock_nbr,    
      sizeLabel:                              Omni.i18n.model.MarkTransferLine.size,    
      qtyLabel:                               Omni.i18n.model.MarkTransferLine.qty,    
      dateLabel:                              Omni.i18n.model.MarkTransferLine.date,    
      box_nbrLabel:                           Omni.i18n.model.MarkTransferLine.box_nbr,    
      status_idLabel:                         Omni.i18n.model.MarkTransferLine.status_id    
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
            { xtype: 'textfield', name: 'transfer_id',                    fieldLabel: this.transfer_idLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'stock_nbr',                      fieldLabel: this.stock_nbrLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'size',                           fieldLabel: this.sizeLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'qty',                            fieldLabel: this.qtyLabel                         , allowBlank: false },    
            { xtype: 'textfield', name: 'date',                           fieldLabel: this.dateLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'box_nbr',                        fieldLabel: this.box_nbrLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'status_id',                      fieldLabel: this.status_idLabel                   , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit MarkTransferLines',
      newTitle: 'New Mark Transfer Line',
      newSubtitle: 'Complete the following to create a new Mark Transfer Line'
    });
    // TITLES (End)

    this.callParent();
    
  }

});