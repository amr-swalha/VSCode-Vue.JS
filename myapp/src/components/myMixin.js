module.exports = {
    created:function(){
        this.logData();
    },
    methods:{
        logData:function(){
            console.log('it\'s a live');
        }
    },
    data(){
        return{
            msg:'from Mixin',
            datafromMixin:'test mixin data'
        }
    },
    computed:{
        computedMixin:function(){
            return Date.now()
        }
    }
}