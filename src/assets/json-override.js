let oldXHROpen = window.XMLHttpRequest.prototype.open;
window.XMLHttpRequest.prototype.open = function (
  method,
  url,
  async,
  user,
  password
) {
  url = url.replace('.json', '');
  return oldXHROpen.apply(this, arguments);
};
