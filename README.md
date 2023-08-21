# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)




一、框架版本升级的问题

	框架版本升级（对于用户来说一定不要和之前版本差距特别大）

###  Vue3.x升级做了向下兼容（Vue2.x）

	2.1 Vue3做了向下兼容，也支持Vue2的写法（有些不行）
		<script type="text/javascript">
		import News from '@/components/News.vue'
		export default{
			data () {
				return {
					str:'你好xxx'
				}
			},
			components:{
				News
			}
		}
		</script>

	2.2 Vue3 + Vue2

		<script type="text/javascript">
		import News from '@/components/News.vue'
		export default{
			setup(){
				let str = '你好3333';
				return {
					str
				}
			},
			components:{
				News
			}
		}
		</script>

	2.3 纯Vue3 、setup语法糖的写法

		<script setup>
		import News from '@/components/News.vue'
		let str = '张小三3333';
		</script>

*** setup ==》组合式API
*** Vue2.x写法==》选项式API
	

###  setup内部写法

	3.1 定义数据

		1> 死数据，不可以修改之类的，但是可以展示视图层

			let str = '1';

		2> 响应式数据 ： ref

			2.1 在使用的时候需要  ： x.value 
		
		3> 响应式数据 ： reactive

			3.1 在使用的时候需要  ： 不像ref一样，不需要.value
			3.2 reactive 只能写对象或者数组

	3.2 Vue2 和 Vue3数据拦截不同的点

		Vue2.x ==> Object.defineProperty

		Vue3.x ==> new Proxy

	3.3 toRefs

		解构==》响应式数据
		let obj = reactive({
			name:'张三',
			age:20
		})

		let { name,age } = toRefs( obj );

	3.4 computed

		1>  let changeStr = computed(()=>{
			 	return str.value;
			})

		2>  let changeStr = computed({
				get(){
					return str.value;
				},
				set( val ){
					str.value = val;
				}
			})


 ### setup语法糖插件

	解决import { ref , reactive ... } 引入的问题

	4.1 下载安装

		npm i unplugin-auto-import -D

	4.2 在vite.config.js中进行配置

		import vue from '@vitejs/plugin-vue';
		//引入插件
		import AutoImport from 'unplugin-auto-import/vite';

		const path = require('path');

		export default defineConfig({
		  plugins: [
		  	vue(),
		  	AutoImport({
		  		imports:['vue','vue-router']
		  	})
		  ],
		  resolve: {
		    // 配置路径别名
		    alias: {
		      '@': path.resolve(__dirname, './src'),
		    },
		  },
		});
		

### Vue3.x升级做了向下兼容（Vue2.x）

	2.1 Vue3做了向下兼容，也支持Vue2的写法（有些不行）
		<script type="text/javascript">
		import News from '@/components/News.vue'
		export default{
			data () {
				return {
					str:'你好xxx'
				}
			},
			components:{
				News
			}
		}
		</script>

	2.2 Vue3 + Vue2

		<script type="text/javascript">
		import News from '@/components/News.vue'
		export default{
			setup(){
				let str = '你好3333';
				return {
					str
				}
			},
			components:{
				News
			}
		}
		</script>

	2.3 纯Vue3 、setup语法糖的写法

		<script setup>
		import News from '@/components/News.vue'
		let str = '张小三3333';
		</script>

*** setup ==》组合式API
*** Vue2.x写法==》选项式API
	



### 3.1 定义数据

		1> 死数据，不可以修改之类的，但是可以展示视图层

			let str = '1';

		2> 响应式数据 ： ref

			2.1 在使用的时候需要  ： x.value 
		
		3> 响应式数据 ： reactive

			3.1 在使用的时候需要  ： 不像ref一样，不需要.value
			3.2 reactive 只能写对象或者数组

	3.2 Vue2 和 Vue3数据拦截不同的点

		Vue2.x ==> Object.defineProperty

		Vue3.x ==> new Proxy

	3.3 toRefs

		解构==》响应式数据
		let obj = reactive({
			name:'张三',
			age:20
		})

		let { name,age } = toRefs( obj );

	3.4 computed

		1>  let changeStr = computed(()=>{
			 	return str.value;
			})

		2>  let changeStr = computed({
				get(){
					return str.value;
				},
				set( val ){
					str.value = val;
				}
			})

	3.5 watch

		1> 监听某一个数据
			watch( str , (newVal,oldVal)=>{
				console.log( newVal,oldVal);
			})
		2> 同时监听多个数据
			watch( [ str , num ] , (newVal,oldVal)=>{
				console.log( newVal,oldVal);
			})
		3> 初始化监听

			watch( num , (newVal,oldVal)=>{
				console.log( newVal,oldVal);
			},{
				immediate:true
			})

		4> 监听对象

			watch( obj , (newVal)=>{
				console.log( newVal )
			},{
				immediate:true,
			})

		5> 监听对象某一个key，并且深度监听

			watch( ()=>obj.m , (newVal,oldVal)=>{
				console.log( newVal,oldVal )
			},{
				immediate:true,
				deep:true
			})

		6. 立即执行监听函数

			watchEffect(()=>{
				console.log( str.value )
			})

		7. 监听路由
		
			let router = useRouter();

			watch( ()=>router.currentRoute.value,( newVal )=>{
				console.log( newVal );
			},{
				immediate:true
			})



