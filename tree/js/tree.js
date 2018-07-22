// define the item component
Vue.component('tree', {
  template: `
  <li>
  <div
    :class="{bold: isFolder}"
    @click="toggle"
    @dblclick="changeType">
    <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    {{model.name}} 
  </div>
  <ul v-show="open" v-if="isFolder">
    <tree
      class="item"
      v-for="model in model.children"
      :model="model">
    </tree>
    <li class="add" @click="addChild">+</li>
  </ul>
</li>`,
  //el: '#tree',
  props: {
    model: Object
  },
  data: function () {
    return {
      open: true,
      select: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    },
    isSelected: function () {
      return this.model.isSelect
    }


  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
      //this.select = !this.select
      Vue.set(this.model, 'isSelect', !this.model.isSelect)
      //this.model.isSelect   = !this.model.isSelect 
      if (this.model.isSelect) {
        bus.$emit('enlarge-text', this.model)
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
})