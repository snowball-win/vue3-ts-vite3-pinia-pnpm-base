<script setup lang="ts">
  // import { getUser } from "../api/m-staff-center";
  // const s = getUser({
  //   text: "snow",
  // });
  interface Tree {
  label: string
  children?: Tree[]
}

const handleSelectionChange = () => {
  
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
] 
const defaultProps = {
  children: 'children',
  label: 'label',
}
let activeName = 'first'
</script>

<template>
<div class="contmian">
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">
      <div class="flex">
        <el-tree :data="data" class="tree" :props="defaultProps" @node-click="handleNodeClick" />
        <el-table
          ref="multipleTableRef"
          :data="tableData"
          class="table"
          @selection-change="handleSelectionChange"
        >
          <el-table-column fixed prop="date" label="Date" width="150" />
          <el-table-column prop="name" label="Name" width="120" />
          <el-table-column prop="state" label="State" width="120" />
          <el-table-column prop="city" label="City" width="120" />
          <el-table-column prop="address" label="Address" width="600" />
          <el-table-column prop="zip" label="Zip" width="120" />
          <el-table-column fixed="right" label="Operations" width="120">
            <template #default>
              <el-button link type="primary" size="small" @click="handleClick"
                >Detail</el-button
              >
              <el-button link type="primary" size="small">Edit</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Config" name="second">
        <div class="flex">
          <el-tree :data="data" class="tree" :props="defaultProps" @node-click="handleNodeClick" />
          <el-table
            ref="multipleTableRef"
            :data="tableData"
            class="table"
            @selection-change="handleSelectionChange"
          >
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="120" />
            <el-table-column prop="address" label="Address" width="600" />
            <el-table-column prop="zip" label="Zip" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
              <template #default>
                <el-button link type="primary" size="small" @click="handleClick"
                  >Detail</el-button
                >
                <el-button link type="primary" size="small">Edit</el-button>
              </template>
            </el-table-column>
          </el-table>
  </div>
    </el-tab-pane>
    <el-tab-pane label="Role" name="third">  
      <div class="flex">
    <el-tree :data="data" class="tree" :props="defaultProps" @node-click="handleNodeClick" />
    <el-table
      ref="multipleTableRef"
      :data="tableData"
      class="table"
      @selection-change="handleSelectionChange"
    >
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="600" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"
            >Detail</el-button
          >
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
     </el-table>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Task" name="fourth">  
      <div class="flex">
        <el-tree :data="data" class="tree" :props="defaultProps" @node-click="handleNodeClick" />
        <el-table
          ref="multipleTableRef"
          :data="tableData"
          class="table"
          @selection-change="handleSelectionChange"
        >
          <el-table-column fixed prop="date" label="Date" width="150" />
          <el-table-column prop="name" label="Name" width="120" />
          <el-table-column prop="state" label="State" width="120" />
          <el-table-column prop="city" label="City" width="120" />
          <el-table-column prop="address" label="Address" width="600" />
          <el-table-column prop="zip" label="Zip" width="120" />
          <el-table-column fixed="right" label="Operations" width="120">
            <template #default>
              <el-button link type="primary" size="small" @click="handleClick"
                >Detail</el-button
              >
              <el-button link type="primary" size="small">Edit</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-tab-pane>
  </el-tabs>

  
</div>
  
</template>

<style scoped lang="less">
.contmian{
  width: 97%;
  min-height: 90vh;
  padding: 1rem;
  background: #fff;
  .flex{
    display: flex;
    .tree{
      width: 15%;
      // min-height: 80vh;
      
      border: 1px solid #e6e6e6;
      color: #333;
    }
    .table{
      flex: 1;
      margin-left: 0.5rem;
    }
  }
}
.demo-tabs > .el-tabs__content {
  /* padding: 32px; */
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.read-the-docs {
  color: #888;
}
</style>
