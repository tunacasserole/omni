Ext.define('Omni.view.mark_transfers.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-mark_transfers-Form',


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
      idLabel:                                Omni.i18n.model.MarkTransfer.id,    
      from_outlet_nbrLabel:                   Omni.i18n.model.MarkTransfer.from_outlet_nbr,    
      to_outlet_nbrLabel:                     Omni.i18n.model.MarkTransfer.to_outlet_nbr,    
      dateLabel:                              Omni.i18n.model.MarkTransfer.date,    
      tracking_nbrLabel:                      Omni.i18n.model.MarkTransfer.tracking_nbr,    
      status_idLabel:                         Omni.i18n.model.MarkTransfer.status_id,    
      user_idLabel:                           Omni.i18n.model.MarkTransfer.user_id,    
      ship_dateLabel:                         Omni.i18n.model.MarkTransfer.ship_date,    
      accepted_user_idLabel:                  Omni.i18n.model.MarkTransfer.accepted_user_id,    
      commentLabel:                           Omni.i18n.model.MarkTransfer.comment    
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
            { xtype: 'textfield', name: 'from_outlet_nbr',                fieldLabel: this.from_outlet_nbrLabel             , allowBlank: false },    
            { xtype: 'textfield', name: 'to_outlet_nbr',                  fieldLabel: this.to_outlet_nbrLabel               , allowBlank: false },    
            { xtype: 'textfield', name: 'date',                           fieldLabel: this.dateLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'tracking_nbr',                   fieldLabel: this.tracking_nbrLabel                , allowBlank: false },    
            { xtype: 'textfield', name: 'status_id',                      fieldLabel: this.status_idLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'user_id',                        fieldLabel: this.user_idLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'ship_date',                      fieldLabel: this.ship_dateLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'accepted_user_id',               fieldLabel: this.accepted_user_idLabel            , allowBlank: false },    
            { xtype: 'textfield', name: 'comment',                        fieldLabel: this.commentLabel                     , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit MarkTransfers',
      newTitle: 'New Mark Transfer',
      newSubtitle: 'Complete the following to create a new Mark Transfer'
    });
    // TITLES (End)

    this.callParent();
    
  }

});