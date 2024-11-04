export const typesMap = {"article":{"/":{"path":"/article/","indexes":[13,0,19,20,21,22,23,14,8,7,6,17,18,9,10,11,12,15,16,24,1,2,3,5,4]}},"star":{"/":{"path":"/star/","indexes":[9,19,20,21,22,23,14,13,15,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[19,20,21,22,23,14,13,8,7,6,17,18,9,10,11,12,15,16,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

