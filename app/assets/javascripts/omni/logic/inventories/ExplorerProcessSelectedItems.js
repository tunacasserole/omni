/**
 *  The PROCESS button will be clicked from the context menu bound to the gridview.
 */
Ext.define('Omni.logic.inventories.ExplorerProcessSelectedItems', {
  statics: {
    click:function(btn, event_name){
      var explorerGridView = btn.ownerCt.contextOwner.down('grid').getView();
      var selectedItems = explorerGridView.getSelectionModel().getSelection();
      var store = btn.ownerCt.contextOwner.store;

      Ext.Msg.confirm(
        'Process Confirmation',
        'You are about to process the selected row(s), are you sure?',
        function(btn){
          if(btn == 'yes'){
            Ext.each(selectedItems, function(item){
              Omni.service.Inventory.fireEvent(
                {
                  name: event_name,
                  id: item.get('inventory_id')
                },
                function(response, e){
                  if(response.success == true){
                    store.load();
                  }
                }
              );
            });
          };
        }
      );
    }
  }
});