export const typesMap = {"article":{"/":{"path":"/article/","indexes":[13,0,20,21,22,23,24,18,19,25,8,7,6,16,17,9,10,11,12,14,15,26,1,2,3,5,4]}},"star":{"/":{"path":"/star/","indexes":[9,20,21,22,23,24,18,19,25,13,14,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[20,21,22,23,24,18,19,25,13,8,7,6,16,17,9,10,11,12,14,15,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

