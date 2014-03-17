Ext.define('Omni.view.uniform_lookups.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.omni-uniform_lookups-Form',


  // LABELS (Start) =======================================================================
  uniform_lookup_idLabel: Omni.i18n.model.UniformLookup.uniform_lookup_id,
  displayLabel: Omni.i18n.model.UniformLookup.display,
  uniform_lookup_nbrLabel: Omni.i18n.model.UniformLookup.uniform_lookup_nbr,
  uniform_idLabel: Omni.i18n.model.UniformLookup.uniform_id,
  account_idLabel: Omni.i18n.model.UniformLookup.account_id,
  contract_idLabel: Omni.i18n.model.UniformLookup.contract_id,
  category_idLabel: Omni.i18n.model.UniformLookup.category_id,
  product_idLabel: Omni.i18n.model.UniformLookup.product_id,
  style_idLabel: Omni.i18n.model.UniformLookup.style_id,
  color_idLabel: Omni.i18n.model.UniformLookup.color_id,
  size_idLabel: Omni.i18n.model.UniformLookup.size_id,
  sku_idLabel: Omni.i18n.model.UniformLookup.sku_id,
  grade_idLabel: Omni.i18n.model.UniformLookup.grade_id,
  stateLabel: Omni.i18n.model.UniformLookup.state,
  date_createdLabel: Omni.i18n.model.UniformLookup.date_created,
  is_required_maleLabel: Omni.i18n.model.UniformLookup.is_required_male,
  is_required_femaleLabel: Omni.i18n.model.UniformLookup.is_required_female,
  is_optional_maleLabel: Omni.i18n.model.UniformLookup.is_optional_male,
  is_optional_femaleLabel: Omni.i18n.model.UniformLookup.is_optional_female,
  is_includes_logoLabel: Omni.i18n.model.UniformLookup.is_includes_logo,
  is_requires_logoLabel: Omni.i18n.model.UniformLookup.is_requires_logo,
  discount_percentLabel: Omni.i18n.model.UniformLookup.discount_percent,
  mark_uniform_keyLabel: Omni.i18n.model.UniformLookup.mark_uniform_key,
  mark_stock_numberLabel: Omni.i18n.model.UniformLookup.mark_stock_number,
  mark_gradesLabel: Omni.i18n.model.UniformLookup.mark_grades,
  price_adjustment_1Label: Omni.i18n.model.UniformLookup.price_adjustment_1,
  price_adjustment_2Label: Omni.i18n.model.UniformLookup.price_adjustment_2,
  uniform_sourceLabel: Omni.i18n.model.UniformLookup.uniform_source,
  is_approvedLabel: Omni.i18n.model.UniformLookup.is_approved,
  is_destroyedLabel: Omni.i18n.model.UniformLookup.is_destroyed,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'uniform_lookup_id',
      value: this.record.get('uniform_lookup_id')
    };
    // FILTER (End)



    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [{
        xtype: 'fieldset',
        title: 'Lookup Keys',
        collapsible: true,
        defaultType: 'textfield',
        layout: 'anchor',
        items: [
          // {
          //   xtype        : 'textfield',
          //   name         : 'display',
          //   fieldLabel   : me.displayLabel,
          //   maxLength    : 200,
          //   minLength    : 0,
          //   allowBlank   : false
          // },
          {
            xtype: 'textfield',
            name: 'uniform_lookup_nbr',
            fieldLabel: me.uniform_lookup_nbrLabel,
            maxLength: 200,
            minLength: 0,
            allowBlank: false,
            disabled: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Account', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'account_id',
            fieldLabel: me.account_idLabel,
            //initialValue: me.record.get('display'),
            allowBlank: false
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Contract', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'contract_id',
            fieldLabel: me.contract_idLabel,
            //initialValue: me.record.get('display'),
            allowBlank: true
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Category', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'category_id',
            fieldLabel: me.category_idLabel,
            //initialValue: me.record.get('display'),
            allowBlank: false
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Product', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'product_id',
            fieldLabel: me.product_idLabel,
            //initialValue: me.record.get('display'),
            allowBlank: false
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Style', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'style_id',
            fieldLabel: me.style_idLabel,
            //initialValue: me.record.get('display'),
            allowBlank: false
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Color', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'color_id',
            fieldLabel: me.color_idLabel,
            //initialValue: me.record.get('display'),
            allowBlank: false
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Size', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'size_id',
            fieldLabel: me.size_idLabel,
            //initialValue: me.record.get('display'),
            allowBlank: false
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Sku', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'sku_id',
            fieldLabel: me.sku_idLabel,
            //initialValue: me.record.get('display'),
            allowBlank: false
          }, {
            xtype: 'buildit-Locator',
            store: Ext.create('Omni.store.Grade', {
              pageSize: 10
            }),
            displayField: 'display',
            itemTpl: '{display}',
            name: 'grade_id',
            fieldLabel: me.grade_idLabel,
            //initialValue: me.record.get('display'),
            allowBlank: false
          }
        ]
      }, {
        xtype: 'fieldset',
        title: 'General Information',
        collapsible: true,
        defaultType: 'textfield',
        layout: 'anchor',
        items: [{
          xtype: 'textfield',
          name: 'state',
          fieldLabel: me.stateLabel,
          maxLength: 200,
          minLength: 0,
          allowBlank: false
        }, {
          xtype: 'textfield',
          name: 'date_created',
          fieldLabel: me.date_createdLabel,
          maxLength: 100,
          minLength: 0,
          allowBlank: true
        }, {
          xtype: 'checkbox',
          name: 'is_required_male',
          fieldLabel: me.is_required_maleLabel
        }, {
          xtype: 'checkbox',
          name: 'is_required_female',
          fieldLabel: me.is_required_femaleLabel
        }, {
          xtype: 'checkbox',
          name: 'is_optional_male',
          fieldLabel: me.is_optional_maleLabel
        }, {
          xtype: 'textfield',
          name: 'is_optional_female',
          fieldLabel: me.is_optional_femaleLabel,
          maxLength: 4000,
          minLength: 0,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'is_includes_logo',
          fieldLabel: me.is_includes_logoLabel,
          maxLength: 200,
          minLength: 0,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'is_requires_logo',
          fieldLabel: me.is_requires_logoLabel,
          maxLength: 200,
          minLength: 0,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'discount_percent',
          fieldLabel: me.discount_percentLabel,
          maxLength: 100,
          minLength: 0,
          allowBlank: true
        }]
      }, {
        xtype: 'fieldset',
        title: 'Mark Info',
        collapsible: true,
        defaultType: 'textfield',
        layout: 'anchor',
        items: [{
          xtype: 'textfield',
          name: 'mark_uniform_key',
          fieldLabel: me.mark_uniform_keyLabel,
          maxLength: 200,
          minLength: 0,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'mark_stock_number',
          fieldLabel: me.mark_stock_numberLabel,
          maxLength: 200,
          minLength: 0,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'mark_grades',
          fieldLabel: me.mark_gradesLabel,
          maxLength: 200,
          minLength: 0,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'price_adjustment_1',
          fieldLabel: me.price_adjustment_1Label,
          maxLength: 100,
          minLength: 0,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'price_adjustment_2',
          fieldLabel: me.price_adjustment_2Label,
          maxLength: 100,
          minLength: 0,
          allowBlank: true
        }, {
          xtype: 'textfield',
          name: 'uniform_source',
          fieldLabel: me.uniform_sourceLabel,
          maxLength: 32,
          minLength: 0,
          allowBlank: true
        }, {
          xtype: 'checkbox',
          name: 'is_approved',
          fieldLabel: me.is_approvedLabel
        }]
      }]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Uniform Lookup',
      subtitle: 'Edit Uniform Lookup'
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Omni.view.uniform_lookups.Form'
