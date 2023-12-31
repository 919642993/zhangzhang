import { defineConfig } from 'vite'
		import vue from '@vitejs/plugin-vue';
		//引入插件
		import AutoImport from 'unplugin-auto-import/vite';
		import Components from 'unplugin-vue-components/vite'
		import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
		import requireTransform from 'vite-plugin-require-transform';
		const path = require('path');
		export default defineConfig({
		  plugins: [
		    vue(),
			requireTransform({
				fileRegex: /.js$|.vue$/
			  }),
		    //配置插件

		    AutoImport({
		      resolvers: [ElementPlusResolver()],
		      imports:['vue','vue-router']
		    }),
		    Components({
		      resolvers: [ElementPlusResolver()],
		    }),
		  ],
		  resolve: {
		    // 配置路径别名
		    alias: {
		      '@': path.resolve(__dirname, './src'),
		    },
		  },
      //设置代理
      server:{
        proxy:{
          '/api':'http://testapi.xuexiluxian.cn'
        }
      }
		});
