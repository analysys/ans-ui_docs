<template>
  <div class="modal-test">
    <h4>标题</h4>
    <p>一些自定义内容</p>
    <p>一些自定义内容</p>
    <p>一些自定义内容</p>
    <div class="ft">
      <x-button type="text" size="small" @click="cancel">取消</x-button>
      <x-button size="small" @click="ok">确认</x-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    ok () {
      this.$emit('ok')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-test {
  background-color: #fff;
  width: 350px;
  border-radius: 4px;
  padding: 10px 0;
  h4 {
    margin: 0;
    height: 35px;
    line-height: 35px;
    color: #333;
    border-bottom: 1px solid #eee;
    text-indent: 20px;
  }
  p {
    margin: 10px 20px;
    color: #666;
    font-size: 12px;
  }
  .ft {
    border-top: 1px solid #eee;
    padding-top: 10px;
    text-align: right;
    padding-right: 20px;
  }
}
</style>
