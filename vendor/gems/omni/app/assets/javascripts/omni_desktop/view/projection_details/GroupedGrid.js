Ext.define('omni.view.projection_details.GroupedGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.omni-projection_details-GroupedGrid',
    features: [{
        groupHeaderTpl: 'Outlet: {name}',
        ftype: 'groupingsummary'
    }],
    store: Ext.create('Omni.store.ProjectionDetail',{storeId: 'ProjectionDetailStore'}),

    columns: [{
        dataIndex: 'sku_display',
        text: 'Name',
        summaryType: 'count',
        summaryRenderer: function(value){
            return Ext.String.format('{0} sku{1}', value, value !== 1 ? 's' : '');
        }
    }, {
        dataIndex: 'forecast_units',
        text: 'Units',
        summaryType: 'average'
    }],

    initComponent:function(){
        var me = this;
      
        Ext.applyIf(this, {
          associativeFilter: {
            property:   'projection_id',
            value:      this.record.get('projection_id')
          }
        });

        if(Ext.isDefined(this.defaultSearch)){
          this.store.proxy.extraParams.search = this.defaultSearch;
          this.store.load();
        }else{
          Ext.destroyMembers(this.store.proxy.extraParams, 'search');
          this.store.load();
        }

        this.callParent();
    }

});