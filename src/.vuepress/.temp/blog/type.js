export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,10,11,12,13,21,1,14,15,16,17,2,3,9,4,20,18,19,5,6,8,7]}},"star":{"/":{"path":"/star/","indexes":[10,11,12,13,14,15,16,17,9,20,18,19,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[10,11,12,13,21,1,14,15,16,17,2,3,9,4,20,18,19,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

