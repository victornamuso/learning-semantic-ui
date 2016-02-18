import Ember from "ember";

const {Controller} = Ember;

export default Controller.extend({

	isShowingFront: true,
	actions:{
		toggleCard(){
			this.toggleProperty("isShowingFront");
		}
	}
});
