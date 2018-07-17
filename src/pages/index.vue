<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<template v-for="product in productList">
					<h3>{{product.title}}</h3>
					<ul>
						<li v-for="item in product.list">
							<a :href="item.url">{{item.name}}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>

					</ul>
					<div v-if="!product.last" class="hr"></div>
				</template>
			</div>
			<div class="index-left-block lastest-news">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in newsList">
						<a :href="item.url" class="news-item">{{item.title}}</a>
					</li>
				</ul>
			</div>
		</div>
		<slide-show :slides="slides" :inv="invTime" @onchange="doSomethingOnSlideChange"></slide-show>
		<div class="index-right">
			<div class="index-board-list">
				<div class="index-board-item" v-for="(item,index) in boardList" :class="[{'line-last':index%2!=0},'index-board-'+item.id]">
					<div class="index-board-item-inner">
						<h2>{{item.title}}</h2>
						<p>{{item.description}}</p>
						<div class="index-board-button">
							<router-link class="button" tag="a" :to="{path:item.href}">立即购买</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import slideShow from '../components/slideShow'
	export default {
		components:{
			slideShow
		},
		name: 'indexPage',
		created:function(){
			this.$http.get('api/getNewsList')
			.then((res) => {
				this.newsList=res.data
			},(err) => {
				console.log(err)
			})
		},
		methods:{
			doSomethingOnSlideChange(data){
				console.log(data)
			}
		},
		data() {
			return {
				invTime:2000,
				slides:[
				{
					src:require('../assets/slideShow/1.png'),
					title:'banner1'
					
				},
				{
					src:require('../assets/slideShow/2.png'),
					title:'banner2'
				},
				{
					src:require('../assets/slideShow/3.png'),
					title:'banner3'
				},
				{
					src:require('../assets/slideShow/4.png'),
					title:'banner4'
				}
				],
				productList: {
					pc: {
						title: 'pc产品',
						list: [{
								name: '数据统计',
								url: 'http://www.baidu.com'
							},
							{
								name: '数据预测',
								url: ''
							},
							{
								name: '流量分析',
								url: '',
								hot: true
							},
							{
								name: '数据统计',
								url: ''
							}
						]

					},
					app: {
						title: '手机应用',
						last: true,
						list: [{
								name: '91助手',
								url: ''
							},
							{
								name: '产品助手',
								url: ''
							},
							{
								name: '智能地图',
								url: '',
								hot: true
							},
							{
								name: '团队语音',
								url: ''
							}
						]
					}
				},
				newsList: [],
				boardList: [{
						title: '开放产品',
						description: '开放产品是一个款开放产品',
						id: 'pic1',
						saleout: false,
						href:'detail/analysis'
					},
					{
						title: '品牌营销',
						description: '开放产品是一个款开放产品',
						id: 'pic2',
						saleout: false,
					href:'detail/count'
					},
					{
						title: '使命必达',
						description: '开放产品是一个款开放产品',
						id: 'pic3',
						saleout: false,
					href:'detail/forecast'
					},
					{
						title: '勇攀高峰',
						description: '开放产品是一个款开放产品',
						id: 'pic4',
						saleout: false,
					href:'detail/publish'
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>

	.index-left {
		width: 300px;
		float: left;
		background: white;
		.index-left-block {
			width: 100%;
			height: auto;
			h2 {
				font-size: 20px;
				width: 100%;
				height: 30px;
				background: #42B983;
				color: white;
				padding-left: 10px;
				box-sizing: border-box;
			}
			h3 {
				font-size: 18px;
				box-sizing: border-box;
				padding-left: 10px;
			}
			.hr {
				width: 100%;
				height: 1px;
				background: lightgray;
			}
			li {
				line-height: 30px;
			}
			.hot-tag {
				background: red;
				color: white;
			}
			.news-item{
				display: inline-block;
				width: 80px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		.lastest-news{
			margin-top: 30px;
		}
	}
	.index-right {
		width: 1250px;
		margin-left: 50px;
		margin-top: 20px;
		float: left;
		.index-board-list {
			overflow: hidden;
			.index-board-item {
				padding-left: 30px;
				margin-right: 20px;
				margin-bottom: 20px;
				background: white;
				float: left;
				width: 500px;
				.index-board-button {
					background: #42B983;
					width: 100px;
					height: 30px;
					text-align: center;
					a {	
						background: #42B983;
						color: white;
						line-height: 30px;
						font-weight: bold;
					}
				}
				.index-board-item-inner{
					padding: 20px 0 20px 150px;
				}
			}
			.line-last {
				margin-right: 0;
			}
			.index-board-pic1 .index-board-item-inner{
				background: url(../assets/1.png) left no-repeat;
			}
			.index-board-pic2 .index-board-item-inner{
				background: url(../assets/2.png) left no-repeat;
			}
			.index-board-pic3 .index-board-item-inner{
				background: url(../assets/3.png) left no-repeat;
			}
			.index-board-pic4 .index-board-item-inner{
				background: url(../assets/4.png) left no-repeat;
			}
		}
	}
</style>