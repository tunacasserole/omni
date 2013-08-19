Ext.define('Omni.view.mark_wips.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-mark_wips-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'stock_nbr',
      value:      this.record.get('stock_nbr')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      outlet_nbrLabel:                        Omni.i18n.model.MarkWip.outlet_nbr,    
      stock_nbrLabel:                         Omni.i18n.model.MarkWip.stock_nbr,    
      sizeLabel:                              Omni.i18n.model.MarkWip.size,    
      cut_wipLabel:                           Omni.i18n.model.MarkWip.cut_wip,    
      plant_wipLabel:                         Omni.i18n.model.MarkWip.plant_wip,    
      cont_wipLabel:                          Omni.i18n.model.MarkWip.cont_wip,    
      status_idLabel:                         Omni.i18n.model.MarkWip.status_id    
    });
    // LABELS (End)

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items: [
        {
          xtype:        'fieldset',
          title:        'General Information',
          collapsible:  true,
          defaultType:  'textfield',
          defaults:     {anchor: '95%'},
          layout:       'anchor',
          items:[
            { xtype: 'textfield', name: 'outlet_nbr',                     fieldLabel: this.outlet_nbrLabel                  , allowBlank: false },    
            { xtype: 'textfield', name: 'stock_nbr',                      fieldLabel: this.stock_nbrLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'size',                           fieldLabel: this.sizeLabel                        , allowBlank: false },    
            { xtype: 'textfield', name: 'cut_wip',                        fieldLabel: this.cut_wipLabel                     , allowBlank: false },    
            { xtype: 'textfield', name: 'plant_wip',                      fieldLabel: this.plant_wipLabel                   , allowBlank: false },    
            { xtype: 'textfield', name: 'cont_wip',                       fieldLabel: this.cont_wipLabel                    , allowBlank: false },    
            { xtype: 'textfield', name: 'status_id',                      fieldLabel: this.status_idLabel                   , allowBlank: false }    
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Research Mark WIP',
      newTitle: 'New Mark WIP',
      newSubtitle: 'Use this form to research Mark WIP numbers'
    });
    // TITLES (End)

    this.callParent();
    
  }

});