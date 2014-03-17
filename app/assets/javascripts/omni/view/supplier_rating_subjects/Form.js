Ext.define('Omni.view.supplier_rating_subjects.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-supplier_rating_subjects-Form',

  

  initComponent:function () {

    var me = this;

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      displayLabel:                               Omni.i18n.model.SupplierRatingSubject.display,
      descriptionLabel:                           Omni.i18n.model.SupplierRatingSubject.description,
      supplier_rating_subject_typeLabel:          Omni.i18n.model.SupplierRatingSubject.supplier_rating_subject_type,
      weighting_percentLabel:                     Omni.i18n.model.SupplierRatingSubject.weighting_percent
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
            { name: 'description',                    fieldLabel: this.descriptionLabel,                allowBlank: true,   disabled: false,    xtype: 'textfield'        },
            { name: 'supplier_rating_subject_type',   fieldLabel: this.supplier_rating_subject_typeLabel,allowBlank: true,   disabled: false,    xtype: 'buildit-Lookup',      category:   'SUPPLIER_RATING_SUBJECT_TYPE' },
            { name: 'weighting_percent',              fieldLabel: this.weighting_percentLabel,          allowBlank: true,   disabled: false,    xtype: 'textfield'        }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    this.callParent();
  }

});
