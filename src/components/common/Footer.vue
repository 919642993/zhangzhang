<template>
	<footer>
		<div class='foot-main'>
			<div class='foot-logo'>
				<img class='logo02' src="@/assets/img/logo02.png">
				<img class='factory' src="@/assets/img/foot-factory.png">
			</div>
			<div class="foot-c">
				<ul>
					<li>关于我们</li>
					<li>｜</li>
					<li>联系我们</li>
					<li>｜</li>
					<li>意见反馈</li>
					<li>｜</li>
					<li>版权声明</li>
				</ul>
				<div>Copyrignt© 2021 imooc.com  京ICP备  12003892号-11  京公网安备11010802030151号  营业执照</div>
			</div>
			<div class='wx'>
				<ul>
					<li>
						<img src="@/assets/img/guanfangwx.jpg" />
						<span>官方微信</span>
					</li>
					<li>
						<img src="@/assets/img/guanfangwx.jpg" />
						<span>指导老师微信</span>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>


<style scoped>
footer{
	width: 100%;
	height: 187px;
	background: #3483FF;
}
.foot-main{
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 1000px;
	height: 187px;
	margin: 0 auto;
}
.foot-logo{
	display: flex;
	align-items: center;
}
footer .logo02{
	width: 127px;
	height: 50px;
}
footer .factory{
	width: 130px;
	height: 110px;
}
.foot-c{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 31px;
	color: #fff;
	font-size: 12px;
}
.foot-c ul{
	display: flex;
}
.wx ul{
	display: flex;
	color: #fff;
	font-size: 12px;
}
.wx ul li{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.wx ul li +li{
	margin-left: 10px;
}
.wx img{
	width: 70px;
	height: 70px;
}
.wx span{
	margin-top: 10px;
}
</style>


