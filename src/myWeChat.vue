/*
vue的特点是一定要有一个变量记录(即标志在data里面）
 */


<template>
  <div class="hello">
   <div class="menumanage" style="border:1px solid #e4e4e4; border-bottom:none">
        <h1>菜单管理</h1>
        <div class="custommain">
            <div class="menutype">请选择服务类型：
                <select name="">
                    <option value="">固定菜单</option>
                    <option value="">自定义菜单</option>
                </select>
            </div>
            <dl class="explain">
                <dt>在这里您可以自定义菜单及菜单跳转链接</dt>
                <dd>适用机型：YUNOS、LETV、LENOVO、OPPO、Gionee、VIVO、ZUK</dd>
            </dl>
            <div class="phoneoperate">
                <div class="phone">
                    <div class="tingt"></div>
                    <div class="phonmain"></div>
                    <div class="phonmenu clearfix">
                        <div class="phonejp l">键</div>
                        <ul class="menu l">
                            <li class="addmainmu" v-show="addshow" ref="addmu" @click="addmenu()">+添加菜单</li>
                            <!--                                 <li class="mu">嘉华服务
<div id="triangledown">1</div>
                                <ul class="submenu">
                                    <li>1</li>
                                    <li>2</li>
                                    <li class="addsubmenu">+</li>
                                </ul></li> -->
                            <!--      <li  class="mu">嘉华活动</li>
                                <li  class="mu">联系我们</li> -->
                              
                                <MainLi v-for="(item,index) in tabs" :class="[{sl:submenuisshow},{current:index==num}]" :name="item.name"  @select="tab(index)" @addsub="addsubck(index)" @subli="sublibtn($event)" :subsnum="childnum" :sublistArray="item.sublist" ></MainLi>
                               <!--<li>{{muname}}</li>-->
                        </ul>
                    </div>
                    <div class="phonefoot">
                        <div class="circle"></div>
                    </div>
                </div>
 <div class="showmenudetial">
                    <div class="addedit" v-show="isShow"  ismenu="1" mainmenu="">
                        <h2><span class="cdmc">菜单名称</span><span class="deletxt">删除菜单</span></h2>
                        <ul>
                            <li class="subname"><span style="color:#ff0000">*</span>菜单名称：
                                <input type="text" name="" id="menuname" value="" v-model="muname" placeholder="子菜单名称" ref="inputname">
                                <p class="ts">字数不超 过4个汉字或8个字母</p>
                            </li>
                 
                            <li class="submain" ref="spanmenu"><span></span>菜单内容：
                            <template v-for='(item,index) in subtab'>
                                <span :id="item.spainid" class="subcla" @click="subtabs(index)"><input :id="item.inputid" type="radio" name="nr" :checked="index==addrSelected"/><label :for="item.inputid">{{item.labelval}}</label></span>
                            </template>
                                <div class="submaincheck"  ref="allsubtype">
                                    <div class="subtype h5" v-show="subishow">
                                        <p>用户点击该基金后会跳转到以下链接</p>
                                        <div class="">页面地址:
                                            <input type="text" name="" value="" placeholder="" v-model="inputh5" ref="h5">
                                        </div>
                                    </div>
                                    <div class="subtype imgtxt" v-show="subishow">
                                        <ul>
                                            <li  v-for="(item, index) in artstruct" :class="{check:index==chk}" @click="tabchk(index)">
                                                <img>
                                                <p>{{item.name}}</p>
                                            </li>
                         
                                        </ul>
                                    </div>
                                    <div class="subtype feast" v-show="subishow">
                                        <p>可以绑定已发布的活动，用户点击此菜单可以跳转至相应活动页面</p>
                                        <div class="">　　活动:
                                            <select name=""  v-model="feastselected" >
                                                 v-for="(opt,index) in selectArray"
                                                  <template   v-for="(opt,index) in selectArray">
                                                <option :value="opt">{{opt}}</option>
                                                </template>
                                            </select>
                                            Select:{{feastselected}}
                                        </div>
                                    </div>
                                    <div class="subtype online" v-show="subishow">
                                        <ul>
                                            <li style="overflow:hidden">在线客服:
                                                <input type="
                                        " name="" value="" class="zxkfname" placeholder="" v-model="online.name">
                                            </li>
                                            <li style="overflow:hidden; line-height:80px">
                                                <p class="headset">头像设置:</p>
                                                <div>-
                                                    <p class="imghead"></p>
                                                    <p class="imgadd">+</p>
                                                </div>
                                            </li>
                                            <li>自动回复:
                                                <input class="inpureply" type="
                                        " name="" value="" placeholder="你好，请问有什么可以帮助您？"  v-model="online.autoreply">
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="edittxt" v-show="isHide" style="text-align:center; line-height:460px">点击左边进行编辑</div>
                </div>
                <div class="btnContent">
                    <button type="" class="" id="save" @click="preview()">预览</button>
                    <button type="">保存并提交审核</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import MainLi from './MainLi'
