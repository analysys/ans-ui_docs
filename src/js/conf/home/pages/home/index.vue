<template>
  <div class="main-body">
    <div class="wrapper">
      <div class="logo">
        <h1></h1>
      </div>
      <div class="desc">
        <p class="desc-1">一套基于</p>
        <p class="desc-2">Vue.js 的高质量 UI 组件库</p>
        <p class="desc-3">让设计者和开发者专注于更好的用户体验</p>
        <p class="desc-4"><a href="javascript:;" @click="go()">开始使用</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  },
  methods: {
    go () {
      this.$router.push({ path: 'components' })
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
.main-body {
  width: 100%;
  height: 100%;
  background-image: url('./img/bg.jpg');
  background-size: cover;
  background-position: 50%;
  position: relative;
  .wrapper {
    width: 1200px;
    margin: 0 auto;
    .logo {
      height: 65px;
      padding-top: 55px;
      h1 {
        margin: 0;
        width: 150px;
        height: 70px;
        background: url('./img/ans-white.svg') no-repeat left top;
      }
    }
    .desc {
      margin-top: 150px;
      color: #fff;
      p {
        margin: 0;
        padding: 0;
        &.desc-1 {
          font-size: 36px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        &.desc-2 {
          margin-top: 20px;
          font-size: 50px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        &.desc-3 {
          margin-top: 40px;
          font-size: 20px;
        }
        &.desc-4 {
          margin-top: 55px;
          a {
            display: inline-block;
            width: 227px;
            height: 64px;
            line-height: 64px;
            text-align: center;
            color: #fff;
            font-size: 30px;
            background-image: linear-gradient(-90deg, #17abc8 0%, #36d2a4 100%);
            border-radius:40px;
            &:hover {
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
</style>
