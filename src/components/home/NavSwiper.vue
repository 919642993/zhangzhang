<template>
	<div class='nav-swiper'>
		<div class='nav-swiper-main'>
			<div class='swiper-t'>
				<ul>
					<li class='active'>
						<span>HTML/CSS</span>
						<el-icon><ArrowRight /></el-icon>
					</li>
					<li>
						<span>HTML/CSS</span>
						<el-icon><ArrowRight /></el-icon>
					</li>
					<li>
						<span>HTML/CSS</span>
						<el-icon><ArrowRight /></el-icon>
					</li>
					<li>
						<span>HTML/CSS</span>
						<el-icon><ArrowRight /></el-icon>
					</li>
					<li>
						<span>HTML/CSS</span>
						<el-icon><ArrowRight /></el-icon>
					</li>
				</ul>
				<div>
					<el-carousel 
						:interval="3000" 
						arrow="always"
						v-if='sliderList.length > 0'
					>
					    <el-carousel-item 
					    	v-for="item in sliderList" 
					    	:key="item.id"
					    >
					      <img :src="item.imageUrl" />
					    </el-carousel-item>
					</el-carousel>
				</div>
			</div>
			<ul class='swiper-b'> 
				<li>
					<h3>
						<img src="@/assets/img/chuji.png" />
					</h3>
					<div>
						<h4>初级课程</h4>
						<span>入门快，岗位多</span>
					</div>
				</li>
				<li>
					<h3>
						<img src="@/assets/img/chuji.png" />
					</h3>
					<div>
						<h4>初级课程</h4>
						<span>入门快，岗位多</span>
					</div>
				</li>
				<li>
					<h3>
						<img src="@/assets/img/chuji.png" />
					</h3>
					<div>
						<h4>初级课程</h4>
						<span>入门快，岗位多</span>
					</div>
				</li>
				<li>
					<h3>
						<img src="@/assets/img/chuji.png" />
					</h3>
					<div>
						<h4>初级课程</h4>
						<span>入门快，岗位多</span>
					</div>
				</li>
				<li>
					<h3>
						<img src="@/assets/img/chuji.png" />
					</h3>
					<div>
						<h4>初级课程</h4>
						<span>入门快，岗位多</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
//element
import { ArrowRight } from '@element-plus/icons-vue';

//api
import { getSliders } from '@/utils/api/slider'

//轮播图数据
let sliderList = ref([]);
//生命周期
onBeforeMount(()=>{

	//轮播图数据
	getSliders().then(res=>{
		sliderList.value = res.data.list;
		console.log( res.data.list );
	})
})
</script>

<style scoped>
.nav-swiper{
	background: url('@/assets/img/transitionbg.png') no-repeat;
	width: 100%;
	height: 600px;
}
.nav-swiper-main{
	width: 1000px;
	padding: 47px 0;
	margin: 0 auto;
}
.swiper-t{
	display: flex;
	height: 373px;
	border-radius: 11px 11px 0px 0px;
}
.swiper-t ul{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 160px;
	height: 100%;
	background: #2B283D;
	border-radius: 11px 0px 0px 0px;
}
.swiper-t ul li{
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 160px;
	height: 37px;
	font-size: 16px;
	color: #F2F2F2;
	cursor: pointer;
}
.active{
	background: linear-gradient(90deg, #3FE5FF 0%, rgba(62, 222, 255, 0.93) 2%, rgba(60, 203, 255, 0.73) 9%, rgba(58, 186, 255, 0.56) 17%, rgba(57, 172, 255, 0.41) 25%, rgba(55, 160, 255, 0.28) 33%, rgba(54, 150, 255, 0.18) 43%, rgba(53, 142, 255, 0.1) 53%, rgba(53, 137, 255, 0.04) 64%, rgba(53, 133, 255, 0.01) 77%, rgba(53, 133, 255, 0) 100%);
}
.swiper-t > div{
	width: 840px;
	height: 373px;
}
.el-carousel{
 	height: 373px;
}
.el-carousel img{
	width: 100%;
	height: 373px;
}
::v-deep .el-carousel__container{
	height: 373px;
}
.swiper-b{
	display: flex;
}
.swiper-b li{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 213px;
	height: 133px;
	cursor: pointer;
	background: #FFFFFF;
	border-radius: 0px 0px 0px 11px;
}
.swiper-b li img{
	width: 64px;
	height: 64px;
}
.swiper-b li div{
	margin-left: 11px;
}
.swiper-b li div h4{
	font-size: 16px;
	color: #333333;
}
.swiper-b li div span{
	font-size: 12px;
	color: #808080;
}
</style>