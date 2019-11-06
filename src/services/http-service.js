import "whatwg-fetch";
 
class HttpService {
  getProducts = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:3001/product").then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };
}

export default HttpService;
