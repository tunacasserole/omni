Ext.define('Omni.view.location_users.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-location_users-Form',


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'location_user_id',
      value: this.record.get('location_user_id')
    };
    // FILTER (End)


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel: Omni.i18n.model.LocationUser.display,
      user_idLabel: Omni.i18n.model.LocationUser.user_id,
      location_idLabel: Omni.i18n.model.LocationUser.location_id,
      is_managerLabel: Omni.i18n.model.LocationUser.is_manager,
      is_cashierLabel: Omni.i18n.model.LocationUser.is_cashier,
      is_salesLabel: Omni.i18n.model.LocationUser.is_sales,
      is_back_officeLabel: Omni.i18n.model.LocationUser.is_back_office,
      short_passwordLabel: Omni.i18n.model.LocationUser.short_password,
      is_destroyedLabel: Omni.i18n.model.LocationUser.is_destroyed,
      is_purchase_approver_1Label: Omni.i18n.model.LocationUser.is_purchase_approver_1,
      is_purchase_approver_2Label: Omni.i18n.model.LocationUser.is_purchase_approver_2,
      is_purchase_approver_3Label: Omni.i18n.model.LocationUser.is_purchase_approver_3,
      idLabel: Omni.i18n.model.LocationUser.id,
      location_user_idLabel: Omni.i18n.model.LocationUser.location_user_id
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
        xtype: 'fieldset',
        title: 'General Information',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '95%'
        },
        layout: 'anchor',
        items: [
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

          {
            xtype: 'textfield',
            name: 'display',
            fieldLabel: this.displayLabel,
            allowBlank: true,
            disabled: true
          }, {
            name: 'user_id',
            fieldLabel: this.user_idLabel,
            allowBlank: false,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Buildit.store.User', {
              pageSize: 10
            }),
            displayField: 'full_name',
            queryField: 'full_name',
            valueField: 'user_id',
            itemTpl: '{last_name}, {first_name}'
          }, {
            name: 'location_id',
            fieldLabel: this.location_idLabel,
            allowBlank: false,
            disabled: false,
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Location', {
              pageSize: 10
            }),
            displayField: 'display',
            queryField: 'display',
            valueField: 'location_id',
            itemTpl: '{display}'
          }, {
            xtype: 'checkbox',
            name: 'is_manager',
            fieldLabel: this.is_managerLabel,
            allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_cashier',
            fieldLabel: this.is_cashierLabel,
            allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_sales',
            fieldLabel: this.is_salesLabel,
            allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_back_office',
            fieldLabel: this.is_back_officeLabel,
            allowBlank: true
          // }, {
          //   xtype: 'textfield',
          //   name: 'short_password',
          //   fieldLabel: this.short_passwordLabel,
          //   allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_purchase_approver_1',
            fieldLabel: this.is_purchase_approver_1Label,
            allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_purchase_approver_2',
            fieldLabel: this.is_purchase_approver_2Label,
            allowBlank: true
          }, {
            xtype: 'checkbox',
            name: 'is_purchase_approver_3',
            fieldLabel: this.is_purchase_approver_3Label,
            allowBlank: true
          },
        ]
      }]
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