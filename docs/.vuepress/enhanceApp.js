
// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';

// export default ({
// 	Vue // VuePress 正在使用的 Vue 构造函数
// }) => {
// 	// Vue.use(ElectronUI)
// 	Vue.use(VueRouter);
// 	Vue.use(ViewUI);

// }
// import Element from 'element-ui'
import Vue from 'vue';
// import iconJson from '@bop/electron-ui/dist/styles/fonts/iconfont.json'
import ElectronUI from '@bop/electron-ui'
import '@bop/electron-ui/dist/styles/electron-ui.css'
Vue.use(ElectronUI);
// Vue.prototype.iconJson=iconJson
export default ({ Vue, options, router, siteData }) => {
};
