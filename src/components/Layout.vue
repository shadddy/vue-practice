<template>
	<div>
		<div class="app-head">
			<router-link :to="{path:'/'}">
				<img src="../assets/logo.png" class="logo" />
			</router-link>
			<ul>
				<li>{{userName}}</li>
				<li v-if="userName!==''" @click="quitLog">退出</li>
				<li v-if="userName===''" @click="regClick">注册</li>
				<li v-if="userName===''">|</li>
				<li v-if="userName===''" @click="logClick">登录</li>
				<li>|</li>
				<li @click="aboutClick">关于</li>
			</ul>
		</div>
		<div class="app-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<div class="app-foot">
			<p>@2018 vue</p>
		</div>
		<my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
			<p>于2015年完成整体上市（股票代码：002555），凭借优异业绩被纳入中证沪深300指数、明晟MSCI指数、高盛“新漂亮50”名单，是国内A股优秀的社会公众公司。三七互娱的发行与研发总部设在广州，并在北京、上海、安徽、江苏、湖北、香港、台湾、东南亚、日韩及欧美等多个地区设有子公司或办事处等分支机构。 旗下拥有37手游、37游戏、37GAMES等全球知名的专业游戏运营平台，以及极光网络、墨鹍科技等国内顶尖的游戏研发团队；聚集了来自全国各地的网络精英及高素质管理人才，形成了投入、精细、分享、创新的企业价值观。 作为全球领先的游戏运营商、研发商，三七互娱以“传承中华文化精髓”为理念，积极推动国产游戏的全球化发展，同时积极布局影视、音乐、动漫、VR及文化健康产业等领域。 为践行企业社会责任，三七互娱还成立了广东省游心公益基金会，累计捐赠超1000万元，用于边远地区高中教育等公益事业。 三七互娱，玩心创造世界！

			</p>
		</my-dialog>
		<my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
			<logForm @has-log="onSuccessLog"></logForm>
		</my-dialog>
		<my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
			<regForm></regForm>
		</my-dialog>
	</div>
</template>

<script>
	import Dialog from './base/dialog'
	import logForm from './logForm'
	import regForm from './regForm'
	export default {
		components: {
			MyDialog: Dialog,
			logForm,
			regForm
		},
		data() {
			return {
				isShowAboutDialog: false,
				isShowLogDialog: false,
				isShowRegDialog: false,
				userName: ''
			}
		},
		methods: {
			aboutClick() {
				this.isShowAboutDialog = true
			},
			closeDialog(attr) {
				this[attr] = false
			},
			logClick() {
				this.isShowLogDialog = true
			},
			regClick() {
				this.isShowRegDialog = true
			},
			onSuccessLog(data) {
				this.userName = data.userName
				this.closeDialog('isShowLogDialog')
			},
			quitLog() {
				this.userName = ''
			}
		}
	}
</script>

<style lang="less">
	html,
	body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: ghostwhite;
	}
	
	li {
		list-style-type: none;
	}
	
	a {
		text-decoration: none;
	}
	ul{
		    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 0px;
	}
	a:link,
	a:visited,
	a:hover {
		color: #000000;
	}
	
	.app-head {
		width: 100%;
		height: 100px;
		background: dimgray;
		position: relative;
		overflow: hidden;
		.logo {
			width: 100px;
			margin-left: 200px;
		}
		ul {
			position: absolute;
			right: 20px;
			top: 20px;
			li {
				color: white;
				list-style-type: none;
				display: inline-block;
				cursor: pointer;
			}
		}
	}
	
	.app-content {
		width: 1600px;
		overflow: hidden;
		height: auto;
		margin: 0 auto;
	}
	
	.app-foot {
		width: 100%;
		height: 100px;
		background: dimgray;
		color: white;
		overflow: hidden;
		p {
			width: 100%;
			text-align: center;
			margin-top: 50px;
		}
	}
	
	.button {
		background: #4fc08d;
		color: #fff;
		display: inline-block;
		cursor: pointer;
	}
	
	.button:hover {
		background: #4fc08d;
	}
	
	.g-form-line {
		padding: 15px 0;
	}
	
	.g-form-label {
		width: 100px;
		font-size: 16px;
		display: inline-block;
	}
	
	.g-form-input {
		display: inline-block;
	}
	
	.g-form-input input {
		height: 30px;
		width: 200px;
		line-height: 30px;
		vertical-align: middle;
		padding: 0 10px;
		border: 1px solid #ccc;
	}
	
	.g-form-btn {
		padding-left: 100px;
		.button {
			padding: 10px 20px;
		}
	}
	
	.g-form-error {
		color: red;
		padding-left: 15px;
	}
</style>