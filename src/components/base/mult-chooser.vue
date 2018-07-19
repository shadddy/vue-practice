<template>
	<div class="mult-chooser-component">
		<ul class="chooser-list">
			<li v-for="(item, index) in selections" @click="toggleSelection(index)" :class="{active:checkActive(index)}">
				{{item.label}}
			</li>
		</ul>
	</div>
</template>

<script>
	import _ from 'lodash'
	export default {
		props: {
			selections: {
				type: Array,
				default: () => [{
					label: 'test',
					value: 0
				}]
			}
		},
		data() {
			return {
				nowIndexes: [0]
			}
		},
		methods:{
			toggleSelection(index){
				if(this.nowIndexes.indexOf(index)===-1){
					this.nowIndexes.push(index)
				}else{
					this.nowIndexes=_.remove(this.nowIndexes,(idx)=>{
						return idx !==index
					})
				}
				let nowObjArray=_.map(this.nowIndexes,(idx)=>{
					return this.selections[idx]
				})
				this.$emit('on-change',nowObjArray)
			},
			checkActive(index){
				return this.nowIndexes.indexOf(index)!==-1
			}
		}
	}
</script>

<style scoped>
	.mult-chooser-component {
		position: relative;
		display: inline-block;
	}
	
	.chooser-list li {
		padding: 3px 10px;
		border: 1px solid #e3e3e3;
		display: inline-block;
		border-radius: 4px;
		cursor: pointer;
		margin-right: 5px;
		text-align: center
	}
	
	li.active {
		background: #42B983;
		color: white;
	}
</style>