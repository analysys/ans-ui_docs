<template>
  <div class="w-body">
    <h3 class="w-h3">Table 表格</h3>
    <p class="w-p">用于展示多条结构类似的数据，可对数据进行排序等操作。</p>

    <h4 class="w-h4">基本用法</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table :data="tableData">
            <x-table-column
              v-for="(header, index) in tableHeaders"
              :key="index"
              :label="header.label"
              :prop="header.prop">
            </x-table-column>
          </x-table>
        </div>
        <div class="demo-tips">
          <p></p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableBasic, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">斑马纹表格</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table stripe :data="tableData">
            <x-table-column
              v-for="(header, index) in tableHeaders"
              :key="index"
              :label="header.label"
              :prop="header.prop">
            </x-table-column>
          </x-table>
        </div>
        <div class="demo-tips">
          <p></p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableStripe, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">带竖边框表格</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table border :data="tableData">
            <x-table-column
              v-for="(header, index) in tableHeaders"
              :key="index"
              :label="header.label"
              :prop="header.prop">
            </x-table-column>
          </x-table>
        </div>
        <div class="demo-tips">
          <p></p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableBorder, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">固定表头</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table border height="250" :data="longTableData">
            <x-table-column
              v-for="(header, index) in tableHeaders"
              :key="index"
              :label="header.label"
              :prop="header.prop">
            </x-table-column>
          </x-table>
        </div>
        <div class="demo-tips">
          <p>在 Table 组件上设置 height 属性后即可固定表头。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableHeight, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">固定列</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table stripe :data="tableData">
            <x-table-column
              v-for="(header, index) in detailTableHeaders"
              :fixed="index === 3 ? 'right' : index === 1 ? 'left' : false"
              :key="index"
              :width="180"
              :label="header.label"
              :prop="header.prop">
            </x-table-column>
          </x-table>
        </div>
        <div class="demo-tips">
          <p>在 TableColumn 组件上设置 fixed 属性控制固定列的位置，具体属性值参见配置。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableFixed, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">多级表头</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table :data="tableData">
            <template v-for="(header, i) in multipleHeaders">
              <x-table-column
                v-if="header.children"
                :key="i"
                :label="header.label">
                <x-table-column
                  v-for="(sub, j) in header.children"
                  :key="j"
                  :label="sub.label"
                  :prop="sub.prop">
                </x-table-column>
              </x-table-column>
              <x-table-column
                v-else
                :key="i"
                :label="header.label"
                :prop="header.prop">
              </x-table-column>
            </template>
          </x-table>
        </div>
        <div class="demo-tips">
          <p>嵌套使用 TableColumn 即可生成多级表头。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableMultiple, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">多选</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table :data="tableData">
            <x-table-column type="selection"></x-table-column>
            <x-table-column
              v-for="(header, index) in tableHeaders"
              :key="index"
              :label="header.label"
              :prop="header.prop">
            </x-table-column>
          </x-table>
        </div>
        <div class="demo-tips">
          <p>增加一列，并将 type 设置为 selection，即可实现多选功能。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableSelection, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">排序</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table :data="tableData">
            <x-table-column
              v-for="(header, index) in sortableHeaders"
              :sortable="header.sortable"
              :sort-method="header.sortMethod"
              :key="index"
              :label="header.label"
              :prop="header.prop">
            </x-table-column>
          </x-table>
        </div>
        <div class="demo-tips">
          <p>设置列属性 sortable 为 true 即可开启排序功能，sort-method 可以控制排序规则。如果需要后端排序，需要将 sortable 设置为 custom ，同时监听 on-sort-change 事件。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableSort, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">自定义列和表头</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table :data="tableData">
            <x-table-column
              v-for="(header, index) in tableHeaders"
              :key="index"
              :label="header.label"
              :prop="header.prop">
              <template slot="header" slot-scope="scope">
                <div style="height: 40px;line-height: 40px;background: #ddd;">{{scope.column.label}}-{{scope.$index}}</div>
              </template>
              <template slot="content" slot-scope="scope">
                <div style="line-height: 30px;text-align: center;background: #eee;">{{scope.content}}-{{scope.$rowIndex}}</div>
              </template>
            </x-table-column>
          </x-table>
        </div>
        <div class="demo-tips">
          <p>通过作用域插槽 header 设置自定义表头，其中column 表示当前列信息，$index 表示列索引。通过作用域插槽 content 设置自定义列，其中 row 表示当前行数据，column 表示当前列信息，content 表示单元格内容，$rowIndex 表示行索引，$columnIndex 表示列索引。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableCustom, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">表头插槽</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table :data="tableData">
            <x-table-column
              v-for="(header, index) in tableHeaders"
              :key="index"
              sortable
              :label="header.label"
              :header-align="index === 2 ? 'right' : 'left'"
              :align="index === 2 ? 'right' : 'left'"
              :prop="header.prop">
              <template slot="prepend" slot-scope="scope">
                <div :style="{margin:index === 2 ? '0 0 0 10px' : '0 10px 0 0'}">前置{{scope.$index}}</div>
              </template>
              <template slot="append" slot-scope="scope">
                <div>后置{{scope.$index}}</div>
              </template>
              <template slot="headerText" slot-scope="scope">
                <div>文本插槽</div>
                <div>{{scope.column.label}}</div>
              </template>
            </x-table-column>
          </x-table>
        </div>
        <div class="demo-tips">
          <p>通过作用域插槽 prepend 和 append 可以在不改变原有表头功能的基础上进行扩展，align 用于设置列对齐方式，header-align 用于设置表头对齐方式，注意当 header-align 为 right 时，prepend 和 append 的位置是倒置的。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableSlot, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">展开行</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table :data="tableData">
            <x-table-column type="expand">
              <template slot="expand" slot-scope="scope">
                <div style="height: 100px;line-height:100px;text-align:center;color:#cdcdcd;">这里是第{{scope.$index}}行的展开行内容</div>
              </template>
            </x-table-column>
            <x-table-column
              v-for="(header, index) in tableHeaders"
              :key="index"
              :label="header.label"
              :prop="header.prop">
            </x-table-column>
          </x-table>
        </div>
        <div class="demo-tips">
          <p>增加一列，并将 type 设置为 expand，同时使用作用域插槽 expand 设置展开行内容。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableExpand, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">树结构</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table :data="treeData">
            <x-table-column
              v-for="(header, index) in tableHeaders"
              :key="index"
              :label="header.label"
              :prop="header.prop">
            </x-table-column>
          </x-table>
        </div>
        <div class="demo-tips">
          <p>树结构的叶子节点数据结构需要与父节点保持一致。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableTree, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">合并行或列</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table :data="tableData" :cell-span-method="cellSpanMethod">
            <template v-for="(header, i) in multipleHeaders">
              <x-table-column
                v-if="header.children"
                :key="i"
                :label="header.label">
                <x-table-column
                  v-for="(sub, j) in header.children"
                  :key="j"
                  :label="sub.label"
                  :prop="sub.prop">
                </x-table-column>
              </x-table-column>
              <x-table-column
                v-else
                :key="i"
                :label="header.label"
                :prop="header.prop">
              </x-table-column>
            </template>
          </x-table>
        </div>
        <div class="demo-tips">
          <p>通过 Table 组件的 cell-span-method 属性可以设置合并行或列的规则。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableSpan, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">窗口置顶</h4>
    <div class="demo-wrapper">
      <div class="demo-con clearfix">
        <div class="table-demo">
          <x-table border affix :data="longTableData">
            <x-table-column
              v-for="(header, index) in tableHeaders"
              :key="index"
              :label="header.label"
              :prop="header.prop">
            </x-table-column>
          </x-table>
        </div>
        <div class="demo-tips">
          <p>将 Table 组件的 affix 设置为 true，可以开启窗口置顶效果，也可以置顶表头距离 window 顶部的距离。</p>
        </div>
      </div>
      <div class="code-show">
        <a href="javascript:;" @click="showCode(tableAffix, 'html')">显示代码 <i class="ans-icon-arrow-right"></i></a>
      </div>
    </div>

    <h4 class="w-h4">API</h4>
    <p class="w-p">Table props</p>
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
            <td>data</td>
            <td>数据</td>
            <td>Array</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>default-column-width</td>
            <td>默认最小列宽</td>
            <td>Number</td>
            <td>—</td>
            <td>80</td>
          </tr>
          <tr>
            <td>fit</td>
            <td>未设置 width 的列是否可以平分表格剩余宽度</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>stripe</td>
            <td>是否斑马纹表格</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>border</td>
            <td>是否带纵向边框表格</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>height</td>
            <td>Table 的高度</td>
            <td>String / Number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>restrict</td>
            <td>是否将 Table 限定在父容器内，当 Table 的高度超过父容器时，将出现垂直滚动条</td>
            <td>Boolean / Number</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>affix</td>
            <td>吸附在距离窗口顶部固定位置的效果，可直接传距离</td>
            <td>Boolean / Number</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>empty-text</td>
            <td>数据为空时显示的文本</td>
            <td>String</td>
            <td>—</td>
            <td>暂无数据</td>
          </tr>
          <tr>
            <td>default-sort</td>
            <td>默认排序列的 prop 和顺序</td>
            <td>Object</td>
            <td>{ prop: String, order: 'asc' / 'desc' }</td>
            <td>—</td>
          </tr>
          <tr>
            <td>default-sort-orders</td>
            <td>点击表头文字，排序规则轮转顺序，数组元素可选值：asc 表示升序，desc 表示降序，null 表示还原为原始顺序</td>
            <td>Array</td>
            <td>—</td>
            <td>['asc', 'desc']</td>
          </tr>
          <tr>
            <td>default-expand-all</td>
            <td>是否默认展开所有行</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>expand-row-keys</td>
            <td>可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组</td>
            <td>Array</td>
            <td>—</td>
          </tr>
          <tr>
            <td>cell-span-method</td>
            <td>合并行或列的计算方法</td>
            <td>Function({ row, column, rowIndex, columnIndex })</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>row-key</td>
            <td>表格行的 key 值，当 reserve-states 为 true 时，必须设置该属性</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>current-row-key</td>
            <td>用于指定当前行，可以通过设置 .highlight-row 的样式来控制高亮</td>
            <td>String / Number</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>reserve-states</td>
            <td>数据改变时是否保存多选、展开等状态，需要设置 row-key</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>children-prop</td>
            <td>数据结构为树结构时，叶子节点数组的对应属性名称，注意树结构的数据只能使用自定义排序</td>
            <td>String</td>
            <td>—</td>
            <td>children</td>
          </tr>
          <tr>
            <td>tree-title</td>
            <td>树结构的第一列是否需要加上 title 属性</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>default-unfold-children</td>
            <td>数据结构为树结构时，是否默认展开所有的叶子节点</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>row-limit</td>
            <td>最大行数限制</td>
            <td>Number</td>
            <td>—</td>
            <td>100</td>
          </tr>
          <tr>
            <td>show-header</td>
            <td>是否显示表头</td>
            <td>String</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>virtual-scroll</td>
            <td>是否启用虚拟滚动</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
          </tr>
          <tr>
            <td>row-height</td>
            <td>行高，启动虚拟滚动时需要设置</td>
            <td>Number</td>
            <td>—</td>
            <td>38</td>
          </tr>
          <tr>
            <td>max-tree-row</td>
            <td>当表格为树结构时，开启虚拟滚动后，最大渲染的行数</td>
            <td>Number</td>
            <td>—</td>
            <td>15</td>
          </tr>
          <tr>
            <td>reverse-scroll-y</td>
            <td>是否反转 Y 轴滚轮，当该值为 true 时，滚动 Y 轴将控制水平方向的滚动</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>scroll-bar-class</td>
            <td>自定义滚动条样式名称</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>frozen-data</td>
            <td>是否冻结 data，节省内存开销</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="w-p">Table events</p>
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
            <td>on-select</td>
            <td>当用户手动勾选数据行的 Checkbox 时触发的事件</td>
            <td>selection, row</td>
          </tr>
          <tr>
            <td>on-select-all</td>
            <td>当用户手动勾选全选 Checkbox 时触发的事件</td>
            <td>selection</td>
          </tr>
          <tr>
            <td>on-selection-change</td>
            <td>当选择项发生变化时会触发该事件</td>
            <td>selection</td>
          </tr>
          <tr>
            <td>on-expand-change</td>
            <td>当用户对某一行展开或者关闭的时候会触发该事件</td>
            <td>row, expandedRows</td>
          </tr>
          <tr>
            <td>on-unfolded-change</td>
            <td>当用户展开或者关闭树节点表格时会触发该事件</td>
            <td>row, unfoldedRows</td>
          </tr>
          <tr>
            <td>on-sort-change</td>
            <td>当表格的排序条件发生变化时触发的事件</td>
            <td>column, prop, order</td>
          </tr>
          <tr>
            <td>on-hit</td>
            <td>当表格内容滚动到边界时触发该事件，参数为边界位置信息（需要设置 height 或者 restrict 为 true）</td>
            <td>'left' / 'right' / 'top' / 'bottom'</td>
          </tr>
          <tr>
            <td>on-scroll</td>
            <td>当表格内容滚动时触发（需要设置 height 或者 restrict 为 true）</td>
            <td>isVertical, amount</td>
          </tr>
          <tr>
            <td>on-slice</td>
            <td>当虚拟滚动做数据切割时触发</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="w-p">Table methods</p>
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
            <td>doLayout</td>
            <td>对 Table 进行重新布局</td>
            <td>—</td>
          </tr>
          <tr>
            <td>clearSelection</td>
            <td>用于多选表格，清空用户的选择</td>
            <td>—</td>
          </tr>
          <tr>
            <td>toggleAllSelection</td>
            <td>用于多选表格，切换所有行的选中状态</td>
            <td>—</td>
          </tr>
          <tr>
            <td>toggleRowSelection</td>
            <td>用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）</td>
            <td>row, selected</td>
          </tr>
          <tr>
            <td>toggleRowExpansion</td>
            <td>用于可展开表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）</td>
            <td>row, expanded</td>
          </tr>
          <tr>
            <td>toggleRowUnfolding</td>
            <td>用于树结构表格，切换某一行的节点状态，如果使用了第二个参数，则是设置该节点的子节点是否显示（unfolded 为 true 则显示）</td>
            <td>row, unfolded</td>
          </tr>
          <tr>
            <td>clearSort</td>
            <td>用于清空排序条件，数据会恢复成未排序的状态</td>
            <td>—</td>
          </tr>
          <tr>
            <td>sort</td>
            <td>手动对 Table 进行排序。参数 prop 属性指定排序列，order 指定排序顺序</td>
            <td>prop: String, order: asc / desc</td>
          </tr>
          <tr>
            <td>setScrollPosition</td>
            <td>设置滚动条的位置</td>
            <td>left / right / top / bottom</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="w-p">Table slots</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>empty</td>
            <td>数据为空时显示的内容插槽</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="w-p">TableColumn props</p>
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
            <td>type</td>
            <td>列的类型</td>
            <td>String</td>
            <td>selection / expand</td>
            <td>—</td>
          </tr>
          <tr>
            <td>label</td>
            <td>表头内容</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>prop</td>
            <td>表格内容对应的属性，支持多层访问：如 'user.address[0].city'</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>width</td>
            <td>列宽，单位为 px(只支持数值型的格式，如 400)</td>
            <td>Number / String</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>fixed</td>
            <td>是否固定列，true 等价于 'left'</td>
            <td>Boolean / String</td>
            <td>true / 'left' / 'right'</td>
            <td>false</td>
          </tr>
          <tr>
            <td>sortable</td>
            <td>对应列是否可以排序，如果设置为 'custom'，则代表用户希望自定义排序，需要监听 Table 的 on-sort-change 事件</td>
            <td>Boolean / String</td>
            <td>true / false / 'custom'</td>
            <td>false</td>
          </tr>
          <tr>
            <td>sort-method</td>
            <td>对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致</td>
            <td>Function(cellA, cellB, rowA, rowB)</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>sort-orders</td>
            <td>点击表头文字，排序规则轮转顺序，数组元素可选值：asc 表示升序，desc 表示降序，null 表示还原为原始顺序，当前列的该属性会覆盖 default-sort-orders 的值</td>
            <td>Array</td>
            <td>—</td>
            <td>['asc', 'desc']</td>
          </tr>
          <tr>
            <td>resizable</td>
            <td>是否可以通过拖拽右侧边框改变列宽</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
          </tr>
          <tr>
            <td>formatter</td>
            <td>格式化内容的函数</td>
            <td>Function(row, column, cellValue, rowIndex, columnIndex)</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>align</td>
            <td>单元格对齐方式</td>
            <td>String</td>
            <td>left / center / right</td>
            <td>left</td>
          </tr>
          <tr>
            <td>header-align</td>
            <td>表头对齐方式（当值为 right 时，prepend 插槽和 append 插槽的位置互换）</td>
            <td>String</td>
            <td>left / center / right</td>
            <td>left</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="w-p">TableColumn scoped slots</p>
    <div class="api-table">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>header</td>
            <td>自定义表头的内容，参数为 { column, $index }</td>
          </tr>
          <tr>
            <td>content</td>
            <td>自定义列的内容，参数为 { row, column, content, $rowIndex, $columnIndex }</td>
          </tr>
          <tr>
            <td>expand</td>
            <td>展开行的内容，参数为 { row, $index }</td>
          </tr>
          <tr>
            <td>prepend</td>
            <td>表头前置插槽，可以在不破坏原有表头功能的基础上进行额外扩展，参数为 { column, $index }</td>
          </tr>
          <tr>
            <td>append</td>
            <td>表头后置插槽，可以在不破坏原有表头功能的基础上进行额外扩展，参数为 { column, $index }</td>
          </tr>
          <tr>
            <td>headerText</td>
            <td>表头文本插槽，可以在不破坏原有表头功能的基础上进行额外扩展，参数为 { column, $index }</td>
          </tr>
          <tr>
            <td>treeText</td>
            <td>树结构第一列文本的插槽，参数为 { row, column, content, $rowIndex, $columnIndex }</td>
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
      rowCount: 5,

      tableHeaders: [
        { label: '用户ID', prop: 'name' },
        { label: '城市', prop: 'city' },
        { label: '最近一次使用', prop: 'lastUsedTime' }
      ],

      sortableHeaders: [
        { label: '用户ID', prop: 'name' },
        { label: '城市', prop: 'city' },
        { label: '最近一次使用', prop: 'lastUsedTime' },
        { label: '使用次数', prop: 'usedCount', sortable: true, sortMethod: this.sortMethod }
      ],

      multipleHeaders: [
        { label: '用户ID', prop: 'name' },
        { label: '最近一次使用', prop: 'lastUsedTime' },
        {
          label: '地址',
          children: [
            { label: '省份', prop: 'province' },
            { label: '城市', prop: 'city' },
            { label: '详细地址', prop: 'address' }
          ]
        }
      ],

      detailTableHeaders: [
        { label: '用户ID', prop: 'name' },
        { label: '城市', prop: 'city' },
        { label: '最近一次使用', prop: 'lastUsedTime' },
        { label: '年龄', prop: 'age' },
        { label: '性别', prop: 'gender' },
        { label: '职业', prop: 'occupation' },
        { label: '电话', prop: 'cellphone' }
      ],

      tableBasic: `<template>
  <x-table :data="tableData">
    <x-table-column
      v-for="(header, index) in tableHeaders"
      :key="index"
      :label="header.label"
      :prop="header.prop">
    </x-table-column>
  </x-table>
</template>

<script>
export default {
  data () {
    return {
      rowCount: 5,
      tableHeaders: [
        { label: '用户ID', prop: 'name' },
        { label: '城市', prop: 'city' },
        { label: '最近一次使用', prop: 'lastUsedTime' }
      ]
    }
  },
  computed: {
    tableData () {
      const list = []
      for (let i = 0; i < this.rowCount; i++) {
        list.push({
          name: '易小宝',
          city: '长沙',
          lastUsedTime: '2018-09-01 12:30:33'
        })
      }
      return list
    }
  }
}
<\/script>`,
      tableStripe: `<x-table stripe :data="tableData">
  <x-table-column
    v-for="(header, index) in tableHeaders"
    :key="index"
    :label="header.label"
    :prop="header.prop">
  </x-table-column>
</x-table>`,
      tableBorder: `<x-table border :data="tableData">
  <x-table-column
    v-for="(header, index) in tableHeaders"
    :key="index"
    :label="header.label"
    :prop="header.prop">
  </x-table-column>
</x-table>`,
      tableHeight: `<x-table border height="250" :data="tableData">
  <x-table-column
    v-for="(header, index) in tableHeaders"
    :key="index"
    :label="header.label"
    :prop="header.prop">
  </x-table-column>
</x-table>`,
      tableFixed: `<x-table stripe :data="tableData">
  <x-table-column
    v-for="(header, index) in detailTableHeaders"
    :fixed="index === 3 ? 'right' : index === 1 ? 'left' : false"
    :key="index"
    :width="180"
    :label="header.label"
    :prop="header.prop">
  </x-table-column>
</x-table>`,
      tableMultiple: `<template>
  <x-table :data="tableData">
    <template v-for="(header, i) in multipleHeaders">
      <x-table-column
        v-if="header.children"
        :key="i"
        :label="header.label">
        <x-table-column
          v-for="(sub, j) in header.children"
          :key="j"
          :label="sub.label"
          :prop="sub.prop">
        </x-table-column>
      </x-table-column>
      <x-table-column
        v-else
        :key="i"
        :label="header.label"
        :prop="header.prop">
      </x-table-column>
    </template>
  </x-table>
</template>

<script>
export default {
  data () {
    return {
      rowCount: 5,
      multipleHeaders: [
        { label: '用户ID', prop: 'name' },
        { label: '最近一次使用', prop: 'lastUsedTime' },
        {
          label: '地址',
          children: [
            { label: '省份', prop: 'province' },
            { label: '城市', prop: 'city' },
            { label: '详细地址', prop: 'address' }
          ]
        }
      ]
    }
  },
  computed: {
    tableData () {
      const list = []
      for (let i = 0; i < this.rowCount; i++) {
        list.push({
          name: '易小宝',
          city: '长沙',
          lastUsedTime: '2018-09-01 12:30:33',
          province: '湖南',
          address: '岳麓区岳麓山下'
        })
      }
      return list
    }
  }
}
<\/script>`,
      tableSelection: `<x-table :data="tableData">
  <x-table-column type="selection"></x-table-column>
  <x-table-column
    v-for="(header, index) in tableHeaders"
    :key="index"
    :label="header.label"
    :prop="header.prop">
  </x-table-column>
</x-table>`,
      tableSort: `<template>
  <x-table :data="tableData">
    <x-table-column
      v-for="(header, index) in sortableHeaders"
      :sortable="header.sortable"
      :sort-method="header.sortMethod"
      :key="index"
      :label="header.label"
      :prop="header.prop">
    </x-table-column>
  </x-table>
</template>

<script>
export default {
  data () {
    return {
      rowCount: 5,
      sortableHeaders: [
        { label: '用户ID', prop: 'name' },
        { label: '城市', prop: 'city' },
        { label: '最近一次使用', prop: 'lastUsedTime' },
        { label: '使用次数', prop: 'usedCount', sortable: true, sortMethod: this.sortMethod }
      ]
    }
  },
  computed: {
    tableData () {
      const list = []
      for (let i = 0; i < this.rowCount; i++) {
        list.push({
          name: '易小宝',
          city: '长沙',
          lastUsedTime: '2018-09-01 12:30:33',
          usedCount: Math.floor(Math.random() * 10)
        })
      }
      return list
    }
  },
  methods: {
    sortMethod (a, b) {
      return a.usedCount - b.usedCount
    }
  }
}
<\/script>`,
      tableCustom: `<x-table :data="tableData">
  <x-table-column
    v-for="(header, index) in tableHeaders"
    :key="index"
    :label="header.label"
    :prop="header.prop">
    <template slot="header" slot-scope="scope">
      <div
        style="height: 40px;line-height: 40px;background: #ddd;"
        >{{scope.column.label}}-{{scope.$index}}</div>
    </template>
    <template slot="content" slot-scope="scope">
      <div
        style="line-height: 30px;text-align: center;background: #eee;"
        >{{scope.content}}-{{scope.$rowIndex}}</div>
    </template>
  </x-table-column>
</x-table>`,
      tableSlot: `<x-table :data="tableData">
  <x-table-column
    v-for="(header, index) in tableHeaders"
    :key="index"
    sortable
    :label="header.label"
    :header-align="index === 2 ? 'right' : 'left'"
    :align="index === 2 ? 'right' : 'left'"
    :prop="header.prop">
    <template slot="prepend" slot-scope="scope">
      <div :style="{margin:index === 2 ? '0 0 0 10px' : '0 10px 0 0'}">前置{{scope.$index}}</div>
    </template>
    <template slot="append" slot-scope="scope">
      <div>后置{{scope.$index}}</div>
    </template>
    <template slot="headerText" slot-scope="scope">
      <div>文本插槽</div>
      <div>{{scope.column.label}}</div>
    </template>
  </x-table-column>
</x-table>`,
      tableExpand: `<x-table :data="tableData">
  <x-table-column type="expand">
    <template slot="expand" slot-scope="scope">
      <div
        style="height: 100px;line-height:100px;text-align:center;color:#cdcdcd;"
        >这里是第{{scope.$index}}行的展开行内容</div>
    </template>
  </x-table-column>
  <x-table-column
    v-for="(header, index) in tableHeaders"
    :key="index"
    :label="header.label"
    :prop="header.prop">
  </x-table-column>
</x-table>`,
      tableTree: `<template>
  <x-table :data="treeData">
    <x-table-column
      v-for="(header, index) in tableHeaders"
      :key="index"
      :label="header.label"
      :prop="header.prop">
    </x-table-column>
  </x-table>
</template>

<script>
export default {
  data () {
    return {
      rowCount: 5,
      tableHeaders: [
        { label: '用户ID', prop: 'name' },
        { label: '城市', prop: 'city' },
        { label: '最近一次使用', prop: 'lastUsedTime' }
      ]
    }
  },
  computed: {
    treeData () {
      const tree = this.getListData()
      tree[2].children = this.getListData()
      tree[2].children[2].children = this.getListData()
      return tree
    }
  },
  methods: {
    getListData () {
      const list = []
      for (let i = 0; i < this.rowCount; i++) {
        list.push({
          name: '易小宝',
          city: '长沙',
          lastUsedTime: '2018-09-01 12:30:33'
        })
      }
      return list
    }
  }
<\/script>`,
      tableSpan: `<template>
  <x-table :data="tableData" :cell-span-method="cellSpanMethod">
    <template v-for="(header, i) in multipleHeaders">
      <x-table-column
        v-if="header.children"
        :key="i"
        :label="header.label">
        <x-table-column
          v-for="(sub, j) in header.children"
          :key="j"
          :label="sub.label"
          :prop="sub.prop">
        </x-table-column>
      </x-table-column>
      <x-table-column
        v-else
        :key="i"
        :label="header.label"
        :prop="header.prop">
      </x-table-column>
    </template>
  </x-table>
</template>

<script>
export default {
  data () {
    return {
      rowCount: 5,
      multipleHeaders: [
        { label: '用户ID', prop: 'name' },
        { label: '最近一次使用', prop: 'lastUsedTime' },
        {
          label: '地址',
          children: [
            { label: '省份', prop: 'province' },
            { label: '城市', prop: 'city' },
            { label: '详细地址', prop: 'address' }
          ]
        }
      ]
    }
  },
  computed: {
    tableData () {
      const list = []
      for (let i = 0; i < this.rowCount; i++) {
        list.push({
          name: '易小宝',
          city: '长沙',
          lastUsedTime: '2018-09-01 12:30:33',
          province: '湖南',
          address: '岳麓区岳麓山下'
        })
      }
      return list
    }
  },
  methods: {
    cellSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
      if (columnIndex === 3) {
        if (rowIndex === 1) {
          return [2, 1]
        } else if (rowIndex === 2) {
          return [0, 0]
        }
      }
      return [1, 1]
    }
  }
}
<\/script>`,
      tableAffix: `<x-table border affix :data="longTableData">
  <x-table-column
    v-for="(header, index) in tableHeaders"
    :key="index"
    :label="header.label"
    :prop="header.prop">
  </x-table-column>
</x-table>`
    }
  },

  computed: {
    tableData () {
      return this.getListData()
    },

    longTableData () {
      return this.tableData.concat(this.tableData.concat(this.tableData))
    },

    treeData () {
      const tree = this.getListData()
      tree[2].children = this.getListData()
      tree[2].children[2].children = this.getListData()
      return tree
    }
  },

  methods: {
    getListData () {
      const list = []
      for (let i = 0; i < this.rowCount; i++) {
        list.push({
          id: i + 1,
          name: '易小宝',
          city: '长沙',
          lastUsedTime: '2018-09-01 12:30:33',
          province: '湖南',
          address: '岳麓区岳麓山下',
          age: '22',
          gender: '男',
          occupation: '工程师',
          cellphone: '18888888888',
          usedCount: Math.floor(Math.random() * 10)
        })
      }
      return list
    },

    cellSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
      if (columnIndex === 3) {
        if (rowIndex === 1) {
          return [2, 1]
        } else if (rowIndex === 2) {
          return [0, 0]
        }
      }
      return [1, 1]
    },

    sortMethod (a, b) {
      return a - b
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

<style lang="scss">
</style>
