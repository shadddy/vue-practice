<template>
	<div class="chooser-component">
		<ul>
			<li v-for="(item, index) in selections" :class="{active:index===nowIndex}" @click="checked(index)" :title="item.label">
				{{item.label}}
			</li>
		</ul>

	</div>
</template>

<script>
	export default {
		props: {
			selections: {
				type: Array,
				default: ()=>[{
					label:'test',
					value:0
				}]
			}
		},
		data() {
			return {
				nowIndex:0
			}
		},
		methods:{
			checked(index){
				this.nowIndex=index
				this.$emit("on-change",this.selections[index])
			}
		}
	}
</script>

<style scoped>
	.chooser-component{
		position: relative;
		display: inline-block;
	}
	li{
		padding: 3px 10px;
		border: 1px solid #e3e3e3;
		display: inline-block;
		border-radius: 4px;
		cursor: pointer;
		margin-right: 5px;
		text-align: center
	}
	li.active{
		background: #42B983;
		color: white;
	}
</style>