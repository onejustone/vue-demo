export default {
  name: 'BaseComponent',

  props: {
    test: Number
  },

  methods: {
    handleClick () {
      this.$emit('customClick')
    }
  },

  render (h) {
    return (
      <div>
        <span onClick={this.handleClick}>
          props：{this.test}
        </span>
        {this.$slots.secondSlot}
        { this.$slots.default }
      </div>
    )
  }
}