export default {
  name: 'HelloWorld',
  components:{MainLi},
 data() {

 return{
         tabs: [{id:'1','name':'标题1','maintype':{"type":"online",
                                        "h5":"",
                                        "imgtxt":"",
                                        "feast":"",
                                        "online":{
                                            "name":"王伟",
                                            "imghead":"",
                                            "autoreply":"你好哇，你好！！"
                                        }},'sublist':[{
                                    id:11,
                                    subname:"1-1",
                                    subtype:{
                                        type:"feast",
                                        h5:"",
                                        imgtxt:"",
                                        feast:"中秋大礼包２０１９",
                                        online:{
                                            name:"",
                                            imghead:"",
                                            autoreply:""
                                        }
                                     }
                                 },{
                                    id:12,
                                    subname:"1-2",
                                    subtype:{
                                        type:"imgtxt",
                                        h5:"",
                                        imgtxt:"1",
                                        feast:"",
                                        online:{
                                            name:"",
                                            imghead:"",
                                            autoreply:""
                                        }
                                     }
                                 },]},{id:'2','name':'标题2','maintype':{"type":"feast",
                                        "h5":"",
                                        "imgtxt":"",
                                        "feast":"中秋大礼包２０１７",
                                        "online":{
                                            "name":"",
                                            "imghead":"",
                                            "autoreply":""
                                        }},'sublist':[{
                                    id:21,
                                    subname:"2-1",
                                    subtype:{
                                        type:"online",
                                        h5:"http://www.baidu3.com",
                                        imgtxt:"",
                                        feast:"",
                                        online:{
                                            name:"磊磊",
                                            imghead:"",
                                            autoreply:"这是我的"
                                        }
                                     }
                                 }]}],
         artstruct:[{"imgurl":"","name":"空的"},{"imgurl":"","name":"上文下图"},{"imgurl":"","name":"上下文中图"},{"imgurl":"","name":"上文下图"}],
         subtab: [{'spainid':'h5','inputid':'one','labelval':'H5链接'}, {'spainid':'imgtxt','inputid':'two','labelval':'图文模板'},{'spainid':'feast','inputid':'three','labelval':'活动'},{'spainid':'online','inputid':'four','labelval':'在线客服'}],
         num: 0,
         subnum:0,
         chk:1,
         selectArray:["中秋大礼包２０１７","中秋大礼包２０１８","中秋大礼包２０１９","中秋大礼包２０２０"],
         
         isShow:false,
         isHide:true,
         addshow:true,
         muname:'',
         subishow:false,   
         isAdd:true,      
         type:"",
         submenuisshow:false,
         addrSelected:0,
         inputh5:'',
         feastselected:"中秋大礼包２０１７",
         online:{'name':'','autoreply':''},
         childnum:-1
        
         }
    },
    mounted:function(){
       if(this.tabs.length>=3){
        this.addshow=!this.addshow;
        this.$refs.addmu.style.display="none"
       }else if(this.tabs.length>=2){
        this.$refs.addmu.style.width="33%";
        this.$refs.addmu.style.borderLeft="1px solid #e4e4e4";
       }else if(this.tabs.length==1){
        this.$refs.addmu.style.width="66%";
        this.$refs.addmu.style.borderLeft="1px solid #e4e4e4";
       }
    },
    methods: {
        sublibtn(num){
            this.childnum=num;
            this.submenuisshow=true;
            this.showEdit();

            var subItemArray=this.tabs[this.num].sublist[num];
            var subtype=this.type=subItemArray.subtype.type;

            this.muname=this.$refs.inputname.value=subItemArray.subname;  
            var alsubtype=this.$refs.allsubtype.querySelectorAll('.subtype');
             for (let i=0;i<alsubtype.length;i++){
                var fortype=alsubtype[i].getAttribute("class");
                if(fortype.indexOf(this.type)>=0){
                    alsubtype[i].style.display="block";
                    this.addrSelected=i;
                }else{
                     alsubtype[i].style.display="none";
                }
            } 
            switch(subtype){
                case "h5":
                    this.inputh5=this.$refs.h5.value=subItemArray.subtype.h5;
                    this.chk='';
                    this.feastselected="";
                break;
                case "imgtxt":
                    this.inputh5='';
                    this.chk=subItemArray.subtype.imgtxt;
                    this.feastselected="";
                break;
                case "feast":
                    this.inputh5='';
                    this.chk='';
                    this.feastselected=subItemArray.subtype.feast;
                    break;
                default:
                    this.inputh5='';
                    this.chk='';
                    this.feastselected='';
                    this.online.name=subItemArray.subtype.online.name;
                    this.online.autoreply=subItemArray.subtype.online.autoreply;
            }
        },
        tabchk(inx){
            this.chk=inx;
        },
        chooseopt(e){  
            console.log(e)
        },
        showEdit(){
            this.isShow=true;
            this.isHide=false;
        }
        ,tab(index) {
            this.num = index;
            this.isAdd= this.submenuisshow=false;
            this.childnum=-1;
            this.showEdit();
            this.muname=this.$refs.inputname.value=this.tabs[this.num].name;            
            this.type=this.tabs[this.num].maintype.type;
            var alsubtype=this.$refs.allsubtype.querySelectorAll('.subtype');
             for (let i=0;i<alsubtype.length;i++){
                var fortype=alsubtype[i].getAttribute("class");
                if(fortype.indexOf(this.type)>=0){
                    alsubtype[i].style.display="block";
                    this.addrSelected=i;
                }else{
                     alsubtype[i].style.display="none";
                }
            }
            switch(this.type){
                case "h5":
                    this.inputh5=this.$refs.h5.value=this.tabs[this.num].maintype.h5;
                    this.chk='';
                    this.feastselected="";
                break;
                case "imgtxt":
                this.inputh5='';

                    this.chk=this.tabs[this.num].maintype.imgtxt;
                    this.feastselected="";
                    break;
                case "feast":
                    this.inputh5='';
                     this.chk='';
                     console.log(this.tabs[this.num].maintype.feast)
                    this.feastselected=this.tabs[this.num].maintype.feast;
                    break;
                    default:
                        this.inputh5='';
                         this.chk='';
                        this.feastselected='';
                        this.online.name=this.tabs[this.num].maintype.online.name;
                        this.online.autoreply=this.tabs[this.num].maintype.online.autoreply;
            }
        }
        ,subtabs(inx){       
        this.addrSelected=inx;
         var alsubtype=this.$refs.allsubtype.querySelectorAll('.subtype');
            for (let i=0;i<alsubtype.length;i++){
                if(i==inx){
                    alsubtype[i].style.display="block";
                }else{
                    alsubtype[i].style.display="none";
                }
            }
        }
        ,addsubck(index){
              this.isShow=true;
              this.isHide=false;
              this.isAdd=true;
              var alsubtype=this.$refs.allsubtype.querySelectorAll('.subtype');
              this.subnum=this.chk=0;
              this.addrSelected=0;
              this.inputh5='';
               this.isShow=true;
               this.isHide=false;
               this.muname="";
               alsubtype[0].style.display="block";
               for (let i=0;i<alsubtype.length;i++){
                     if(i>0){             
                          alsubtype[i].style.display="none";
                          //this.subishow=this.subishow;
                     }
                 }
        }
        ,addmenu(){
        this.isAdd=true;
        var alsubtype=this.$refs.allsubtype.querySelectorAll('.subtype');
        this.subnum=this.chk=0;
        this.addrSelected=0;  //菜单内容选项
        this.inputh5='';
         this.isShow=true;
         this.isHide=false;
         this.muname="";
         alsubtype[0].style.display="block";
         for (let i=0;i<alsubtype.length;i++){
               if(i>0){             
                    alsubtype[i].style.display="none";
                    //this.subishow=this.subishow;
               }
           }
        }
        ,preview(){
            if(this.isHide){
              return false;
            }
            if(this.isAdd){
                  console.log("添加一项")
                  let itemjson={id:'1','name':'','maintype':{"type":"",
                                                         "h5":"",
                                                         "imgtxt":"",
                                                         "feast":"",
                                                         "online":{
                                                             "name":"",
                                                             "imghead":"",
                                                             "autoreply":""
                                                         }},'sublist':[]}
                  switch(this.addrSelected){
                    case 0:                    
                            itemjson.maintype.type="h5";
                            itemjson.name=this.$refs.inputname.value;
                            itemjson.maintype.h5=this.inputh5;
                            this.tabs.push(itemjson);
                            this.addshow=!this.addshow;
                            this.num=this.tabs.length-1;                                 
                    break;

                    case 1:
                            itemjson.maintype.type="imgtxt";
                             itemjson.name=this.$refs.inputname.value;

                             itemjson.maintype.imgtxt=this.chk
                            this.tabs.push(itemjson);
                            this.addshow=!this.addshow;
                            this.num=this.tabs.length-1;  
                    break;

                    case 2:
                            itemjson.maintype.type="feast";
                             itemjson.name=this.$refs.inputname.value;
                             itemjson.maintype.feast=this.feastselected;
                            this.tabs.push(itemjson);
                            this.addshow=!this.addshow;
                            this.num=this.tabs.length-1;  
                            break;
                    default:
                            itemjson.name=this.$refs.inputname.value;
                             itemjson.maintype.type="online";
                            itemjson.maintype.online.name=this.online.name;
                            itemjson.maintype.online.autoreply=this.online.autoreply;
                            this.tabs.push(itemjson);
                            this.addshow=!this.addshow;
                            this.num=this.tabs.length-1;
                  }
            }else{
                console.log("修改一项")
                var currentnum=this.tabs[this.num];
                var currenttype=this.addrSelected;
                this.tabs[this.num].name=this.muname;
             
                switch(currenttype){
                    case 0:                    
                    this.tabs[this.num].maintype.h5=this.inputh5;
                    this.tabs[this.num].maintype.type="h5";
                    break;
                    case 1:
                    this.tabs[this.num].maintype.h5='';
                    console.log(this.chk)
                     this.tabs[this.num].maintype.imgtxt=this.chk;
                     this.tabs[this.num].maintype.type="imgtxt";
                     break;
                     case 2:
                     this.tabs[this.num].maintype.feast=this.feastselected;
                     this.tabs[this.num].maintype.type="feast";
                     break;
                     default:
                         this.tabs[this.num].maintype.name=this.online.name;
                         this.tabs[this.num].maintype.autoreply=this.online.autoreply;
                }
            }

            //console.table(this.tabs[this.num])
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
  <style type="text/css" media="screen">

  .menumanage h1 {
        background-color: #f2f2f2;
        font-size: 16px;
        color: #000;
        padding: 0 12px;
        border-bottom: 1p solid #e4e4e4;
    }
    
    .custommain {
        padding: 12px;
    }
    
    .custommain .menutype select {
        width: 200px;
    }
    
    .custommain .explain {
        margin-bottom: 16px;
    }
    
    .custommain .explain dt {
        color: #ff0000;
        font-weight: bold;
        padding: 8px 0;
    }
    
    .phoneoperate {
        overflow: hidden;
    }
    
    .phoneoperate .phone {
        width: 26%;
        float: left;
        background-color: #474e5e;
        border-radius: 16px;
        padding: 0 0.8%;
    }
    
    .phoneoperate .phone .tingt {
        background-color: #7d7d7d;
        width: 30%;
        margin: 12px auto;
        border-radius: 12px;
        padding: 4px;
    }
    
    .phonmain {
        background-color: #fff;
        min-height: 415px;
    }
    
    .phonefoot {
        padding: 24px 0px;
    }
    
    .phonefoot .circle {
        width: 25px;
        height: 25px;
        border-radius: 20px;
        background-color: #7d7d7d;
        margin: 0 auto;
    }
    
    .phonmenu {
        background-color: #fff;
        border-top: 1px solid #e4e4e4;
    }
    
    .phonmenu .menu .mu {
        position: relative;
        background-color: #fff;
        cursor: pointer;
    }
    
    .phonmenu .menu .addmainmu {
        position: relative;
        text-align: center;
        color: #44b548;
        background-color: #fff;
        padding: 0.8% 0;
        cursor: pointer;
        float: right;
        width: 100%;
    }
    
    .phonmenu .menu .addmainmu-l {
        border-left: 1px solid #e4e4e4;
    }
    
    .phonmenu .menu .mu .submenu {
        border: 1px solid #e4e4e4;
        border-top: none;
        position: absolute;
        text-align: center;
        width: 100%;
        bottom: 31px;
        left: 0px;
        border-radius: 8px 8px 0 0;
        overflow: hidden
    }
    
    .phonmenu .menu .mu .submenu li {
        border-top: 1px solid #e4e4e4;
         background-color:#fff;
    }
       .phonmenu .menu .mu .submenu li.check1 {
        background-color:#44b548;
        border-top: 1px solid #44b548;
        color:#fff;
    }
    
    .l {
        float: left
    }
    
    .phonejp {
        width: 10%;
        text-align: center;
        padding: 0.8% 0;
        border-right: 1px solid #e4e4e4;
    }
    
    .phonmenu .menu {
        width: 89.5%;
    }
    
    .phonmenu .menu .mu {
        width: 33%;
        display: inline-block;
        text-align: center;
        padding: 1% 0;
        border-right: 1px solid #e4e4e4;
    }

       .phonmenu .menu .current {
            background-color:#44b548;

       }

       .phonmenu .menu .sl{
            background-color:#fff;
       }
       .phonmenu .menu .current span{
        color:#fff;
       }
       .phonmenu .menu .sl span{
        color:#000;
       }

       .phonmenu .menu .current .submenu .sublimenu span{
            color:#000;
       }

       .phonmenu .menu .current .submenu .check1 span{
            color:#fff;
       }
    
    .phonmenu .menu .mu:last-child {
        border: none;
    }
    
    .phonmenu .menu .mu ul,
    .phonmenu .menu .mu #triangledown {
        display: none
    }
    
    .phonmenu .menu li.current ul,
    .phonmenu .menu li.current #triangledown {
        display: block
    }
    
    .showmenudetial {
        margin-left: 28%;
        border: 1px solid #e4e4e4;
        padding: 0.5%;
        min-height: 553px
    }
    
    .showmenudetial h2 {
        font-size: 14px;
        border-bottom: 1px solid #e4e4e4;
        margin-bottom: 12px
    }
    
    .showmenudetial .deletxt {
        float: right;
        cursor: pointer
    }
    
    .showmenudetial ul li {
        margin-bottom: 24px;
    }
    
    .showmenudetial .subname input {
        width: 80%;
    }
    
    .showmenudetial .subname .ts {
        padding-left: 80px;
    }
    
    .showmenudetial .submain span {
        margin-right: 8px;
    }
    
    .showmenudetial .submain .submaincheck {
        margin-left: 80px;
        border: 1px dashed #e4e4e4;
        padding: 8px;
    }
    
    .showmenudetial .submain .submaincheck .h5 {
        font-family: "微软雅黑"
    }
    
    .showmenudetial .submain .submaincheck .subtype p {
        margin-bottom: 25px;
        font-size: 14px;
    }
    
    .showmenudetial .submain .submaincheck .subtype {
        font-size: 14px;
    }
    
    .showmenudetial .submain .submaincheck .subtype input {
        width: 80%;
    }
    
    .headset {
        float: left
    }
    
    .imghead,
    .imgadd {
        width: 80px;
        height: 80px;
        border: 1px solid #e4e4e4;
        float: left;
        margin-right: 1.2%;
        text-align: center;
        margin-bottom: 0px;
    }
    
    .imgtxt ul {
        overflow: hidden
    }
    
    .showmenudetial .submain .submaincheck .imgtxt img {
        height: 100px;
        width: 80px;
    }
    
    .showmenudetial .submain .submaincheck .imgtxt li {
        margin-right: 16px;
        width: 80px;
        float: left;
        border: 1px solid #e4e4e4;
    }
    
    .showmenudetial .submain .submaincheck .imgtxt li.check {
        border: 1px solid #ff0000;
    }
    
    .showmenudetial .submain .submaincheck .imgtxt li p {
        text-align: center;
        margin-bottom: 0px!important
    }
    
    .btnContent {
        text-align: center;
        padding-top: 24px;
    }
    
    .btnContent button {
        background-color: #3f88eb;
        color: #fff;
        font-size: 14px;
        border: none;
        border-radius: 5px;
        padding: 8px 16px;
    }
    
    .clearfix:after {
        content: " ";
        display: block;
        clear: both;
        height: 0;
    }
    
    .clearfix {
        zoom: 1;
    }
    
    #triangledown {
        width: 0;
        height: 0;
        position: absolute;
        top: -33%;
        left: 48%;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        border-top: 6px solid #e4e4e4;
    }
    </style>
