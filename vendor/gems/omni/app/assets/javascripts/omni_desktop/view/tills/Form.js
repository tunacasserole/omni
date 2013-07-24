Ext.define('Omni.view.tills.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-tills-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      location_idLabel:                           Omni.i18n.model.Till.location_id,
      till_nbrLabel:                              Omni.i18n.model.Till.till_nbr
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype: 'fieldset',
          title: 'General',
          collapsible: true,
          defaultType: 'textfield',
          defaults: {anchor: '70%'},
          layout: 'anchor',
          items:[
            { name: 'till_nbr',                       fieldLabel: this.till_nbrLabel,                   allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'location_id',                    fieldLabel: this.location_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Location',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'location_id', itemTpl:'{display}' }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
