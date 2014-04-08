Ext.define('Omni.view.location_users.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.omni-location_users-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store    : Ext.create('Omni.store.LocationUser'),

  contextMenuConfig : {
    xtype: 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'omni-location_users-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-location_users-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  displayLabel                            : Omni.i18n.model.LocationUser.display,
  user_idLabel                            : Omni.i18n.model.LocationUser.user_id,
  location_idLabel                        : Omni.i18n.model.LocationUser.location_id,
  is_managerLabel                         : Omni.i18n.model.LocationUser.is_manager,
  is_cashierLabel                         : Omni.i18n.model.LocationUser.is_cashier,
  is_salesLabel                           : Omni.i18n.model.LocationUser.is_sales,
  is_back_officeLabel                     : Omni.i18n.model.LocationUser.is_back_office,
  short_passwordLabel                     : Omni.i18n.model.LocationUser.short_password,
  is_destroyedLabel                       : Omni.i18n.model.LocationUser.is_destroyed,
  is_purchase_approver_1Label             : Omni.i18n.model.LocationUser.is_purchase_approver_1,
  is_purchase_approver_2Label             : Omni.i18n.model.LocationUser.is_purchase_approver_2,
  is_purchase_approver_3Label             : Omni.i18n.model.LocationUser.is_purchase_approver_3,
  location_user_idLabel                   : Omni.i18n.model.LocationUser.location_user_id,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Location Users',
  subtitle : 'Create and maintain Location Users',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.displayLabel,
        //   dataIndex    : 'display',
        //   flex         : 1
        // },
        {
          header       : this.user_idLabel,
          dataIndex    : 'user_display',
          flex         : 1
        }
        // {
        //   header       : this.location_idLabel,
        //   dataIndex    : 'location_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_managerLabel,
        //   dataIndex    : 'is_manager',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_cashierLabel,
        //   dataIndex    : 'is_cashier',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_salesLabel,
        //   dataIndex    : 'is_sales',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_back_officeLabel,
        //   dataIndex    : 'is_back_office',
        //   flex         : 1
        // },
        // {
        //   header       : this.short_passwordLabel,
        //   dataIndex    : 'short_password',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_destroyedLabel,
        //   dataIndex    : 'is_destroyed',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_purchase_approver_1Label,
        //   dataIndex    : 'is_purchase_approver_1',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_purchase_approver_2Label,
        //   dataIndex    : 'is_purchase_approver_2',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_purchase_approver_3Label,
        //   dataIndex    : 'is_purchase_approver_3',
        //   flex         : 1
        // },
        // {
        //   header       : this.location_user_idLabel,
        //   dataIndex    : 'location_user_id',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});
