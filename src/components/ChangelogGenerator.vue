<template>
  <div id="app" class="container-fluid">
    <div class="row">
        <div class="col-md-3 border-right">
            <SettingBar/>
        </div>
        <div class="col-md-9 border-right">
            <CompareSection/>
        </div>
    </div>
  </div>
</template>

<script>
import SettingBar from '@/components/SettingBar';
import CompareSection from '@/components/CompareSection';

export default {
  name: '',
  components: {
    SettingBar,
    CompareSection,
  },
};
</script>
