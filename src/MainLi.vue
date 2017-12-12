<template>
<li class="mu" @click="$emit('select')"><span>{{name}}</span>
<div id="triangledown"></div>
                                <ul class="submenu" >
                                    <li v-for="(item,index) in sublistArray" @click.stop="$emit('subli',index)" :class="{check1:index==subsnum}">{{item.subname}}</li>
                                    <li class="addsubmenu" @click.stop="$emit('addsub')" >+</li>
                                </ul>
                            </li>
                            
</template>

<script>
export default {
    name:'mainli',
    props:["name","sublistArray","subsnum"],
    data(){
        return {
           
        }
    }
}
</script>

<style></style>