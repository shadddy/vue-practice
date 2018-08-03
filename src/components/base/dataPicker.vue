<template>
	<div class="datetime-picker" :style="{width:width}">
		<input type="text" :style="styleObj" :readonly="readonly" v-model="showValue" @click="show=!show" />
		<div class="picker-wrap" v-show="show">
			<table class="date-picker">
				<thead>
					<tr class="date-head">
						<th colspan="4">
							<span class="btn-prev">&lt;</span>
							<span class="show-year">{{now.getFullYear()}}</span>
							<span class="btn-next">&gt;</span>
						</th>
						<th colspan="3">
							<span class="btn-prev">&lt;</span>
							<span class="show-month">{{months[now.getMonth()]}}</span>
							<span class="btn-next">&gt;</span>
						</th>
					</tr>
					<tr class="date-days">
						<th v-for="day in days">{{day}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in 6">
						<td v-for=""></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			width: {
				type: String,
				default: '238px'
			},
			styleObj: {
				type: Object,
				default: null
			},
			readonly: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				show: false,
				showValue: '',
				days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
				months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				date: [],
				now: new Date()
			}
		},
		methods:{
			close(){
				this.show=false
			},
			update(){
				
			}
		}
	}
</script>

<style scoped>
	.datetime-picker {
		position: relative;
		display: inline-block;
		font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei";
		-webkit-font-smoothing: antialiased;
		color: #333;
	}
	
	.datetime-picker * {
		box-sizing: border-box;
	}
	
	.datetime-picker input {
		width: 100%;
		padding: 5px 10px;
		height: 30px;
		outline: 0 none;
		border: 1px solid #ccc;
		font-size: 13px;
	}
	
	.datetime-picker .picker-wrap {
		position: absolute;
		z-index: 1000;
		width: 238px;
		height: 280px;
		margin-top: 2px;
		background-color: #fff;
		box-shadow: 0 0 6px #ccc;
	}
	
	.datetime-picker table {
		width: 100%;
		border-collapse: collapse;
		border-spacing: 0;
		text-align: center;
		font-size: 13px;
	}
	
	.datetime-picker .btn-prev,
	.datetime-picker .btn-next {
		cursor: pointer;
		display: inline-block;
		padding: 0 10px;
		vertical-align: middle;
	}
</style>