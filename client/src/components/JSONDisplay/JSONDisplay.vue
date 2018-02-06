<template>
  <div class="json-display-container" v-show="displayChild">
    <span v-if="k" class="style-key" @click="lap" :class="{object: 'style-object-key-start', array: 'style-array-key-start'}[valueType]">{{ k }}</span>
    <span v-show="display">
      <ul v-if="valueType === 'object'" class="json-ul">
        <li v-for="a in result" :key="a.name">
          <div class="style-row">
            <!-- <span :class="a.type === 'object' ? 'style-warp-key' : 'style-key'">{{ a.key }}</span> : -->
            <json :str="JSON.stringify(a.value)" :k="a.key"></json>
          </div>
        </li>
      </ul>
      <ul v-if="valueType === 'array'" class="json-ul">
        <!-- <span class="style-warp-key">{{ a.key }}</span> : -->
        <li v-for="a in result" :key="a.name">
          <json :str="JSON.stringify(a)"></json>
        </li>
      </ul>
      <span v-if="valueType === 'string'" class="style-str">{{ result }}</span>
      <span v-if="valueType === 'number'" class="style-num">{{ result }}</span>
    </span>  

    <span v-if="k" :class="{object: 'style-object-key-end', array: 'style-array-key-end'}[valueType]"></span>
      <!-- <ul v-if="Array.isArray(a.value)">
              <li v-for="b in a.value" :key="JSON.stringify(b)">
                <json v-if="typeof b === 'object' && !Array.isArray(b) && a.value" :str="JSON.stringify(a.value)"></json>
              </li>
            </ul>
            <json v-if="a.type === 'object' && !Array.isArray(a.value) && a.value" :str="JSON.stringify(a.value)"></json>
            <span v-if="a.value === null" class="style-warp-key">null</span>
            <span v-if="a.value === undefined" class="style-undefined">undefined</span>
      <span v-if="Array.isArray(a.value)" :class="{'number': 'style-num', 'string': 'style-str'}[a.type]">{{ a.value }}</span> -->
      <!-- <ul v-if="Array.isArray(a.value)">
        <li v-for="b in a.value" :key="JSON.stringify(b)">
          <json v-if="typeof b === 'object' && !Array.isArray(b) && a.value" :str="JSON.stringify(a.value)"></json>
        </li>
      </ul>
      <json v-if="type === 'object' && !Array.isArray(a.value) && a.value" :str="JSON.stringify(a.value)"></json>
      <span v-if="type === 'null'" class="style-warp-key">null</span>
      <span v-if="type === 'undefined'" class="style-undefined">undefined</span>
      <span v-if="type === 'number' || type === 'string'" :class="{'number': 'style-num', 'string': 'style-str'}[a.type]">{{ a.value }}</span> -->
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
  props: ['str', 'k', 'show', 'last'],
  data () {
    return {
      displayChild: true,
      result: '',
      display: true
    }
  },
  methods: {
    lap () {
      if (this.valueType !== 'object' && this.valueType !== 'array') return

      this.display = !this.display
    }
  },
  computed: {
    // result () {
    //   let result
    //   try {
    //     console.log(1)
    //     let result
    //     const temp = JSON.parse(typeof this.str === 'string' ? this.str : JSON.stringify(this.str))
    //     console.log(2, this.valueType)
    //     if (this.valueType === 'object') {
    //       result = []
    //       for (let key in temp) {
    //         result.push({ key, value: temp[key], type: typeof temp[key] })
    //       }
    //     } else {
    //       result = temp
    //     }
    //     console.log(3)
    //     console.log(result)
    //   } catch (e) {} finally {}

    //   // result.sort((a, b) => a.key > b.key)
    //   return result
    // },
    valueType () {
      const temp = JSON.parse(this.str)
      console.log(this.str)
      let type = typeof temp
      if (Array.isArray(temp)) type = 'array'
      else if (temp === null) type = 'null'
      else if (type === 'object') type = 'object'
      else if (temp === undefined) type = 'undefined'

      let result
      if (type === 'object') {
        result = []
        result = temp
        // for (let key in temp) {
        //   result.push({ key, value: temp[key], type: typeof temp[key] })
        // }
      } else {
        result = temp
      }

      this.result = result
      return type
    }
  }
}
</script>
<style>
.json-display-container {
  font-family: 'Consola'; display: inline-block; padding-left: 1em;
}
.json-ul {
  padding-left: 0;
}
.style-key {
  color: #06c5e5; font-style: italic;
}

.style-key::after {
  content: " : "; font-style: normal;
}

.style-key:hover { transform: scale(1.1); }

.style-object-key-start {
  color: #fc1c71; font-weight: 900; cursor: pointer;
}
.style-object-key-start::after {
  content: " : {"; color: #fc1c71; font-weight: normal;
}

.style-object-key-end::after {
  content: "}"; color: #fc1c71; font-style: normal;
}

.style-array-key-start {
  color: #fc1c71; font-weight: 900; cursor: pointer;
}
.style-array-key-start::after {
  content: " : ["; color: #fc1c71; font-style: normal; font-weight: normal;
}

.style-array-key-end::after {
  content: "]"; color: #fc1c71; font-style: normal;
}

.style-warp-key:hover {
  cursor: pointer;
}
.style-warp-key::after {
  content: ":"
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

