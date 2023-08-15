## 推荐的 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用 Vetur）+ [TypeScript Vue 插件 (Volar) )](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)。

## 自定义配置

参见【Vite配置参考】(https://vitejs.dev/config/)。

## 获取代码

```bash
git clone 
```

## 项目设置

````sh
pnpm install
````

### 编译和热重载以进行开发

````sh
pnpm dev
````

### 编译并缩小以用于生产

````sh
pnpm build
````

### vue、element-plus、element-plus/icons-vue 自动导入使用

/**
 * 图标无需导入 用法：i-ep-<图标名称>
 * 错误：<location />
 * 正确：<i-ep-location />
 * vue 相关方法、api也无需导入 
 * 直接使用 ref等：const isCollapse = ref(false)
*/
