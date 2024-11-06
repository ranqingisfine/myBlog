export const typesMap = {"article":{"/":{"path":"/article/","indexes":[13,0,14,15,16,17,18,19,25,26,20,8,7,6,23,24,9,10,11,12,21,22,27,1,2,3,5,4]}},"star":{"/":{"path":"/star/","indexes":[9,14,15,16,17,18,19,25,26,20,13,21,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[14,15,16,17,18,19,25,26,20,13,8,7,6,23,24,9,10,11,12,21,22,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

