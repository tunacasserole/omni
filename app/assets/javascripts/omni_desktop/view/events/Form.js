Ext.define('Buildit.view.events.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.buildit-events-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'event_id',
      value:      this.record.get('event_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      event_idLabel:                          Buildit.i18n.model.Event.event_id,    
      eventable_idLabel:                      Buildit.i18n.model.Event.eventable_id,    
      eventable_typeLabel:                    Buildit.i18n.model.Event.eventable_type,    
      event_typeLabel:                        Buildit.i18n.model.Event.event_type,    
      user_idLabel:                           Buildit.i18n.model.Event.user_id,    
      occurred_atLabel:                       Buildit.i18n.model.Event.occurred_at,    
      messageLabel:                           Buildit.i18n.model.Event.message,    
      revision_numberLabel:                   Buildit.i18n.model.Event.revision_number,    
      is_destroyedLabel:                      Buildit.i18n.model.Event.is_destroyed,    
      titleLabel:                             Buildit.i18n.model.Event.title    
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

            { xtype: 'textfield', name: 'event_id',                       fieldLabel: this.event_idLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'eventable_id',                   fieldLabel: this.eventable_idLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'eventable_type',                 fieldLabel: this.eventable_typeLabel              , allowBlank: false },    
            { xtype: 'textfield', name: 'event_type',                     fieldLabel: this.event_typeLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'user_id',                        fieldLabel: this.user_idLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'occurred_at',                    fieldLabel: this.occurred_atLabel                 , allowBlank: false },    
            { xtype: 'textfield', name: 'message',                        fieldLabel: this.messageLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'revision_number',                fieldLabel: this.revision_numberLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'title',                          fieldLabel: this.titleLabel                       , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Events',
      newTitle: 'New Event',
      newSubtitle: 'Complete the following to create a new Event'
    });
    // TITLES (End)

    this.callParent();
    
  }

});