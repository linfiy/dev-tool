<template>
  <div class="json-display-container" v-show="displayChild">
    <div class="style-row" :class="valueType !== 'object' ? 'handle-hover' : ''">
      {{ valueType }} {{ valueType === 'object' }}
      <ul v-if="valueType === 'object'">
        <li>1</li>
        <li v-for="a in result" :key="a.name">
          
          <div class="style-row" :class="(a.type !== 'object' || a.value === null) ? 'handle-hover' : ''">
            <span :class="a.type === 'object' ? 'style-warp-key' : 'style-key'">{{ a.key }}</span> :
            <ul v-if="Array.isArray(a.value)">
              <li v-for="b in a.value" :key="JSON.stringify(b)">
                <json v-if="typeof b === 'object' && !Array.isArray(b) && a.value" :str="JSON.stringify(a.value)"></json>
              </li>
            </ul>
            <json v-if="a.type === 'object' && !Array.isArray(a.value) && a.value" :str="JSON.stringify(a.value)"></json>
            <span v-if="a.value === null" class="style-warp-key">null</span>
            <span v-if="a.value === undefined" class="style-undefined">undefined</span>
            <span v-if="a.type !== 'object'" :class="{'number': 'style-num', 'string': 'style-str'}[a.type]">{{ a.value }}</span>
          </div>
        </li>
      </ul>
      <!-- <span v-if="Array.isArray(a.value)" :class="{'number': 'style-num', 'string': 'style-str'}[a.type]">{{ a.value }}</span> -->
      <!-- <ul v-if="Array.isArray(a.value)">
        <li v-for="b in a.value" :key="JSON.stringify(b)">
          <json v-if="typeof b === 'object' && !Array.isArray(b) && a.value" :str="JSON.stringify(a.value)"></json>
        </li>
      </ul>
      <json v-if="type === 'object' && !Array.isArray(a.value) && a.value" :str="JSON.stringify(a.value)"></json>
      <span v-if="type === 'null'" class="style-warp-key">null</span>
      <span v-if="type === 'undefined'" class="style-undefined">undefined</span>
      <span v-if="type === 'number' || type === 'string'" :class="{'number': 'style-num', 'string': 'style-str'}[a.type]">{{ a.value }}</span> -->
    </div>
    <!-- <ul>
      <li v-for="a in list" :key="a.name">
        <div class="style-row" :class="(a.type !== 'object' || a.value === null) ? 'handle-hover' : ''">
          <span :class="a.type === 'object' ? 'style-warp-key' : 'style-key'">{{ a.key }}</span> :
          <ul v-if="Array.isArray(a.value)">
            <li v-for="b in a.value" :key="JSON.stringify(b)">
              <json v-if="typeof b === 'object' && !Array.isArray(b) && a.value" :str="JSON.stringify(a.value)"></json>
            </li>
          </ul>
          <json v-if="a.type === 'object' && !Array.isArray(a.value) && a.value" :str="JSON.stringify(a.value)"></json>
          <span v-if="a.value === null" class="style-warp-key">null</span>
          <span v-if="a.value === undefined" class="style-undefined">undefined</span>
          <span v-if="a.type !== 'object'" :class="{'number': 'style-num', 'string': 'style-str'}[a.type]">{{ a.value }}</span>
        </div>
      </li>
    </ul> -->
  </div>
</template>
<script>
// 递归组件需要声明name
export default {
  name: 'json',
  props: ['str', 'show'],
  data () {
    return {
      displayChild: true,
      _temp: ''
    }
  },
  computed: {
    result () {
      let result
      try {
        console.log(1)
        let result
        const temp = JSON.parse(typeof this.str === 'string' ? this.str : JSON.stringify(this.str))
        console.log(2, this.valueType)
        if (this.valueType === 'object') {
          result = []
          for (let key in temp) {
            result.push({ key, value: temp[key], type: typeof temp[key] })
          }
        } else {
          result = temp
        }
        console.log(3)
        console.log(result)
      } catch (e) {} finally {}

      // result.sort((a, b) => a.key > b.key)
      return result
    },
    valueType () {
      const temp = JSON.parse(typeof this.str === 'string' ? this.str : JSON.stringify(this.str))
      console.log(typeof temp)
      let type = typeof temp
      if (Array.isArray(temp)) type = 'array'
      else if (temp === null) type = 'null'
      else if (type === 'object') type = 'object'
      else if (temp === undefined) type = 'undefined'
      this._temp = temp
      return type
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

