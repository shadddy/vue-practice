// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/details/analysis'
import DetailCouPage from './pages/details/count'
import DetailPubPage from './pages/details/publish'
import DetailForPage from './pages/details/forecast'


Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
	mode: 'history',
	routes: [{
		path: '/',
		component: IndexPage
	}, {
		path: '/detail',
		component: DetailPage,
		redirect:'/detail/analysis',
		children: [
			{
				path:'analysis',
				component:DetailAnaPage
			},
			{
				path:'count',
				component:DetailCouPage
			},
			{
				path:'forecast',
				component:DetailForPage
			},
			{
				path:'publish',
				component:DetailPubPage
			}
		]
	}]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<Layout/>',
	components: {
		Layout
	}
})