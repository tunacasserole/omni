Ext.define('Desk.view.guides.Form', {

  extend: 'Buildit.ux.Form',
  alias: 'widget.desk-guides-Form',
  backOnNew: true,

  // LABELS (Start) =======================================================================
  guide_idLabel: Desk.i18n.model.Guide.guide_id,
  owner_idLabel: Desk.i18n.model.Guide.owner_id,
  guide_nbrLabel: Desk.i18n.model.Guide.guide_nbr,
  guide_nameLabel: Desk.i18n.model.Guide.guide_name,
  descriptionLabel: Desk.i18n.model.Guide.description,
  guide_locationLabel: Desk.i18n.model.Guide.guide_location,
  gem_nameLabel: Desk.i18n.model.Guide.gem_name,
  // LABELS (End)


  initComponent: function() {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property: 'guide_id',
      value: this.record.get('guide_id')
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
              name: 'guide_nbr',
              fieldLabel: me.guide_nbrLabel,
              maxLength: 200,
              minLength: 0,
              allowBlank: true,
              disabled: true
            }, {
              xtype: 'textfield',
              name: 'guide_name',
              fieldLabel: me.guide_nameLabel,
              maxLength: 200,
              minLength: 0,
              allowBlank: false
            }, {
              xtype: 'textarea',
              name: 'description',
              fieldLabel: me.descriptionLabel,
              maxLength: 4000,
              minLength: 0,
              allowBlank: true
            }, {
              xtype: 'textfield',
              name: 'guide_location',
              fieldLabel: me.guide_locationLabel,
              maxLength: 200,
              minLength: 0,
              allowBlank: true
            }, {
              xtype: 'buildit-Locator',
              store: Ext.create('Buildit.store.User', {
                pageSize: 10
              }),
              name: 'owner_id',
              fieldLabel: me.owner_idLabel,
              valueField: 'user_id',
              displayField: 'full_name',
              queryField: 'full_name',
              itemTpl: '{full_name}',
              // initialValue: me.record.get('full_name'),
              allowBlank: true
            }
            // {
            //   xtype        : 'textfield',
            //   name         : 'gem_name',
            //   fieldLabel   : me.gem_nameLabel,
            //   maxLength    : 200,
            //   minLength    : 0,
            //   allowBlank   : true
            // }
          ]
        }
        /*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Guide',
      subtitle: 'Edit Guide'
    });
    // TITLES (End)

    this.callParent();

  } // initComponent

}); // Ext.define('Desk.view.guides.Form'
