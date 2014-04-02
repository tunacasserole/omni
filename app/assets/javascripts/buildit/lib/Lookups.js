var lookupStoreFields = ['lookup_id', 'code', 'code_int', 'category', 'default_text', 'depends_on', 'is_enabled'];
Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ALLOCATION_FORMULA-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['C72A35DA038911PURCHDIVIDEEQUALLY','DIVIDE_EQUALLY',,'ALLOCATION_FORMULA','Divide Equally',null,true],
    ['C72A35DA038911APPROVEDPROJECTION','APPROVED_PROJECTION',,'ALLOCATION_FORMULA','Approved Projection',null,true],
    ['C72A35DA038911E398B42PROJECTION1','PROJECTION_1_UNITS',,'ALLOCATION_FORMULA','Projection 1',null,true],
    ['C72A35DA038911E398B42PROJECTION2','PROJECTION_2_UNITS',,'ALLOCATION_FORMULA','Projection 2',null,true],
    ['C72A35DA038911E398B42PROJECTION3','PROJECTION_3_UNITS',,'ALLOCATION_FORMULA','Projection 3',null,true],
    ['C72A35DA038911E398B42PROJECTION4','PROJECTION_4_UNITS',,'ALLOCATION_FORMULA','Projection 4',null,true],
    ['C72A35DA038911PROJECTIONFORECAST','LAST_FORECAST_UNITS',,'ALLOCATION_FORMULA','Projection Forecast',null,true],
    ['C72A35DA038911PURCHASEALLOCATION','ALLOCATED_UNITS',,'ALLOCATION_FORMULA','Purchase Allocation',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'FABRIC_CONTENT-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['935DXXXXX72811YYY2D212313B10044E','100%_ACRYLIC',,'FABRIC_CONTENT','100% Acrylic',null,true],
    ['3O3E4U5IP6UDY7IHY8HYD8H9DYNI0DTK','FLANNEL',,'FABRIC_CONTENT','Flannel',null,true],
    ['935DX1234567B1YYY2D212313B10044E','100%_COTTON',,'FABRIC_CONTENT','100% Cotton',null,true],
    ['A67EEEE8972811E295B122000A9D0283','CUSTOM',,'FABRIC_CONTENT','Custom',null,true],
    ['456789OOEUI6PJKXBDIUEO9876545678','LEATHER',,'FABRIC_CONTENT','Leather',null,true],
    ['9E795436972811E295B122000A9D0283','65%_POLY_35%_COTTON',,'FABRIC_CONTENT','65/35 Poly Cotton',null,true],
    ['IDHTNTHDIUEUIDUEOAO212313B10044E','100%_NYLON',,'FABRIC_CONTENT','100% Nylon',null,true],
    ['45567UIDH98UQJKXBEUIDHTYFGCR5678','MISC',,'FABRIC_CONTENT','Miscellaneous',null,true],
    ['9FD652F2972811E2A3D212313B10044E','65%_POLY_35%_RAYON',,'FABRIC_CONTENT','65/35 Poly Rayon',null,true],
    ['IDHTNTHDIUEUIDU1234567856760044E','100%_POLYESTER',,'FABRIC_CONTENT','100% Polyester',null,true],
    ['456789IDHTLRCGFYPOEUII55OEUR5678','NONE',,'FABRIC_CONTENT','None',null,true],
    ['9667B6B6972811E295B122000A9D0283','50/25/25_POLY/RAYON/ACRYLIC',,'FABRIC_CONTENT','50/25/25 Polyrayon Acrylic Triblend',null,true],
    ['A11014D2972811E2A3D212313B10044E','70%_POLYESTER_30%_WOOL',,'FABRIC_CONTENT','70/30 Poly Wool',null,true],
    ['45634567890BXKJEEUUIDHTYFGCR5678','NYLON',,'FABRIC_CONTENT','Nylon',null,true],
    ['9759B038972811E295B122000A9D0283','50%_COTTON_50%_POLYESTER',,'FABRIC_CONTENT','50/50 Cotton Poly',null,true],
    ['A1F8664C972811E2A3D212313B10044E','75%_COTTON_25%_POLY',,'FABRIC_CONTENT','75/25 Cotton Poly',null,true],
    ['982EA07C972811E295B122000A9D0283','55%_COTTON_45%_POLY',,'FABRIC_CONTENT','55/45 Cotton Poly',null,true],
    ['A301C060972811E295B122000A9D0283','75%_POLY_25%_COTTON',,'FABRIC_CONTENT','75/25 Poly Cotton',null,true],
    ['A77654UIDH654ID5OEUIDHD13B10044E','POLYCOTTON',,'FABRIC_CONTENT','Polycotton',null,true],
    ['98FACC24972811E2A3D212313B10044E','57%_COTTON_40%_POLY_3%_LICRA',,'FABRIC_CONTENT','57/40/3 Cotton Poly Licra',null,true],
    ['A3E4CC8E972811E2A3D212313B10044E','90%_COTTON_10%_POLY',,'FABRIC_CONTENT','90/10 Cotton Poly',null,true],
    ['A77654UEUI5D432UID54UID54ID5432E','POLYESTER',,'FABRIC_CONTENT','Polyester',null,true],
    ['99F05F2C972811E295B122000A9D0283','60%_COTTON_40%_POLY',,'FABRIC_CONTENT','60/40 Cotton Poly',null,true],
    ['A4B14642972811E295B122000A9D0283','90%_COTTON_10%_SPANDEX',,'FABRIC_CONTENT','90/10 Cotton Spandex',null,true],
    ['A77AC3F8972HDIUEOEUIDHD13B10044E','WOOL',,'FABRIC_CONTENT','Wool',null,true],
    ['9B182312972811E2A3D212313B10044E','60%_POLY_40%_RAYON',,'FABRIC_CONTENT','60/40 Poly Rayon',null,true],
    ['A5890B90972811E2A3D212313B10044E','97%_COTTON_3%_SPANDEX',,'FABRIC_CONTENT','97/3 Cotton Spandex',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'LABEL_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['B55A46D2972911E2A3D212313B10044E','END_FOLD_BAR_TACK',,'LABEL_TYPE','End Fold Bar Tack',null,true],
    ['B648FC00972911E295B122000A9D0283','BLANK_HANG_TAGS',,'LABEL_TYPE','Blank Hang Tags',null,true],
    ['BEE8D0A2972811E295B122000A9D0283','CARTON',,'LABEL_TYPE','Carton',null,true],
    ['C0CD9294972911E2A3D212313B10044E','ELASTIC',,'LABEL_TYPE','Elastic',null,true],
    ['C1AEB6AC972911E295B122000A9D0283','LACE_TRIM',,'LABEL_TYPE','Lace Trim',null,true],
    ['B72B5262972911E2A3D212313B10044E','THREAD_(REG_PRODUCTION)',,'LABEL_TYPE','Thread (reg production)',null,true],
    ['BFB5817E972811E2A3D212313B10044E','PALLET',,'LABEL_TYPE','Pallet',null,true],
    ['C2B26828972911E2A3D212313B10044E','SHIRTBOARDS',,'LABEL_TYPE','Shirtboards',null,true],
    ['B858B8AA972911E2A3D212313B10044E','THREAD_(MONOGRAMMING)',,'LABEL_TYPE','Thread (monogramming)',null,true],
    ['C0913386972811E295B122000A9D0283','PICKING',,'LABEL_TYPE','Picking',null,true],
    ['C3A07C48972911E295B122000A9D0283','JET_CLIPS',,'LABEL_TYPE','Jet Clips',null,true],
    ['B9792382972911E2A3D212313B10044E','ZIPPERS',,'LABEL_TYPE','Zippers',null,true],
    ['C154BF5E972811E2A3D212313B10044E','PRICE',,'LABEL_TYPE','Price',null,true],
    ['C5492F5E972911E295B122000A9D0283','POLY_PLASTIC_BAGS',,'LABEL_TYPE','Poly Plastic Bags',null,true],
    ['BAD850E0972911E295B122000A9D0283','PIPING,_SOUTACHE,_BRAID',,'LABEL_TYPE','Piping, Soutache, Braid',null,true],
    ['C24C4A62972811E2A3D212313B10044E','PRODUCT',,'LABEL_TYPE','Product',null,true],
    ['C688ADAE972911E2A3D212313B10044E','STICKER_LABELS_FOR_TAGS',,'LABEL_TYPE','Sticker Labels for Tags',null,true],
    ['BC4C9D64972911E2A3D212313B10044E','BIAS',,'LABEL_TYPE','Bias',null,true],
    ['C33D5FCE972811E295B122000A9D0283','SHELF',,'LABEL_TYPE','Shelf',null,true],
    ['B1EBEA82972911E2A3D212313B10044E','PARKER_ID',,'LABEL_TYPE','Parker ID',null,true],
    ['BD4E3AB0972911E2A3D212313B10044E','HANGERS',,'LABEL_TYPE','Hangers',null,true],
    ['B3627C14972911E295B122000A9D0283','COUNTRY_OF_ORGIN',,'LABEL_TYPE','Country of Orgin',null,true],
    ['BEC79FD0972911E295B122000A9D0283','BUTTONS',,'LABEL_TYPE','Buttons',null,true],
    ['B476D9D8972911E2A3D212313B10044E','SIDE_SLACK_LABEL',,'LABEL_TYPE','Side Slack Label',null,true],
    ['BFA4AD80972911E295B122000A9D0283','INTERFACING,_PELLON',,'LABEL_TYPE','Interfacing, Pellon',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'STATE_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['6267CDFE972A11E2A3D212313B10044E','MA',,'STATE_CODE','Massachusetts',null,true],
    ['4BF6708E972A11E2A3D212313B10044E','AK',,'STATE_CODE','Alaska',null,true],
    ['4BF6708E972A11E2A3D212XXXXXBLANK','BLANK',,'STATE_CODE',' ',null,true],
    ['5769C448972A11E295B122000A9D0283','GA',,'STATE_CODE','Georgia',null,true],
    ['63B80EE4972A11E2A3D212313B10044E','MD',,'STATE_CODE','Maryland',null,true],
    ['6DE265A4972A11E2A3D212313B10044E','NE',,'STATE_CODE','Nebraska',null,true],
    ['6F0E6568972A11E2A3D212313B10044E','NH',,'STATE_CODE','New Hampshire',null,true],
    ['799D84D2972A11E2A3D212313B10044E','SC',,'STATE_CODE','South Carolina',null,true],
    ['8426D0D4972A11E295B122000A9D0283','WY',,'STATE_CODE','Wyoming',null,true],
    ['4D322AF6972A11E295B122000A9D0283','AL',,'STATE_CODE','Alabama',null,true],
    ['561B4EF4972A11E295B122000A9D0283','FL',,'STATE_CODE','Florida',null,true],
    ['586D90AE972A11E295B122000A9D0283','HI',,'STATE_CODE','Hawaii',null,true],
    ['64B97C42972A11E295B122000A9D0283','ME',,'STATE_CODE','Maine',null,true],
    ['7019AEEA972A11E2A3D212313B10044E','NJ',,'STATE_CODE','New Jersey',null,true],
    ['78BCD09A972A11E2A3D212313B10044E','RI',,'STATE_CODE','Rhode Island',null,true],
    ['7AB3BB84972A11E2A3D212313B10044E','SD',,'STATE_CODE','South Dakota',null,true],
    ['4E4F51AC972A11E2A3D212313B10044E','AR',,'STATE_CODE','Arkansas',null,true],
    ['59586854972A11E295B122000A9D0283','IA',,'STATE_CODE','Iowa',null,true],
    ['65C993CE972A11E2A3D212313B10044E','MI',,'STATE_CODE','Michigan',null,true],
    ['711A752C972A11E295B122000A9D0283','NM',,'STATE_CODE','New Mexico',null,true],
    ['7BF34B86972A11E2A3D212313B10044E','TN',,'STATE_CODE','Tennessee',null,true],
    ['8310DD2A972A11E295B122000A9D0283','WV',,'STATE_CODE','West Virginia',null,true],
    ['4F8CE2A0972A11E295B122000A9D0283','AZ',,'STATE_CODE','Arizona',null,true],
    ['5A69BEAA972A11E2A3D212313B10044E','ID',,'STATE_CODE','Idaho',null,true],
    ['66FE17A6972A11E295B122000A9D0283','MN',,'STATE_CODE','Minnesota',null,true],
    ['72314904972A11E295B122000A9D0283','NV',,'STATE_CODE','Nevada',null,true],
    ['7D8BDEEA972A11E295B122000A9D0283','TX',,'STATE_CODE','Texas',null,true],
    ['50621C0E972A11E295B122000A9D0283','CA',,'STATE_CODE','California',null,true],
    ['5B8E3CD4972A11E295B122000A9D0283','IL',,'STATE_CODE','Illinois',null,true],
    ['67DB8258972A11E2A3D212313B10044E','MO',,'STATE_CODE','Missouri',null,true],
    ['73439414972A11E295B122000A9D0283','NY',,'STATE_CODE','New York',null,true],
    ['7E85AB14972A11E295B122000A9D0283','UT',,'STATE_CODE','Utah',null,true],
    ['5163F2B2972A11E295B122000A9D0283','CO',,'STATE_CODE','Colorado',null,true],
    ['5CEBC074972A11E295B122000A9D0283','IN',,'STATE_CODE','Indiana',null,true],
    ['69109906972A11E2A3D212313B10044E','MS',,'STATE_CODE','Mississippi',null,true],
    ['74101F16972A11E2A3D212313B10044E','OH',,'STATE_CODE','Ohio',null,true],
    ['7F6E035A972A11E2A3D212313B10044E','VA',,'STATE_CODE','Virginia',null,true],
    ['52E27B68972A11E2A3D212313B10044E','CT',,'STATE_CODE','Connecticut',null,true],
    ['5DDE13C4972A11E2A3D212313B10044E','KS',,'STATE_CODE','Kansas',null,true],
    ['6A2505FC972A11E2A3D212313B10044E','MT',,'STATE_CODE','Montana',null,true],
    ['74EF965A972A11E2A3D212313B10044E','OK',,'STATE_CODE','Oklahoma',null,true],
    ['80333116972A11E2A3D212313B10044E','VT',,'STATE_CODE','Vermont',null,true],
    ['54049120972A11E2A3D212313B10044E','DC',,'STATE_CODE','District of Columbia',null,true],
    ['5F0B70E8972A11E295B122000A9D0283','KY',,'STATE_CODE','Kentucky',null,true],
    ['6B1E6714972A11E2A3D212313B10044E','NC',,'STATE_CODE','North Carolina',null,true],
    ['762B1E90972A11E295B122000A9D0283','OR',,'STATE_CODE','Oregon',null,true],
    ['8154E4C2972A11E2A3D212313B10044E','WA',,'STATE_CODE','Washington',null,true],
    ['55331BD4972A11E295B122000A9D0283','DE',,'STATE_CODE','Delaware',null,true],
    ['608ED9E6972A11E2A3D212313B10044E','LA',,'STATE_CODE','Louisiana',null,true],
    ['6CF5E60C972A11E2A3D212313B10044E','ND',,'STATE_CODE','North Dakota',null,true],
    ['77696992972A11E2A3D212313B10044E','PA',,'STATE_CODE','Pennsylvania',null,true],
    ['822B15EC972A11E2A3D212313B10044E','WI',,'STATE_CODE','Wisconsin',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'TENDER_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['8038CE1A972911E295B122000A9D0283','VOUCHER',,'TENDER_TYPE','Voucher',null,true],
    ['76640BF2972911E2A3D212313B10044E','CASH',,'TENDER_TYPE','Cash',null,true],
    ['81807142972911E295B122000A9D0283','COUPON',,'TENDER_TYPE','Coupon',null,true],
    ['7738018C972911E295B122000A9D0283','CHECK',,'TENDER_TYPE','Check',null,true],
    ['82E475E2972911E2A3D212313B10044E','TRAVELERS_CHECK',,'TENDER_TYPE','Travelers Check',null,true],
    ['78072F7A972911E295B122000A9D0283','AMEX',,'TENDER_TYPE','American Express',null,true],
    ['83F341DE972911E2A3D212313B10044E','MONEY_ORDER',,'TENDER_TYPE','Money Order',null,true],
    ['79156AE4972911E2A3D212313B10044E','VISA',,'TENDER_TYPE','VISA',null,true],
    ['8502C392972911E2A3D212313B10044E','CHARGE_ON_ACCOUNT',,'TENDER_TYPE','Charge On Account',null,true],
    ['7A7CCF9E972911E2A3D212313B10044E','MC',,'TENDER_TYPE','MasterCard',null,true],
    ['868EC4F4972911E2A3D212313B10044E','STORE_CREDIT',,'TENDER_TYPE','Store Credit',null,true],
    ['7B6A9BB6972911E295B122000A9D0283','DISCOVER',,'TENDER_TYPE','Discover',null,true],
    ['7C851BCA972911E295B122000A9D0283','DINERS',,'TENDER_TYPE','Diners Club',null,true],
    ['7E47755C972911E2A3D212313B10044E','GIFT_CARD',,'TENDER_TYPE','Gift Card',null,true],
    ['7F336552972911E2A3D212313B10044E','GIFT_CERTIFICATE',,'TENDER_TYPE','Gift Certificate',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ACCOUNT_EXCLUSIVITY-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['4DDD2A42972911E295B1220EXCLUSIVE','EXCLUSIVE',,'ACCOUNT_EXCLUSIVITY','Exclusive',null,true],
    ['4DDD2A42972911E295B122000ASHARED','SHARED',,'ACCOUNT_EXCLUSIVITY','Shared',null,true],
    ['4DDD2A42972911E295B122000A9DBULK','BULK',,'ACCOUNT_EXCLUSIVITY','Bulk',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ACCOUNT_GENDER-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['4DDD2A42972911E295B122000A9D0283','MALE',,'ACCOUNT_GENDER','Male',null,true],
    ['4EBD6CCE972911E295B122000A9D0283','FEMALE',,'ACCOUNT_GENDER','Female',null,true],
    ['4FFF5B74972911E2A3D212313B10044E','COED',,'ACCOUNT_GENDER','Coed',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ACCOUNT_STANDING-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['567885829728BBB34567GOODSTANDING','GOOD_STANDING',,'ACCOUNT_STANDING','In Good Standing',null,true],
    ['567885829728BBB345678INCJEOPARDY','JEOPARDY',,'ACCOUNT_STANDING','At Jeopardy',null,true],
    ['567885829728BBB345678INCOMETLOST','LOST',,'ACCOUNT_STANDING','Lost',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ACCOUNT_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['567885829728BBB3456782313B100AAA','CUSTOMER',,'ACCOUNT_TYPE','School - Customer',null,true],
    ['912385829728HHHAHEHUH2313B100AAA','NON_CONTRACT',,'ACCOUNT_TYPE','School - Non-Contract',null,true],
    ['8345858OTETUHHH2A3D212313B100AAA','PROSPECT',,'ACCOUNT_TYPE','School - Prospect',null,true],
    ['3857858294TUHNN2A3D212313B100AAA','CLOSED',,'ACCOUNT_TYPE','School - Closed',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ADDRESS_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['2094F804972811E295B122000A9D0283','COMPANY',,'ADDRESS_TYPE','Company',null,true],
    ['219928BA972811E295B122000A9D0283','CONTRACT',,'ADDRESS_TYPE','Contract',null,true],
    ['22AE0E0A972811E295B122000A9D0283','HOME',,'ADDRESS_TYPE','Home',null,true],
    ['239D7EC2972811E295B122000A9D0283','NOT_ASSIGNED',,'ADDRESS_TYPE','Not Assigned',null,true],
    ['24B4C0C2972811E2A3D212313B10044E','SITE',,'ADDRESS_TYPE','Site',null,true],
    ['2661A99E972811E2A3D212313B10044E','STORE',,'ADDRESS_TYPE','Store',null,true],
    ['27E37BEE972811E295B122000A9D0283','SUPPLIER',,'ADDRESS_TYPE','Supplier',null,true],
    ['28DE4CD6972811E2A3D212313B10044E','WAREHOUSE',,'ADDRESS_TYPE','Warehouse',null,true],
    ['2A0C4FB8972811E2A3D212313B10044E','WORK',,'ADDRESS_TYPE','Work',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ANNUAL_TUITION-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['567885829728BBB34567TUITIONTIER1','TUITION_TIER_1',,'ANNUAL_TUITION','< $5K',null,true],
    ['567885829728BBB34567TUITIONTIER2','TUITION_TIER_2',,'ANNUAL_TUITION','$5K - $10K',null,true],
    ['567885829728BBB34567TUITIONTIER3','TUITION_TIER_3',,'ANNUAL_TUITION','> $10K',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'BANK_ACCOUNT_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['2B45E57E972811E2A3D212313B10044E','CHECKING',,'BANK_ACCOUNT_TYPE','Checking',null,true],
    ['2C59B936972811E2A3D212313B10044E','SAVINGS',,'BANK_ACCOUNT_TYPE','Savings',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'BIN_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['2DE9EAFA972811E2A3D212313B10044E','FLOOR',,'BIN_TYPE','Floor',null,true],
    ['2F81CC5C972811E2A3D212313B10044E','RACK',,'BIN_TYPE','Rack',null,true],
    ['307A61C8972811E2A3D212313B10044E','OTHER',,'BIN_TYPE','Other',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'BOM_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['312713B4972811E2A3D212313B10044E','CONVERSION',,'BOM_TYPE','Conversion',null,true],
    ['32039C8A972811E295B122000A9D0283','MANUFACTURING',,'BOM_TYPE','Manufacturing',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'BRAND-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['363BAA90972811E295B122000A9D0283','PARKER',,'BRAND','Parker School Uniforms',null,true],
    ['32D4DAA2972811E295B122000A9D0283','BUCKHEAD',,'BRAND','Buckhead School Uniforms',null,true],
    ['339D2BA6972811E2A3D212313B10044E','TRUE_GRITS',,'BRAND','True Grits School Uniforms',null,true],
    ['34E8D776972811E295B122000A9D0283','CHARTER',,'BRAND','Charter School Uniforms',null,true],
    ['77880CFA972811E2A3D212NONBRANDED','NON-BRANDED',,'BRAND','Non-Branded',null,true],
    ['77880CFA972811E2A3D212313COMPASS','COMPASS',,'BRAND','Compass',null,true],
    ['77880CFA972811E2A3D21231REDLABEL','RED_LABEL',,'BRAND','Red Label',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'BRAND_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['370DA2FC972811E295B122000A9D0283','NATIONAL',,'BRAND_TYPE','National',null,true],
    ['38038424972811E2A3D212313B10044E','PRIVATE',,'BRAND_TYPE','Private',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CATEGORY_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['38D8A21C972811E2A3D212313B10044E','MANUFACTURED',,'CATEGORY_TYPE','Manufactured',null,true],
    ['39B5C17E972811E2A3D212313B10044E','PURCHASED',,'CATEGORY_TYPE','Purchased',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CLOCK_TIME-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['39B5C17E972811E2A3D212313BCLOSED','CLOSED',,'CLOCK_TIME','CLOSED',null,true],
    ['39B5C17E972811E2A3D212313B0700AM','0700AM',,'CLOCK_TIME','7:00 AM',null,true],
    ['39B5C17E972811E2A3D212313B0730AM','0730AM',,'CLOCK_TIME','7:30 AM',null,true],
    ['39B5C17E972811E2A3D212313B0800AM','0800AM',,'CLOCK_TIME','8:00 AM',null,true],
    ['39B5C17E972811E2A3D212313B0830AM','0830AM',,'CLOCK_TIME','8:30 AM',null,true],
    ['39B5C17E972811E2A3D212313B0900AM','0900AM',,'CLOCK_TIME','9:00 AM',null,true],
    ['39B5C17E972811E2A3D212313B0930AM','0930AM',,'CLOCK_TIME','9:30 AM',null,true],
    ['39B5C17E972811E2A3D212313B1000AM','1000AM',,'CLOCK_TIME','10:00 AM',null,true],
    ['39B5C17E972811E2A3D212313B1030AM','1030AM',,'CLOCK_TIME','10:30 AM',null,true],
    ['39B5C17E972811E2A3D212313B1100AM','1100AM',,'CLOCK_TIME','11:00 AM',null,true],
    ['39B5C17E972811E2A3D212313B1130AM','1130AM',,'CLOCK_TIME','11:30 AM',null,true],
    ['39B5C17E972811E2A3D212313B1200PM','1200PM',,'CLOCK_TIME','12:00 PM',null,true],
    ['39B5C17E972811E2A3D212313B1230PM','1230PM',,'CLOCK_TIME','12:30 PM',null,true],
    ['39B5C17E972811E2A3D212313B0100PM','0100PM',,'CLOCK_TIME','1:00 PM',null,true],
    ['39B5C17E972811E2A3D212313B0130PM','0130PM',,'CLOCK_TIME','1:30 PM',null,true],
    ['39B5C17E972811E2A3D212313B0200PM','0200PM',,'CLOCK_TIME','2:00 PM',null,true],
    ['39B5C17E972811E2A3D212313B0230PM','0230PM',,'CLOCK_TIME','2:30 PM',null,true],
    ['39B5C17E972811E2A3D212313B0300PM','0300PM',,'CLOCK_TIME','3:00 PM',null,true],
    ['39B5C17E972811E2A3D212313B0330PM','0330PM',,'CLOCK_TIME','3:30 PM',null,true],
    ['39B5C17E972811E2A3D212313B0400PM','0400PM',,'CLOCK_TIME','4:00 PM',null,true],
    ['39B5C17E972811E2A3D212313B0430PM','0430PM',,'CLOCK_TIME','4:30 PM',null,true],
    ['39B5C17E972811E2A3D212313B0500PM','0500PM',,'CLOCK_TIME','5:00 PM',null,true],
    ['39B5C17E972811E2A3D212313B0530PM','0530PM',,'CLOCK_TIME','5:30 PM',null,true],
    ['39B5C17E972811E2A3D212313B0600PM','0600PM',,'CLOCK_TIME','6:00 PM',null,true],
    ['39B5C17E972811E2A3D212313B0630PM','0630PM',,'CLOCK_TIME','6:30 PM',null,true],
    ['39B5C17E972811E2A3D212313B0700PM','0700PM',,'CLOCK_TIME','7:00 PM',null,true],
    ['39B5C17E972811E2A3D212313B0730PM','0730PM',,'CLOCK_TIME','7:30 PM',null,true],
    ['39B5C17E972811E2A3D212313B0800PM','0800PM',,'CLOCK_TIME','8:00 PM',null,true],
    ['39B5C17E972811E2A3D212313B0830PM','0830PM',,'CLOCK_TIME','8:30 PM',null,true],
    ['39B5C17E972811E2A3D212313B0900PM','0900PM',,'CLOCK_TIME','9:00 PM',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'COLOR_FAMILY-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['6112DC84972811E2A3D212313B10044E','WHITE',,'COLOR_FAMILY','White',null,true],
    ['56FB7E22972811E2A3D212313B10044E','BLACK',,'COLOR_FAMILY','Black',null,true],
    ['622A8496972811E295B122000A9D0283','YELLOW',,'COLOR_FAMILY','Yellow',null,true],
    ['57D95ED6972811E295B122000A9D0283','BLUE',,'COLOR_FAMILY','Blue',null,true],
    ['58D6CAA8972811E2A3D212313B10044E','BROWN',,'COLOR_FAMILY','Brown',null,true],
    ['59AD11C6972811E2A3D212313B10044E','GREEN',,'COLOR_FAMILY','Green',null,true],
    ['5AB82F74972811E295B122000A9D0283','MIXED',,'COLOR_FAMILY','Mixed',null,true],
    ['5C4A67A8972811E2A3D212313B10044E','ORANGE',,'COLOR_FAMILY','Orange',null,true],
    ['5D9C7E0C972811E295B122000A9D0283','PLAID',,'COLOR_FAMILY','Plaid',null,true],
    ['5EC7D718972811E295B122000A9D0283','RED',,'COLOR_FAMILY','Red',null,true],
    ['5FD43CD2972811E2A3D212313B10044E','VIOLET',,'COLOR_FAMILY','Violet',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CONTACT_METHOD-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['63EE4060972811E295B122000A9D0283','MAIL',,'CONTACT_METHOD','Mail',null,true],
    ['654EBC8C972811E295B122000A9D0283','PHONE',,'CONTACT_METHOD','Phone',null,true],
    ['668E086E972811E2A3D212313B10044E','EMAIL',,'CONTACT_METHOD','Email',null,true],
    ['68030776972811E2A3D212313B10044E','SMS',,'CONTACT_METHOD','SMS',null,true],
    ['69070776972811E295B122000A9D0283','NONE',,'CONTACT_METHOD','None',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CONTAINER_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['6A23534E972811E295B122000A9D0283','CARTON',,'CONTAINER_TYPE','Carton',null,true],
    ['6B1118D6972811E2A3D212313B10044E','PALLET',,'CONTAINER_TYPE','Pallet',null,true],
    ['6D0757E0972811E295B122000A9D0283','TRAILER',,'CONTAINER_TYPE','Trailer',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CONTRACT_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['6E500606972811E295B122000A9D0283','NONE',,'CONTRACT_TYPE','None',null,true],
    ['6F85D67C972811E2A3D212313B10044E','STANDARD_2_YEAR',,'CONTRACT_TYPE','Standard 2-Year',null,true],
    ['70B2A372972811E295B122000A9D0283','STANDARD_3_YEAR',,'CONTRACT_TYPE','Standard 3-Year',null,true],
    ['71634D76972811E2A3D212313B10044E','CUSTOM',,'CONTRACT_TYPE','Custom',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CONVERSION_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['73CA0BA4972811E2A3D212313B10NONE','NONE',,'CONVERSION_TYPE','None',null,true],
    ['73CA0BA4972811E2A3D212313B10044E','EMBLEM',,'CONVERSION_TYPE','Emblem',null,true],
    ['755A65A4972811E295B122000A9D0283','LOCAL_MONOGRAM',,'CONVERSION_TYPE','Local Monogram',null,true],
    ['7679E5AE972811E295B122000A9D0283','MONOGRAM',,'CONVERSION_TYPE','Monogram',null,true],
    ['77880CFA972811E2A3D212313B10044E','SILKSCREEN',,'CONVERSION_TYPE','Silkscreen',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CUSTOMER_ACCOUNT_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['78A9DCB2972811E2A3D212313B10044E','NONE',,'CUSTOMER_ACCOUNT_TYPE','None',null,true],
    ['799ED74E972811E295B122000A9D0283','CONSUMER',,'CUSTOMER_ACCOUNT_TYPE','Consumer',null,true],
    ['7AB89ACA972811E295B122000A9D0283','SCHOOL',,'CUSTOMER_ACCOUNT_TYPE','School',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CUSTOMER_CANCEL_REASON-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['7BCB7CA2972811E295B122000A9D0283','WAIT',,'CUSTOMER_CANCEL_REASON','Wait Too Long',null,true],
    ['7CB1815C972811E2A3D212313B10044E','DONT_WANT',,'CUSTOMER_CANCEL_REASON','No Longer Want the Product',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CUSTOMER_DISCOUNT_REASON-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['7D8E915A972811E2A3D212313B10044E','PROFESSIONAL',,'CUSTOMER_DISCOUNT_REASON','Teacher or Administrator',null,true],
    ['7E481558972811E2A3D212313B10044E','EMPLOYEE',,'CUSTOMER_DISCOUNT_REASON','Employee Discount',null,true],
    ['7F45A16E972811E295B122000A9D0283','CONTRACT',,'CUSTOMER_DISCOUNT_REASON','Contracted School Discount',null,true],
    ['805B0DB4972811E2A3D212313B10044E','PROMOTIONAL',,'CUSTOMER_DISCOUNT_REASON','Promotional Price',null,true],
    ['81756F78972811E295B122000A9D0283','NON-SELLABLE',,'CUSTOMER_DISCOUNT_REASON','Used or Damaged',null,true],
    ['8263260A972811E295B122000A9D0283','MANAGER',,'CUSTOMER_DISCOUNT_REASON','Managers Discretion',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CUSTOMER_RETURN_REASON-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['838CECE6972811E2A3D212313B10044E','STYLE',,'CUSTOMER_RETURN_REASON','Wrong Product',null,true],
    ['84623A90972811E295B122000A9D0283','SIZE',,'CUSTOMER_RETURN_REASON','Wrong Size',null,true],
    ['854F7D00972811E2A3D212313B10044E','COLOR',,'CUSTOMER_RETURN_REASON','Wrong Color',null,true],
    ['86262148972811E295B122000A9D0283','FIT',,'CUSTOMER_RETURN_REASON','Doesnt Fit',null,true],
    ['872EE7DC972811E295B122000A9D0283','DAMAGED',,'CUSTOMER_RETURN_REASON','Product is Damaged',null,true],
    ['8839CD22972811E2A3D212313B10044E','DONT_WANT',,'CUSTOMER_RETURN_REASON','No Longer Want the Product',null,true],
    ['8A1E1F94972811E295B122000A9D0283','CONVERSION',,'CUSTOMER_RETURN_REASON','Wrong or Bad Conversion',null,true],
    ['8B1692E6972811E2A3D212313B10044E','OTHER',,'CUSTOMER_RETURN_REASON','Any Other Reason',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'DELIVERY_METHOD-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['8BEC689E972811E2A3D212313B10044E','SEND',,'DELIVERY_METHOD','Shipped to customer',null,true],
    ['8CF5C9F6972811E295B122000A9D0283','TAKE',,'DELIVERY_METHOD','Customer takes from store',null,true],
    ['8E2002EC972811E2A3D212313B10044E','PICK-UP',,'DELIVERY_METHOD','Customer picks up in store',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'EMAIL_ADDRESS_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['8F37540A972811E295B122000A9D0283','HOME',,'EMAIL_ADDRESS_TYPE','Home',null,true],
    ['90165B5A972811E295B122000A9D0283','OTHER',,'EMAIL_ADDRESS_TYPE','Other',null,true],
    ['912AE15A972811E295B122000A9D0283','NA',,'EMAIL_ADDRESS_TYPE','Not Assigned',null,true],
    ['92366ED4972811E295B122000A9D0283','WORK',,'EMAIL_ADDRESS_TYPE','Work',null,true],
    ['942212F0204011E290E9040CCEDF84BB','TO',,'EMAIL_ADDRESS_TYPE','To',null,true],
    ['942212F0204011E290E9040CCEDF84ED','CC',,'EMAIL_ADDRESS_TYPE','CC',null,true],
    ['942212F0204011E290E9040CCEDF84FE','BCC',,'EMAIL_ADDRESS_TYPE','BCC',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'EXCESS_DEMAND_OPTION-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['C72A35DA038911APPORTIONBYPERCENT','APPORTION_BY_PERCENT',,'EXCESS_DEMAND_OPTION','Apportion By Percent',null,true],
    ['C72A35DA038911EFILLLARGESTDEMAND','FILL_LARGEST_DEMAND',,'EXCESS_DEMAND_OPTION','Fill Largest Demand',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'EXCESS_SUPPLY_OPTION-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['C72A35DA038911EAPPORTIONTOSTORES','APPORTION_TO_STORES',,'EXCESS_SUPPLY_OPTION','Apportion To Stores',null,true],
    ['C72A35DA038911E3LEAVEINWAREHOUSE','LEAVE_IN_WAREHOUSE',,'EXCESS_SUPPLY_OPTION','Leave In Warehouse',null,true],
    ['C72A35DA038911E3LEADIVIDEEQUALLY','DIVIDE_EQUALLY',,'EXCESS_SUPPLY_OPTION','Divide Equally',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'FILING_FREQUENCY-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['A84E71F8972811E295B122000A9D0283','ANNUAL',,'FILING_FREQUENCY','Annual',null,true],
    ['A96DD9C0972811E2A3D212313B10044E','SEMI-ANNUAL',,'FILING_FREQUENCY','Semi-Annual',null,true],
    ['AA3EC15C972811E295B122000A9D0283','QUARTERLY',,'FILING_FREQUENCY','Quarterly',null,true],
    ['AB2E1194972811E295B122000A9D0283','MONTHLY',,'FILING_FREQUENCY','Monthly',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'FOB_POINT-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['ACD54F80972811E295B122000A9D0283','ORIGIN',,'FOB_POINT','Origin',null,true],
    ['AD9E27CA972811E295B122000A9D0283','DESTINATION',,'FOB_POINT','Destination',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'FORECAST_FORMULA-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['AOEU8902XXX8XODEHUWEIGHTEDDEMAND','SALES',,'FORECAST_FORMULA','Weighted Sales',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'FREIGHT_TERM-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['AEA0CEB6972811E295B122000A9D0283','PREPAID',,'FREIGHT_TERM','Prepaid',null,true],
    ['B017161A972811E2A3D212313B10044E','COLLECT',,'FREIGHT_TERM','Collect',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'GENDER-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['B17608C2972811E2A3D212313B10044E','MALE',,'GENDER','Male',null,true],
    ['B2733DE4972811E295B122000A9D0283','FEMALE',,'GENDER','Female',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'GL_ACCOUNT_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['B63EB714972811E2A3D212313B10044E','ASSET',,'GL_ACCOUNT_TYPE','Asset',null,true],
    ['B74737F8972811E295B122000A9D0283','COST_OF_GOODS',,'GL_ACCOUNT_TYPE','Cost of Goods',null,true],
    ['B81BF754972811E295B122000A9D0283','EQUITY',,'GL_ACCOUNT_TYPE','Equity',null,true],
    ['B8E039E8972811E2A3D212313B10044E','EXPENSE',,'GL_ACCOUNT_TYPE','Expense',null,true],
    ['B9D5176A972811E2A3D212313B10044E','LIABILITY',,'GL_ACCOUNT_TYPE','Liability',null,true],
    ['BAB11378972811E295B122000A9D0283','REVENUE',,'GL_ACCOUNT_TYPE','Revenue',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'INNER_PACK_UOM_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['BB9142E0972811E2A3D212313B10044E','EACH',,'INNER_PACK_UOM_CODE','Each',null,true],
    ['BC7D068A972811E2A3D212313B10044E','DOZEN',,'INNER_PACK_UOM_CODE','Dozen',null,true],
    ['BD670D70972811E295B122000A9D0283','GROSS',,'INNER_PACK_UOM_CODE','Gross',null,true],
    ['BE13AF3A972811E2A3D212313B10044E','PACK',,'INNER_PACK_UOM_CODE','Pack',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'JOB_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['AA006C12345911E2A3D212313B10044E','NONE',,'JOB_TYPE','None',null,true],
    ['ABCA3F509729OEOEU5B122000A9D0283','CONVERSION (HEAT APPLY)',,'JOB_TYPE','Conversion (Heat Apply)',null,true],
    ['ACB6895A9721EEO123D212313B10044E','CONVERSION (SEWN)',,'JOB_TYPE','Conversion (Sewn)',null,true],
    ['AD9D939A972THTDTI5B122000A9D0283','ALTERATION',,'JOB_TYPE','Alteration',null,true],
    ['AF2EBE5097ODEDDED3D212313B10044E','SPECIAL CUT',,'JOB_TYPE','Special Cut',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'LETDOWN_METHOD-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['C414F84E972811E2A3D212313B10044E','INVENTORY',,'LETDOWN_METHOD','Inventory',null,true],
    ['C51E35E8972811E2A3D212313B10044E','DAY_DEMAND',,'LETDOWN_METHOD','Day Demand',null,true],
    ['C61B07FA972811E295B122000A9D0283','DAY_CAPACITY',,'LETDOWN_METHOD','Day Capacity',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'LEVEL_OF_INCOME-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['567885829728BBB345678INCOMETIER1','INCOME_TIER_1',,'LEVEL_OF_INCOME','Low (< $75K)',null,true],
    ['567885829728BBB345678INCOMETIER2','INCOME_TIER_2',,'LEVEL_OF_INCOME','Medium ($75K - $150K)',null,true],
    ['567885829728BBB345678INCOMETIER3','INCOME_TIER_3',,'LEVEL_OF_INCOME','High (> $150K)',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'LOCATION_BRAND-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['48CC77AA972A11E2A3D212313B10044E','PARKER_SCHOOL_UNIFORMS',,'LOCATION_BRAND','Parker School Uniforms',null,true],
    ['49DC83BA972A11E2A3D212313B10044E','BUCKHEAD_SCHOOL_UNIFORMS',,'LOCATION_BRAND','Buckhead School Uniforms',null,true],
    ['4AFDF44A972A11E2A3D212313B10044E','TRUE_GRITS_SCHOOL_UNIFORMS',,'LOCATION_BRAND','True Grits School Uniforms',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'MAINTENANCE_LEVEL-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['C6F5671A972811E295B122000A9D0283','SKU',,'MAINTENANCE_LEVEL','SKU',null,true],
    ['C7C30274972811E295B122000A9D0283','STYLE',,'MAINTENANCE_LEVEL','Style',null,true],
    ['C8A46250972811E2A3D212313B10044E','BOTH',,'MAINTENANCE_LEVEL','Both',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'MASS_UPDATE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['032456XXC72911HIHI321MASSUPDATE1','CLONE',,'MASS_UPDATE_TYPE','Clone',null,true],
    ['032456XXC72911HIHI322MASSUPDATE2','UNITS',,'MASS_UPDATE_TYPE','Adjust Units Ordered',null,true],
    ['032456XXC72911HIHI312MASSUPDATE3','ADD',,'MASS_UPDATE_TYPE','Add Purchase Details',null,true],
    ['032456XXC72911HIHI312MASSUPDATE4','PROFILE',,'MASS_UPDATE_TYPE','Update Allocation Profile',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'MASTER_PACK_UOM_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['C9661166972811E2A3D212313B10044E','EACH',,'MASTER_PACK_UOM_CODE','Each',null,true],
    ['CA612736972811E295B122000A9D0283','DOZEN',,'MASTER_PACK_UOM_CODE','Dozen',null,true],
    ['CB49DAE4972811E295B122000A9D0283','GROSS',,'MASTER_PACK_UOM_CODE','Gross',null,true],
    ['CC4DDC88972811E2A3D212313B10044E','PACK',,'MASTER_PACK_UOM_CODE','Pack',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'NAME_PREFIX-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['D5A1E040972811E295B122000A9D0283','MR.',,'NAME_PREFIX','Mr.',null,true],
    ['D6893E54972811E295B122000A9D0283','MRS.',,'NAME_PREFIX','Mrs.',null,true],
    ['D781844C972811E2A3D212313B10044E','MS.',,'NAME_PREFIX','Ms.',null,true],
    ['D870E406972811E295B122000A9D0283','MISS',,'NAME_PREFIX','Miss',null,true],
    ['D9EA653C972811E2A3D212313B10044E','DR.',,'NAME_PREFIX','Dr.',null,true],
    ['DB971448972811E295B122000A9D0283','FR.',,'NAME_PREFIX','Fr.',null,true],
    ['DD42DB1A972811E2A3D212313B10044E','SR.',,'NAME_PREFIX','Sr.',null,true],
    ['DEB404F6972811E2A3D212313B10044E','REV.',,'NAME_PREFIX','Rev.',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'NAME_SUFFIX-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['E03A837C972811E2A3D212313B10044E','JR.',,'NAME_SUFFIX','Jr.',null,true],
    ['E1778D02972811E2A3D212313B10044E','SR.',,'NAME_SUFFIX','Sr.',null,true],
    ['E2836EF0972811E295B122000A9D0283','II',,'NAME_SUFFIX','II',null,true],
    ['E38C826E972811E295B122000A9D0283','III',,'NAME_SUFFIX','III',null,true],
    ['E502284C972811E2A3D212313B10044E','MD',,'NAME_SUFFIX','MD',null,true],
    ['E687E9E0972811E2A3D212313B10044E','PHD',,'NAME_SUFFIX','PhD',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ORDER_FULFILLMENT_METHOD-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['EBAE1106972811E295B122000A9D0283','PICK_TICKET',,'ORDER_FULFILLMENT_METHOD','Pick Ticket',null,true],
    ['ECDE8E66972811E2A3D212313B10044E','WORK_ORDER',,'ORDER_FULFILLMENT_METHOD','Work Order',null,true],
    ['EE148A9C972811E2A3D212313B10044E','TRANSFER',,'ORDER_FULFILLMENT_METHOD','Transfer',null,true],
    ['EEFB9356972811E2A3D212313B10044E','PURCHASE_ORDER',,'ORDER_FULFILLMENT_METHOD','Purchase Order',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ORDER_MULTIPLE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['EFD4A088972811E2A3D212313B10044E','SELL_UNIT',,'ORDER_MULTIPLE_TYPE','Sell Unit',null,true],
    ['F0E559CC972811E2A3D212313B10044E','INNER_PACK',,'ORDER_MULTIPLE_TYPE','Inner Pack',null,true],
    ['F21DCD38972811E295B122000A9D0283','MASTER_PACK',,'ORDER_MULTIPLE_TYPE','Master Pack',null,true],
    ['F31F846A972811E2A3D212313B10044E','PALLET',,'ORDER_MULTIPLE_TYPE','Pallet',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ORDER_PACKAGE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['F4F2322E972811E295B122000A9D0283','FLAT',,'ORDER_PACKAGE_TYPE','Flat',null,true],
    ['F623174E972811E2A3D212313B10044E','GOH',,'ORDER_PACKAGE_TYPE','GOH',null,true],
    ['F731E462972811E2A3D212313B10044E','HANGING',,'ORDER_PACKAGE_TYPE','Hanging',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ORDER_SOURCE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['F8B72734972811E2A3D212313B10044E','POS',,'ORDER_SOURCE','Point-of_Sale',null,true],
    ['F986136E972811E295B122000A9D0283','WEB',,'ORDER_SOURCE','Web Order',null,true],
    ['FA62AD10972811E295B122000A9D0283','PHONE',,'ORDER_SOURCE','Phone Order',null,true],
    ['FB5351F2972811E295B122000A9D0283','MAIL',,'ORDER_SOURCE','Mail Order',null,true],
    ['FC1A34F2972811E295B122000A9D0283','EVENT',,'ORDER_SOURCE','Van Sale or Other Event',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ORDER_UOM_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['FF778582972811E2A3D212313B10044E','EACH',,'ORDER_UOM_CODE','Each',null,true],
    ['004520D2972911E295B122000A9D0283','DOZEN',,'ORDER_UOM_CODE','Dozen',null,true],
    ['014F42D2972911E295B122000A9D0283','GROSS',,'ORDER_UOM_CODE','Gross',null,true],
    ['021E90FA972911E295B122000A9D0283','PACK',,'ORDER_UOM_CODE','Pack',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PACK_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['032456E2972911E2A3D212313B10044E','SELL_UNIT',,'PACK_TYPE','Sell Unit',null,true],
    ['04183F3C972911E2A3D212313B10044E','INNER_PACK',,'PACK_TYPE','Inner Pack',null,true],
    ['05726F2E972911E2A3D212313B10044E','MASTER_PACK',,'PACK_TYPE','Master Pack',null,true],
    ['06A0AD48972911E2A3D212313B10044E','PALLET',,'PACK_TYPE','Pallet',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PAYMENT_TERM-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['0C23CA20972911E295B122000A9D0283','NET',,'PAYMENT_TERM','Net',null,true],
    ['0D11BDA2972911E2A3D212313B10044E','NET_30',,'PAYMENT_TERM','Net 30',null,true],
    ['0DE7FCBE972911E295B122000A9D0283','NET_60',,'PAYMENT_TERM','Net 60',null,true],
    ['0ED11C46972911E2A3D212313B10044E','2%_10,_NET_30',,'PAYMENT_TERM','2% 10, Net 30',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PHONE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['101AD100972911E295B122000A9D0283','CELL',,'PHONE_TYPE','Cell',null,true],
    ['1148214A972911E2A3D212313B10044E','FAX',,'PHONE_TYPE','Fax',null,true],
    ['12E3F0BA972911E295B122000A9D0283','HOME',,'PHONE_TYPE','Home',null,true],
    ['13D32504972911E2A3D212313B10044E','OTHER',,'PHONE_TYPE','Other',null,true],
    ['151EEB46972911E2A3D212313B10044E','NA',,'PHONE_TYPE','Not Assigned',null,true],
    ['160C9396972911E2A3D212313B10044E','WORK',,'PHONE_TYPE','Work',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PICKING_SORT_METHOD-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['1C3B69F4972911E295B122000A9D0283','BIN',,'PICKING_SORT_METHOD','Bin',null,true],
    ['1D3CFF20972911E2A3D212313B10044E','CUSTOM',,'PICKING_SORT_METHOD','Custom',null,true],
    ['1E75555E972911E295B122000A9D0283','LOCATION',,'PICKING_SORT_METHOD','Location',null,true],
    ['1F9670BC972911E2A3D212313B10044E','PRODUCT',,'PICKING_SORT_METHOD','Product',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PLAN_YEAR-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['032456XXC72911HIHI3212313B102013','2013',,'PLAN_YEAR','2013',null,true],
    ['032456E2972911HIHI3212313B102014','2014',,'PLAN_YEAR','2014',null,true],
    ['032456E2OH5911HIHI3212313B102015','2015',,'PLAN_YEAR','2015',null,true],
    ['032456E2U8O911HIHI3212313B102016','2016',,'PLAN_YEAR','2016',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PRICE_BOOK_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['20CEF24C972911E2A3D212313B10044E','LOCAL',,'PRICE_BOOK_TYPE','Local',null,true],
    ['21FCA542972911E295B122000A9D0283','NATIONAL',,'PRICE_BOOK_TYPE','National',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PRICE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['22FFC7A8972911E2A3D212313B10044E','REGULAR',,'PRICE_TYPE','Regular',null,true],
    ['23FDF440972911E2A3D212313B10044E','PROMOTIONAL',,'PRICE_TYPE','Promotional',null,true],
    ['24EFCF18972911E2A3D212313B10044E','CLEARANCE',,'PRICE_TYPE','Clearance',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PROGRAM_DETAIL_ACTION-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['264A30CE972911E2A3D212313B10044E','ADD',,'PROGRAM_DETAIL_ACTION','Add',null,true],
    ['2815FBD6972911E295B122000A9D0283','SUBTRACT',,'PROGRAM_DETAIL_ACTION','Subtract',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PROGRAM_DETAIL_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['29415974972911E2A3D212313B10044E','DOLLAR_OFF',,'PROGRAM_DETAIL_TYPE','Dollar Off',null,true],
    ['2AB9E33E972911E2A3D212313B10044E','PERCENT_OFF',,'PROGRAM_DETAIL_TYPE','Percent Off',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PROSPECT_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['2094F804972811E295B12200LONGSHOT','LONG_SHOT',,'PROSPECT_TYPE','Long Shot',null,true],
    ['2094F804972811E295B122NEWACCOUNT','NEW_ACCOUNT',,'PROSPECT_TYPE','New Account',null,true],
    ['2094F804972811E295B12200POSSIBLE','POSSIBLE',,'PROSPECT_TYPE','Possible',null,true],
    ['2094F804972811E295B12200PROBABLE','PROBABLE',,'PROSPECT_TYPE','Probable',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PURCHASE_SOURCE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['AOEU8902XXX8XODEHUPURCHASEMANUAL','MANUAL',,'PURCHASE_SOURCE','Manual',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PURCHASE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['IIII8902XXX8XODEHU231PURCHASECMT','CMT',,'PURCHASE_TYPE','CMT',null,true],
    ['IIII8902XXX8XODEHU231PURCHASEDDP','DDP',,'PURCHASE_TYPE','DDP',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'RELATIONSHIP_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['2BA75CA4972911E295B122000A9D0283','PARENT',,'RELATIONSHIP_TYPE','Parent',null,true],
    ['2CC7A6AC972911E295B122000A9D0283','CHILD',,'RELATIONSHIP_TYPE','Child',null,true],
    ['2DD2E57A972911E295B122000A9D0283','SPOUSE',,'RELATIONSHIP_TYPE','Spouse',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'REPLENISHMENT_METHOD-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['2F9BE596972911E2A3D212313B10044E','NONE',,'REPLENISHMENT_METHOD','None',null,true],
    ['30756924972911E295B122000A9D0283','MIN/MAX',,'REPLENISHMENT_METHOD','Min/Max',null,true],
    ['31BE695C972911E2A3D212313B10044E','ORDER_POINT',,'REPLENISHMENT_METHOD','Order Point',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'REPLENISHMENT_SOURCE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['32FB3AD4972911E2A3D212313B10044E','WAREHOUSE',,'REPLENISHMENT_SOURCE','Warehouse',null,true],
    ['33E1EE3E972911E2A3D212313B10044E','SUPPLIER',,'REPLENISHMENT_SOURCE','Supplier',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'REVENUE_BAND-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['2094F804972811E295B122000ABRONZE','BRONZE',,'REVENUE_BAND','Bronze (<$25K)',null,true],
    ['2094F804972811E295B122000ASILVER','SILVER',,'REVENUE_BAND','Silver ($25K - $50K)',null,true],
    ['2094F804972811E295B122000A9DGOLD','GOLD',,'REVENUE_BAND','Gold ($50K - $100K)',null,true],
    ['2094F804972811E295B12200PLATINUM','PLATINUM',,'REVENUE_BAND','Platinum (>$100K)',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ROUNDING_OPTION-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['C72A35DA038911E398B428CFE914NONE','NONE',,'ROUNDING_OPTION','None',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'RULE_ACTION-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['34D20BE4972911E2A3D212313B10044E','NONE',,'RULE_ACTION','None',null,true],
    ['35C05402972911E2A3D212313B10044E','ADD',,'RULE_ACTION','Add',null,true],
    ['37308BAE972911E2A3D212313B10044E','SUBTRACT',,'RULE_ACTION','Subtract',null,true],
    ['3841F6A4972911E2A3D212313B10044E','REPLACE',,'RULE_ACTION','Replace',null,true],
    ['399CEB94972911E295B122000A9D0283','AVERAGE_COST',,'RULE_ACTION','Calculate Average Cost',null,true],
    ['3AFB271C972911E295B122000A9D0283','DATE',,'RULE_ACTION','Set First Date or Last Date',null,true],
    ['3C5667E8972911E2A3D212313B10044E','ADJUSTMENT',,'RULE_ACTION','Adjustment',null,true],
    ['3D7B352C972911E295B122000A9D0283','TRANSFER',,'RULE_ACTION','Transfer',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'RULE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['3E543D36972911E2A3D212313B10044E','ADJUSTMENT',,'RULE_TYPE','Adjustment',null,true],
    ['3FEF488E972911E2A3D212313B10044E','SYSTEM',,'RULE_TYPE','System',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SALES_CATEGORY-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['41081372972911E295B122000A9D0283','REGULAR',,'SALES_CATEGORY','Regular',null,true],
    ['41F732AE972911E2A3D212313B10044E','PROMOTIONAL',,'SALES_CATEGORY','Promotional',null,true],
    ['42D6D562972911E2A3D212313B10044E','CLEARANCE',,'SALES_CATEGORY','Clearance',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SCHOOL_POTENTIAL-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['567885829728BBB3456782313B1BANDA','1_BAND_GROWTH',,'SCHOOL_POTENTIAL','1 Band Growth',null,true],
    ['567885829728BBB3456782313B12BAND','2_BAND_GROWTH',,'SCHOOL_POTENTIAL','2 Band Growth',null,true],
    ['567885829728BBB345678ATPOTENTIAL','AT_POTENTIAL',,'SCHOOL_POTENTIAL','At Potential',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SCHOOL_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['511C26B8972911E295B122000BAPTIST','BAPTIST',,'SCHOOL_TYPE','Baptist',null,true],
    ['523DE284972911E29BOARDING_SCHOOL','BOARDING_SCHOOL',,'SCHOOL_TYPE','Boarding School',null,true],
    ['523DE284972911E295B12200CATHOLIC','CATHOLIC',,'SCHOOL_TYPE','Catholic',null,true],
    ['523DE284972911E2CATHOLIC-PRIVATE','CATHOLIC-PRIVATE',,'SCHOOL_TYPE','Catholic-Private',null,true],
    ['523DE284972911E295CHARTER_SCHOOL','CHARTER_SCHOOL',,'SCHOOL_TYPE','Charter School',null,true],
    ['523DE284972911E295B1220CHRISTIAN','CHRISTIAN',,'SCHOOL_TYPE','Christian',null,true],
    ['523DE284972911E295B1220EPISCOPAL','EPISCOPAL',,'SCHOOL_TYPE','Episcopal',null,true],
    ['523DE284972911E295B122000AHEBREW','HEBREW',,'SCHOOL_TYPE','Hebrew',null,true],
    ['523DE284972911E295B122000ISLAMIC','ISLAMIC',,'SCHOOL_TYPE','Islamic',null,true],
    ['523DE284972911E295B12200LUTHERAN','LUTHERAN',,'SCHOOL_TYPE','Lutheran',null,true],
    ['523DE284972911NON-DENOMINATIONAL','NON-DENOMINATIONAL',,'SCHOOL_TYPE','Non-Denominational',null,true],
    ['523DE2849NON-SCHOOL_ORGANIZATION','NON-SCHOOL_ORGANIZATION',,'SCHOOL_TYPE','Non-School Organization',null,true],
    ['523DE284972911E295B122000A9OTHER','OTHER',,'SCHOOL_TYPE','Other',null,true],
    ['523DE284972911E29OTHER_RELIGIOUS','OTHER_RELIGIOUS',,'SCHOOL_TYPE','Other Religious',null,true],
    ['523DE284972911E295B1220PRESCHOOL','PRESCHOOL',,'SCHOOL_TYPE','Preschool',null,true],
    ['523DE284972911E295B1PRIVATE-PREP','PRIVATE-PREP',,'SCHOOL_TYPE','Private-Prep',null,true],
    ['523DE284972911E295B122000APUBLIC','PUBLIC',,'SCHOOL_TYPE','Public',null,true],
    ['523DE284972911E295B1SCHOOL_CHAIN','SCHOOL_CHAIN',,'SCHOOL_TYPE','School Chain',null,true],
    ['523DE284972911E295B122000A9D0SDA','SDA',,'SCHOOL_TYPE','SDA',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SCHOOL_YEAR-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['42D6D562972911E2A3D2123120122012','2011-2012',,'SCHOOL_YEAR','2011-2012',null,true],
    ['42D6D562972911E2A3D2123120122013','2012-2013',,'SCHOOL_YEAR','2012-2013',null,true],
    ['42D6D562972911E2A3D2123120132014','2013-2014',,'SCHOOL_YEAR','2013-2014',null,true],
    ['42D6D562972911E2A3D2123120142015','2014-2015',,'SCHOOL_YEAR','2014-2015',null,true],
    ['42D6D562972911E2A3D2123120152016','2015-2016',,'SCHOOL_YEAR','2015-2016',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SELL_UNIT_UOM_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['490785DA972911E295B122000A9D0283','EACH',,'SELL_UNIT_UOM_CODE','Each',null,true],
    ['49EB222C972911E295B122000A9D0283','DOZEN',,'SELL_UNIT_UOM_CODE','Dozen',null,true],
    ['4B1B7868972911E2A3D212313B10044E','GROSS',,'SELL_UNIT_UOM_CODE','Gross',null,true],
    ['4C464CAE972911E2A3D212313B10044E','PACK',,'SELL_UNIT_UOM_CODE','Pack',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SIZE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['535A39BA972911E295B122000A9D0283','STANDARD',,'SIZE_TYPE','Standard',null,true],
    ['54DD09CA972911E295B122000A9D0283','SPECIAL',,'SIZE_TYPE','Special',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SKU_ALIAS_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['561202BE972911E2A3D212313B10044E','CONVERTED',,'SKU_ALIAS_TYPE','Converted',null,true],
    ['56EE431E972911E2A3D212313B10044E','OTHER',,'SKU_ALIAS_TYPE','Other',null,true],
    ['57C98064972911E2A3D212313B10044E','STOCK/SIZE',,'SKU_ALIAS_TYPE','Stock/Size',null,true],
    ['58BF5A7A972911E295B122000A9D0283','UPC',,'SKU_ALIAS_TYPE','UPC',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SKU_NAME_METHOD-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['59C7616A972911E2A3D212313B10044E','CONCAT_SHORT',,'SKU_NAME_METHOD','Concat Short',null,true],
    ['5ACF278C972911E295B122000A9D0283','CONCAT_TRIM',,'SKU_NAME_METHOD','Concat Trim',null,true],
    ['5BF4FCB8972911E295B122000A9D0283','STYLE_ONLY',,'SKU_NAME_METHOD','Style Only',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SKU_SUBSTITUTE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['5CF4B4AA972911E2A3D212313B10044E','PREDECESSOR',,'SKU_SUBSTITUTE_TYPE','Predecessor',null,true],
    ['5DE81988972911E295B122000A9D0283','SUCCESSOR',,'SKU_SUBSTITUTE_TYPE','Successor',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'STATE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['5EFCA4B0972911E295B122000A9D0283','STATE',,'STATE_TYPE','State',null,true],
    ['6051674C972911E295B122000A9D0283','APO',,'STATE_TYPE','APO',null,true],
    ['615177CC972911E295B122000A9D0283','ASSOCIATED',,'STATE_TYPE','Associated State',null,true],
    ['6276CD00972911E295B122000A9D0283','COMMONWEALTH',,'STATE_TYPE','Commonwealth',null,true],
    ['632E5100972911E2A3D212313B10044E','COUNTRY',,'STATE_TYPE','Country',null,true],
    ['6442A870972911E2A3D212313B10044E','DISTRICT',,'STATE_TYPE','District',null,true],
    ['656BA86E972911E2A3D212313B10044E','TERRITORY',,'STATE_TYPE','Territory',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SUPPLIER_RATING_SUBJECT_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['6688D28A972911E2A3D212313B10044E','COMPLIANCE',,'SUPPLIER_RATING_SUBJECT_TYPE','Compliance',null,true],
    ['67583D7C972911E2A3D212313B10044E','DELIVERY',,'SUPPLIER_RATING_SUBJECT_TYPE','Delivery',null,true],
    ['6841AD40972911E295B122000A9D0283','PRICE',,'SUPPLIER_RATING_SUBJECT_TYPE','Price',null,true],
    ['69311F4C972911E295B122000A9D0283','QUALITY',,'SUPPLIER_RATING_SUBJECT_TYPE','Quality',null,true],
    ['6A1CCA8C972911E2A3D212313B10044E','SERVICE',,'SUPPLIER_RATING_SUBJECT_TYPE','Service',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'TAX_AUTHORITY_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['72886CF8972911E295B122000A9D0283','CITY',,'TAX_AUTHORITY_TYPE','City',null,true],
    ['737C4238972911E295B122000A9D0283','COUNTY',,'TAX_AUTHORITY_TYPE','County',null,true],
    ['7461D2BC972911E295B122000A9D0283','OTHER',,'TAX_AUTHORITY_TYPE','Other',null,true],
    ['75356BCC972911E295B122000A9D0283','STATE',,'TAX_AUTHORITY_TYPE','State',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'TIME_ZONE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['87E0EC6A972911E2A3D212313B10044E','EASTERN',,'TIME_ZONE','Eastern',null,true],
    ['88E0CE14972911E295B122000A9D0283','CENTRAL',,'TIME_ZONE','Central',null,true],
    ['8A2E5566972911E2A3D212313B10044E','MOUNTAIN',,'TIME_ZONE','Mountain',null,true],
    ['8B188294972911E295B122000A9D0283','PACIFIC',,'TIME_ZONE','Pacific',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'UNIFORM_GENDER-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['8C32DE0E972911E2A3D212313B10044E','COED',,'UNIFORM_GENDER','Coed',null,true],
    ['8DA28B68972911E295B122000A9D0283','MALE',,'UNIFORM_GENDER','Male',null,true],
    ['8EC606AA972911E2A3D212313B10044E','FEMALE',,'UNIFORM_GENDER','Female',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'UNIFORM_SOURCE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['B0C135E0972911E295B122000A9D0283','MANUFACTURED',,'UNIFORM_SOURCE','Manufactured',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'UNIFORM_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['8FDFB964972911E2A3D212313B10044E','STUDENT',,'UNIFORM_TYPE','Student',null,true],
    ['91697EFA972911E295B122000A9D0283','OTHER',,'UNIFORM_TYPE','Other',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'UOM_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['9286FC72972911E2A3D212313B10044E','EACH',,'UOM_CODE','Each',null,true],
    ['93A0AD88972911E2A3D212313B10044E','DOZEN',,'UOM_CODE','Dozen',null,true],
    ['94CDD3FC972911E2A3D212313B10044E','GROSS',,'UOM_CODE','Gross',null,true],
    ['96A1E16E972911E295B122000A9D0283','PACK',,'UOM_CODE','Pack',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'USER_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['980AD15A972911E2A3D212313B10044E','BACK_OFFICE',,'USER_TYPE','Back Office',null,true],
    ['99B2CBDE972911E2A3D212313B10044E','POS',,'USER_TYPE','POS',null,true],
    ['9B1A0EBA972911E2A3D212313B10044E','WEB',,'USER_TYPE','Web',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'VOUCHER_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['A30E1346972911E2A3D212313B10044E','GIFT_CARD',,'VOUCHER_TYPE','Gift Card',null,true],
    ['A3E62722972911E295B122000A9D0283','GIFT_CERTIFICATE',,'VOUCHER_TYPE','Gift Certificate',null,true],
    ['A4A7F848972911E295B122000A9D0283','COUPON',,'VOUCHER_TYPE','Coupon',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'WORK_ORDER_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['AA006C1C972911E2A3D212313B10044E','NONE',,'WORK_ORDER_TYPE','None',null,true],
    ['ABCA3F50972911E295B122000A9D0283','CONVERSION_(HEAT_APPLY)',,'WORK_ORDER_TYPE','Conversion (Heat Apply)',null,true],
    ['ACB6895A972911E2A3D212313B10044E','CONVERSION_(SEWN)',,'WORK_ORDER_TYPE','Conversion (Sewn)',null,true],
    ['AD9D939A972911E295B122000A9D0283','ALTERATION',,'WORK_ORDER_TYPE','Alteration',null,true],
    ['AF2EBE50972911E2A3D212313B10044E','SPECIAL_CUT',,'WORK_ORDER_TYPE','Special Cut',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'COST_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['IIII8902XXX8XODEHU2312FOPURCCOST','SAMPLE',,'COST_TYPE','Sample',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'COST_SOURCE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['AOEU8902XXX8XODEHU2312XXPURCCOST','SAMPLE',,'COST_SOURCE','Sample',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ATTACHMENT_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['63991211204011E290E9040CCEDF84BB','BASIC',,'ATTACHMENT_TYPE','Basic',null,true],
    ['98A000EE204011E290E9040CCEDF842E','GENERAL',0,'ATTACHMENT_TYPE','General',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'BOOLEAN_YES_NO-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['323244F0204011EFCFE9040CCEDF842E','true',0,'BOOLEAN_YES_NO','Yes',null,true],
    ['323244F0204011EB2BE9040CCEDF842E','false',0,'BOOLEAN_YES_NO','No',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CASE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['032456XXCASETYPEBUGXXEUEU4XX1234','BUG',,'CASE_TYPE','Bug fix',null,true],
    ['03122456ENHDATAMENTXXXOEUIXX1234','DATA',,'CASE_TYPE','Data conversion or cleanup',null,true],
    ['03122456ENHANCEMENTXXXXXXXXX1234','ENHANCEMENT',,'CASE_TYPE','Enhancement, new feature or custom development',null,true],
    ['03122456EQUESTIONNTXXXXXXXXX1234','QUESTION',,'CASE_TYPE','Question or explanation needed',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'DIRECTION_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['632212F0204011E290E9040CCEDF84BB','OUTBOUND',,'DIRECTION_CODE','Outbound',null,true],
    ['632212F0204011E290E9040CCEDF84DD','INBOUND',,'DIRECTION_CODE','Inbound',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'NOTE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['323244F0204011E290E9040CCEDF842E','0',0,'NOTE_TYPE','General',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PRIORITY_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['335212F0204011E290E9040CCEDF84BB','LOW',,'PRIORITY_CODE','Low',null,true],
    ['335212F0204011E290E9040CCEDF84DD','NORMAL',,'PRIORITY_CODE','Normal',null,true],
    ['335212F0204011E290E9040CCEDF84EF','HIGH',,'PRIORITY_CODE','High',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SSO_PLUGIN_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['98A212F0204011E290E9040CCEDF842E','BUILDIT',,'SSO_PLUGIN_CODE','In-App Security',null,true],
    ['98A212F0204011E290E9040CCCCC842E','LDAP',,'SSO_PLUGIN_CODE','LDAP Authentication',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'USER_STATUS-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['98A444F0204011E290E9040CCEDF842E','0',0,'USER_STATUS','Active',null,true],
    ['98A454F0204011E290E9040CCEDF842E','1',1,'USER_STATUS','Inactive',null,true]
  ]
});

