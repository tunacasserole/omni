Ext.define('Desk.view.email_messages.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.desk-email_messages-Form',


  // LABELS (Start) =======================================================================
  email_message_idLabel                   : Desk.i18n.model.EmailMessage.email_message_id,
  toLabel                                 : Desk.i18n.model.EmailMessage.to,
  ccLabel                                 : Desk.i18n.model.EmailMessage.cc,
  subjectLabel                            : Desk.i18n.model.EmailMessage.subject,
  bodyLabel                               : Desk.i18n.model.EmailMessage.body,
  stateLabel                              : Desk.i18n.model.EmailMessage.state,
  sent_dateLabel                          : Desk.i18n.model.EmailMessage.sent_date,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'email_message_id',
      value       : this.record.get('email_message_id')
    };
    // FILTER (End)



    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items        : [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
              {
                xtype        : 'textfield',
                name         : 'to',
                fieldLabel   : me.toLabel,
                maxLength    : 4000,
                minLength    : 0,
                allowBlank   : true
              },
              {
                xtype        : 'textfield',
                name         : 'cc',
                fieldLabel   : me.ccLabel,
                maxLength    : 4000,
                minLength    : 0,
                allowBlank   : true
              },
              {
                xtype        : 'textfield',
                name         : 'subject',
                fieldLabel   : me.subjectLabel,
                maxLength    : 200,
                minLength    : 0,
                allowBlank   : true
              },
              {
                xtype        : 'textfield',
                name         : 'body',
                fieldLabel   : me.bodyLabel,
                maxLength    : 4000,
                minLength    : 0,
                allowBlank   : true
              },
              {
                xtype        : 'textfield',
                name         : 'state',
                fieldLabel   : me.stateLabel,
                maxLength    : 200,
                minLength    : 0,
                allowBlank   : true
              },
              {
                xtype        : 'textfield',
                name         : 'sent_date',
                fieldLabel   : me.sent_dateLabel,
                maxLength    : 100,
                minLength    : 0,
                allowBlank   : true
              }
          ]
        }/*,
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
      title       : 'Email Message',
      subtitle    : 'Edit Email Message'
    });
    // TITLES (End)

    this.callParent();

  }  // initComponent

}); // Ext.define('Desk.view.email_messages.Form'