### vue-router ： https://router.vuejs.org/zh/api/


1. tag属性去除了

	<router-link to='/about' tag='div'>跳转到关于我们</router-link>

2. 写法问题

	let router = useRouter();  ===> this.$router
	let route = useRoute();    ===> this.$route

3. 导航守卫
	
	全局路由守卫

		beforeEach(to, from, next) 全局前置守卫，路由跳转前触发
		beforeResolve(to, from, next) 全局解析守卫 在所有组件内守卫和异步路由组件被解析之后触发
		afterEach(to, from) 全局后置守卫，路由跳转完成后触发

	路由独享守卫

		beforeEnter(to,from,next) 路由对象单个路由配置 ，单个路由进入前触发

	组件路由守卫	
		beforeRouteEnter(to,from,next) 在组件生命周期beforeCreate阶段触发
		beforeRouteUpdadte(to,from,next) 当前路由改变时触发
		beforeRouteLeave(to,from,next) 导航离开该组件的对应路由时触发


### 4.9 组件 ： 父 传 子

		1. 父

			<template>
				<div>
					<List :msg='msg'></List>
				</div>
			</template>

			<script setup>
			import List from '../components/List.vue'
			let msg = ref('这是父传过去的数据');
			</script>

		2. 子

			<template>
				<div> 
					这是子组件 ==> {{ msg }}
				</div>
			</template>

			<script setup>
			defineProps({
				msg:{
					type:String,
					default:'1111'
				}
			})
			</script>


### 4.10 组件 ：子 传 父 

		子：
			<template>
				<div> 
					这是子组件 ==> {{ num }}
					<button @click='changeNum'>按钮</button>
				</div>
			</template>

			<script setup lang='ts'>
			let num = ref(200);

			const emit = defineEmits<{
			  (e: 'fn', id: number): void
			}>()

			const changeNum = ()=>{
				emit('fn',num)
			}	
			</script>

		父：
			<template>
				<div>
					<List @fn='changeHome'></List>
				</div>
			</template>

			<script setup>
			import List from '../components/List.vue'
			const changeHome = (n)=>{
				console.log( n.value );
			}
			</script>

### 4.11 v-model传值

		父:
			<List v-model:num='num'></List>
			<script setup>
			import List from '../components/List.vue'
			let num = ref(1);
			</script>
		子:
			const props = defineProps({
				num:{
					type:Number,
					default:100
				}
			})
			const emit = defineEmits(['update:num'])
			const btn = ()=>{
				emit('update:num',200);
			}


### 4.12 兄弟组件之间的传值

		1》下载安装

			npm install mitt -S

		2》plugins/Bus.js

			import mitt from 'mitt';
			const emitter = mitt()
			export default emitter;

		3》A组件

			emitter.emit('fn',str);

		4》B组件

			emitter.on('fn',e=>{
				s.value = e.value;
			})


### 7. 插槽

	匿名插槽
		父：
			<A>
				这是xxxxx数据
				这是yyyyy数据
			</A>

		子：
			<header>
				<div>头部</div>
				<slot></slot>
			</header>

			<footer>
				<div>底部</div>
				<slot></slot>
			</footer>
	具名插槽
		父：
			<A>
				<template v-slot:xxx>
					这是xxxxx数据
				</template>

				<template v-slot:yyy>
					这是yyyyy数据
				</template>
			</A>

			***简写：<template #xxx>
		子：
			<header>
				<div>头部</div>
				<slot name='xxx'></slot>
				<slot name='yyy'></slot>
			</header>

			<footer>
				<div>底部</div>
				<slot name='xxx'></slot>
			</footer>

	作用域插槽

		父：
			<template v-slot='{data}'>
				{{ data.name }} --> {{ data.age }}
			</template>

			简写：<template #default='{data}'>
		子：
			<div v-for='item in list' :key='item.id'>
				<slot :data='item'></slot>
			</div>

	动态插槽：

		说了就是通过数据进行切换

		父：

			<template #[xxx]>
				这是xxxxx数据
			</template>

			<script setup>
			let xxx = ref('xxx');
			</script>


