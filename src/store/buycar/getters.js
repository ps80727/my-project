export default {
	//总价钱
	totalInfo (state){
		let total = {price : 0, num : 0};
		state.cars.forEach(item => {
			total.price += item.num * item.supplierId;
			total.num += item.num;
		})
		return total;
	}
}