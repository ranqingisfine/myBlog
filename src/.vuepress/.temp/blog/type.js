export const typesMap = {"article":{"/":{"path":"/article/","indexes":[13,0,18,8,7,6,14,15,9,10,11,12,16,17,19,1,2,3,5,4]}},"star":{"/":{"path":"/star/","indexes":[9,18,13,16,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[18,13,8,7,6,14,15,9,10,11,12,16,17,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

