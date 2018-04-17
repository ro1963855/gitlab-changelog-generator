<template>
  <div id='app' class='custom-settingbar'>
    <div class='border-bottom'>
      <h1 class='text-center'>Setting</h1>
    </div>
    <div class='py-4 border-bottom'>
      <div class='cg-list-item row'>
        <div class='col-3 text-right'><h4>Title</h4></div>
            <b-form-input v-model="changelog.title" type="text" placeholder="Enter changelog title" class="col-9"></b-form-input>
      </div>
      <div class='cg-list-item row'>
        <div class='col-3 text-right'><h4>URL</h4></div>
            <b-form-input v-model="changelog.url" type="text" placeholder="Enter website url" class="col-9"></b-form-input>
      </div>
    </div>
    <div class='py-4'>
      <div class='cg-list-item row'>
        <ul>
          <li v-for="labelTitle in changelog.labelTitle" v-bind:key="labelTitle.label">
            {{ labelTitle.label }} - {{ labelTitle.indicate }}
          </li>
        </ul>
      </div>
      <div class='cg-list-item row'>
          <b-input-group>
        <b-form-input v-model="label.name" type="text" placeholder="label name"></b-form-input>
        <b-form-input v-model="label.indicate" type="text" placeholder="indicate name"></b-form-input>
            <b-input-group-append>
              <b-btn variant="info" @click="addLabelTitle()">Add</b-btn>
            </b-input-group-append>
          </b-input-group>
      </div>
    </div>
  </div>
</template>

<script>
import Config from '../assets/config.json';
import { bus } from '../main';

export default {
  name: '',
  created() {
    this.initChanglog();
  },
  data() {
    return {
      changelog: {
        title: '',
        url: '',
        labelTitle: '',
      },
      label: {
        name: '',
        indicate: '',
      },
    };
  },
  methods: {
    initChanglog() {
      this.changelog.title = Config.default.changelog.title;
      this.changelog.url = Config.default.changelog.url;
      this.changelog.labelTitle = Config.default.changelog.labelTitle;
    },
    addLabelTitle() {
      if (this.label.name !== '' && this.label.indicate !== '') {
        this.changelog.labelTitle.push({ label: this.label.name, indicate: this.label.indicate });
      }
    },
    sendNewConfig() {
      bus.$emit('changelog', this.changelog);
    },
  },
  watch: {
    'changelog.title': function () {
      this.sendNewConfig();
    },
    'changelog.url': function () {
      this.sendNewConfig();
    },
    'changelog.labelTitle': function () {
      this.sendNewConfig();
    },
  },
};
</script>
