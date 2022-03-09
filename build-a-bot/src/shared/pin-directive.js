// Optim version for beforeMounted and update :
export default function (element, binding) {
  /* eslint no-param-reassign: ["error", { "props": false }] */
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}
// of :
/* function applyStyle(element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

export default {
  beforeMount(element, binding) {
    // First way
    // if (binding.arg !== 'position') return;
    // Object.keys(binding.modifiers).forEach((key) => {
    //   element.style[key] = '5px';
    // });
    // element.style.position = 'absolute';
    // 2nd way
/* applyStyle(element, binding);
  },
  updated: (element, binding) => {
    applyStyle(element, binding);
  },
  // less used
  created: (element, binding) => {
    applyStyle(element, binding);
  },
  mounted: (element, binding) => {
    applyStyle(element, binding);
  },
  beforeUnmount: (element, binding) => {
    applyStyle(element, binding);
  },
  unmounted: (element, binding) => {
    applyStyle(element, binding);
  },

}; */
