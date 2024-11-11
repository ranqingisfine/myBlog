export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,11,12,27,28,25,26,24,29,15,16,1,17,18,2,3,19,20,21,22,4,5,6,13,14,23,7,8,10,9,30]}},"star":{"/":{"path":"/star/","indexes":[11,12,27,28,25,26,24,15,16,17,18,19,20,21,22,13,14,23,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[11,12,27,28,25,26,24,29,15,16,1,17,18,2,3,19,20,21,22,4,5,6,13,14,23,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

