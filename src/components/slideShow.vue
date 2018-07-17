<template>
	<div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
		<div class="slide-img">
			<a :href="slides[nowIndex].href">
				<transition name="slide-trans">
					<img v-if="isShow" :src="slides[nowIndex].src">
				</transition>
				<transition name="slide-trans-old">
					<img v-if="!isShow" :src="slides[nowIndex].src">
				</transition>
			</a>
		</div>
		<h2>{{slides[nowIndex].title}}</h2>
		<ul class="slide-pages">
			<li @click="goto(prevIndex)">&lt;</li>
			<li v-for="(item,index) in slides" @click="goto(index)">
				<a :class="{on:index === nowIndex}">{{index+1}}</a>
			</li>
			<li @click="goto(nextIndex)">&gt;</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			slides: {
				type: Array,
				default: []
			},
			inv: {
				type: Number,
				default: 1000
			}
		},
		data() {
			return {
				nowIndex: 0,
				isShow: true
			}
		},
		computed: {
			prevIndex() {
				if(this.nowIndex == 0) {
					return this.slides.length - 1
				} else {
					return this.nowIndex - 1
				}
			},
			nextIndex() {
				if(this.nowIndex == this.slides.length - 1) {
					return 0
				} else {
					return this.nowIndex + 1
				}
			}
		},
		methods: {
			goto(index) {
				this.isShow=false
				setTimeout(()=>{
					this.isShow=true
					this.nowIndex = index
					this.$emit('onchange',index)
				},10)
			},
			runInv() {
				this.invId = setInterval(() => {
					this.goto(this.nextIndex)
				}, this.inv)
			},
			clearInv() {
				clearInterval(this.invId)
			}

		},
		mounted() {
			this.runInv()
		}
	}
</script>

<style lang="less" scoped>
	.slide-show {
		position: relative;
		float: left;
		margin: 20px 0 0 50px;
		width: 1080px;
		height: 500px;
		overflow: hidden;
		.slide-pages {
			width: 100%;
			height: 40px;
			background: rgba(0, 0, 0, 0.5);
			position: absolute;
			bottom: 0;
			left: 0;
			padding-left: 950px;
			box-sizing: border-box;
			padding-top: 10px;
			-webkit-margin-before: 0em;
			-webkit-margin-after: 0em;
			li {
				display: inline-block;
				color: white;
				cursor: pointer;
				a {
					width: 20px;
					display: inline-block;
				}
				.on {
					color: yellow;
				}
			}
		}
		h2 {
			color: white;
			position: absolute;
			left: 15px;
			bottom: -12px;
			z-index: 1;
		}
		.slide-img {
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	
	.slide-trans-enter-active {
		transition: all .5s;
	}
	
	.slide-trans-enter {
		transform: translateX(1080px);
	}
	
	.slide-trans-old-leave-active {
		transition: all .5s;
		transform: translateX(-1080px);
	}
</style>