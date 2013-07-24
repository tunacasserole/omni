    Ext.define('Omni.view.skus.Chart', {
    extend:'Ext.chart.Chart',
    alias: 'widget.omni-skus-Chart',
    title: 'Sales History',
    style: 'background:#fff',    
    // store: Ext.create('Omni.store.PeriodResult', {groupField: 'period_display', pageSize: 1000}),    
    // store: Ext.create('Omni.store.PeriodResult'),
    // store: 'Omni.store.PeriodResult',
    store:  'ChartStore',

    // animate: true,
    // highlight: true,    

    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['net_sale_units'],
        title: '# of units sold',
        grid: {
            odd: {
                opacity: 1,
                fill: '#ddd',
                stroke: '#bbb',
                'stroke-width': 1
            }
        },
        minimum: 0,
        adjustMinimumByMajorUnit: 0
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['period_display'],
        title: 'Sales Period',
        grid: true,
        label: {
            rotate: {
                degrees: 315
            }
        }
    }],
    series: [{
        type: 'column',
        highlight: true,
        label: 'outside',
        title: 'sales history series',
        axis: 'left',
        xField: 'period_display',
        yField: 'net_sale_units',
        style: {
            opacity: 0.93
        },
        // tips: {
        //   trackMouse: true,
        //   width: 140,
        //   height: 28,
        //   renderer: function(storeItem, item) {
        //     this.setTitle(storeItem.get('location_display') );
        //   }
        // }
    }],

    initComponent:function () {

        var me = this;
       
        var store = Ext.create('Omni.store.PeriodResult', {groupField: 'period_display', pageSize: 100, sorters: ['year_number','period_number']});

        store.proxy.extraParams.search = this.defaultSearch;

        store.load(function(){
            var totals = store.sum('net_sale_units', true);
            var periods = Ext.Object.getKeys(totals);
            // console.log(periods);
            var data = [];

            Ext.each(periods, function(period){
                Ext.Array.push(data, [[period, totals[period]]]);
                // console.log(period, totals[period]);
        });     

        // console.log(data);
        var chartStore = Ext.create('Ext.data.ArrayStore', {fields: ['period_display', 'net_sale_units'], data: data});
        // console.log(chartStore);   

        Ext.apply(me, {
           store: chartStore
        });        
            
        });

        

        this.callParent();
    }
});        
        

        
        // console.log(totals);
        // grouped_store = Ext.create('Omni.store.PeriodResult', {groupField: 'period_display', pageSize: 10000}).load();
        // var store = Ext.create('SalesChartStore');
        // this.store.sort('location_id','DESC'); gives java heap out of memory error.
        
        // this.store = store;
        // if(Ext.isDefined(this.defaultSearch)){
        //   this.store.proxy.extraParams.search = this.defaultSearch;
        //   this.store.load();
        // }else{
        //   Ext.destroyMembers(this.store.proxy.extraParams, 'search');
        //   this.store.load();
        // }


//     // var chart1 = Ext.create('Ext.chart.Chart', {  
//     //         renderTo: Ext.getBody(),  
//     //         style: 'background:#fff',
//     //         //store: Ext.create('Omni.store.PeriodResult',{storeId: 'PeriodResultStore'}),
//     //         store: SalesChartStore, //Ext.create('SalesChartStore'),
//     //         animate: true,
//     //         shadow: true,

//     //         axes: [{
//     //             type: 'Numeric',
//     //             position: 'left',
//     //             fields: ['net_sale_units'],
//     //             label: {
//     //                 renderer: Ext.util.Format.numberRenderer('0,0')
//     //             },
//     //             title: '# of units sold',
//     //             grid: true,
//     //             minimum: 0,
//     //             maximum: 50
//     //         }, {
//     //             type: 'Category',
//     //             position: 'bottom',
//     //             fields: ['period'],
//     //             title: 'Monthly Sales Period'
//     //         }],

//     //         series: [{
//     //             type: 'line',
//     //             axis: 'left',
//     //             xField: 'period',
//     //             yField: 'net_sale_units'                
//     //             // highlight: true,
//     //             // tips: {
//     //             //   trackMouse: true,
//     //             //   width: 140,
//     //             //   height: 28,
//     //             //   renderer: function(storeItem, item) {
//     //             //     this.setTitle(storeItem.get('period') + ': ' + storeItem.get('net_sale_units') + ' $');
//     //             //   }
//     //             // },
//     //             // label: {
//     //             //   display: 'insideEnd',
//     //             //   'text-anchor': 'middle',
//     //             //     field: 'net_sale_units',
//     //             //     renderer: Ext.util.Format.numberRenderer('0'),
//     //             //     orientation: 'vertical',
//     //             //     color: '#333'
//     //             // },
//     //         }]                
//     //     });
        
// Ext.define('SalesChartStore', {
//     extend: 'Ext.data.JsonStore', 
//     alias: 'widget.SalesChartStore',
//     fields: ['year_number','period_number','period_display', 'net_sale_units', 'location_display'],
//     data: [
//         { 'year_number': 2010, 'period_number': 1, 'period_display': '2012-JAN', 'net_sale_units':5, 'location_display':'Houston' },
//         { 'year_number': 2010, 'period_number': 1, 'period_display': '2012-JAN', 'net_sale_units':5, 'location_display':'Wichita' },        
//         { 'year_number': 2010, 'period_number': 2, 'period_display': '2012-FEB', 'net_sale_units':7, 'location_display':'Houston' },
//         { 'year_number': 2010, 'period_number': 9, 'period_display': '2012-SEP', 'net_sale_units':32, 'location_display':'Houston' },
//         { 'year_number': 2010, 'period_number': 3, 'period_display': '2012-MAR', 'net_sale_units':5, 'location_display':'Houston' },
//         { 'year_number': 2010, 'period_number': 5, 'period_display': '2012-MAY', 'net_sale_units':5, 'location_display':'Houston' },
//         { 'year_number': 2010, 'period_number': 4, 'period_display': '2012-APR', 'net_sale_units':4, 'location_display':'Houston' },
//         { 'year_number': 2010, 'period_number': 6, 'period_display': '2012-JUN', 'net_sale_units':12, 'location_display':'Houston' },
//         { 'year_number': 2010, 'period_number': 7, 'period_display': '2012-JULY', 'net_sale_units':25, 'location_display':'Houston' },
//         { 'year_number': 2010, 'period_number': 8, 'period_display': '2012-AUG', 'net_sale_units':40, 'location_display':'Houston' },
//         { 'year_number': 2010, 'period_number': 10, 'period_display': '2012-OCT', 'net_sale_units':15 , 'location_display':'Houston' },
//         { 'year_number': 2010, 'period_number': 11, 'period_display': '2012-NOV', 'net_sale_units':8, 'location_display':'Houston' },
//         { 'year_number': 2010, 'period_number': 12, 'period_display': '2012-DEC', 'net_sale_units':12, 'location_display':'Houston' },
//         { 'year_number': 2011, 'period_number': 1, 'period_display': '2013-JAN', 'net_sale_units':9, 'location_display':'Houston' },
//         { 'year_number': 2011, 'period_number': 2, 'period_display': '2013-FEB', 'net_sale_units':7, 'location_display':'Houston' },
//         { 'year_number': 2012, 'period_number': 8, 'period_display': '2013-MAR', 'net_sale_units':6, 'location_display':'Houston' },
//         { 'year_number': 2012, 'period_number': 8, 'period_display': '2013-APR', 'net_sale_units':5, 'location_display':'Houston' }
//     ]
// });   