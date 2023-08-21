<template>
	<h1>首页Home.vue</h1>
	<div id='box'></div>
	{{ str }}
	<button @click='update'>修改</button>
	<router-link to='/about'>跳转</router-link>
</template>


<script setup>
let str = ref('这是数据');
const update = ()=>{
	str.value = '123';
}
import axios from 'axios'
//请求接口
onBeforeMount(()=>{
	axios({
		url:"http://testapi.xuexiluxian.cn/api/slider/getSliders"
	}).then(res=>{
		console.log( res )
	})
})

//获取dom
onMounted(()=>{
	console.log(  document.getElementById('box')  )
})


//修改前
onBeforeUpdate(()=>{
	console.log('修改前');
})
//修改后
onUpdated(()=>{
	console.log('修改后');
})

//销毁前
onBeforeUnmount(()=>{
	console.log('销毁前');
})
//销毁后
onUnmounted(()=>{
	console.log('销毁后');
})	
</script>