export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,11,12,24,25,27,28,26,29,15,16,1,17,18,2,19,20,21,22,3,4,5,6,13,14,23,7,8,10,9]}},"star":{"/":{"path":"/star/","indexes":[11,12,24,25,27,28,26,15,16,17,18,19,20,21,22,13,14,23,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[11,12,24,25,27,28,26,29,15,16,1,17,18,2,19,20,21,22,3,4,5,6,13,14,23,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

