/**
 * some tool functions
 */

const getAbsoluteUrl = (() => {
  let a;

  return url => {
    if(!a) a = document.createElement('a');
    a.href = url;
    return a.href;
  };
})();


export {getAbsoluteUrl}
