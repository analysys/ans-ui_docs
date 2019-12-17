<template>
  <div class="w-body">
    <h3 class="w-h3">Form 表单</h3>
    <p class="w-p">具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。</p>

    <h4 class="w-h4">基本用法</h4>
    <p class="w-p">校验组件库里面的表单组件</p>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="form-demo">
          <template>
            <x-form ref="formVal" :model="formVal" :rules="formRules" label-width="80">
              <x-form-item prop="username" label="帐号">
                <x-input v-model="formVal.username" placeholder="请输入帐号" style="width: 200px;" no-border></x-input>
              </x-form-item>
              <x-form-item prop="passcode" label="密码">
                <x-input v-model="formVal.passcode" type="password" placeholder="请输入密码" style="width: 200px;" no-border></x-input>
              </x-form-item>
              <x-form-item prop="gender" label="性别">
                <x-radio-group v-model="formVal.gender">
                  <x-radio label="1">男</x-radio>
                  <x-radio label="2">女</x-radio>
                </x-radio-group>
              </x-form-item>
              <x-form-item prop="hobby" label="爱好">
                <x-checkbox-group v-model="formVal.hobby">
                  <x-checkbox label="跑步">跑步</x-checkbox>
                  <x-checkbox label="篮球">篮球</x-checkbox>
                  <x-checkbox label="足球">足球</x-checkbox>
                </x-checkbox-group>
              </x-form-item>
              <x-form-item prop="city" label="城市">
                <x-select v-model="formVal.city" clearable style="width: 200px;" :input-props="{'no-border':true}">
                  <x-option v-for="item in cities" :key="item.value" :value="item.value" :label="item.label"></x-option>
                </x-select>
              </x-form-item>
              <x-form-item prop="startTime" label="时间">
                <x-datepicker v-model="formVal.startTime" placeholder="选择日期" style="width: 200px;" :input-props="{'no-border':true}"></x-datepicker>
              </x-form-item>
              <x-form-item label=" ">
                <x-button @click="submit()">提 交</x-button>
              </x-form-item>
            </x-form>
          </template>
        </div>
        <div class="demo-tips">
          <p>Form 组件基于 async-validator 实现的数据验证</p>
          <p>给 Form 设置属性 rules，同时给需要验证的 FormItem 设置属性 prop 指向对应字段即可。</p>
          <p>完整的验证规则请参照开源项目 async-validator</p>
          <p>验证方法也支持 Promise</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(formBasic, 'vue')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">垂直排列</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="form-demo">
          <template>
            <x-form ref="formVal2" :model="formVal2" :rules="formRules" vertical>
              <x-form-item prop="username" label="帐号">
                <x-input v-model="formVal2.username" placeholder="请输入帐号" style="width: 200px;" no-border></x-input>
              </x-form-item>
              <x-form-item prop="passcode" label="密码">
                <x-input v-model="formVal2.passcode" type="password" placeholder="请输入密码" style="width: 200px;" no-border></x-input>
              </x-form-item>
              <x-form-item prop="gender" label="性别">
                <x-radio-group v-model="formVal2.gender">
                  <x-radio label="1">男</x-radio>
                  <x-radio label="2">女</x-radio>
                </x-radio-group>
              </x-form-item>
              <x-form-item prop="hobby" label="爱好">
                <x-checkbox-group v-model="formVal2.hobby">
                  <x-checkbox label="跑步">跑步</x-checkbox>
                  <x-checkbox label="篮球">篮球</x-checkbox>
                  <x-checkbox label="足球">足球</x-checkbox>
                </x-checkbox-group>
              </x-form-item>
              <x-form-item prop="city" label="城市">
                <x-select v-model="formVal2.city" clearable style="width: 200px;" :input-props="{'no-border':true}">
                  <x-option v-for="item in cities" :key="item.value" :value="item.value" :label="item.label"></x-option>
                </x-select>
              </x-form-item>
              <x-form-item prop="startTime" label="时间">
                <x-datepicker v-model="formVal2.startTime" placeholder="选择日期" style="width: 200px;" :input-props="{'no-border':true}"></x-datepicker>
              </x-form-item>
              <x-form-item label=" ">
                <x-button @click="submit('formVal2')">提 交</x-button>
              </x-form-item>
            </x-form>
          </template>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(formVertical, 'vue')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Form props</p>
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
            <td>model</td>
            <td>表单数据对象</td>
            <td>Object</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>rules</td>
            <td>表单验证规则，详见 async-validator</td>
            <td>Object</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>label-width</td>
            <td>表单域标签的的宽度</td>
            <td>Number / String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>label-height</td>
            <td>表单域标签的的高度</td>
            <td>Number / String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>vertical</td>
            <td>表单的标签和元素是否上下结构</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">Form methods</p>
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
            <td>validate</td>
            <td>对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，支持 Promise</td>
            <td>callback</td>
          </tr>
          <tr>
            <td>resetFields</td>
            <td>对整个表单进行重置，将所有字段值重置为空并移除校验结果</td>
            <td>—</td>
          </tr>
          <tr>
            <td>validateField</td>
            <td>对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息</td>
            <td>prop, callback</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">FormItem props</p>
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
            <td>prop</td>
            <td>对应表单域 model 里的字段</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>rules</td>
            <td>表单验证规则，会合并父级的规则</td>
            <td>Object / Array</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>label</td>
            <td>标签文本</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>required</td>
            <td>是否必填，如不设置，则会根据校验规则自动生成</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>label-width</td>
            <td>表单域标签的的宽度</td>
            <td>Number / String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>label-height</td>
            <td>表单域标签的的高度</td>
            <td>Number / String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>label-for</td>
            <td>指定原生的 label 标签的 for 属性</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="w-p">FormItem slots</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
            <th>slot-scope 属性</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>内容</td>
            <td>—</td>
          </tr>
          <tr>
            <td>label</td>
            <td>label内容</td>
            <td>—</td>
          </tr>
          <tr>
            <td>input</td>
            <td>使用原生input时用这个插入内容</td>
            <td>—</td>
          </tr>
          <tr>
            <td>select</td>
            <td>使用原生select时用这个插入内容</td>
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
      formVal: {
        username: '',
        passcode: '',
        gender: '',
        hobby: [],
        city: '',
        startTime: ''
      },
      formVal2: {
        username: '',
        passcode: '',
        gender: '',
        hobby: [],
        city: '',
        startTime: ''
      },
      formRules: {
        username: [
          { required: true, message: '请输入帐号', trigger: 'blur' }
        ],
        passcode: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { required: true, min: 6, max: 12, message: '密码长度在6-12之间', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        hobby: [
          { required: true, type: 'array', message: '请选择爱好', trigger: 'change' }
        ],
        city: [
          { required: true, message: '请选择城市', trigger: 'change' }
        ],
        startTime: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ]
      },
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
      formBasic: `<template>
  <x-form ref="formVal" :model="formVal" :rules="formRules" label-width="80">
    <x-form-item prop="username" label="帐号">
      <x-input v-model="formVal.username" placeholder="请输入帐号" style="width: 200px;" no-border></x-input>
    </x-form-item>
    <x-form-item prop="passcode" label="密码">
      <x-input v-model="formVal.passcode" type="password" placeholder="请输入密码" style="width: 200px;" no-border></x-input>
    </x-form-item>
    <x-form-item prop="gender" label="性别">
      <x-radio-group v-model="formVal.gender">
        <x-radio label="1">男</x-radio>
        <x-radio label="2">女</x-radio>
      </x-radio-group>
    </x-form-item>
    <x-form-item prop="hobby" label="爱好">
      <x-checkbox-group v-model="formVal.hobby">
        <x-checkbox label="跑步">跑步</x-checkbox>
        <x-checkbox label="篮球">篮球</x-checkbox>
        <x-checkbox label="足球">足球</x-checkbox>
      </x-checkbox-group>
    </x-form-item>
    <x-form-item prop="city" label="城市">
      <x-select v-model="formVal.city" clearable style="width: 200px;" :input-props="{'no-border':true}">
        <x-option v-for="item in cities" :key="item.value" :value="item.value" :label="item.label"></x-option>
      </x-select>
    </x-form-item>
    <x-form-item prop="startTime" label="时间">
      <x-datepicker v-model="formVal.startTime" placeholder="选择日期" style="width: 200px;" :input-props="{'no-border':true}"></x-datepicker>
    </x-form-item>
    <x-form-item label=" ">
      <x-button @click="submit()">提 交</x-button>
    </x-form-item>
  </x-form>
</template>

<script>
export default {
  data () {
    return {
      formVal: {
        username: '',
        passcode: '',
        gender: '',
        hobby: [],
        city: '',
        startTime: ''
      },
      formRules: {
        username: [
          { required: true, message: '请输入帐号', trigger: 'blur' }
        ],
        passcode: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { required: true, min: 6, max: 12, message: '密码长度在6-12之间', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        hobby: [
          { required: true, type: 'array', message: '请选择爱好', trigger: 'change' }
        ],
        city: [
          { required: true, message: '请选择城市', trigger: 'change' }
        ],
        startTime: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ]
      },
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
    submit () {
      this.$refs['formVal'].validate(valid => {
        if(valid){
          console.log('success')
        }else{
          console.log('error')
        }
      })
    }
  }
}
<\/script>`,
      formVertical: `<template>
  <x-form ref="formVal" :model="formVal" :rules="formRules" vertical>
    <x-form-item prop="username" label="帐号">
      <x-input v-model="formVal.username" placeholder="请输入帐号" style="width: 200px;" no-border></x-input>
    </x-form-item>
    <x-form-item prop="passcode" label="密码">
      <x-input v-model="formVal.passcode" type="password" placeholder="请输入密码" style="width: 200px;" no-border></x-input>
    </x-form-item>
    <x-form-item prop="gender" label="性别">
      <x-radio-group v-model="formVal.gender">
        <x-radio label="1">男</x-radio>
        <x-radio label="2">女</x-radio>
      </x-radio-group>
    </x-form-item>
    <x-form-item prop="hobby" label="爱好">
      <x-checkbox-group v-model="formVal.hobby">
        <x-checkbox label="跑步">跑步</x-checkbox>
        <x-checkbox label="篮球">篮球</x-checkbox>
        <x-checkbox label="足球">足球</x-checkbox>
      </x-checkbox-group>
    </x-form-item>
    <x-form-item prop="city" label="城市">
      <x-select v-model="formVal.city" clearable style="width: 200px;" :input-props="{'no-border':true}">
        <x-option v-for="item in cities" :key="item.value" :value="item.value" :label="item.label"></x-option>
      </x-select>
    </x-form-item>
    <x-form-item prop="startTime" label="时间">
      <x-datepicker v-model="formVal.startTime" placeholder="选择日期" style="width: 200px;" :input-props="{'no-border':true}"></x-datepicker>
    </x-form-item>
    <x-form-item label=" ">
      <x-button @click="submit()">提 交</x-button>
    </x-form-item>
  </x-form>
</template>

<script>
export default {
  data () {
    return {
      formVal: {
        username: '',
        passcode: '',
        gender: '',
        hobby: [],
        city: '',
        startTime: ''
      },
      formRules: {
        username: [
          { required: true, message: '请输入帐号', trigger: 'blur' }
        ],
        passcode: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { required: true, min: 6, max: 12, message: '密码长度在6-12之间', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        hobby: [
          { required: true, type: 'array', message: '请选择爱好', trigger: 'change' }
        ],
        city: [
          { required: true, message: '请选择城市', trigger: 'change' }
        ],
        startTime: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ]
      },
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
    submit () {
      this.$refs['formVal'].validate(valid => {
        if(valid){
          console.log('success')
        }else{
          console.log('error')
        }
      })
    }
  }
}
<\/script>`
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
    },
    submit (form = 'formVal') {
      this.$refs[form].validate(valid => {
        if (valid) {
          console.log('success')
        } else {
          console.log('error')
        }
      })
    }
  }
}
</script>
