export const typesMap = {"article":{"/":{"path":"/article/","indexes":[7,8,21,22,23,24,17,20,16,2,1,0,18,19,3,4,5,6,14,15,25,9,10,11,13,12]}},"star":{"/":{"path":"/star/","indexes":[3,21,22,23,24,17,20,16,7,14,8]}},"timeline":{"/":{"path":"/timeline/","indexes":[21,22,23,24,17,20,16,7,2,1,0,18,19,3,4,5,6,14,15,8]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

