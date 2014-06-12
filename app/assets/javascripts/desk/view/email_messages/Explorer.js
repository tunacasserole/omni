Ext.define('Desk.view.email_messages.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.desk-email_messages-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'desk-email_messages-Form'
  }],

  inspectorConfig : {
    xtype    : 'desk-email_messages-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  email_message_idLabel                   : Desk.i18n.model.EmailMessage.email_message_id,
  toLabel                                 : Desk.i18n.model.EmailMessage.to,
  ccLabel                                 : Desk.i18n.model.EmailMessage.cc,
  subjectLabel                            : Desk.i18n.model.EmailMessage.subject,
  bodyLabel                               : Desk.i18n.model.EmailMessage.body,
  stateLabel                              : Desk.i18n.model.EmailMessage.state,
  sent_dateLabel                          : Desk.i18n.model.EmailMessage.sent_date,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Email Messages',
  subtitle : 'Create and maintain Email Messages',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Desk.store.EmailMessage')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
              {
                header       : me.toLabel,
                dataIndex    : 'to',
                flex         : 1
              },
              {
                header       : me.ccLabel,
                dataIndex    : 'cc',
                flex         : 1
              },
              {
                header       : me.subjectLabel,
                dataIndex    : 'subject',
                flex         : 1
              },
              {
                header       : me.bodyLabel,
                dataIndex    : 'body',
                flex         : 1
              },
              {
                header       : me.stateLabel,
                dataIndex    : 'state',
                flex         : 1
              },
              {
                header       : me.sent_dateLabel,
                dataIndex    : 'sent_date',
                flex         : 1
              }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});
