<template>
  <div class="json-display-container" v-show="displayChild">
    <!-- 属性名，特殊：数组没有 -->
    <span 
      v-if="k" 
      class="style-key"
      :class="valueType === 'array' || valueType === 'object' ? 'weight-key': ''"
      @click="lap" >{{ k }}</span>
    <!-- object - `{` -->
    <span 
      v-if="valueType === 'object'" 
      class="style-object-key-start"
      @click="lap"
    ></span>
    <!-- array - `[` -->
    <span 
      v-if="valueType === 'array'" 
      class="style-array-key-start"
      @click="lap"
    ></span>
    <!-- object -->
    <span v-show="display">
      <ul v-if="valueType === 'object'" class="json-ul">
        <li v-for="(a, index) in result" :key="index">
          <div class="style-row">
            <json 
              :k="a.key" 
              :str="JSON.stringify(a.value)" 
              :last="index === result.length - 1"></json>
          </div>
        </li>
      </ul>
      <!-- array -->
      <ul v-else-if="valueType === 'array'" class="json-ul">
        <!-- <span class="style-warp-key">{{ a.key }}</span> : -->
        <li v-for="(a, index) in result" :key="index">
          <json :str="JSON.stringify(a)" :last="index === result.length - 1"></json>
        </li>
      </ul>
      <!-- string -->
      <span v-else-if="valueType === 'string'" class="style-str">{{ result }}</span>
      <!-- number -->
      <span v-else-if="valueType === 'number'" class="style-num">{{ result }}</span>
      <!-- boolean -->
      <span v-else-if="valueType === 'boolean'" class="style-num">{{ result }}</span>
    </span>  

    <!-- object - `}` -->
    <span 
      v-if="valueType === 'object'" 
      class="style-object-key-end"
      :class="display ? '' : 'lap'"
      @click="lap"
    ></span>
    <!-- array - `]` -->
    <span 
      v-if="valueType === 'array'" 
      class="style-array-key-end"
      :class="display ? '' : 'lap'"
      @click="lap"
    ></span>
    <span v-if="!last">,</span>
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
    valueType () {
      const temp = typeof this.str === 'string' ? JSON.parse(this.str) : this.str
      let type = typeof temp
      if (Array.isArray(temp)) type = 'array'
      else if (temp === null) type = 'null'
      else if (type === 'object') type = 'object'
      else if (temp === undefined) type = 'undefined'

      let result
      if (type === 'object') {
        result = []
        // result = temp
        for (let key in temp) {
          result.push({ key, value: temp[key], type: typeof temp[key] })
        }
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
  font-family: 'Consola'; display: inline-block; padding-left: 1em; font-size: 14px;
}
.json-ul {
  padding-left: 0;
}
.style-key {
  color: #06c5e5;
}

.style-key::after {
  content: " : ";
}

.style-key:hover { transform: scale(1.1); }

.weight-key {
  color: #fc1c71; font-weight: 900; cursor: pointer;
}
.style-object-key-start::after {
  content: "{"; color: #fc1c71; font-weight: normal;
}

.style-object-key-end::after {
  content: "}"; color: #fc1c71;
}

.style-object-key-end.lap::before, .style-array-key-end.lap::before {
  content: "..."; color: #AAAAAA; 
  font-weight: 900; background-color: #eee;
  margin-right: 5px;
}


.style-array-key-start::after {
  content: " ["; color: #fc1c71; font-weight: normal;
}

.style-array-key-end::after {
  content: "]"; color: #fc1c71;
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

