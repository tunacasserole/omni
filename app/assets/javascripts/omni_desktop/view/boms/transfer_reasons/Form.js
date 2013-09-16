Ext.define('Omni.view.transfer_reasons.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-transfer_reasons-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'transfer_reason_id',
      value:      this.record.get('transfer_reason_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      transfer_reason_idLabel:                Omni.i18n.model.TransferReason.transfer_reason_id,    
      displayLabel:                           Omni.i18n.model.TransferReason.display,    
      descriptionLabel:                       Omni.i18n.model.TransferReason.description,    
      short_nameLabel:                        Omni.i18n.model.TransferReason.short_name,    
      is_destroyedLabel:                      Omni.i18n.model.TransferReason.is_destroyed    
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

            { xtype: 'textfield', name: 'transfer_reason_id',             fieldLabel: this.transfer_reason_idLabel          , allowBlank: false },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'short_name',                     fieldLabel: this.short_nameLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit TransferReasons',
      newTitle: 'New Transfer Reason',
      newSubtitle: 'Complete the following to create a new Transfer Reason'
    });
    // TITLES (End)

    this.callParent();
    
  }

});