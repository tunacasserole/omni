Ext.define('Omni.view.projection_locations.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-projection_locations-Form',

  // LABELS (Start) =======================================================================
  location_idLabel: Omni.i18n.model.ProjectionLocation.location_id,
  displayLabel: Omni.i18n.model.ProjectionLocation.display,
  approval_dateLabel: Omni.i18n.model.ProjectionLocation.approval_date,
  stateLabel: Omni.i18n.model.ProjectionLocation.state,
  // LABELS (End)

  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'projection_location_id',
      value: this.record.get('projection_location_id')
    };
    // FILTER (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
        xtype: 'fieldset',
        title: 'General Information',
        collapsible: true,
        defaultType: 'textfield',
        layout: 'anchor',
        items: [{
          xtype: 'textfield',
          name: 'state',
          fieldLabel: this.stateLabel,
          allowBlank: true,
          disabled: true
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
          xtype: 'textfield',
          name: 'display',
          fieldLabel: this.displayLabel,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'approval_date',
          fieldLabel: this.approval_dateLabel,
          allowBlank: true
        }]
      }]
    });
    // FIELDSETS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Projection Location',
      subtitle: 'Edit Projection Location',
      newTitle: 'Projection Location',
      newSubtitle: undefined
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Omni.view.projection_locations.Form'
