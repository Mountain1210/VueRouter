<template>

 <div class="left">
    <h4>{{msg}}</h4>
        <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>7</li>
        </ul>
    </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '左边导航'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}


a {
  color: #42b983;
}

ul{
    float:left;
    width:280px;
    border:1px solid #ececec;
    border-bottom:none;
    text-align:center;
}

li{
    
    padding:8px 0px;
    border-bottom:1px solid #ececec;
}

.left{width:280px; float:left;}

</style>

