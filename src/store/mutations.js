/*
 * Description: vuex-mutation.js
 * User: wangrui
 * Date: 2017/9/17
*/

import getters from './getters.js'

export default {
	changeCountryId (state, countryId) {
		state.countryId = countryId;
	},
	changeCountryName (state, countryName) {
		state.countryName = countryName;
	},
	changeClassifyId (state, classifyId) {
		state.classifyId = classifyId;
	},
	changeClassifyName (state, classifyName) {
		state.classifyName = classifyName;
	}
}
