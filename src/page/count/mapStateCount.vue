<template>
  <div>
    this is mapState test page , let's see A : {{ A }}
    <br>
    let's see B : {{ B }}
    <br>
    let's see C : {{ C }}
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: mapState({
      // 箭头函数可使代码更简练
      A: state => state.linkA,
      B: state => state.linkB,
      C: state => state.linkC
    })
  }
</script>
