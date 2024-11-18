export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,36,37,38,39,40,41,42,43,44,45,49,13,14,46,15,16,17,47,18,19,48,34,35,32,50,33,1,31,2,22,23,3,24,25,4,5,26,27,28,29,6,7,8,20,21,30,9,10,12,11]}},"star":{"/":{"path":"/star/","indexes":[36,37,38,39,40,41,42,43,44,45,49,13,14,46,15,16,17,47,18,19,48,34,35,32,33,31,22,23,24,25,26,27,28,29,20,21,30,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[36,37,38,39,40,41,42,43,44,45,49,13,14,46,15,16,17,47,18,19,48,34,35,32,50,33,1,31,2,22,23,3,24,25,4,5,26,27,28,29,6,7,8,20,21,30,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

