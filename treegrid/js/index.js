var app =
{
    vm: {},

    initVue() {
        app.vm = new Vue({
            name: "my tree demo",
            el: '#app',
            data:
            {
                columns: [
                    {
                        type: 'selection',
                        width: '50',
                    }, {
                        title: '编码',
                        key: 'code',
                        sortable: true,
                        width: '150',
                    }, {
                        title: '名称',
                        key: 'name',
                        width: '150',
                    }, {
                        title: '状态',
                        key: 'status',
                        width: '150',
                    }, {
                        title: '备注',
                        key: 'remark',
                        width: '150',
                    }, 
                    {
                        title: '备注1',
                        key: 'remark1',
                        width: '150',
                    },
                    {
                        title: '备注2',
                        key: 'remark2',
                        width: '150',
                    },
                    {
                        title: '备注3',
                        key: 'remark3',
                        width: '150',
                    },
                    {
                        title: '备注4',
                        key: 'remark4',
                        width: '150',
                    },{
                        title: '操作',
                        type: 'action',
                        actions: [{
                            type: 'primary',
                            text: '编辑'
                        }, {
                            type: 'error',
                            text: '删除'
                        }],
                        width: '150',
                    }],
                data: [{
                    id: '1',
                    code: '0001',
                    name: '测试数据1',
                    status: '启用',
                    remark: '测试数据测试数据',
                    _checked: true
                }, {
                    id: '2',
                    code: '0002',
                    name: '测试数据2',
                    status: '启用',
                    remark: '测试数据测试数据',
                    children: [{
                        id: '01',
                        code: '00001',
                        name: '测试数据01',
                        status: '启用',
                        remark: '测试数据测试数据',
                    }, {
                        id: '02',
                        code: '00002',
                        name: '测试数据02',
                        status: '启用',
                        remark: '测试数据测试数据',
                        children: [{
                            id: '018',
                            code: '000018',
                            name: '测试数据018',
                            status: '启用',
                            remark: '测试数据测试数据',
                        }, {
                            id: '021',
                            code: '000021',
                            name: '测试数据021',
                            status: '启用',
                            remark: '测试数据测试数据',
                        }]
                    }]
                }, {
                    id: '3',
                    code: '0003',
                    name: '测试数据3',
                    status: '启用',
                    remark: '测试数据测试数据'
                }, {
                    id: '4',
                    code: '0004',
                    name: '测试数据4',
                    status: '启用',
                    remark: '测试数据测试数据'
                }
                , {
                    id: '11',
                    code: '00011',
                    name: '测试数据11',
                    status: '启用',
                    remark: '测试数据测试数据'
                }
                , {
                    id: '5',
                    code: '0005',
                    name: '测试数据5',
                    status: '启用',
                    remark: '测试数据测试数据'
                }
                , {
                    id: '6',
                    code: '0006',
                    name: '测试数据6',
                    status: '启用',
                    remark: '测试数据测试数据'
                }
                , {
                    id: '7',
                    code: '0007',
                    name: '测试数据7',
                    status: '启用',
                    remark: '测试数据测试数据'
                }
                , {
                    id: '8',
                    code: '0008',
                    name: '测试数据8',
                    status: '启用',
                    remark: '测试数据测试数据'
                }
                , {
                    id: '9',
                    code: '0009',
                    name: '测试数据9',
                    status: '启用',
                    remark: '测试数据测试数据'
                }
                , {
                    id: '10',
                    code: '0010',
                    name: '测试数据10',
                    status: '启用',
                    remark: '测试数据测试数据'
                }]
            },
            methods: {
                rowClick(data, index, event) {
                    console.log('当前行数据:' + data)
                    console.log('点击行号:' + index)
                    console.log('点击事件:' + event)
                },
                selectionClick(arr) {
                    console.log('选中数据id数组:' + arr)
                },
                sortClick(key, type) {
                    console.log('排序字段:' + key)
                    console.log('排序规则:' + type)
                }
            },
            created: function () {
            
            }

        })
    }


}
app.initVue();