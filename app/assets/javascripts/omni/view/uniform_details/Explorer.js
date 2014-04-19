Ext.define('Omni.view.uniform_details.Explorer', {

    extend: 'Buildit.ux.explorer.Panel',
    alias: 'widget.omni-uniform_details-Explorer',


    // EXPLORER INIT (Start) ===============================================================
    contextMenuConfig: {
        xtype: 'buildit-explorer-ContextMenu'
    },

    newForms: [{
        xtype: 'omni-uniform_details-Form'
    }],

    inspectorConfig: {
        xtype: 'omni-uniform_details-Inspector'
    },
    // EXPLORER INIT (End)

    // LABELS (Start) ======================================================================
    uniform_detail_idLabel: Omni.i18n.model.UniformDetail.uniform_detail_id,
    displayLabel: Omni.i18n.model.UniformDetail.display,
    uniform_idLabel: Omni.i18n.model.UniformDetail.uniform_id,
    style_idLabel: Omni.i18n.model.UniformDetail.style_id,
    color_idLabel: Omni.i18n.model.UniformDetail.color_id,
    style_color_idLabel: Omni.i18n.model.UniformDetail.style_color_id,
    uniform_detail_nbrLabel: Omni.i18n.model.UniformDetail.uniform_detail_nbr,
    stateLabel: Omni.i18n.model.UniformDetail.state,
    from_grade_idLabel: Omni.i18n.model.UniformDetail.from_grade_id,
    thru_grade_idLabel: Omni.i18n.model.UniformDetail.thru_grade_id,
    is_required_maleLabel: Omni.i18n.model.UniformDetail.is_required_male,
    is_required_femaleLabel: Omni.i18n.model.UniformDetail.is_required_female,
    is_optional_maleLabel: Omni.i18n.model.UniformDetail.is_optional_male,
    is_optional_femaleLabel: Omni.i18n.model.UniformDetail.is_optional_female,
    is_includes_logoLabel: Omni.i18n.model.UniformDetail.is_includes_logo,
    discount_percentLabel: Omni.i18n.model.UniformDetail.discount_percent,
    uniform_sourceLabel: Omni.i18n.model.UniformDetail.uniform_source,
    retail_priceLabel: Omni.i18n.model.UniformDetail.retail_price,
    price_unitsLabel: Omni.i18n.model.UniformDetail.price_units,
    is_approvedLabel: Omni.i18n.model.UniformDetail.is_approved,
    is_destroyedLabel: Omni.i18n.model.UniformDetail.is_destroyed,
    // LABELS (End)

    // TITLES (Start) ======================================================================
    title: 'Uniform Details',
    subtitle: 'Create and maintain Uniform Details',
    // TITLES (End)

    initComponent: function() {

        var me = this;

        // CONFIG (Start) ======================================================================
        Ext.apply(me, {
            store: Ext.create('Omni.store.UniformDetail')
        });
        // CONFIG (End)

        // COLUMNS (Start) =====================================================================
        Ext.apply(me, {
            columns: [{
                    header: me.uniform_detail_nbrLabel,
                    dataIndex: 'uniform_detail_nbr',
                    flex: 1
                }, {
                    header: me.style_idLabel,
                    dataIndex: 'style_display',
                    flex: 1
                }, {
                    header: me.color_idLabel,
                    dataIndex: 'color_display',
                    flex: 1
                }, {
                    header: me.from_grade_idLabel,
                    dataIndex: 'from_grade_display',
                    flex: 1
                }, {
                    header: me.thru_grade_idLabel,
                    dataIndex: 'thru_grade_display',
                    flex: 1
                }, {
                    xtype: 'checkcolumn',
                    header: me.is_required_maleLabel,
                    dataIndex: 'is_required_male',
                    flex: 1
                }, {
                    xtype: 'checkcolumn',
                    header: me.is_required_femaleLabel,
                    dataIndex: 'is_required_female',
                    flex: 1
                }, {
                    xtype: 'checkcolumn',
                    header: me.is_optional_maleLabel,
                    dataIndex: 'is_optional_male',
                    flex: 1
                }, {
                    header: me.is_optional_femaleLabel,
                    dataIndex: 'is_optional_female',
                    flex: 1
                }, {
                    header: me.stateLabel,
                    dataIndex: 'state',
                    flex: 1
                }
                // {
                //   header       : me.is_includes_logoLabel,
                //   dataIndex    : 'is_includes_logo',
                //   flex         : 1
                // },
                // {
                //   header       : me.discount_percentLabel,
                //   dataIndex    : 'discount_percent',
                //   flex         : 1
                // },
                // {
                //   header       : me.uniform_sourceLabel,
                //   dataIndex    : 'uniform_source',
                //   flex         : 1
                // },
                // {
                //   header       : me.retail_priceLabel,
                //   dataIndex    : 'retail_price',
                //   flex         : 1
                // },
                // {
                //   header       : me.price_unitsLabel,
                //   dataIndex    : 'price_units',
                //   flex         : 1
                // },
                // {
                //   xtype        : 'checkcolumn',
                //   header       : me.is_approvedLabel,
                //   dataIndex    : 'is_approved',
                //   flex         : 1
                // },
            ]
        });
        // COLUMNS (End)


        me.callParent();
    }

});