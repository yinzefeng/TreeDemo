var cart = new Vue({
    el: '#app',
    data: function () {
        return {
            columns1: [
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],
            data2: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                },
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
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