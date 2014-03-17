Ext.define('Omni.view.price_changes.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-price_changes-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.PriceChange.display,
      displayLabel:                               Omni.i18n.model.PriceChange.display
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
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: true,     xtype: 'textfield'        },
            { name: 'display',                        fieldLabel: this.displayLabel,                    allowBlank: false,  disabled: true,     xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
