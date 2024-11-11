export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,11,26,27,24,25,23,28,14,15,1,16,17,2,3,18,19,20,21,4,5,6,12,13,22,7,8,10,9]}},"star":{"/":{"path":"/star/","indexes":[11,26,27,24,25,23,14,15,16,17,18,19,20,21,12,13,22,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[11,26,27,24,25,23,28,14,15,1,16,17,2,3,18,19,20,21,4,5,6,12,13,22,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

