(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	const todos=[
		{
			id:1,
			title:'上课',
			status:true
		},
		{
			id:2,
			title:'吃饭',
			status:false
		},
		{
			id:3,
			title:'敲代码',
			status:false
		}
	];

	new Vue({
		data:{
			todos,
		},
		methods:{
			HandleAddEvent:function(e){
				const target=e.target;
				const value=target.value.trim();
				if(!value.length){
					return
				}
				todos.push({
					id:todos[todos.length-1].id+1,
					title:value,
					status:false
				})
				target.value='';
			},
			HandleDelEvent:function(index){
				todos.splice(index,1)
			}
		}
	}).$mount('#app')

})(window);
