export const typesMap = {"article":{"/":{"path":"/article/","indexes":[0,42,43,26,44,45,21,22,38,23,24,25,41,48,49,50,51,52,53,54,55,56,57,61,13,14,58,15,16,17,59,18,19,60,46,47,39,62,40,1,37,2,28,29,3,30,31,4,5,32,33,34,35,6,7,8,20,27,36,9,10,12,11]}},"star":{"/":{"path":"/star/","indexes":[42,43,26,44,45,21,22,38,23,24,25,41,48,49,50,51,52,53,54,55,56,57,61,13,14,58,15,16,17,59,18,19,60,46,47,39,40,37,28,29,30,31,32,33,34,35,20,27,36,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[42,43,26,44,45,21,22,38,23,24,25,41,48,49,50,51,52,53,54,55,56,57,61,13,14,58,15,16,17,59,18,19,60,46,47,39,62,40,1,37,2,28,29,3,30,31,4,5,32,33,34,35,6,7,8,20,27,36,0]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

