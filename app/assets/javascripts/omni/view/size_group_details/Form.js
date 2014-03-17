Ext.define('Omni.view.size_group_details.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-size_group_details-Form',



  initComponent: function() {

    var me = this;


    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      size_group_idLabel: Omni.i18n.model.SizeGroupDetail.size_group_id,
      size_idLabel: Omni.i18n.model.SizeGroupDetail.size_id,
      display_orderLabel: Omni.i18n.model.SizeGroupDetail.display_order,
      is_enabledLabel: Omni.i18n.model.SizeGroupDetail.is_enabled
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
        xtype: 'fieldset',
        title: 'General',
        collapsible: true,
        defaultType: 'textfield',
        defaults: {
          anchor: '70%'
        },
        layout: 'anchor',
        items: [{
          name: 'size_group_id',
          fieldLabel: this.size_group_idLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.SizeGroup', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'size_group_id',
          itemTpl: '{display}'
        }, {
          name: 'size_id',
          fieldLabel: this.size_idLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'buildit-Locator',
          store: Ext.create('Omni.store.Size', {
            pageSize: 10
          }),
          displayField: 'display',
          queryField: 'display',
          valueField: 'size_id',
          itemTpl: '{display}'
        }, {
          name: 'display_order',
          fieldLabel: this.display_orderLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'textfield'
        }, {
          name: 'is_enabled',
          fieldLabel: this.is_enabledLabel,
          allowBlank: true,
          disabled: false,
          xtype: 'checkbox'
        }]
      }]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Size Group Detail',
      newTitle: 'New Size Group Detail',
      newSubtitle: 'Enter the new Size Group Detail'
    });
    // TITLES (End)


    this.callParent();
  }

});
