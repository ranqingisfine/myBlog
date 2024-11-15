export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,11,12,13,14,18,15,22,23,16,24,25,26,17,27,28,19,40,41,20,21,42,31,32,1,33,34,2,3,35,36,37,38,4,5,6,29,30,39,7,8,10,9]}},"star":{"/":{"path":"/star/","indexes":[11,12,13,14,18,15,22,23,16,24,25,26,17,27,28,19,40,41,20,21,31,32,33,34,35,36,37,38,29,30,39,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[11,12,13,14,18,15,22,23,16,24,25,26,17,27,28,19,40,41,20,21,42,31,32,1,33,34,2,3,35,36,37,38,4,5,6,29,30,39,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

