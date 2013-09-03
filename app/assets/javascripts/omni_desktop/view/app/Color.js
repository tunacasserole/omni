/**
 * This is a utility or helper class to be used for color related information or actions.
 *
 */
Ext.define('Bio.util.Color', {	
	statics: {
		
		/**
		 * @property {String} BLUE
		 */		
		BLUE:	 '#0058DA',
		BLUE1:	 '#002B82',
		BLUE2:	 '#1909E5',
		BLUE3:	 '#756BF9',
		BLUE4:	 '#0F74EF',
		/**
		 * @property {String} BROWN
		 */		
		BROWN:	 '#A05000',
		BROWN2:	 '#6C3600',
		BROWN3:	 '#502800',
		/**
		 * @property {String} DARKBLUE
		 */		
		DARKBLUE: '#000058',
		/**
		 * @property {String} DARKGRAY
		 */		
		DARKGRAY: '#666666',
		/**
		 * @property {String} GREEN
		 */		
		GREEN:	 '#339933',
		GREEN2:	 '#277727',
		GREEN3:	 '#103210',
		/**
		 * @property {String} GREY
		 */		
		GREY1:	 '#969696',
		GREY2:	 '#777777',
		GREY3:	 '#333333',
		/**
		 * @property {String} LIGHTBLUE
		 */		
		LIGHTBLUE:	'#71B1D1',
		LIGHTBLUE1:	'#1BA1E2',
		LIGHTBLUE2:	'#1787BF',
		LIGHTBLUE3:	'#105F86',
		/**
		 * @property {String} LIME
		 */		
		LIME:	 '#8CBF26',
		LIME1:	 '#C0E478',
		LIME2:	 '#64891B',
		/**
		 * @property {String} MAGENTA
		 */		
		MAGENTA: '#FF0097',
		MAGENTA3: '#6C0040',
		/**
		 * @property {String} MAROON
		 */		
		MAROON1: '#990000',
		/**
		 * @property {String} ORANGE
		 */		
		ORANGE:	 '#F09609',
		ORANGE2: '#F8B13E',
		ORANGE3: '#E46C0A',
		/**
		 * @property {String} PINK
		 */		
		PINK:	 '#E671B8',
		PINK1:	 '#DD4BBE',
		PINK2:	 '#F0A6D2',
		/**
		 * @property {String} PURPLE
		 */		
		PURPLE:	 '#9A2599',
		PURPLE1: '#A200FF',
		PURPLE2: '#BD47FF',
		PURPLE3: '#DA97FF',
		PURPLE4: '#6900A4',
		/**
		 * @property {String} RED
		 */		
		RED:	 '#E51400',
		RED2:	 '#FF2811',
		RED3:	 '#FF7769',
		/**
		 * @property {String} TEAL
		 */		
		TEAL:	 '#00ABA9',
		TEAL1:	 '#007976',


		// /**
		//  * @property {String} PURPLE
		//  */
		// BLUE1:                '#1BA1E2',
		// BLUE2:                '#1B2CE2',
		// BLUE3:                '#8C9BED',				
		// BLUE4:                '#5AB8F2',		
		// /**
		//  * @property {String} MAGENTA
		//  */
		// MAGENTA:               '#FF0097',
		
		// // /**
		//  * @property {String} TEAL
		//  */
		// TEAL:                  '#00ABA9',
		
		// /**
		//  * @property {String} LIME
		//  */
		// LIME:                  '#8CBF26',
		
		// /**
		//  * @property {String} BROWN
		//  */
		// BROWN:                 '#A05000',
		
		// /**
		//  * @property {String} PINK
		//  */
		// PINK:                  '#E671B8',
		
		// /**
		//  * @property {String} ORANGE
		//  */
		// ORANGE:                '#F09609',

		// /**
		//  * @property {String} BLUE
		//  */
		// BLUE:                  '#1BA1E2',
		
		// /**
		//  * @property {String} RED
		//  */
		// RED:                   '#E51400',
		
		// /**
		//  * @property {String} ORANGE
		//  */
		// GREEN:                 '#339933',

		// /**
		//  * @property {String} DARKGRAY
		//  */
		// DARKGRAY:              '#666666',

		// /**
		//  * @property {String} LIGHTBLUE
		//  */
		// LIGHTBLUE:             '#1F92C2',
		
		// /**
		//  * @property {String} DARKBLUE
		//  */
		// DARKBLUE:              '#276DA5',
		
		
		
		approved:function(color){
			var approvedColor = color;

			if(Bio.util.Color.hasOwnProperty(color.toUpperCase())){
	      approvedColor = Bio.util.Color[color.toUpperCase()];
		  }
			return approvedColor;
		}

	},
	
	constructor	: function(options){
			this.initConfig(options);
	}
	
	
})