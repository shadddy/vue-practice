<template>
	<div class="counter-component">
		<div class="counter-btn" @click="minus">-</div>
		<div class="counter-show">
			<input type="text" v-model="number" @keyup="fixNumber"/>
		</div>
		<div class="counter-btn" @click="add">+</div>
	</div>
</template>

<script>
	export default {
		props:{
			max:{
				type:Number,
				default:100
			},
			min:{
				type:Number,
				default:0
			}
		},
		data(){
			return{
				number:this.min
			}
		},
		watch:{
			number(){
				this.$emit('on-change',this.number)
			}
		},
		methods:{
			fixNumber(){
				let fix
				if(typeof this.number==='string'){
					fix=Number(this.number.replace(/\D/g,''))
				}else{
					fix=this.number
				}
				if(fix>this.max||fix<this.min){
					fix=this.min
				}
				this.number=fix
			},
			minus(){
				if(this.number<=this.min){
					return
				}
				this.number--
			},
			add(){
				if(this.number>=this.max){
					return
				}
				this.number++
			}
		}
	}
</script>

<style scoped>
	.counter-component {
		position: relative;
		display: inline-block;
		overflow: hidden;
		vertical-align: middle;
	}
	
	.counter-show {
		float: left;
	}
	
	.counter-show input {
		height: 23px;
		border: none;
		border-top: 1px solid #e3e3e3;
		border-bottom: 1px solid #e3e3e3;
		line-height: 23px;
		text-align: center;
		width: 30px;
		
	}
	
	.counter-btn {
		height: 25px;
		line-height: 25px;
		width: 25px;
		border: 1px solid #e3e3e3;
		float: left;
		text-align: center;
		cursor: pointer;
	}
</style>