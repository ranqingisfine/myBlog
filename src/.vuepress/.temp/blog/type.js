export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,25,26,23,24,22,27,13,14,1,15,16,2,3,17,18,19,20,4,5,6,11,12,21,7,8,10,9]}},"star":{"/":{"path":"/star/","indexes":[25,26,23,24,22,13,14,15,16,17,18,19,20,11,12,21,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[25,26,23,24,22,27,13,14,1,15,16,2,3,17,18,19,20,4,5,6,11,12,21,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

