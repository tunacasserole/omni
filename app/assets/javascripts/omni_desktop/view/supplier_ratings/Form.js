Ext.define('Omni.view.supplier_ratings.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-supplier_ratings-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      supplier_idLabel:                           Omni.i18n.model.SupplierRating.supplier_id,
      supplier_rating_subject_idLabel:            Omni.i18n.model.SupplierRating.supplier_rating_subject_id,
      rating_dateLabel:                           Omni.i18n.model.SupplierRating.rating_date,
      rating_valueLabel:                          Omni.i18n.model.SupplierRating.rating_value
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
            { name: 'supplier_id',                    fieldLabel: this.supplier_idLabel,                allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Supplier',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_id', itemTpl:'{display}' },
            { name: 'supplier_rating_subject_id',     fieldLabel: this.supplier_rating_subject_idLabel, allowBlank: false,  disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.SupplierRatingSubject',{pageSize: 10}), displayField: 'display', queryField: 'display', valueField: 'supplier_rating_subject_id', itemTpl:'{display}' },
            { name: 'rating_date',                    fieldLabel: this.rating_dateLabel,                allowBlank: true,   disabled: false,    xtype: 'datefield'        },
            { name: 'rating_value',                   fieldLabel: this.rating_valueLabel,               allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
