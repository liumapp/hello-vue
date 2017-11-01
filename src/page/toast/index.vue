<template>
  <div>
    <button @click="openTop()">top</button>
    <button @click="openCenter()">center</button>
    <button @click="openBottom()">bottom</button>
    <button @click="openLoading()">loading</button>
  </div>
</template>

<script>
  export default {
    methods: {
      openTop () {
        console.log(this.$toast.toastVM)
        this.$toast.top('top')
      },
      openCenter () {
        this.$toast.center('center')
      },
      openBottom () {
        this.$toast('bottom')  // or this.$toast.bottom('bottom');
      },
      openLoading () {
        this.$loading('loading...')
        let self = this
        setTimeout(function () {
          self.closeLoading()
        }, 2000)
      },
      closeLoading () {
        this.$loading.close()
      }
    }
  }
</script>

