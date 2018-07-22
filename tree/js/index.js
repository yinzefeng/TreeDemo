var app =
{
    vm: {},

    initVue() {
        app.vm = new Vue({
            name: "my tree demo",
            el: '#app',
            data:
            {
                treeData: {
                    name: 'My Tree',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' },
                        {
                            name: 'child folder',
                            isselect: true,
                            children: [
                                {
                                    name: 'child folder',
                                    children: [
                                        { name: 'hello' },
                                        { name: 'wat' }
                                    ]
                                },
                                { name: 'hello' },
                                { name: 'wat' },
                                {
                                    name: 'child folder',
                                    children: [
                                        { name: 'hello' },
                                        { name: 'wat' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                tempModel: Object
            },
            methods: {

            },
            created: function () {
                bus.$on('enlarge-text', function (model) {
                  if (this.tempModel != undefined) {
                    console.log("created:function() enlarge-text tempModel enter " + this.tempModel);
                    Vue.set(this.tempModel, 'isSelect', false)
                  }
                  console.log("created:function() enlarge-text enter " + model);
                  this.tempModel = model;
                  //	  if(this.select)
                  //  {
                  //	  this.select = false;
                  // }
                  // console.log("created:function() out "+this.select);
                })
              }

        })
    }


}
app.initVue();