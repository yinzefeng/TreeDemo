var cart = new Vue({
    el: '#app',
    data: function () {
        return {
            cartList: [
                {id: 1, name: 'iPhone X', name1: 'iPhone X1', name2: 'iPhone X2', name3: 'iPhone X3', price: 8300.05, count: 1},
                {id: 2, name: 'MacBook Pro',name1: 'MacBook Pro1',name2: 'MacBook Pro2',name3: 'MacBook Pro3', price: 18800.75, count: 3},
                {id: 3, name: 'Mate 10 Porsche',name1: 'Mate 10 Porsche1', price: 16600.00, count: 8},
                {id: 4, name: 'iPhone X4', name1: 'iPhone X1', name2: 'iPhone X2', name3: 'iPhone X3', price: 8300.05, count: 1},
                {id: 5, name: 'MacBook Pro5',name1: 'MacBook Pro1',name2: 'MacBook Pro2',name3: 'MacBook Pro3', price: 18800.75, count: 3},
                {id: 6, name: 'Mate 10 Porsche6',name1: 'Mate 10 Porsche1', price: 16600.00, count: 8}
 
            ],
            columns: [
                {
                    title: '名称',
                    key: 'name'
                },
                {
                    title: '名称1名称1名称1名称1名称1名称1名称1',
                    key: 'name1'
                },
                {
                    title: '名称2',
                    key: 'name3'
                },
                {
                    title: '名称3',
                    key: 'name3'
                },
                {
                    title: '单价',
                    key: 'price'
                },
                {
                    title: '数量',
                    key: 'count'
                },
                {
                    title: '操作',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        console.info('减少数量');
                                        cart.reduceQuantity(params.row.id);
                                    }
                                }
                            }, '-'),
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        console.info('增加数量');
                                        cart.increaseQuantity(params.row.id);
                                    }
                                }
                            }, '+'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        console.info('删除当前项');
                                        cart.deleteItem(params.row.id);
                                    }
                                }
                            }, '删除')
                        ]);
                    }
                }
            ]
        }
    },
    methods: {
        reduceQuantity: function (id) {
            for (let i = 0; i < this.cartList.length; i++) {
                if (this.cartList[i].id === id ) {
                    if(this.cartList[i].count >1){
                        this.cartList[i].count--;
                        break;
                    }
                 
                }
            }
        },
        increaseQuantity: function (id) {
            for (let i = 0; i < this.cartList.length; i++) {
                if (this.cartList[i].id === id) {
                    this.cartList[i].count++;
                    break;
                }
            }
        },
        deleteItem: function (id) {
            for (let i = 0; i < this.cartList.length; i++) {
                if (this.cartList[i].id === id) {
                    // 询问是否删除
                    this.$Modal.confirm({
                        title: '提示',
                        content: '确定要删除吗？',
                        onOk: () => {
                            this.cartList.splice(i, 1);
                        },
                        onCancel: () => {
                            // 什么也不做
                        }
                    });
                }
            }
        }
    }
    
});