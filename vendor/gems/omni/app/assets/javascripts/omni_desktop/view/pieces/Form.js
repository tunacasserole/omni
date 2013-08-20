Ext.define('Omni.view.pieces.Form', {

  extend:'Buildit.ux.Form',
  alias:'widget.omni-pieces-Form',


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property:   'piece_id',
      value:      this.record.get('piece_id')
    };
    // FILTER (End)

    
    // LABELS (Start) =======================================================================
    Ext.applyIf(this, {
      piece_idLabel:                          Omni.i18n.model.Piece.piece_id,    
      project_idLabel:                        Omni.i18n.model.Piece.project_id,    
      piece_nbrLabel:                         Omni.i18n.model.Piece.piece_nbr,    
      piece_typeLabel:                        Omni.i18n.model.Piece.piece_type,    
      stateLabel:                             Omni.i18n.model.Piece.state,    
      displayLabel:                           Omni.i18n.model.Piece.display,    
      descriptionLabel:                       Omni.i18n.model.Piece.description,    
      importanceLabel:                        Omni.i18n.model.Piece.importance,    
      pointsLabel:                            Omni.i18n.model.Piece.points,    
      assignee_idLabel:                       Omni.i18n.model.Piece.assignee_id,    
      creator_idLabel:                        Omni.i18n.model.Piece.creator_id,    
      target_releaseLabel:                    Omni.i18n.model.Piece.target_release,    
      actual_releaseLabel:                    Omni.i18n.model.Piece.actual_release,    
      is_destroyedLabel:                      Omni.i18n.model.Piece.is_destroyed    
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
          /*
            {
              xtype: 'buildit-Locator', 
              store: Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField: 'name', 
              queryField: 'name', 
              valueField: 'value_field', 
              itemTpl:'{name}',
              name: 'attribute_name', 
              fieldLabel: this.attribute_nameLabel, 
              allowBlank: true 
            }
          */

            // { xtype: 'textfield', name: 'piece_id',                       fieldLabel: this.piece_idLabel                    , allowBlank: true },    
            { name: 'project_id', fieldLabel: this.project_idLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Omni.store.Project',{pageSize: 25}), displayField: 'display', queryField: 'display', valueField: 'project_id', itemTpl:'{display}',initialValue: this.record.get('project_display'), },
            { xtype: 'textfield', name: 'project_id',                     fieldLabel: this.project_idLabel                  , allowBlank: true },    
            { xtype: 'textfield', name: 'piece_nbr',                      fieldLabel: this.piece_nbrLabel                   , allowBlank: true },    
            { xtype: 'textfield', name: 'display',                        fieldLabel: this.displayLabel                     , allowBlank: false },                
            { xtype: 'textfield', name: 'piece_type',                     fieldLabel: this.piece_typeLabel                  , allowBlank: true },    
            { xtype: 'textfield', name: 'state',                          fieldLabel: this.stateLabel                       , allowBlank: true },    
            { xtype: 'textfield', name: 'description',                    fieldLabel: this.descriptionLabel                 , allowBlank: true },    
            { xtype: 'textfield', name: 'importance',                     fieldLabel: this.importanceLabel                  , allowBlank: true },    
            { xtype: 'textfield', name: 'points',                         fieldLabel: this.pointsLabel                      , allowBlank: true },    
            { name: 'assignee_id', fieldLabel: this.assignee_idLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 25}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}',initialValue: this.record.get('assignee_display'), },
            { name: 'creator_id', fieldLabel: this.creator_idLabel,    allowBlank: true,   disabled: false,    xtype: 'buildit-Locator',     store:      Ext.create('Buildit.store.User',{pageSize: 25}), displayField: 'full_name', queryField: 'full_name', valueField: 'user_id', itemTpl:'{last_name}, {first_name}',initialValue: this.record.get('assignee_display'), },            
            { xtype: 'date', name: 'target_release',                 fieldLabel: this.target_releaseLabel              , allowBlank: true },    
            { xtype: 'date', name: 'actual_release',                 fieldLabel: this.actual_releaseLabel              , allowBlank: true }
          ]
        }
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title: 'Profile',
      subtitle: 'Edit Pieces',
      newTitle: 'New Piece',
      newSubtitle: 'Complete the following to create a new Piece'
    });
    // TITLES (End)

    this.callParent();
    
  }

});