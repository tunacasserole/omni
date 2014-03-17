Ext.define('Omni.view.hubs.Standard', {
	extend: 'Buildit.ux.Hub',
	alias: 'widget.omni-hubs-Standard',

	bodyStyle: 'background: transparent',

  cls: 'desktop',

	initComponent: function(){
		var me = this;

		Ext.apply(this, {
      title: 'Start',
      subtitle: '',
      contextMenuConfig: {
        xtype: 'omni-hubs-StandardContextMenu'
      },
      sections: [
        {
          title: 'Manage',
          columns: 2,
          rows: 4,
          tiles: [
            {colspan: 2, rowspan: 2, title: 'Manage One', bodyCls: 'manage_one lime', target: {xtype: 'panel'}},
            {colspan: 2, rowspan: 1, title: 'Manage Two', bodyCls: 'manage_two darkblue'},
            {colspan: 2, rowspan: 1, title: 'Manage Three', bodyCls: 'manage_three magenta'},
          ]
        },
        {
          title: 'Track',
          columns: 6,
          rows: 4,
          tiles: [
            {colspan: 2, rowspan: 2, title:'Track One', bodyCls: 'track_one orange'},
            {colspan: 2, rowspan: 1, title:'Track Two', bodyCls: 'track_two green'},
            {colspan: 2, rowspan: 1, title:'Track Three', bodyCls: 'track_three darkblue'},
            {colspan: 2, rowspan: 1, title:'Track Four', bodyCls: 'track_four lightblue'},
            {colspan: 2, rowspan: 1, title:'Track Five', bodyCls: 'track_five lightblue'},
            {colspan: 2, rowspan: 1, title:'Track Six', bodyCls: 'track_six lightblue'},
            {colspan: 2, rowspan: 2, title:'Track Seven', bodyCls: 'track_seven red'},
            {colspan: 2, rowspan: 2, title:'Track Eight', bodyCls: 'track_eight darkblue'},
            {colspan: 2, rowspan: 1, title:'Track Nine', bodyCls: 'track_nine lightblue'}
          ]
        },
        {
          title: 'Report',
          columns: 6,
          rows: 4,
          tiles: [
            {colspan: 2, rowspan: 2, title:'Report One', bodyCls: 'report_one orange'},
            {colspan: 2, rowspan: 1, title:'Report Two', bodyCls: 'report_two green'},
            {colspan: 2, rowspan: 1, title:'Report Three', bodyCls: 'report_three darkblue'},
            {colspan: 2, rowspan: 1, title:'Report Four', bodyCls: 'report_four lightblue'},
            {colspan: 2, rowspan: 1, title:'Report Five', bodyCls: 'report_five lightblue'},
            {colspan: 2, rowspan: 1, title:'Report Six', bodyCls: 'report_six lightblue'},
            {colspan: 2, rowspan: 2, title:'Report Seven', bodyCls: 'report_seven red'},
            {colspan: 2, rowspan: 2, title:'Report Eight', bodyCls: 'report_eight darkblue'},
            {colspan: 2, rowspan: 1, title:'Report Nine', bodyCls: 'report_nine lightblue'}
          ]
        }
      ]
    });

    this.callParent();
  }
});