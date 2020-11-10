const requestLists = {
    get: function (id) {
        fetch('' + id)
        .then (res => {
            if(res.ok) {
                return res.json();
            } else throw new Error('response not ok')
        })
        .then (response => {
          console.log(response, '  get successful. ');
        })
        .catch (error => { console.log(error, 'errrrrrr') });
    },
    getAll: function () {
        fetch('')
        .then (res => {
            if(res.ok) {
                return res.json();
            } else throw new Error('response not ok')
        })
        .then (response => {
          console.log(response, '  get successful. ');
        })
        .catch (error => { console.log(error, 'errrrrrr') });
    },
    put: function (list, id) {
        var data = new URLSearchParams();
        data.append('list', list);
      
        fetch('' + id, {
          method: 'put',
          body: data
        })
        .then (res => {
            if(res.ok) {
                return res.json();
            } else throw new Error('response not ok')
        })
        .then (response => {
          console.log(response, '  PUT successful. ');
        })
        .catch (error => { console.log(error) });
    },
    delete: function (id) {

        fetch('' + id, {
          method: 'delete'
        })
        .then (res => {
            if(res.ok) {
                return res.json();
            } else throw new Error('response not ok')
        })
        .then (response => {
          console.log(response, '  DELETE successful. ');
        })
        .catch (error => { console.log(error), ' the error '});
    },
    post: function (list) {
        //console.log();
        
        var data = new URLSearchParams();
        data.append('list', list);
      
        fetch('http://localhost:8080/list', {
          method: 'post',
          body: data,
          headers: {
            type: 'application/json'
          }
        })
        .then (res => {
            if(res.ok) {
                return res.json();
            } else throw new Error('response not ok')
        })
        .then (response => {
          console.log(response, '  POST successful. ');
        })
        .catch (error => { console.log(error), ' the error '});
    }
}


export default requestLists;