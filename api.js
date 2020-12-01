const api = ({ method, url, data, accept = "application/json" }, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', function(){
      const { readyState, DONE, response } = this;
      
      if (readyState === DONE) {
          const data = JSON.parse(response);

          callback(data);
      }
  });

  xhr.open(method, url);
  xhr.send(data);
}

export default api