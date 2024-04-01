import YssIcon from './src/index';

/* istanbul ignore next */
YssIcon.install = function(Vue) {
  Vue.component(YssIcon.name, YssIcon);
};

export default YssIcon;
