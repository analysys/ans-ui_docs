<template>
  <div class="w-body">
    <h3 class="w-h3">Select 下拉选择器</h3>
    <p class="w-p">使用模拟的增强下拉选择器来代替浏览器原生的选择器。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="select-demo">
          <x-select>
            <x-option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :label="city.label">
            </x-option>
          </x-select>
          <x-select v-model="defaultValue">
            <x-option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :label="city.label">
            </x-option>
          </x-select>
        </div>
        <div class="demo-tips">
          <p>使用 v-model 可以双向绑定数据。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(selectBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">禁用选项</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="select-demo">
          <x-select>
            <x-option
              v-for="city in disabledCities"
              :key="city.value"
              :disabled="city.disabled"
              :value="city.value"
              :label="city.label">
            </x-option>
          </x-select>
        </div>
        <div class="demo-tips">
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(selectDOption, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">禁用状态</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="select-demo">
          <x-select disabled>
            <x-option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :label="city.label">
            </x-option>
          </x-select>
        </div>
        <div class="demo-tips">
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(selectDState, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">多选</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="select-demo">
          <x-select multiple>
            <x-option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :label="city.label">
            </x-option>
          </x-select>
          <x-select multiple v-model="defaultMultipleValue">
            <x-option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :label="city.label">
            </x-option>
          </x-select>
          <x-select multiple ref="customMultiple">
            <div slot="multiple" slot-scope="{ selectedList }">
              <span class="tag-wrapper" v-for="o in selectedList" :key="o.value">
                <span class="tag-text">{{o.label}}-{{o.value}}</span>
                <i class="remove-tag ans-icon-close" @click.stop="removeSelected(o)"></i>
              </span>
            </div>
            <x-option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :label="city.label">
            </x-option>
          </x-select>
        </div>
        <div class="demo-tips">
          <p>使用 v-model 可以双向绑定数据，可以通过 multiple 插槽设置自定义的已选样式。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(selectMulti, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">可清空</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="select-demo">
          <x-select :value="'Beijing'" clearable>
            <x-option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :label="city.label">
            </x-option>
          </x-select>
          <x-select :value="['Beijing','Shanghai']" multiple clearable>
            <x-option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :label="city.label">
            </x-option>
          </x-select>
        </div>
        <div class="demo-tips">
          <p>开启 clearable 属性后，可以通过点击清空图标清除当前选项。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(selectClearable, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">搜索</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="select-demo">
          <x-select filterable>
            <x-option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :label="city.label">
            </x-option>
          </x-select>
          <x-select multiple filterable>
            <x-option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :label="city.label">
            </x-option>
          </x-select>
        </div>
        <div class="demo-tips">
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(selectFilterable, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">分组</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="select-demo">
          <x-select>
            <x-option-group v-for="(group, index) in groupCities" :key="index" :label="group.label">
              <x-option
                v-for="city in group.options"
                :key="city.value"
                :value="city.value"
                :label="city.label">
              </x-option>
            </x-option-group>
          </x-select>
          <x-select>
            <x-option-group v-for="(group, index) in groupCities" :key="index" :label="group.label">
              <div class="custom-group" slot="content">
                <i class="ans-icon-arrow-right"></i>
                <span>{{group.label}}</span>
              </div>
              <x-option
                v-for="city in group.options"
                :key="city.value"
                :value="city.value"
                :label="city.label">
              </x-option>
            </x-option-group>
          </x-select>
        </div>
        <div class="demo-tips">
          <p>可以通过 content 插槽设置分组标题的样式。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(selectGroup, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">自定义模板</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="select-demo">
          <x-select>
            <x-option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :label="city.label">
              <div class="custom">
                <span class="left">{{ city.label }}</span>
                <span class="right">{{ city.value }}</span>
              </div>
            </x-option>
          </x-select>
        </div>
        <div class="demo-tips">
          <p>可以通过 Option 的默认插槽自定义样式。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(selectCustom, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">触发元素</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="select-demo">
          <x-select>
            <x-button slot="trigger" slot-scope="{ selectedModel }">
              <span v-if="selectedModel">
                {{selectedModel.label}}-{{selectedModel.value}}
              </span>
              <span v-else>当前未选中</span>
            </x-button>
            <x-option
              v-for="city in cities"
              :key="city.value"
              :value="city.value"
              :label="city.label">
            </x-option>
          </x-select>
        </div>
        <div class="demo-tips">
          <p>可以通过 Select 的 trigger 插槽修改触发元素。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(selectTrigger, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Select props</p>
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
            <td>value</td>
            <td>绑定值</td>
            <td>String / Number / Object / Array</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>value-key</td>
            <td>当绑定值为对象或者对象数组时，通过该属性值判断 Option 是否被选中，否则将比较对象是否相等</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>name</td>
            <td>Select 组件中 input 的原生属性</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>Select 组件中 input 的原生属性</td>
            <td>String</td>
            <td>—</td>
            <td>请选择</td>
          </tr>
          <tr>
            <td>input-props</td>
            <td>select 组件中 input 组件的属性</td>
            <td>Object</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>width</td>
            <td>下拉框的宽度，默认与触发元素的宽度相同</td>
            <td>String / Number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>height</td>
            <td>下拉框的高度，超出该高度出现滚动条</td>
            <td>String / Number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>max-height</td>
            <td>下拉框的最大高度，超出该高度出现滚动条</td>
            <td>String / Number</td>
            <td>—</td>
            <td>300</td>
          </tr>
          <tr>
            <td>add-title</td>
            <td>是否在选项中增加 title 属性，显示超长的文本</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Select 组件中 input 的原生属性</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>clearable</td>
            <td>是否可清空已选项</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>是否开启多选</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>filterable</td>
            <td>是否开启搜索功能</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>filter-props</td>
            <td>当 option 的绑定值为对象时，搜索查找的对应属性列表</td>
            <td>Array</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>no-data-text</td>
            <td>选项为空时显示的文字</td>
            <td>String</td>
            <td>—</td>
            <td>暂无数据</td>
          </tr>
          <tr>
            <td>no-data-icon</td>
            <td>选项为空时显示的图标类名</td>
            <td>String</td>
            <td>—</td>
            <td>ans-icon-no-data</td>
          </tr>
          <tr>
            <td>highlight-matched-text</td>
            <td>搜索时是否高亮选项中匹配的文字，(仅当未设置 filter-props 时可用)</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>no-match-text</td>
            <td>搜索没有任何匹配项时显示的文字</td>
            <td>String</td>
            <td>—</td>
            <td>搜索无结果</td>
          </tr>
          <tr>
            <td>no-match-icon</td>
            <td>搜索没有任何匹配项时显示的图标类名</td>
            <td>String</td>
            <td>—</td>
            <td>ans-icon-search-no-data</td>
          </tr>
          <tr>
            <td>has-arrow</td>
            <td>下拉框是否显示指示箭头</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>append-to-body</td>
            <td>下拉框是否插入 body</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>position-fixed</td>
            <td>下拉框是否 fixed 定位</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>viewport</td>
            <td>下拉框是否基于 viewport 定位</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>popper-options</td>
            <td>
              <a href="https://popper.js.org/popper-documentation.html#Popper.Defaults" target="_blank">Popper.js 的可选项</a>
            </td>
            <td>Object</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>dropdown-class</td>
            <td>下拉框样式</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>scrollbar-class</td>
            <td>滚动条样式</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>drop-animation</td>
            <td>下拉框动画</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Select events</p>
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
            <td>on-change</td>
            <td>选中值发生变化时触发</td>
            <td>目前的选中值，{ value: value, label: label }</td>
          </tr>
          <tr>
            <td>on-visible-change</td>
            <td>下拉框状态改变时触发</td>
            <td>出现则为 true，隐藏则为 false</td>
          </tr>
          <tr>
            <td>on-keyword-change</td>
            <td>搜索关键字改变时触发</td>
            <td>keyword</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Select methods</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>方法名</th>
            <th>说明</th>
            <th>参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>focus</td>
            <td>使 input 获取焦点</td>
            <td>—</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>使 input 失去焦点并且隐藏下拉框</td>
            <td>—</td>
          </tr>
          <tr>
            <td>search</td>
            <td>搜索</td>
            <td>keyword</td>
          </tr>
          <tr>
            <td>updateScrollbar</td>
            <td></td>
            <td>—</td>
          </tr>
          <tr>
            <td>resetScrollbar</td>
            <td>将滚动条移回到顶部</td>
            <td>—</td>
          </tr>
          <tr>
            <td>setDropdownReference</td>
            <td>手动指定下拉框的触发元素，触发元素推荐放在 trigger 插槽内</td>
            <td>dom 元素</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Select slots</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>插槽名称</th>
            <th>说明</th>
            <th>slot-scope 属性</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>trigger</td>
            <td>Select 组件触发元素的插槽</td>
            <td>selectedModel</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>开启多选时，控制 input 内如何显示的插槽</td>
            <td>selectedList</td>
          </tr>
          <tr>
            <td>header</td>
            <td>下拉框头部插槽，必须使用作用域插槽</td>
            <td>—</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>下拉框底部插槽，必须使用作用域插槽</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">OptionGroup props</p>
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
            <td>label</td>
            <td>分组类别名称</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">OptionGroup slots</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>插槽名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>content</td>
            <td>控制分组标签如何显示的插槽</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Option props</p>
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
            <td>value</td>
            <td>绑定值，可以直接绑定对象，必选项</td>
            <td>String / Number / Object</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>label</td>
            <td>选项文本，必选项</td>
            <td>String / Number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否不可选</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>click-handler</td>
            <td>覆盖默认的点击处理，使用该属性意味着需要自己处理选择逻辑</td>
            <td>Function(value, label)</td>
            <td>—</td>
            <td>—</td>
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
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }],
      defaultValue: 'Nanjing',
      defaultMultipleValue: ['Shenzhen', 'Chengdu'],
      groupCities: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }]
      }],
      selectBasic: `<template>
  <x-select>
    <x-option
      v-for="city in cities"
      :key="city.value"
      :value="city.value"
      :label="city.label">
    </x-option>
  </x-select>
  <x-select v-model="defaultValue">
    <x-option
      v-for="city in cities"
      :key="city.value"
      :value="city.value"
      :label="city.label">
    </x-option>
  </x-select>
</template>

<script>
export default {
  data () {
    return {
      defaultValue: 'Nanjing',
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }]
    }
  }
}
<\/script>`,
      selectDOption: `<template>
  <x-select>
    <x-option
      v-for="city in disabledCities"
      :key="city.value"
      :disabled="city.disabled"
      :value="city.value"
      :label="city.label">
    </x-option>
  </x-select>
</template>

<script>
export default {
  data () {
    return {
      disabledCities: [{
        value: 'Beijing',
        label: '北京',
        disabled: true
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京',
        disabled: true
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳',
        disabled: true
      }, {
        value: 'Guangzhou',
        label: '广州'
      }]
    }
  }
}
<\/script>`,
      selectDState: `<template>
  <x-select disabled>
    <x-option
      v-for="city in cities"
      :key="city.value"
      :value="city.value"
      :label="city.label">
    </x-option>
  </x-select>
</template>

<script>
export default {
  data () {
    return {
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }]
    }
  }
}
<\/script>`,
      selectMulti: `<template>
  <x-select multiple>
    <x-option
      v-for="city in cities"
      :key="city.value"
      :value="city.value"
      :label="city.label">
    </x-option>
  </x-select>
  <x-select multiple v-model="defaultMultipleValue">
    <x-option
      v-for="city in cities"
      :key="city.value"
      :value="city.value"
      :label="city.label">
    </x-option>
  </x-select>
  <x-select multiple ref="customMultiple">
    <div slot="multiple" slot-scope="{ selectedList }">
      <span class="tag-wrapper" v-for="o in selectedList" :key="o.value">
        <span class="tag-text">{{o.label}}-{{o.value}}</span>
        <i class="remove-tag ans-icon-close" @click.stop="removeSelected(o)"></i>
      </span>
    </div>
    <x-option
      v-for="city in cities"
      :key="city.value"
      :value="city.value"
      :label="city.label">
    </x-option>
  </x-select>
</template>

<script>
export default {
  data () {
    return {
      defaultMultipleValue: ['Shenzhen', 'Chengdu'],
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }]
    }
  },
  methods: {
    removeSelected (option) {
      this.$refs.customMultiple.handleRemoveTag(option)
    }
  }
}
<\/script>`,
      selectClearable: `<template>
  <x-select :value="'Beijing'" clearable>
    <x-option
      v-for="city in cities"
      :key="city.value"
      :value="city.value"
      :label="city.label">
    </x-option>
  </x-select>
  <x-select :value="['Beijing','Shanghai']" multiple clearable>
    <x-option
      v-for="city in cities"
      :key="city.value"
      :value="city.value"
      :label="city.label">
    </x-option>
  </x-select>
</template>

<script>
export default {
  data () {
    return {
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }]
    }
  }
}
<\/script>`,
      selectFilterable: `<template>
  <x-select filterable>
    <x-option
      v-for="city in cities"
      :key="city.value"
      :value="city.value"
      :label="city.label">
    </x-option>
  </x-select>
  <x-select multiple filterable>
    <x-option
      v-for="city in cities"
      :key="city.value"
      :value="city.value"
      :label="city.label">
    </x-option>
  </x-select>
</template>

<script>
export default {
  data () {
    return {
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }]
    }
  }
}
<\/script>`,
      selectGroup: `<template>
  <x-select>
    <x-option-group v-for="(group, index) in groupCities" :key="index" :label="group.label">
      <x-option
        v-for="city in group.options"
        :key="city.value"
        :value="city.value"
        :label="city.label">
      </x-option>
    </x-option-group>
  </x-select>
  <x-select>
    <x-option-group v-for="(group, index) in groupCities" :key="index" :label="group.label">
      <div class="custom-group" slot="content">
        <i class="ans-icon-arrow-right"></i>
        <span>{{group.label}}</span>
      </div>
      <x-option
        v-for="city in group.options"
        :key="city.value"
        :value="city.value"
        :label="city.label">
      </x-option>
    </x-option-group>
  </x-select>
</template>

<script>
export default {
  data () {
    return {
      groupCities: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }]
      }]
    }
  }
}
<\/script>`,
      selectCustom: `<template>
  <x-select>
    <x-option
      v-for="city in cities"
      :key="city.value"
      :value="city.value"
      :label="city.label">
      <div class="custom">
        <span class="left">{{ city.label }}</span>
        <span class="right">{{ city.value }}</span>
      </div>
    </x-option>
  </x-select>
</template>

<script>
export default {
  data () {
    return {
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }]
    }
  }
}
<\/script>`,
      selectTrigger: `<template>
  <x-select>
    <x-button slot="trigger" slot-scope="{ selectedModel }">
      <span v-if="selectedModel">
        {{selectedModel.label}}-{{selectedModel.value}}
      </span>
      <span v-else>当前未选中</span>
    </x-button>
    <x-option
      v-for="city in cities"
      :key="city.value"
      :value="city.value"
      :label="city.label">
    </x-option>
  </x-select>
</template>

<script>
export default {
  data () {
    return {
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }]
    }
  }
}
<\/script>`
    }
  },
  computed: {
    disabledCities () {
      return this.cities.map((c, i) => {
        const city = Object.assign({}, c)
        city.disabled = i % 2 === 0
        return city
      })
    }
  },
  methods: {
    removeSelected (option) {
      this.$refs.customMultiple.handleRemoveTag(option)
    },
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

<style lang="scss" scoped>
.select-demo {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > div {
    margin: 0 10px 10px 0;
  }
  .custom-group {
    display: flex;
    align-items: center;
    background: rgb(196, 219, 238);
    padding-left: 10px;
    line-height: 30px;
    i {
      margin-right: 10px;
      font-size: 12px;
      color: #fff;
    }
    span {
      color: #fff;
    }
  }
  .custom {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    &:hover {
      background: #8492a6;
      .left,
      .right {
        color: #fff;
      }
    }
    .left {
      font-size: 12px;
    }
    .right {
      color: #8492a6;
      font-size: 12px;
      transform: scale(0.8);
    }
  }
}
</style>
