<template>
    <b-container class="h-100">
        <div>
          <h3 class="p-3">Compare Git revisions</h3>
          <div class="row no-gutters">
              <div class="col-md-5 mb-3">
                  <div class="row no-gutters">
                      <b-form-input class="text-center col-md-3 rounded-0 bg-secondary text-white" type="text" value="Project" disabled></b-form-input>
                      <div class="col-md-9">
                        <v-select class="h-100" label="name" v-model="project.selected" :options="project.options" placeholder="Select project" taggable>
                          <span slot="no-options">
                            Please select project.
                          </span>
                        </v-select>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row no-gutters">
              <div class="col-md-5">
                  <div class="row no-gutters">
                      <b-form-input class="text-center col-md-3 rounded-0 bg-secondary text-white" type="text" value="Source" disabled></b-form-input>
                      <div class="col-md-9">
                        <v-select class="h-100" label="name" v-model="compare.sourceSelected" :options="compare.options" placeholder="Select branch / tag" taggable>
                          <span slot="no-options">
                            Please select project first.
                          </span>
                        </v-select>
                      </div>
                  </div>
              </div>
              <div class="text-center mx-1">
                ...
              </div>
              <div class="col-md-5">
                  <div class="row no-gutters">
                      <b-form-input class="text-center col-md-3 rounded-0 bg-secondary text-white" type="text" value="Target" disabled></b-form-input>
                      <div class="col-md-9">
                        <v-select class="h-100" label="name" v-model="compare.targetSelected" :options="compare.options" placeholder="Select branch / tag" taggable>
                          <span slot="no-options">
                            Please select project first.
                          </span>
                        </v-select>
                      </div>
                  </div>
              </div>
              <div class="col-md-1 mx-1">
                <button type="button" class="btn btn-success rounded-0 h-100" @click="compareSourceAndTarget()">Compare</button>
              </div>
          </div>
        </div>
        <div style="height: 600px;" class="mt-3">
          <MarkDown/>
        </div>
    </b-container>
</template>

<style>
  .v-select .dropdown-toggle {
    border-radius: 0;
    height: 100%;
    border-left: 0;
    padding: 4px 1px 0 3px;
  }

  .v-select .selected-tag {
    margin: 0;
    padding: 0;
  }

  .v-select span.selected-tag + input[type=search] {
    width: 0 !important;
  }
</style>

<script>
import * as _ from 'lodash';
import MarkDown from '@/components/MarkDown';
import Config from '../assets/config.json';
import AxiosGitLab from '../assets/javascript/js/Axios/AxiosGitLab';
import GitLabApiHelper from '../assets/javascript/js/GitLabApi/GitLabApiHelper';
import ProjectHelper from '../assets/javascript/js/Repository/Project/ProjectHelper';
import GeneratorHelper from '../assets/javascript/js/Repository/Generator/GeneratorHelper';
import SimpleApiVersionFactory from '../assets/javascript/js/GitLabApi/SimpleFactory/SimpleApiVersionFactory';
import { bus } from '../main';

export default {
  name: '',
  components: {
    MarkDown,
  },
  created() {
    const axiosGitLab = new AxiosGitLab(Config);
    const simpleApiVersionFactory = new SimpleApiVersionFactory();
    const iGitLabApi = simpleApiVersionFactory.createAPIVersion(Config.gitlab.api.version);
    this.gitLabApiHelper = new GitLabApiHelper(iGitLabApi, axiosGitLab);
    this.generatorHelper = new GeneratorHelper(iGitLabApi, axiosGitLab, Config);
    this.initProject();
    this.listenChangelogChangeEvent();
  },
  data() {
    return {
      gitLabApiHelper: undefined,
      generatorHelper: undefined,
      changelog: undefined,
      project: {
        helper: null,
        options: [],
        selected: undefined,
      },
      compare: {
        options: [],
        sourceSelected: '',
        targetSelected: '',
      },
    };
  },
  methods: {
    listenChangelogChangeEvent() {
      bus.$on('changelog', (changelog) => {
        this.changelog = changelog;
      });
    },
    initProject() {
      const that = this;
      this.gitLabApiHelper
        .getAllProjectList()
        .then((response) => {
          that.project.helper = new ProjectHelper(response.data);
          that.project.options = that.project.helper.getAllProjectOptions();
          that.project.selected = this.getSelectOptionByValue(that.project.options, 'name', Config.default.project.selected);
          this.getProjectCompareOption();
        });
    },
    getProjectCompareOption() {
      const that = this;
      if (this.project.selected === undefined) {
        return;
      }

      this.gitLabApiHelper
        .getProjectAllBranchList(this.project.selected.id)
        .then((response) => {
          that.project.helper.buildBranchIntoProjectById(response.data, that.project.selected.id);
          return this.gitLabApiHelper.getProjectAllTagList(this.project.selected.id);
        }).then((response) => {
          that.project.helper.buildTagIntoProjectById(response.data, that.project.selected.id);
          that.sourceSelected = '';
          that.targetSelected = '';
          that.compare.options = that.project.helper.getProjectCompareOptions(that.project.selected.id);
        });
    },
    getSelectOptionByValue(options, attr, value) {
      let selected;
      _.forEach(options, (option) => {
        if (option[attr] === value) {
          selected = option;
        }
      });

      return selected;
    },
    compareSourceAndTarget() {
      const that = this;
      if (this.compare.sourceSelected === null || this.compare.targetSelected === null || this.compare.sourceSelected === this.compare.targetSelected) {
        alert('error');
        return;
      }

      const source = _.defaultTo(this.compare.sourceSelected.id, this.compare.sourceSelected.name);
      const target = _.defaultTo(this.compare.targetSelected.id, this.compare.targetSelected.name);
      this.gitLabApiHelper
        .compareCommits(this.project.selected.id, target, source)
        .then((response) => {
          const project = that.project.helper.getProjectById(that.project.selected.id);
          that.generatorHelper.buildCommitsList(project, { source, target }, response.data);
          return that.generatorHelper.getReleaseLog(that.changelog);
        }).then((markedResult) => {
          bus.$emit('markedResult', markedResult);
        });
    },
  },
  watch: {
    'project.selected': function () {
      this.getProjectCompareOption();
    },
  },
};
</script>
