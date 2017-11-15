<template>
    <div class="card listview-card">
        <div class="listview lv-bordered lv-lg">
            <div class="lv-header-alt clearfix">
                <h2 class="lvh-label hidden-xs">让我们远离喧嚣，静下心读一篇文章</h2>
                <ul class="lv-actions actions">
                    <li><a href="#" class="withripple"><i class="material-icons">access_time</i></a></li>
                    <li class="dropdown"><a href="#" class="withripple"><i class="material-icons">sort</i></a></li>
                    <li><a href="#" class="withripple"><i class="material-icons">error</i></a></li>
                    <li class="dropdown party-menu">
                        <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" id="dropdownMenu0" aria-expanded="true">
                            <i class="material-icons">more_vert</i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdownMenu0">
                            <li><a href="#">刷新</a></li>
                            <li><a href="#">设置</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!--lv-header-alt end-->

            <div class="lv-body note-lv-body">
                <ul class="tab-nav data-tab-nav">
                    <li class="withripple active"><a href="#">个人</a></li>
                </ul>

                <div class="lv-item media" v-for="note in noteList">
                    <div class="pull-left"><img class="lv-img-sm" src="../../assets/images/avatar/avatar-5.png" alt=""></div>
                    <div class="media-body">
                        <div class="lv-title">
                            <router-link :to="{ name: 'notePage', params: { id: note.id }}">{{ note.title }}</router-link>
                        </div>
                        <small class="lv-small">{{ note.content|htmlFilter }} </small>
                        <ul class="lv-classify">
                            <li>{{ note.created_at }}</li>
                            <li>分类：{{note.type}}</li>
                            <li>浏览：{{note.view_count}}</li>
                        </ul>

                    </div><!--media-body end-->

                </div><!--lv-item end-->

            </div><!--lv-body end-->

        </div><!--listview end-->
        <div style="text-align: center; padding-bottom: 4px;"><Page :total="paginate.total" :current="paginate.current_page" :page-size="paginate.per_page" size="small" @on-change="updateList"></Page></div>
    </div><!--card end-->
</template>

<script>
    export default {
        data(){
            return {
                noteList: [],
                paginate: {}
            }
        },
        mounted() {
            this.$http.post('/api/article/my').then(res => {
                this.noteList = res.data.data.data
                this.paginate = res.data.data
            })
        },
        methods: {
            updateList(page) {
                this.$http.post('/api/article/my?page=' + page).then(res => {
                    this.noteList = res.data.data.data
                    this.paginate = res.data.data
                })
            }
        }
    }
</script>