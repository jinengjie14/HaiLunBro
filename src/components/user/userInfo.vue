<template>
    <div class="form-horizontal setroom">
        <div class="form-group">
            <label class="col-md-2 control-label">用户ID</label>
            <div class="col-md-10">
                <p class="form-control-static">{{ user.id }}</p>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-2 control-label">用户名</label>
            <div class="col-md-10">
                <p class="form-control-static">{{ user.name }}</p>
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-2 control-label">邮箱地址</label>
            <div class="col-md-10">
                <p class="form-control-static">{{ user.email }}</p>
            </div>
        </div>

        <div class="form-group">
            <label class="col-md-2 control-label">关联直播间</label>
            <div class="col-md-10">
                <router-link class="btn btn-success" :to="'/user/'+ user.id + '/liveinfo' ">直播间详情</router-link>
            </div>
        </div>

        <div class="form-group">
            <label class="col-md-2 control-label">注册时间</label>
            <div class="col-md-10">
                <p class="form-control-static">{{ user.created_at }}</p>
            </div>
        </div>

        <div class="form-group">
            <label class="col-md-2 control-label">最后一次登陆时间</label>
            <div class="col-md-10">
                <p class="form-control-static">{{ user.updated_at }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {}
            }
        },
        mounted() {
            this.$http.get('/api/user').then(res => {
                this.user = res.data
            })

        }
    }
</script>