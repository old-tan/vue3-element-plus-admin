<template>
  <div>
    <el-container class="home_wrap">
      <el-aside>

        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
          @close="handleClose">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <!-- <location /> -->
                <i-ep-location />
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon>
              <i-ep-menu />
            </el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon>
              <i-ep-document />
            </el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <i-ep-setting />
            </el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-header>
          <div class="control_menu">
            <el-icon @click="isCollapse = !isCollapse" v-show="isCollapse">
              <i-ep-expand />
            </el-icon>
            <el-icon @click="isCollapse = !isCollapse" v-show="!isCollapse">
              <i-ep-fold />
            </el-icon>
          </div>
          <!-- 面包屑 -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>

      </el-main>
    </el-container>
  </div>
</template>
<script setup>
/**
 * element-plus 图标无需导入 用法：i-ep-图标名称
 * 错误：<location />
 * 正确：<i-ep-location />
 * vue 相关方法、api也无需导入 
 * 直接使用 ref等：const isCollapse = ref(false)
*/

// import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router'

const isCollapse = ref(false)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

const router = useRouter();
// 挂载 DOM 之前
onBeforeMount(() => {
  activePath.value = sessionStorage.getItem("activePath")
    ? sessionStorage.getItem("activePath")
    : "/index"
})
let activePath = ref("");
// 保存链接的激活状态
const saveActiveNav = (path) => {
  sessionStorage.setItem("activePath", path);
  activePath.value = path;
}
const logout = () => {
  // 清除缓存
  sessionStorage.clear();
  router.push("/login");
}
</script>

<style scoped>
.home_wrap {
  height: 100vh;

  .el-aside {
    display: flex;
    flex-wrap: wrap;
    width: auto;
    color: #333;
    text-align: center;
    background-color: #001529;
    position: relative;
    overflow: hidden;



    .el-menu-vertical-demo:not(.el-menu--collapse) {
      max-width: 200px;
      min-height: 400px;
    }
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;

    .el-header {
      height: 40px;
      line-height: 40px;
      display: flex;
      align-items: center;
      position: relative;

      .control_menu {
        position: absolute;
        /* left: 0; */
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        display: flex;
        align-items: center;

        .el-icon {
          font-size: 18px;
          cursor: pointer;
          color: #001529;
        }
      }
    }
  }


  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }
}
</style>