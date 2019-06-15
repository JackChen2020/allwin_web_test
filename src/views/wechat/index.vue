<template>
    <div>
        <avue-form ref="form" v-model="obj" :option="option" @reset-change="emptytChange" @submit="submit">
        </avue-form>
        <el-link style="margin-left: 300px;margin-top:20px" :href="url" v-show="isFlag" target="_blank">点击跳转到支付页面</el-link>
        <div v-html='html'>{{html}}</div>
<!--        <a href="alipays://platformapi/startapp?url=https://nxt.nongxinyin.com/buybal-api/v1.0/cashier/initializ/0BF0E1B45858AD28A20E4F19C2D0F8C7/EB893B83D8AA1CB65B69E21B5EFE70E6&appId=20000067">test</a>-->
    </div>
</template>

<script>

    import { create_order } from '@/api/request/request'
    export default {
        data() {
            return {
                obj:{},
                url:'',
                isFlag:false
            }
        },
        computed: {
            option(){
                return{
                    size:'mini',
                    labelWidth:100,
                    mock:true,
                    submitText: '完成',
                    column: [{
                        label: "支付方式",
                        prop: "paytypeid",
                        type:'text',
                        span:10,
                        row:true,
                    }, {
                        label: "订单号",
                        prop: "down_ordercode",
                        type: "datetime",
                        span:10,
                        format:'yyyyMMddhhmmss',
                        valueFormat:'yyyyMMddhhmmss',
                        mock:{
                            type:'datetime',
                            format:'yyyyMMddhhmmss',
                            now:true,
                        },
                        row:true,
                    },              {
                        label: "金额",
                        prop: "amount",
                        type: 'number',
                        span: 10,
                        precision:2,
                        mock:{
                            type:'number',
                            max:1,
                            min:2,
                            precision:2
                        },
                        valueDefault: 3,
                        minRows: 0,
                        maxRows: 5000,
                        row:true,
                    },{
                        label: "订单创建时间",
                        prop: "createtime",
                        type: "datetime",
                        span:10,
                        format:'yyyy-MM-dd hh:mm:ss',
                        valueFormat:'yyyy-MM-dd hh:mm:ss',
                        mock:{
                            type:'datetime',
                            format:'yyyy-MM-dd hh:mm:ss',
                            now:true,
                        },
                        row:true,
                    },{
                        label: "客户端IP",
                        prop: "client_ip",
                        span:10,
                        row:true,
                    }, {
                        label: "回调地址",
                        prop: "notifyurl",
                        span:10,
                        row:true,
                    },{
                        label: "是否手机标志",
                        prop: "ismobile",
                        span:10,
                        row:true,
                    },  ]
                }
            }
        },
        mounted(){
            // this.obj.username = 'smallwei'
            // this.obj.switch = 0;
            // this.obj.phone='17547400800';
            this.obj.client_ip = "192.168.0.1"
            this.obj.notifyurl = "http://allwin6666.com/api/paycall/wechat_test"
            this.obj.paytypeid = "15"
            this.obj.ismobile = "0"
        },
        methods:{
            emptytChange(){
                this.obj.client_ip = "192.168.0.1"
                this.obj.notifyurl = "http://allwin6666.com/api/paycall/wechat_test"
                this.obj.paytypeid = "15"
                this.obj.ismobile = "0"
            },
            submit () {
                this.obj.allwin_test = "1"
                create_order({
                    data : this.obj,
                    callback : (res)  => {
                        this.url = res.data.data.path
                        this.html = res.data.data.html

                        console.log(res.data.data)

                        console.log(res.data.data.html)
                        this.isFlag = true
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
