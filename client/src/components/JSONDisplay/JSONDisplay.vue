<template>
  <div class="json-display-container">
    <ul v-show="displayChild">
      <li v-for="a in list" :key="a.name">
        <div class="style-row" :class="(a.type !== 'object' || a.value === null) ? 'handle-hover' : ''">
          <!-- key -->
          <span :class="a.type === 'object' ? 'style-warp-key' : 'style-key'">{{ a.key }}</span> :
          <span v-if="Array.isArray(a.value)" :class="{'number': 'style-num', 'string': 'style-str'}[a.type]">{{ a.value }}</span>
          <json v-if="a.type === 'object' && !Array.isArray(a.value) && a.value" :str="JSON.stringify(a.value)"></json>
          <span v-if="a.value === null" class="style-warp-key">null</span>
          <span v-if="a.value === undefined" class="style-undefined">undefined</span>
          <span v-if="a.type !== 'object'" :class="{'number': 'style-num', 'string': 'style-str'}[a.type]">{{ a.value }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// 递归组件需要声明name
export default {
  name: 'json',
  props: ['str', 'show'],
  data () {
    return {
      displayChild: true
    }
  },

  computed: {
    list () {
      const result = []
      try {
        const temp = JSON.parse(this.str)
        for (let key in temp) {
          result.push({ key, value: temp[key], type: typeof temp[key] })
        }
      } catch (e) {} finally {
      }

      // result.sort((a, b) => a.key > b.key)
      return result
    }
  }
}
</script>
<style>
.json-display-container {
  font-family: 'Consola'
}
.style-key {
  color: #06c5e5; font-style: italic;
}

.style-key:hover { transform: scale(1.1); }
.style-warp-key {
  color: #fc1c71; font-weight: 900;
}
.style-warp-key:hover {
  cursor: pointer;
}
.style-warp-key::after {
  content: ":", count
}

.style-num {
  color: #af7cff;
}
.style-str {
  color: #67b100; font-weight: 900;
}

.style-undefined {
  color: #eeeeee
}

.style-str::before, .style-str::after {
  content: "\""
}

.handle-hover:hover {
  background: #eeeeee;

}
/* .style-row:hover {
} */

</style>

