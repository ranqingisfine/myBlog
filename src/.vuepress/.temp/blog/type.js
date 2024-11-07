export const typesMap = {"article":{"/":{"path":"/article/","indexes":[13,0,14,15,16,17,18,19,20,21,25,28,22,8,7,6,26,27,9,10,11,12,23,24,29,1,2,3,5,4]}},"star":{"/":{"path":"/star/","indexes":[9,14,15,16,17,18,19,20,21,25,28,22,13,23,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[14,15,16,17,18,19,20,21,25,28,22,13,8,7,6,26,27,9,10,11,12,23,24,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

