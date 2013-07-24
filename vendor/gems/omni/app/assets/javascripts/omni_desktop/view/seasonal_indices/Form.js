Ext.define('Omni.view.seasonal_indices.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-seasonal_indices-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      seasonal_index_nameLabel:                   Omni.i18n.model.SeasonalIndex.seasonal_index_name
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
            { name: 'seasonal_index_name',            fieldLabel: this.seasonal_index_nameLabel,        allowBlank: false,  disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
