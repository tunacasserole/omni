Ext.define('Omni.view.purchases.AdvancedCreatePanel', {
  extend   : 'Ext.window.Window',
  alias    : 'widget.omni-purchases-AdvancedCreatePanel',

  width    : 400,

  height   : 600,

  ui       : 'plain',

  bodyPadding : 15,

  header   : false,

  style    : 'background: #144BA3',

  defaultAlign : 'tr-br',

  explorer : undefined,

  layout: 'anchor',


  initComponent : function() {
    var me = this;

    Ext.apply(me, {
      items : [
        {
          xtype          : 'form',
          items          : [
            me.fieldset = Ext.create('Ext.form.FieldSet', {
              xtype              : 'fieldset',
              title              : 'General Information',
              collapsible        : true,
              defaultType        : 'textfield',
              defaults           : {anchor: '95%'},
              layout             : 'anchor',
              items              :[
                { 
                  xtype             : 'buildit-Locator',
                  name              : 'supplier_id',
                  fieldLabel        : 'Supplier',
                  itemId            : 'supplierId',
                  allowBlank        : true,
                  store             : Ext.create('Omni.store.Supplier',{pageSize: 20}),
                  displayField      : 'display',
                  queryField        : 'display',
                  valueField        : 'supplier_id',
                  itemTpl           : '{display}'
                }
              ]
            })
          ]
        },{
          xtype   : 'button',
          title   : 'Create',
          handler : function(){
            var supplierId = me.fieldset.getComponent('supplierId').getValue();

            Omni.service.Purchase.callClassMethod({name: 'createAdvancedPO', supplierId: supplierId, something: '3456'}, function(response){console.log(response)})
        
          }
        }
      ]
    })

    me.callParent();

  }  // initComponent



}); // Ext.define