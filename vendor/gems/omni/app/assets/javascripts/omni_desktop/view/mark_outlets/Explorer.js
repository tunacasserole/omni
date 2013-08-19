Ext.define('Omni.view.mark_outlets.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-mark_outlets-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.MarkOutlet'),

  contextMenuConfig : {
    xtype    : 'omni-mark_outlets-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-mark_outlets-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-mark_outlets-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  outlet_nbrLabel:                        Omni.i18n.model.MarkOutlet.outlet_nbr,
  displayLabel:                           Omni.i18n.model.MarkOutlet.display,
  address1Label:                          Omni.i18n.model.MarkOutlet.address1,
  address2Label:                          Omni.i18n.model.MarkOutlet.address2,
  cityLabel:                              Omni.i18n.model.MarkOutlet.city,
  state_idLabel:                          Omni.i18n.model.MarkOutlet.state_id,
  zip_codeLabel:                          Omni.i18n.model.MarkOutlet.zip_code,
  phone_nbrLabel:                         Omni.i18n.model.MarkOutlet.phone_nbr,
  orig_outLabel:                          Omni.i18n.model.MarkOutlet.orig_out,
  remits_taxLabel:                        Omni.i18n.model.MarkOutlet.remits_tax,
  taxed_by1Label:                         Omni.i18n.model.MarkOutlet.taxed_by1,
  taxed_by2Label:                         Omni.i18n.model.MarkOutlet.taxed_by2,
  taxed_by3Label:                         Omni.i18n.model.MarkOutlet.taxed_by3,
  taxed_by4Label:                         Omni.i18n.model.MarkOutlet.taxed_by4,
  activeLabel:                            Omni.i18n.model.MarkOutlet.active,
  informationLabel:                       Omni.i18n.model.MarkOutlet.information,
  whseLabel:                              Omni.i18n.model.MarkOutlet.whse,
  emailLabel:                             Omni.i18n.model.MarkOutlet.email,
  tax_freeLabel:                          Omni.i18n.model.MarkOutlet.tax_free,
  tax_free_startLabel:                    Omni.i18n.model.MarkOutlet.tax_free_start,
  tax_free_stopLabel:                     Omni.i18n.model.MarkOutlet.tax_free_stop,
  location_idLabel:                       Omni.i18n.model.MarkOutlet.location_id,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'MarkOutlets',
  subtitle:  'Create and maintain MarkOutlets',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.outlet_nbrLabel,
          dataIndex    : 'outlet_nbr',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 3
        },
        {
          header       : this.address1Label,
          dataIndex    : 'address1',
          flex         : 1
        },
        {
          header       : this.address2Label,
          dataIndex    : 'address2',
          flex         : 1
        },
        {
          header       : this.cityLabel,
          dataIndex    : 'city',
          flex         : 1
        },
        {
          header       : this.state_idLabel,
          dataIndex    : 'state_id',
          flex         : 1
        },
        {
          header       : this.zip_codeLabel,
          dataIndex    : 'zip_code',
          flex         : 1
        },
        {
          header       : this.phone_nbrLabel,
          dataIndex    : 'phone_nbr',
          flex         : 1
        },
        {
          header       : this.orig_outLabel,
          dataIndex    : 'orig_out',
          flex         : 1
        },
        {
          header       : this.remits_taxLabel,
          dataIndex    : 'remits_tax',
          flex         : 1
        },
        {
          header       : this.taxed_by1Label,
          dataIndex    : 'taxed_by1',
          flex         : 1
        },
        {
          header       : this.taxed_by2Label,
          dataIndex    : 'taxed_by2',
          flex         : 1
        },
        {
          header       : this.taxed_by3Label,
          dataIndex    : 'taxed_by3',
          flex         : 1
        },
        {
          header       : this.taxed_by4Label,
          dataIndex    : 'taxed_by4',
          flex         : 1
        },
        {
          header       : this.activeLabel,
          dataIndex    : 'active',
          flex         : 1
        },
        {
          header       : this.informationLabel,
          dataIndex    : 'information',
          flex         : 1
        },
        {
          header       : this.whseLabel,
          dataIndex    : 'whse',
          flex         : 1
        },
        {
          header       : this.emailLabel,
          dataIndex    : 'email',
          flex         : 1
        },
        {
          header       : this.tax_freeLabel,
          dataIndex    : 'tax_free',
          flex         : 1
        },
        {
          header       : this.tax_free_startLabel,
          dataIndex    : 'tax_free_start',
          flex         : 1
        },
        {
          header       : this.tax_free_stopLabel,
          dataIndex    : 'tax_free_stop',
          flex         : 1
        },
        {
          header       : this.location_idLabel,
          dataIndex    : 'location_id',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});