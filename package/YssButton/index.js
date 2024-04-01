import YssButton from './src/index';

YssButton.install = function(Vue) {
  Vue.components(YssButton.name, YssButton);
};

export default YssButton;
