Ext.define('Omni.view.location_users.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-location_users-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'location_user_id',
      value:      this.record.get('location_user_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      location_user_idLabel:                  Omni.i18n.model.LocationUser.location_user_id,    
      displayLabel:                           Omni.i18n.model.LocationUser.display,    
      user_idLabel:                           Omni.i18n.model.LocationUser.user_id,    
      location_idLabel:                       Omni.i18n.model.LocationUser.location_id,    
      is_managerLabel:                        Omni.i18n.model.LocationUser.is_manager,    
      is_cashierLabel:                        Omni.i18n.model.LocationUser.is_cashier,    
      is_salesLabel:                          Omni.i18n.model.LocationUser.is_sales,    
      is_back_officeLabel:                    Omni.i18n.model.LocationUser.is_back_office,    
      short_passwordLabel:                    Omni.i18n.model.LocationUser.short_password,    
      is_destroyedLabel:                      Omni.i18n.model.LocationUser.is_destroyed,    
      is_purchase_approver_1Label:            Omni.i18n.model.LocationUser.is_purchase_approver_1,    
      is_purchase_approver_2Label:            Omni.i18n.model.LocationUser.is_purchase_approver_2,    
      is_purchase_approver_3Label:            Omni.i18n.model.LocationUser.is_purchase_approver_3    
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

            // { xtype: 'textfield', name: 'location_user_id',               fieldLabel: this.location_user_idLabel            , allowBlank: true },    
            // { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: true },    
            // { xtype: 'textfield', name: 'user_id',                        fieldLabel: this.user_idLabel                     , allowBlank: true },    

            { xtype             : 'textfield',
              name              : 'location_display',
              fieldLabel        : this.location_idLabel,
              disabled          : true,
              allowBlank        : true 
            },    

            { xtype             : 'buildit-Locator',
              store             : Ext.create('Buildit.store.User',{pageSize: 20}),
              displayField      : 'full_name',
              queryField        : 'full_name',
              valueField        : 'user_id',
              itemTpl           : '{full_name}',
              name              : 'user_id',
              fieldLabel        : this.user_idLabel,
              allowBlank        : true
            },
            
            // { xtype: 'buildit-Locator',
            //   name: 'location_id',
            //   fieldLabel: this.location_idLabel,
            //   allowBlank: true,
            //   store: Ext.create('Omni.store.Location',{pageSize: 10}),
            //   displayField: 'display',
            //   queryField: 'display',
            //   valueField: 'location_id',
            //   disabled: true,
            //   itemTpl: '{display}'
            // },


            { xtype: 'textfield', name: 'is_manager',                     fieldLabel: this.is_managerLabel                  , allowBlank: true },    
            { xtype: 'textfield', name: 'is_cashier',                     fieldLabel: this.is_cashierLabel                  , allowBlank: true },    
            { xtype: 'textfield', name: 'is_sales',                       fieldLabel: this.is_salesLabel                    , allowBlank: true },    
            { xtype: 'textfield', name: 'is_back_office',                 fieldLabel: this.is_back_officeLabel              , allowBlank: true },    
            { xtype: 'textfield', name: 'short_password',                 fieldLabel: this.short_passwordLabel              , allowBlank: true },    
            // { xtype: 'textfield', name: 'is_destroyed',                   fieldLabel: this.is_destroyedLabel                , allowBlank: true },    
            { xtype: 'textfield', name: 'is_purchase_approver_1',         fieldLabel: this.is_purchase_approver_1Label      , allowBlank: true },    
            { xtype: 'textfield', name: 'is_purchase_approver_2',         fieldLabel: this.is_purchase_approver_2Label      , allowBlank: true },    
            { xtype: 'textfield', name: 'is_purchase_approver_3',         fieldLabel: this.is_purchase_approver_3Label      , allowBlank: true }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit LocationUsers',
      newTitle: 'New Location User',
      newSubtitle: 'Complete the following to create a new Location User'
    });
    // TITLES (End)

    this.callParent();
    
  }

});