### 8. Teleport : 传送 
	
	<teleport to='#container'></teleport>
	<teleport to='.main'></teleport>
	<teleport to='body'></teleport>

	***必须传送到有这个dom的内容【顺序】



### 9. 动态组件

	<component :is="动态去切换组件"></component>

### 10. 异步组件
	
	***提升性能

	vueuse ： https://vueuse.org/core/useintersectionobserver/

	10.1 使用场景1

		组件按需引入：当用户访问到了组件再去加载该组件

			<template>
				<div ref='target'>
					<C v-if='targetIsVisible'></C>
				</div>
			</template>

			<script setup>
			import { useIntersectionObserver } from '@vueuse/core'

			const C = defineAsyncComponent(() =>
			  import('../components/C.vue')
			)

			const target = ref(null);
			const targetIsVisible = ref(false);

			const { stop } = useIntersectionObserver(
			  target,
			  ([{ isIntersecting }]) => {
			  	if( isIntersecting ) {
			  		targetIsVisible.value = isIntersecting
			  	}
			  },
			)
			</script>

	10.2 使用场景2 

		<Suspense>
			<template #default>
				<A></A>
			</template>
			<template #fallback>
				加载中...
			</template>
		</Suspense>

		<script setup>
		const A = defineAsyncComponent(() =>
		  import('../components/A.vue')
		)
		</script>


	10.3 打包分包处理

		npm run build打包完成后，异步组件有单独的js文件，是从主体js分包出来的

		A.c7d21c1a.js
		C.91709cb2.js



### 11. Mixin : 混入

	是什么：来分发 Vue 组件中的可复用功能

	11.1 setup写法
		mixin.js
			import { ref } from 'vue'
			export default function(){

				let num = ref(1);
				let fav = ref(false);

				let favBtn = ()=>{
					num.value += 1;
					fav.value = true;
					setTimeout(()=>{
						fav.value = false;
					},2000)
				}

				return {
					num,
					fav,
					favBtn
				}

			}

		组件：
			<template>
				<div>
					<h1>A组件</h1>
					{{ num }}
					<button @click='favBtn'>
						{{ fav ? '收藏中...' : '收藏' }}
					</button>
				</div>
			</template>

			<script setup>
			import mixin from '../mixins/mixin.js'
			let { num , fav , favBtn } = mixin();
			</script>


	11.2 选项式api写法

		mixin：
			export const fav = {
				data () {
					return {
						num:10
					}
				},
				methods:{
					favBtn( params ){
						this.num += params;
					}
				}
			}

		组件：
			<template>
				<div>
					<h1>A组件</h1>
					{{ num }}
					<button @click='favBtn(1)'>按钮</button>
				</div>
			</template>

			<script type="text/javascript">
			import { fav } from '../mixins/mixin.js'
			export default{
				data () {
					return {
						str:'你好'
					}
				},
				mixins:[fav]
			}
			</script>

### 12. Provide / Inject  ==> 依赖注入
	
	提供：
		<script setup>
		provide('changeNum', num );
		</script>

	注入：
		<template>
			<div>
				<h1>B组件</h1>
				{{ bNum }}
			</div>
		</template>

		<script setup>
		const bNum = inject('changeNum');
		</script>




### 13. Vuex
	
	13.1 state:
		let num = computed( ()=> store.state.num );
	13.2 getters:
		let total = computed( ()=> store.getters.total );
	13.3 mutations:
		store.commit('xxx')
	13.4 actions:
		store.dispatch( 'xxx' )
	13.5 modules: 

		和之前的版本使用一样

	13.6 Vuex持久化存储【插件】

		1. npm i vuex-persistedstate -S

		2. import persistedState from 'vuex-persistedstate'

		3. export default createStore({
		  modules: {
		  	user
		  },
		  plugins:[persistedState({
		  	key:'xiaoluxian',
		  	paths:['user']
		  })]
		});

### 
14. Pinia

	14.1 Vuex和pinia的区别

		参考网址： https://github.com/vuejs/rfcs/pull/271 

		1. pinia没有mutations，只有：state、getters、actions
		2. pinia分模块不需要modules（之前vuex分模块需要modules）
		3. pinia体积更小（性能更好）
		4. pinia可以直接修改state数据

	14.2 pinia使用

		官方网址：https://pinia.vuejs.org/

		具体使用：https://xuexiluxian.cn/blog/detail/242b0ed71feb412991f04d448fc86636

	14.3 pinia持久化存储

		参考链接：https://xuexiluxian.cn/blog/detail/acebacd99612447e8c80dcf6354240f6

### 15. 设置代理解决跨域问题

	参考文章：https://xuexiluxian.cn/blog/detail/01f62baa85b7431992586b4689a9b07a

	API参考链接：https://staging-cn.vuejs.org/api/#onmounted

	
