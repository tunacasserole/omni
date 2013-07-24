Ext.define('Omni.view.logs.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-logs-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'log_id',
      value:      this.record.get('log_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      log_idLabel:                            Omni.i18n.model.Log.log_id,    
      logable_idLabel:                        Omni.i18n.model.Log.logable_id,    
      logable_typeLabel:                      Omni.i18n.model.Log.logable_type,    
      log_nbrLabel:                           Omni.i18n.model.Log.log_nbr,    
      log_typeLabel:                          Omni.i18n.model.Log.log_type,    
      log_titleLabel:                         Omni.i18n.model.Log.log_title,    
      log_messageLabel:                       Omni.i18n.model.Log.log_message,    
      is_destroyedLabel:                      Omni.i18n.model.Log.is_destroyed    
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

//             { xtype: 'textfield', name: 'log_id',                         fieldLabel: this.log_idLabel                      , allowBlank: false },    
//             { xtype: 'textfield', name: 'logable_id',                     fieldLabel: this.logable_idLabel                  , allowBlank: false },    
//             { xtype: 'textfield', name: 'logable_type',                   fieldLabel: this.logable_typeLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'log_nbr',                        fieldLabel: this.log_nbrLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'log_type',                       fieldLabel: this.log_typeLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'log_title',                      fieldLabel: this.log_titleLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'log_message',                    fieldLabel: this.log_messageLabel                 , allowBlank: false },    
//             { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Logs',
      newTitle: 'New Log',
      newSubtitle: 'Complete the following to create a new Log'
    });
    // TITLES (End)

    this.callParent();
    
  }

});