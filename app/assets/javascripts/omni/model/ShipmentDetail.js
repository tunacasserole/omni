Ext.define('Omni.model.ShipmentDetail', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'display_as',
      type       : 'string'
    },
    {
      name       : 'shipment_detail_id',
      type       : 'string'
    },
    {
      name       : 'display',
      type       : 'string'
    },
    {
      name       : 'shipment_id',
      type       : 'string'
    },
    {
      name       : 'shipment_display',
      type       : 'string'
    },
    {
      name       : 'pick_display',
      type       : 'string'
    },
    {
      name       : 'pick_id',
      type       : 'string'
    },
    {
      name       : 'ship_units',
      type       : 'integer'
    },
    {
      name       : 'box_number',
      type       : 'string'
    },
    {
      name       : 'received_units',
      type       : 'integer'
    },
    {
      name       : 'container_id',
      type       : 'string'
    },
    {
      name       : 'container_display',
      type       : 'string'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'shipment_detail_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Omni.service.ShipmentDetail.create,
      read       : Omni.service.ShipmentDetail.read,
      update     : Omni.service.ShipmentDetail.update,
      destroy    : Omni.service.ShipmentDetail.destroy
    },
    reader     : {
      type       : 'json',
      root       : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

}); // Ext.define('Omni.model.ShipmentDetail'
