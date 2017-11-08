<template>
  <div class="rest-dic">
    <div 
      v-for="project in projects" 
      :key="project.id">
      
      <h2 
        :class="project.id == idProject && 'select-item'"
        >
        {{project.project}} x
      </h2>

      <ul>
        <li 
          class="item"
          v-for="protocol in project.protocols" 
          :key="protocol.id"
          :class="project.id == idProject && protocol.id == idProtocol && 'select-item'"
          @click="routerPush(project.id, protocol.id)">
          <span v-text="protocol.name"></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import router from '../../router'
// test
import testJson from './testJSON'
// test end
export default {
  data () {
    return {
      // read store
      projects: testJson
    }
  },
  computed: {
    idProject () {
      return this.$route.params.project
    },
    idProtocol () {
      return this.$route.params.protocol
    }
  },
  methods: {
    routerPush (projectID, protocolID) {
      router.push({
        path: `/rest/${projectID}/${protocolID}`
      })
    },
    addProject () {
      // write store
    },

    addProtocol () {
      // write store
    }
  }
}
</script>
<style>
.rest-dic {
  width: 270px;
}

.rest-dic h2 {
  padding-left: 30px;
  font-size: 20px;
  font-weight: 900;
}

.rest-dic ul {
  padding-left: 0;
}
.rest-dic li {
  margin-top: 0 !important; 
  padding: 10px 0 10px 40px;
  font-size: 16px;
  user-select: none;
  cursor: pointer;
}
.rest-dic li.select-item {
  color: #cd164e;
}
.rest-dic li:hover {
  background-color: #eeeeee;
}

h2.select-item {
  background: #cd164e;
  color: white;
}
</style>
