export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,11,12,13,17,14,15,18,28,29,32,33,31,34,19,20,1,21,22,2,23,24,25,26,3,4,5,16,6,30,27,7,8,10,9]}},"star":{"/":{"path":"/star/","indexes":[11,12,13,17,14,15,18,28,29,32,33,31,19,20,21,22,23,24,25,26,16,30,27,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[11,12,13,17,14,15,18,28,29,32,33,31,34,19,20,1,21,22,2,23,24,25,26,3,4,5,16,6,30,27,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

