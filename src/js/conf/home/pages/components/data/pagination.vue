<template>
  <div class="w-body">
    <h3 class="w-h3">Pagination 分页</h3>
    <p class="w-p">当数据量过多时，使用分页分解数据。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="pagination-demo">
          <x-page :current="current" :total="total"></x-page>
        </div>
        <div class="demo-tips">
          <p>基本的分页，页数过多时会自动折叠。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(pageBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">显示总数</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="pagination-demo">
          <x-page :current="current" :total="total" show-total></x-page>
        </div>
        <div class="demo-tips">
          <p>通过设置 show-total 显示总共多少条数据。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(pageTotal, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">每页数量</h4>
    <p class="w-p">可以切换每页显示的数量。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="pagination-demo">
          <x-page :current="current" :total="total" show-sizer></x-page>
        </div>
        <div class="demo-tips">
          <p>通过设置 show-sizer 调整每页的数据量。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(pageSizer, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">分页跳转</h4>
    <p class="w-p">快速跳转到某一页。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="pagination-demo">
          <x-page :current="current" :total="total" show-elevator></x-page>
        </div>
        <div class="demo-tips">
          <p>通过设置 show-elevator 显示快速跳转。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(pageGo, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">迷你版本</h4>
    <p class="w-p">无边框版本。</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="pagination-demo">
          <x-page :current="current" :total="total" small></x-page>
        </div>
        <div class="demo-tips">
          <p>通过设置 small 属性来显示迷你版本。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(pageSmall, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">简洁版本</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="pagination-demo">
          <x-page :current="current" :total="total" simple></x-page>
        </div>
        <div class="demo-tips">
          <p>通过设置 simple 属性来显示简洁版本。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(pageSimple, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Pagination props</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>current</td>
            <td>当前页</td>
            <td>Number</td>
            <td>—</td>
            <td>1</td>
          </tr>
          <tr>
            <td>total</td>
            <td>总数据条数</td>
            <td>Number</td>
            <td>—</td>
            <td>0</td>
          </tr>
          <tr>
            <td>page-size</td>
            <td>每页数据条数</td>
            <td>Number</td>
            <td>—</td>
            <td>10</td>
          </tr>
          <tr>
            <td>page-size-options</td>
            <td>每页条数切换的配置</td>
            <td>Array</td>
            <td>—</td>
            <td>[10, 20, 30, 40, 50]</td>
          </tr>
          <tr>
            <td>pager-count</td>
            <td>页码按钮的数量，当总页数超过该值时会折叠（奇数）</td>
            <td>Number</td>
            <td>—</td>
            <td>7</td>
          </tr>
          <tr>
            <td>show-total</td>
            <td>是否显示总条数</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>show-elevator</td>
            <td>是否显示跳转页</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>show-sizer</td>
            <td>是否显示每页条数切换栏</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>simple</td>
            <td>是否使用简洁版</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>small</td>
            <td>是否显示迷你版</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Pagination events</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>事件名称</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>on-size-change</td>
            <td>pageSize 改变时会触发</td>
            <td>每页条数</td>
          </tr>
          <tr>
            <td>on-change</td>
            <td>页码切换时触发</td>
            <td>返回当前页码</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 3,
      total: 100,
      pageBasic: `<x-page :current="current" :total="total"></x-page>`,
      pageTotal: `<x-page :current="current" :total="total" show-total></x-page>`,
      pageSizer: `<x-page :current="current" :total="total" show-sizer></x-page>`,
      pageGo: `<x-page :current="current" :total="total" show-elevator></x-page>`,
      pageSmall: `<x-page :current="current" :total="total" small></x-page>`,
      pageSimple: `<x-page :current="current" :total="total" simple></x-page>`
    }
  },
  methods: {
    showCode (code, lang) {
      this.$drawer({
        direction: 'right',
        className: 'code-format',
        render (h) {
          return h('prism-editor', {
            props: {
              readonly: true,
              code,
              language: lang
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
