var lookupStoreFields = ['lookup_id', 'code', 'code_int', 'category', 'default_text', 'depends_on', 'is_enabled'];
Ext.create('Ext.data.ArrayStore', {
  storeId   : 'FABRIC_CONTENT-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['935DXXXXX72811YYY2D212313B10044E','100% ACRYLIC',,'FABRIC_CONTENT','100% Acrylic',null,true],
    ['935DX1234567B1YYY2D212313B10044E','100% COTTON',,'FABRIC_CONTENT','100% Cotton',null,true],
    ['IDHTNTHDIUEUIDUEOAO212313B10044E','100% NYLON',,'FABRIC_CONTENT','100% Nylon',null,true],
    ['IDHTNTHDIUEUIDU1234567856760044E','100% POLYESTER',,'FABRIC_CONTENT','100% Polyester',null,true],
    ['9667B6B6972811E295B122000A9D0283','50/25/25 POLY/RAYON/ACRYLIC',,'FABRIC_CONTENT','50/25/25 Polyrayon Acrylic Triblend',null,true],
    ['9759B038972811E295B122000A9D0283','50% COTTON 50% POLYESTER',,'FABRIC_CONTENT','50/50 Cotton Poly',null,true],
    ['982EA07C972811E295B122000A9D0283','55% COTTON 45% POLY',,'FABRIC_CONTENT','55/45 Cotton Poly',null,true],
    ['98FACC24972811E2A3D212313B10044E','57% COTTON 40% POLY 3% LICRA',,'FABRIC_CONTENT','57/40/3 Cotton Poly Licra',null,true],
    ['99F05F2C972811E295B122000A9D0283','60% COTTON 40% POLY',,'FABRIC_CONTENT','60/40 Cotton Poly',null,true],
    ['9B182312972811E2A3D212313B10044E','60% POLY 40% RAYON',,'FABRIC_CONTENT','60/40 Poly Rayon',null,true],
    ['9E795436972811E295B122000A9D0283','65% POLY 35% COTTON',,'FABRIC_CONTENT','65/35 Poly Cotton',null,true],
    ['9FD652F2972811E2A3D212313B10044E','65% POLY 35% RAYON',,'FABRIC_CONTENT','65/35 Poly Rayon',null,true],
    ['A11014D2972811E2A3D212313B10044E','70% POLYESTER 30% WOOL',,'FABRIC_CONTENT','70/30 Poly Wool',null,true],
    ['A1F8664C972811E2A3D212313B10044E','75% COTTON 25% POLY',,'FABRIC_CONTENT','75/25 Cotton Poly',null,true],
    ['A301C060972811E295B122000A9D0283','75% POLY 25% COTTON',,'FABRIC_CONTENT','75/25 Poly Cotton',null,true],
    ['A3E4CC8E972811E2A3D212313B10044E','90% COTTON 10% POLY',,'FABRIC_CONTENT','90/10 Cotton Poly',null,true],
    ['A4B14642972811E295B122000A9D0283','90% COTTON 10% SPANDEX',,'FABRIC_CONTENT','90/10 Cotton Spandex',null,true],
    ['A5890B90972811E2A3D212313B10044E','97% COTTON 3% SPANDEX',,'FABRIC_CONTENT','97/3 Cotton Spandex',null,true],
    ['A67EEEE8972811E295B122000A9D0283','CUSTOM',,'FABRIC_CONTENT','Custom',null,true],
    ['3O3E4U5IP6UDY7IHY8HYD8H9DYNI0DTK','FLANNEL',,'FABRIC_CONTENT','Flannel',null,true],
    ['456789OOEUI6PJKXBDIUEO9876545678','LEATHER',,'FABRIC_CONTENT','Leather',null,true],
    ['45567UIDH98UQJKXBEUIDHTYFGCR5678','MISC',,'FABRIC_CONTENT','Miscellaneous',null,true],
    ['456789IDHTLRCGFYPOEUII55OEUR5678','NONE',,'FABRIC_CONTENT','None',null,true],
    ['45634567890BXKJEEUUIDHTYFGCR5678','NYLON',,'FABRIC_CONTENT','Nylon',null,true],
    ['A77654UIDH654ID5OEUIDHD13B10044E','POLYCOTTON',,'FABRIC_CONTENT','Polycotton',null,true],
    ['A77654UEUI5D432UID54UID54ID5432E','POLYESTER',,'FABRIC_CONTENT','Polyester',null,true],
    ['A77AC3F8972HDIUEOEUIDHD13B10044E','WOOL',,'FABRIC_CONTENT','Wool',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'STATE_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['4BF6708E972A11E2A3D212XXXXXBLANK','BLANK',,'STATE_CODE',' ',null,true],
    ['4BF6708E972A11E2A3D212313B10044E','AK',,'STATE_CODE','Alaska',null,true],
    ['4D322AF6972A11E295B122000A9D0283','AL',,'STATE_CODE','Alabama',null,true],
    ['4E4F51AC972A11E2A3D212313B10044E','AR',,'STATE_CODE','Arkansas',null,true],
    ['4F8CE2A0972A11E295B122000A9D0283','AZ',,'STATE_CODE','Arizona',null,true],
    ['50621C0E972A11E295B122000A9D0283','CA',,'STATE_CODE','California',null,true],
    ['5163F2B2972A11E295B122000A9D0283','CO',,'STATE_CODE','Colorado',null,true],
    ['52E27B68972A11E2A3D212313B10044E','CT',,'STATE_CODE','Connecticut',null,true],
    ['54049120972A11E2A3D212313B10044E','DC',,'STATE_CODE','District of Columbia',null,true],
    ['55331BD4972A11E295B122000A9D0283','DE',,'STATE_CODE','Delaware',null,true],
    ['561B4EF4972A11E295B122000A9D0283','FL',,'STATE_CODE','Florida',null,true],
    ['5769C448972A11E295B122000A9D0283','GA',,'STATE_CODE','Georgia',null,true],
    ['586D90AE972A11E295B122000A9D0283','HI',,'STATE_CODE','Hawaii',null,true],
    ['59586854972A11E295B122000A9D0283','IA',,'STATE_CODE','Iowa',null,true],
    ['5A69BEAA972A11E2A3D212313B10044E','ID',,'STATE_CODE','Idaho',null,true],
    ['5B8E3CD4972A11E295B122000A9D0283','IL',,'STATE_CODE','Illinois',null,true],
    ['5CEBC074972A11E295B122000A9D0283','IN',,'STATE_CODE','Indiana',null,true],
    ['5DDE13C4972A11E2A3D212313B10044E','KS',,'STATE_CODE','Kansas',null,true],
    ['5F0B70E8972A11E295B122000A9D0283','KY',,'STATE_CODE','Kentucky',null,true],
    ['608ED9E6972A11E2A3D212313B10044E','LA',,'STATE_CODE','Louisiana',null,true],
    ['6267CDFE972A11E2A3D212313B10044E','MA',,'STATE_CODE','Massachusetts',null,true],
    ['63B80EE4972A11E2A3D212313B10044E','MD',,'STATE_CODE','Maryland',null,true],
    ['64B97C42972A11E295B122000A9D0283','ME',,'STATE_CODE','Maine',null,true],
    ['65C993CE972A11E2A3D212313B10044E','MI',,'STATE_CODE','Michigan',null,true],
    ['66FE17A6972A11E295B122000A9D0283','MN',,'STATE_CODE','Minnesota',null,true],
    ['67DB8258972A11E2A3D212313B10044E','MO',,'STATE_CODE','Missouri',null,true],
    ['69109906972A11E2A3D212313B10044E','MS',,'STATE_CODE','Mississippi',null,true],
    ['6A2505FC972A11E2A3D212313B10044E','MT',,'STATE_CODE','Montana',null,true],
    ['6B1E6714972A11E2A3D212313B10044E','NC',,'STATE_CODE','North Carolina',null,true],
    ['6CF5E60C972A11E2A3D212313B10044E','ND',,'STATE_CODE','North Dakota',null,true],
    ['6DE265A4972A11E2A3D212313B10044E','NE',,'STATE_CODE','Nebraska',null,true],
    ['6F0E6568972A11E2A3D212313B10044E','NH',,'STATE_CODE','New Hampshire',null,true],
    ['7019AEEA972A11E2A3D212313B10044E','NJ',,'STATE_CODE','New Jersey',null,true],
    ['711A752C972A11E295B122000A9D0283','NM',,'STATE_CODE','New Mexico',null,true],
    ['72314904972A11E295B122000A9D0283','NV',,'STATE_CODE','Nevada',null,true],
    ['73439414972A11E295B122000A9D0283','NY',,'STATE_CODE','New York',null,true],
    ['74101F16972A11E2A3D212313B10044E','OH',,'STATE_CODE','Ohio',null,true],
    ['74EF965A972A11E2A3D212313B10044E','OK',,'STATE_CODE','Oklahoma',null,true],
    ['762B1E90972A11E295B122000A9D0283','OR',,'STATE_CODE','Oregon',null,true],
    ['77696992972A11E2A3D212313B10044E','PA',,'STATE_CODE','Pennsylvania',null,true],
    ['78BCD09A972A11E2A3D212313B10044E','RI',,'STATE_CODE','Rhode Island',null,true],
    ['799D84D2972A11E2A3D212313B10044E','SC',,'STATE_CODE','South Carolina',null,true],
    ['7AB3BB84972A11E2A3D212313B10044E','SD',,'STATE_CODE','South Dakota',null,true],
    ['7BF34B86972A11E2A3D212313B10044E','TN',,'STATE_CODE','Tennessee',null,true],
    ['7D8BDEEA972A11E295B122000A9D0283','TX',,'STATE_CODE','Texas',null,true],
    ['7E85AB14972A11E295B122000A9D0283','UT',,'STATE_CODE','Utah',null,true],
    ['7F6E035A972A11E2A3D212313B10044E','VA',,'STATE_CODE','Virginia',null,true],
    ['80333116972A11E2A3D212313B10044E','VT',,'STATE_CODE','Vermont',null,true],
    ['8154E4C2972A11E2A3D212313B10044E','WA',,'STATE_CODE','Washington',null,true],
    ['822B15EC972A11E2A3D212313B10044E','WI',,'STATE_CODE','Wisconsin',null,true],
    ['8310DD2A972A11E295B122000A9D0283','WV',,'STATE_CODE','West Virginia',null,true],
    ['8426D0D4972A11E295B122000A9D0283','WY',,'STATE_CODE','Wyoming',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ACCOUNT_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['123485829728XXX2A3D123456B100AAA','TG STORE',,'ACCOUNT_TYPE','TG Retail Store',null,true],
    ['3857858294TUHNN2A3D212313B100AAA','CLOSED',,'ACCOUNT_TYPE','School - Closed',null,true],
    ['567885829728BBB3456782313B100AAA','CUSTOMER',,'ACCOUNT_TYPE','School - Customer',null,true],
    ['8345858OTETUHHH2A3D212313B100AAA','PROSPECT',,'ACCOUNT_TYPE','School - Prospect',null,true],
    ['912385829728HHHAHEHUH2313B100AAA','NON CONTRACT',,'ACCOUNT_TYPE','School - Non-Contract',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ALLOCATION_FORMULA-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['C72A35DA038911APPROVEDPROJECTION','APPROVED_PROJECTION',,'ALLOCATION_FORMULA','Approved Projection',null,true],
    ['C72A35DA038911E398B42PROJECTION1','PROJECTION_1_UNITS',,'ALLOCATION_FORMULA','Projection 1',null,true],
    ['C72A35DA038911E398B42PROJECTION2','PROJECTION_2_UNITS',,'ALLOCATION_FORMULA','Projection 2',null,true],
    ['C72A35DA038911E398B42PROJECTION3','PROJECTION_3_UNITS',,'ALLOCATION_FORMULA','Projection 3',null,true],
    ['C72A35DA038911E398B42PROJECTION4','PROJECTION_4_UNITS',,'ALLOCATION_FORMULA','Projection 4',null,true],
    ['C72A35DA038911PROJECTIONFORECAST','LAST_FORECAST_UNITS',,'ALLOCATION_FORMULA','Projection Forecast',null,true],
    ['C72A35DA038911PURCHASEALLOCATION','ALLOCATED_UNITS',,'ALLOCATION_FORMULA','Purchase Allocation',null,true],
    ['C72A35DA038911PURCHDIVIDEEQUALLY','DIVIDE_EQUALLY',,'ALLOCATION_FORMULA','Divide Equally',null,true]
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
  storeId   : 'BOM_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['312713B4972811E2A3D212313B10044E','CONVERSION',,'BOM_TYPE','Conversion',null,true],
    ['32039C8A972811E295B122000A9D0283','MANUFACTURING',,'BOM_TYPE','Manufacturing',null,true]
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
  storeId   : 'COLOR_FAMILY-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['56FB7E22972811E2A3D212313B10044E','BLACK',,'COLOR_FAMILY','Black',null,true],
    ['57D95ED6972811E295B122000A9D0283','BLUE',,'COLOR_FAMILY','Blue',null,true],
    ['58D6CAA8972811E2A3D212313B10044E','BROWN',,'COLOR_FAMILY','Brown',null,true],
    ['59AD11C6972811E2A3D212313B10044E','GREEN',,'COLOR_FAMILY','Green',null,true],
    ['5AB82F74972811E295B122000A9D0283','MIXED',,'COLOR_FAMILY','Mixed',null,true],
    ['5C4A67A8972811E2A3D212313B10044E','ORANGE',,'COLOR_FAMILY','Orange',null,true],
    ['5D9C7E0C972811E295B122000A9D0283','PLAID',,'COLOR_FAMILY','Plaid',null,true],
    ['5EC7D718972811E295B122000A9D0283','RED',,'COLOR_FAMILY','Red',null,true],
    ['5FD43CD2972811E2A3D212313B10044E','VIOLET',,'COLOR_FAMILY','Violet',null,true],
    ['6112DC84972811E2A3D212313B10044E','WHITE',,'COLOR_FAMILY','White',null,true],
    ['622A8496972811E295B122000A9D0283','YELLOW',,'COLOR_FAMILY','Yellow',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CONVERSION_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['73CA0BA4972811E2A3D212313B10044E','EMBLEM',,'CONVERSION_TYPE','Emblem',null,true],
    ['755A65A4972811E295B122000A9D0283','LOCAL MONOGRAM',,'CONVERSION_TYPE','Local Monogram',null,true],
    ['7679E5AE972811E295B122000A9D0283','MONOGRAM',,'CONVERSION_TYPE','Monogram',null,true],
    ['77880CFA972811E2A3D212313B10044E','SILKSCREEN',,'CONVERSION_TYPE','Silkscreen',null,true]
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
  storeId   : 'GRADESET-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['B46C686E972811E295B122000A9D0283','STANDARD ELEMENTARY',,'GRADESET','Standard Elementary',null,true],
    ['B36FD13A972811E295B122000A9D0283','STANDARD MIDDLE SCHOOL',,'GRADESET','Standard Middle School',null,true],
    ['B5595156972811E2A3D212313B10044E','STANDARD K - 12',,'GRADESET','Standard K - 12',null,true],
    ['C7D69C16972911E295B122000A9D0283','STANDARD MIDDLE SCHOOL (2)',,'GRADESET','Standard Middle School (2)',null,true],
    ['C9A5C29C972911E295B122000A9D0283','STANDARD MIDDLE SCHOOL (3)',,'GRADESET','Standard Middle School (3)',null,true],
    ['CB6676E4972911E295B122000A9D0283','STANDARD MIDDLE SCHOOL (4)',,'GRADESET','Standard Middle School (4)',null,true],
    ['CCD6C312972911E295B122000A9D0283','STANDARD MIDDLE SCHOOL (5)',,'GRADESET','Standard Middle School (5)',null,true],
    ['CDDA1994972911E2A3D212313B10044E','STANDARD ELEMENTARY (2)',,'GRADESET','Standard Elementary (2)',null,true],
    ['CF690AFE972911E2A3D212313B10044E','STANDARD ELEMENTARY (3)',,'GRADESET','Standard Elementary (3)',null,true],
    ['D18C3AB8972911E295B122000A9D0283','STANDARD ELEMENTARY (4)',,'GRADESET','Standard Elementary (4)',null,true],
    ['D3535732972911E295B122000A9D0283','STANDARD ELEMENTARY (5)',,'GRADESET','Standard Elementary (5)',null,true],
    ['D5964ACC972911E2A3D212313B10044E','STANDARD ELEMENTARY (6)',,'GRADESET','Standard Elementary (6)',null,true],
    ['D7510686972911E2A3D212313B10044E','STANDARD ELEMENTARY (7)',,'GRADESET','Standard Elementary (7)',null,true],
    ['D8AD39E6972911E295B122000A9D0283','STANDARD ELEMENTARY (8)',,'GRADESET','Standard Elementary (8)',null,true],
    ['DAAD5F0A972911E295B122000A9D0283','STANDARD ELEMENTARY (9)',,'GRADESET','Standard Elementary (9)',null,true],
    ['DBF4911C972911E295B122000A9D0283','STANDARD ELEMENTARY (10)',,'GRADESET','Standard Elementary (10)',null,true],
    ['DD6FDAEC972911E295B122000A9D0283','STANDARD ELEMENTARY (11)',,'GRADESET','Standard Elementary (11)',null,true],
    ['DF614944972911E295B122000A9D0283','STANDARD ELEMENTARY (12)',,'GRADESET','Standard Elementary (12)',null,true],
    ['E1CF76B0972911E295B122000A9D0283','STANDARD ELEMENTARY (13)',,'GRADESET','Standard Elementary (13)',null,true],
    ['E3D8CFF6972911E295B122000A9D0283','STANDARD ELEMENTARY (14)',,'GRADESET','Standard Elementary (14)',null,true],
    ['E5031DE6972911E2A3D212313B10044E','STANDARD ELEMENTARY (15)',,'GRADESET','Standard Elementary (15)',null,true],
    ['E68C3396972911E2A3D212313B10044E','STANDARD ELEMENTARY (16)',,'GRADESET','Standard Elementary (16)',null,true],
    ['E7F8B93E972911E2A3D212313B10044E','STANDARD ELEMENTARY (17)',,'GRADESET','Standard Elementary (17)',null,true],
    ['E9261766972911E2A3D212313B10044E','STANDARD ELEMENTARY (18)',,'GRADESET','Standard Elementary (18)',null,true],
    ['EA57E402972911E295B122000A9D0283','STANDARD ELEMENTARY (19)',,'GRADESET','Standard Elementary (19)',null,true],
    ['EBEF1B50972911E295B122000A9D0283','STANDARD ELEMENTARY (20)',,'GRADESET','Standard Elementary (20)',null,true],
    ['ED1D5906972911E295B122000A9D0283','STANDARD ELEMENTARY (21)',,'GRADESET','Standard Elementary (21)',null,true],
    ['EE83520A972911E295B122000A9D0283','STANDARD ELEMENTARY (22)',,'GRADESET','Standard Elementary (22)',null,true],
    ['EF82589A972911E295B122000A9D0283','STANDARD ELEMENTARY (23)',,'GRADESET','Standard Elementary (23)',null,true],
    ['F09E91E4972911E2A3D212313B10044E','STANDARD ELEMENTARY (24)',,'GRADESET','Standard Elementary (24)',null,true],
    ['F1DF94C2972911E2A3D212313B10044E','STANDARD ELEMENTARY (25)',,'GRADESET','Standard Elementary (25)',null,true],
    ['F371DEB2972911E295B122000A9D0283','STANDARD ELEMENTARY (26)',,'GRADESET','Standard Elementary (26)',null,true],
    ['F4BD12FA972911E295B122000A9D0283','STANDARD ELEMENTARY (27)',,'GRADESET','Standard Elementary (27)',null,true],
    ['F5E9F92C972911E2A3D212313B10044E','STANDARD ELEMENTARY (28)',,'GRADESET','Standard Elementary (28)',null,true],
    ['F721EA98972911E2A3D212313B10044E','STANDARD ELEMENTARY (29)',,'GRADESET','Standard Elementary (29)',null,true],
    ['F84FD416972911E295B122000A9D0283','STANDARD ELEMENTARY (30)',,'GRADESET','Standard Elementary (30)',null,true],
    ['F986CF38972911E2A3D212313B10044E','STANDARD ELEMENTARY (31)',,'GRADESET','Standard Elementary (31)',null,true],
    ['FB881972972911E2A3D212313B10044E','STANDARD ELEMENTARY (32)',,'GRADESET','Standard Elementary (32)',null,true],
    ['FCD910B0972911E295B122000A9D0283','STANDARD ELEMENTARY (33)',,'GRADESET','Standard Elementary (33)',null,true],
    ['FE016CA8972911E2A3D212313B10044E','STANDARD ELEMENTARY (34)',,'GRADESET','Standard Elementary (34)',null,true],
    ['FFB75134972911E2A3D212313B10044E','STANDARD ELEMENTARY (35)',,'GRADESET','Standard Elementary (35)',null,true],
    ['008AC37A972A11E2A3D212313B10044E','STANDARD ELEMENTARY (36)',,'GRADESET','Standard Elementary (36)',null,true],
    ['01730E0A972A11E295B122000A9D0283','STANDARD K - 12 (2)',,'GRADESET','Standard K - 12 (2)',null,true],
    ['025ED8BC972A11E295B122000A9D0283','STANDARD K - 12 (3)',,'GRADESET','Standard K - 12 (3)',null,true],
    ['032009B0972A11E2A3D212313B10044E','STANDARD K - 14 (4)',,'GRADESET','Standard K - 14 (4)',null,true],
    ['04069A6A972A11E2A3D212313B10044E','STANDARD K - 12 (5)',,'GRADESET','Standard K - 12 (5)',null,true],
    ['050313B2972A11E295B122000A9D0283','STANDARD K - 12 (6)',,'GRADESET','Standard K - 12 (6)',null,true],
    ['05F4C4F0972A11E2A3D212313B10044E','STANDARD K - 12 (7)',,'GRADESET','Standard K - 12 (7)',null,true],
    ['0790DE7A972A11E2A3D212313B10044E','STANDARD K - 12 (8)',,'GRADESET','Standard K - 12 (8)',null,true],
    ['089739C2972A11E2A3D212313B10044E','STANDARD K - 12 (9)',,'GRADESET','Standard K - 12 (9)',null,true],
    ['098803FC972A11E2A3D212313B10044E','STANDARD K - 12 (10)',,'GRADESET','Standard K - 12 (10)',null,true],
    ['0A92BCA6972A11E295B122000A9D0283','STANDARD K - 12 (11)',,'GRADESET','Standard K - 12 (11)',null,true],
    ['0BB1A5B6972A11E295B122000A9D0283','STANDARD K - 12 (12)',,'GRADESET','Standard K - 12 (12)',null,true],
    ['0CFC8BDE972A11E2A3D212313B10044E','STANDARD K - 12 (13)',,'GRADESET','Standard K - 12 (13)',null,true],
    ['0E1C1778972A11E295B122000A9D0283','STANDARD K - 12 (14)',,'GRADESET','Standard K - 12 (14)',null,true],
    ['0F3DD74A972A11E295B122000A9D0283','STANDARD K - 12 (15)',,'GRADESET','Standard K - 12 (15)',null,true],
    ['10D05FF6972A11E2A3D212313B10044E','STANDARD K - 12 (16)',,'GRADESET','Standard K - 12 (16)',null,true],
    ['11FF8AA0972A11E2A3D212313B10044E','STANDARD K - 12 (17)',,'GRADESET','Standard K - 12 (17)',null,true],
    ['1305AB82972A11E2A3D212313B10044E','STANDARD K - 12 (18)',,'GRADESET','Standard K - 12 (18)',null,true],
    ['14041320972A11E2A3D212313B10044E','STANDARD K - 12 (19)',,'GRADESET','Standard K - 12 (19)',null,true],
    ['14F4DC56972A11E295B122000A9D0283','STANDARD K - 12 (20)',,'GRADESET','Standard K - 12 (20)',null,true],
    ['165A7484972A11E2A3D212313B10044E','STANDARD K - 12 (21)',,'GRADESET','Standard K - 12 (21)',null,true],
    ['176CAB9E972A11E2A3D212313B10044E','STANDARD K - 12 (22)',,'GRADESET','Standard K - 12 (22)',null,true],
    ['18D6082C972A11E2A3D212313B10044E','STANDARD K - 12 (23)',,'GRADESET','Standard K - 12 (23)',null,true],
    ['19CB2456972A11E295B122000A9D0283','STANDARD K - 12 (24)',,'GRADESET','Standard K - 12 (24)',null,true],
    ['1B47D7B6972A11E2A3D212313B10044E','STANDARD K - 12 (25)',,'GRADESET','Standard K - 12 (25)',null,true],
    ['1C46C956972A11E2A3D212313B10044E','STANDARD K - 12 (26)',,'GRADESET','Standard K - 12 (26)',null,true],
    ['1D947560972A11E2A3D212313B10044E','STANDARD K - 12 (27)',,'GRADESET','Standard K - 12 (27)',null,true],
    ['1E9C0E78972A11E2A3D212313B10044E','STANDARD K - 12 (28)',,'GRADESET','Standard K - 12 (28)',null,true],
    ['1F7C3FFC972A11E2A3D212313B10044E','STANDARD K - 8',,'GRADESET','Standard K - 8',null,true],
    ['20812386972A11E2A3D212313B10044E','STANDARD K - 8 (2)',,'GRADESET','Standard K - 8 (2)',null,true],
    ['2173735C972A11E295B122000A9D0283','STANDARD K - 8 (3)',,'GRADESET','Standard K - 8 (3)',null,true],
    ['227E2792972A11E295B122000A9D0283','STANDARD K - 8 (4)',,'GRADESET','Standard K - 8 (4)',null,true],
    ['238E114C972A11E295B122000A9D0283','STANDARD K - 8 (5)',,'GRADESET','Standard K - 8 (5)',null,true],
    ['24A39958972A11E295B122000A9D0283','STANDARD K - 8 (6)',,'GRADESET','Standard K - 8 (6)',null,true],
    ['25BBFF60972A11E2A3D212313B10044E','STANDARD K - 8 (7)',,'GRADESET','Standard K - 8 (7)',null,true],
    ['26C1E730972A11E2A3D212313B10044E','STANDARD K - 8 (8)',,'GRADESET','Standard K - 8 (8)',null,true],
    ['282B8B3A972A11E2A3D212313B10044E','STANDARD K - 8 (9)',,'GRADESET','Standard K - 8 (9)',null,true],
    ['29A21588972A11E295B122000A9D0283','STANDARD K - 8 (10)',,'GRADESET','Standard K - 8 (10)',null,true],
    ['2AFD9D80972A11E2A3D212313B10044E','STANDARD K - 8 (11)',,'GRADESET','Standard K - 8 (11)',null,true],
    ['2BED43A8972A11E2A3D212313B10044E','STANDARD K - 8 (12)',,'GRADESET','Standard K - 8 (12)',null,true],
    ['2CDA583C972A11E295B122000A9D0283','STANDARD K - 8 (13)',,'GRADESET','Standard K - 8 (13)',null,true],
    ['2DCE5CF2972A11E2A3D212313B10044E','STANDARD K - 8 (14)',,'GRADESET','Standard K - 8 (14)',null,true],
    ['2EC88380972A11E2A3D212313B10044E','STANDARD K - 8 (15)',,'GRADESET','Standard K - 8 (15)',null,true],
    ['2FD9473C972A11E295B122000A9D0283','STANDARD K - 8 (16)',,'GRADESET','Standard K - 8 (16)',null,true],
    ['30CF7274972A11E295B122000A9D0283','STANDARD K - 8 (17)',,'GRADESET','Standard K - 8 (17)',null,true],
    ['3201A3EC972A11E295B122000A9D0283','STANDARD K - 8 (18)',,'GRADESET','Standard K - 8 (18)',null,true],
    ['32E88DCA972A11E2A3D212313B10044E','STANDARD K - 8 (19)',,'GRADESET','Standard K - 8 (19)',null,true],
    ['3439D4D6972A11E295B122000A9D0283','STANDARD K - 8 (20)',,'GRADESET','Standard K - 8 (20)',null,true],
    ['357C1A8E972A11E295B122000A9D0283','STANDARD K - 8 (21)',,'GRADESET','Standard K - 8 (21)',null,true],
    ['367DFF2E972A11E295B122000A9D0283','STANDARD K - 8 (22)',,'GRADESET','Standard K - 8 (22)',null,true],
    ['37C70240972A11E295B122000A9D0283','STANDARD K - 8 (23)',,'GRADESET','Standard K - 8 (23)',null,true],
    ['390B9DB4972A11E295B122000A9D0283','STANDARD K - 8 (24)',,'GRADESET','Standard K - 8 (24)',null,true],
    ['39EF4064972A11E2A3D212313B10044E','STANDARD K - 8 (25)',,'GRADESET','Standard K - 8 (25)',null,true],
    ['3B0867F0972A11E295B122000A9D0283','STANDARD K - 8 (26)',,'GRADESET','Standard K - 8 (26)',null,true],
    ['3C2C3922972A11E295B122000A9D0283','STANDARD HIGH SCHOOL',,'GRADESET','Standard High School',null,true],
    ['3DC7B518972A11E2A3D212313B10044E','STANDARD HIGH SCHOOL (2)',,'GRADESET','Standard High School (2)',null,true],
    ['3EDE97D2972A11E2A3D212313B10044E','STANDARD HIGH SCHOOL (3)',,'GRADESET','Standard High School (3)',null,true],
    ['3FD926F2972A11E295B122000A9D0283','STANDARD HIGH SCHOOL (4)',,'GRADESET','Standard High School (4)',null,true],
    ['4110D6F0972A11E2A3D212313B10044E','STANDARD HIGH SCHOOL (5)',,'GRADESET','Standard High School (5)',null,true],
    ['421CD256972A11E2A3D212313B10044E','STANDARD HIGH SCHOOL (6)',,'GRADESET','Standard High School (6)',null,true],
    ['4356EA3A972A11E2A3D212313B10044E','STANDARD PRE-SCHOOL',,'GRADESET','Standard Pre-School',null,true],
    ['445F10B0972A11E295B122000A9D0283','STANDARD PRE-SCHOOL (2)',,'GRADESET','Standard Pre-School (2)',null,true],
    ['45698148972A11E2A3D212313B10044E','STANDARD PRE-SCHOOL (3)',,'GRADESET','Standard Pre-School (3)',null,true],
    ['46AF6FB8972A11E2A3D212313B10044E','STANDARD PRE-SCHOOL (4)',,'GRADESET','Standard Pre-School (4)',null,true],
    ['47C00C28972A11E2A3D212313B10044E','STANDARD CHOIR',,'GRADESET','Standard Choir',null,true]
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
  storeId   : 'LETDOWN_METHOD-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['C414F84E972811E2A3D212313B10044E','INVENTORY',,'LETDOWN_METHOD','Inventory',null,true],
    ['C51E35E8972811E2A3D212313B10044E','DAY DEMAND',,'LETDOWN_METHOD','Day Demand',null,true],
    ['C61B07FA972811E295B122000A9D0283','DAY CAPACITY',,'LETDOWN_METHOD','Day Capacity',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'LOCATION_BRAND-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['48CC77AA972A11E2A3D212313B10044E','PARKER SCHOOL UNIFORMS',,'LOCATION_BRAND','Parker School Uniforms',null,true],
    ['49DC83BA972A11E2A3D212313B10044E','BUCKHEAD SCHOOL UNIFORMS',,'LOCATION_BRAND','Buckhead School Uniforms',null,true],
    ['4AFDF44A972A11E2A3D212313B10044E','TRUE GRITS SCHOOL UNIFORMS',,'LOCATION_BRAND','True Grits School Uniforms',null,true]
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
    ['D781844C972811E2A3D212313B10044E','MS.',,'NAME_PREFIX','Ms.',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ORDER_FULFILLMENT_METHOD-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['EBAE1106972811E295B122000A9D0283','PICK TICKET',,'ORDER_FULFILLMENT_METHOD','Pick Ticket',null,true],
    ['ECDE8E66972811E2A3D212313B10044E','WORK ORDER',,'ORDER_FULFILLMENT_METHOD','Work Order',null,true],
    ['EE148A9C972811E2A3D212313B10044E','TRANSFER',,'ORDER_FULFILLMENT_METHOD','Transfer',null,true],
    ['EEFB9356972811E2A3D212313B10044E','PURCHASE ORDER',,'ORDER_FULFILLMENT_METHOD','Purchase Order',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ORDER_MULTIPLE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['EFD4A088972811E2A3D212313B10044E','SELL UNIT',,'ORDER_MULTIPLE_TYPE','Sell Unit',null,true],
    ['F0E559CC972811E2A3D212313B10044E','INNER PACK',,'ORDER_MULTIPLE_TYPE','Inner Pack',null,true],
    ['F21DCD38972811E295B122000A9D0283','MASTER PACK',,'ORDER_MULTIPLE_TYPE','Master Pack',null,true],
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
    ['032456E2972911E2A3D212313B10044E','SELL UNIT',,'PACK_TYPE','Sell Unit',null,true],
    ['04183F3C972911E2A3D212313B10044E','INNER PACK',,'PACK_TYPE','Inner Pack',null,true],
    ['05726F2E972911E2A3D212313B10044E','MASTER PACK',,'PACK_TYPE','Master Pack',null,true],
    ['06A0AD48972911E2A3D212313B10044E','PALLET',,'PACK_TYPE','Pallet',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PAYMENT_TERM-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['0C23CA20972911E295B122000A9D0283','NET',,'PAYMENT_TERM','Net',null,true],
    ['0D11BDA2972911E2A3D212313B10044E','NET 30',,'PAYMENT_TERM','Net 30',null,true],
    ['0DE7FCBE972911E295B122000A9D0283','NET 60',,'PAYMENT_TERM','Net 60',null,true],
    ['0ED11C46972911E2A3D212313B10044E','2% 10, NET 30',,'PAYMENT_TERM','2% 10, Net 30',null,true]
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
  storeId   : 'REPLENISHMENT_METHOD-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['2F9BE596972911E2A3D212313B10044E','NONE',,'REPLENISHMENT_METHOD','None',null,true],
    ['30756924972911E295B122000A9D0283','MIN/MAX',,'REPLENISHMENT_METHOD','Min/Max',null,true],
    ['31BE695C972911E2A3D212313B10044E','ORDER POINT',,'REPLENISHMENT_METHOD','Order Point',null,true]
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
    ['399CEB94972911E295B122000A9D0283','AVERAGE COST',,'RULE_ACTION','Calculate Average Cost',null,true],
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
  storeId   : 'SITE_GENDER-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['4DDD2A42972911E295B122000A9D0283','MALE',,'SITE_GENDER','Male',null,true],
    ['4EBD6CCE972911E295B122000A9D0283','FEMALE',,'SITE_GENDER','Female',null,true],
    ['4FFF5B74972911E2A3D212313B10044E','COED',,'SITE_GENDER','Coed',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SITE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['511C26B8972911E295B122000A9D0283','SCHOOL',,'SITE_TYPE','School',null,true],
    ['523DE284972911E295B122000A9D0283','OTHER',,'SITE_TYPE','Other',null,true]
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
  storeId   : 'SKU_NAME_METHOD-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['59C7616A972911E2A3D212313B10044E','CONCAT SHORT',,'SKU_NAME_METHOD','Concat Short',null,true],
    ['5ACF278C972911E295B122000A9D0283','CONCAT TRIM',,'SKU_NAME_METHOD','Concat Trim',null,true],
    ['5BF4FCB8972911E295B122000A9D0283','STYLE ONLY',,'SKU_NAME_METHOD','Style Only',null,true]
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
  storeId   : 'VOUCHER_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['A30E1346972911E2A3D212313B10044E','GIFT CARD',,'VOUCHER_TYPE','Gift Card',null,true],
    ['A3E62722972911E295B122000A9D0283','GIFT CERTIFICATE',,'VOUCHER_TYPE','Gift Certificate',null,true],
    ['A4A7F848972911E295B122000A9D0283','COUPON',,'VOUCHER_TYPE','Coupon',null,true]
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
    ['98A000EE204011E290E9040CCEDF842E','GENERAL',0,'ATTACHMENT_TYPE','General',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'BRAND-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['32D4DAA2972811E295B12200BUCKHEAD','BUCKHEAD',,'BRAND','Buckhead School Uniforms',null,true],
    ['34E8D776972811E295B12200ACHARTER','CHARTER',,'BRAND','Charter School Uniforms',null,true],
    ['32D4DAA2972811E295B122NORCOMPASS','COMPASS',,'BRAND','Compass',null,true],
    ['32D4DAA2972811E295B122NONBRANDED','NON BRANDED',,'BRAND','Non-Branded',null,true],
    ['363BAA90972811E295B122000XPARKER','PARKER',,'BRAND','Parker School Uniforms',null,true],
    ['32D4DAA2972811E295B122NOREDLABEL','RED LABEL',,'BRAND','Red Label',null,true],
    ['339D2BA6972811E2A3D212313B10044E','TRUE GRITS',,'BRAND','True Grits School Uniforms',null,true]
  ]
});

