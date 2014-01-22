Ext.define('Omni.view.style_colors.Form', {

    extend: 'Buildit.ux.Form',
    alias: 'widget.omni-style_colors-Form',
    allowFind: false,


    initComponent: function() {

      var me = this;


      // LABELS (Start) =======================================================================
      Ext.applyIf(this, {
        style_idLabel: Omni.i18n.model.StyleColor.style_id,
        color_idLabel: Omni.i18n.model.StyleColor.color_id,
        stateLabel: Omni.i18n.model.StyleColor.state,
        short_nameLabel: Omni.i18n.model.StyleColor.short_name,
        concatenated_nameLabel: Omni.i18n.model.StyleColor.concatenated_name,
        initial_retail_priceLabel: Omni.i18n.model.StyleColor.initial_retail_price,
        fabric_contentLabel: Omni.i18n.model.StyleColor.fabric_content
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
                  name: 'style_id',
                  fieldLabel: this.style_idLabel,
                  allowBlank: true,
                  disabled: true,
                  xtype: 'buildit-Locator',
                  store: Ext.create('Omni.store.Style', {
                    pageSize: 10
                  }),
                  displayField: 'display',
                  queryField: 'display',
                  valueField: 'style_id',
                  itemTpl: '{display}'
                }, {
                  name: 'state',
                  fieldLabel: this.stateLabel,
                  allowBlank: true,
                  disabled: true,
                  xtype: 'textfield'
                }, {
                  name: 'color_id',
                  fieldLabel: this.color_idLabel,
                  allowBlank: true,
                  disabled: false,
                  xtype: 'buildit-Locator',
                  store: Ext.create('Omni.store.Color', {
                    pageSize: 10
                  }),
                  displayField: 'display',
                  queryField: 'display',
                  valueField: 'color_id',
                  itemTpl: '{display}',
                  gotoTarget: 'omni-colors-Inspector'
                }, {
                  name: 'short_name',
                  fieldLabel: this.short_nameLabel,
                  allowBlank: true,
                  disabled: false,
                  xtype: 'textfield'
                }, {
                  xtype: 'label',
                  text: 'Short name is used when the vendor has an alternate name for the color.',
                  cls: 'instruction'
                }, {
                  name: 'concatenated_name',
                  fieldLabel: this.concatenated_nameLabel,
                  allowBlank: true,
                  disabled: false,
                  xtype: 'textfield'
                }, {
                  name: 'initial_retail_price',
                  fieldLabel: this.initial_retail_priceLabel,
                  allowBlank: true,
                  disabled: false,
                  xtype: 'currencyfield',
                  currencySymbol: null
                }, {
                  name: 'fabric_content',
                  fieldLabel: this.fabric_contentLabel,
                  allowBlank: true,
                  disabled: false,
                  xtype: 'buildit-Lookup',
                  category: 'FABRIC_CONTENT'
                }
                ]
              }
              ]
          });
        // FIELDSETS (End)

        // TITLES (Start) =======================================================================
        Ext.applyIf(this, {
          title: 'Style Colors',
          subtitle: 'All of the colors available for this style',
          newTitle: 'Style Colors',
          newSubtitle: 'new color'
        });
        // TITLES (End)


        this.callParent();
      }

    });
