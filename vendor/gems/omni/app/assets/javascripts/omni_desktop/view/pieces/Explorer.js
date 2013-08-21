Ext.define('Omni.view.pieces.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.omni-pieces-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Omni.store.Piece'),

  contextMenuConfig : {
    xtype    : 'omni-pieces-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'omni-pieces-Form'
  }],

  inspectorConfig : {
    xtype    : 'omni-pieces-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
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
  is_destroyedLabel:                      Omni.i18n.model.Piece.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Pieces',
  subtitle:  'Create and maintain Pieces',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        // {
        //   header       : this.piece_idLabel,
        //   dataIndex    : 'piece_id',
        //   flex         : 1
        // },
        {
          header       : this.project_idLabel,
          dataIndex    : 'project_display',
          flex         : 1
        },
        {
          header       : this.piece_nbrLabel,
          dataIndex    : 'piece_nbr',
          flex         : 1
        },
        {
          header       : this.displayLabel,
          dataIndex    : 'display',
          flex         : 3
        },        
        {
          header       : this.piece_typeLabel,
          dataIndex    : 'piece_type',
          flex         : 1
        },
        {
          header       : this.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        // {
        //   header       : this.descriptionLabel,
        //   dataIndex    : 'description',
        //   flex         : 1
        // },
        {
          header       : this.importanceLabel,
          dataIndex    : 'importance',
          flex         : 1
        },
        {
          header       : this.pointsLabel,
          dataIndex    : 'points',
          flex         : 1
        },
        {
          header       : this.assignee_idLabel,
          dataIndex    : 'assignee_display',
          flex         : 1
        },
        {
          header       : this.creator_idLabel,
          dataIndex    : 'creator_display',
          flex         : 1
        },
        {
          header       : this.target_releaseLabel,
          dataIndex    : 'target_release',
          flex         : 1
        }
        // {
        //   header       : this.actual_releaseLabel,
        //   dataIndex    : 'actual_release',
        //   flex         : 1
        // },
        // {
        //   header       : this.is_destroyedLabel,
        //   dataIndex    : 'is_destroyed',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});