<template>
  <div id='app' class="h-100 border p-3">
    <b-nav tabs class="border-bottom">
      <b-nav-item
        v-for="option in marked.options"
        v-bind:key="option.value"
        @click="marked.selected = option.value"
        :active="marked.selected == option.value">{{option.name}}
      </b-nav-item>
    </b-nav>
    <div id="editor" class="py-3 marked-area" style="height: 530px;">
      <div v-if="marked.selected === 'write'" class="w-100 h-100 border p-3">
        <textarea :value="marked.content" @input="update" class="w-100 h-100 border-0"></textarea>
      </div>
      <div v-if="marked.selected === 'preview'" class="w-100 pre-scrollable border p-3" style="min-height: 100%;">
        <div v-html="compiledMarkdown" class="w-100 h-100"></div>
      </div>
    </div>
  </div>
</template>

<style>
  .marked-area {
    height: calc(100% - 40px);
  }

</style>


<script>
import * as _ from 'lodash';
import marked from 'marked';
import { bus } from '../main';

export default {
  name: '',
  created() {
    this.listenMarkDownResultEvent();
  },
  data() {
    return {
      marked: {
        content: '',
        selected: 'write',
        options: [
          { name: 'Write', value: 'write' },
          { name: 'Preview', value: 'preview' },
        ],
      },
    };
  },
  methods: {
    listenMarkDownResultEvent() {
      bus.$on('markedResult', (markedResult) => {
        this.marked.content = markedResult;
      });
    },
    update: _.debounce(function (e) {
      this.marked.content = e.target.value;
    }, 300),
    clickTab(tab) {
      this.marked.selected = tab;
    },
  },
  computed: {
    compiledMarkdown() {
      return marked(this.marked.content, { sanitize: true });
    },
  },
  watch: {
  },
};
</script>
