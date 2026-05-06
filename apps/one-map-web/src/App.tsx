import { hello } from '@map-core';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <h1>Vue3 + TSX</h1>
        <p>{hello()}</p>
      </div>
    );
  },
});
