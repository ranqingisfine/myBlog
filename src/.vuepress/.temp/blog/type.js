export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,11,12,34,13,14,15,35,16,17,36,32,33,30,31,29,37,20,21,1,22,23,2,3,24,25,26,27,4,5,6,18,19,28,7,8,10,9]}},"star":{"/":{"path":"/star/","indexes":[11,12,34,13,14,15,35,16,17,36,32,33,30,31,29,20,21,22,23,24,25,26,27,18,19,28,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[11,12,34,13,14,15,35,16,17,36,32,33,30,31,29,37,20,21,1,22,23,2,3,24,25,26,27,4,5,6,18,19,28,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

