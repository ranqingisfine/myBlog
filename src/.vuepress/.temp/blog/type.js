export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,21,12,13,22,14,15,1,16,17,18,19,2,3,4,5,10,11,20,6,7,9,8,23]}},"star":{"/":{"path":"/star/","indexes":[21,12,13,14,15,16,17,18,19,10,11,20,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[21,12,13,22,14,15,1,16,17,18,19,2,3,4,5,10,11,20,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

