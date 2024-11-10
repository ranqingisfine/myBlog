export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,22,23,21,12,13,24,14,15,1,2,16,17,18,19,3,4,5,10,11,20,6,7,9,8,25]}},"star":{"/":{"path":"/star/","indexes":[22,23,21,12,13,14,15,16,17,18,19,10,11,20,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[22,23,21,12,13,24,14,15,1,2,16,17,18,19,3,4,5,10,11,20,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

