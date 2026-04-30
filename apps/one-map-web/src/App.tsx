import { defineComponent } from 'vue'
import { hello } from '@map-core'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <h1>Vue3 + TSX</h1>
        <p>{hello()}</p>
      </div>
    )
  }
})
