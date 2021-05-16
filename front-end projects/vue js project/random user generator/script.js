const app = Vue.createApp({
	// here goes all the work
	data(){
		return{
			firstname : 'sample',
			lastname :'sample name',
			gender : 'male',
			email : 'abc@xyz.com',
			dob : 'date of birth',
			location : 'street name, country',
			phone : '016977 19166',
			imgUrl : 'https://randomuser.me/api/portraits/women/71.jpg',
		}
	},
	methods:{
		async getUserData(){
			const URL = 'https://randomuser.me/api/1.3/';
			const response = await fetch(URL);
			const data = await response.json();
			let dataObj = data.results[0];
			this.firstname = dataObj.name.first;
			this.lastname = dataObj.name.last;
			this.gender = dataObj.gender;
			this.email = dataObj.email;
			this.dob = dataObj.dob.date.split(':')[0].split('T')[0],
			this.location = dataObj.location.street.name + " , "+ dataObj.location.country,
			this.phone = dataObj.phone,
			this.imgUrl = dataObj.picture.large
		}
	},
	beforeMount(){
	    this.getUserData()
	}
})

app.mount('#app')
