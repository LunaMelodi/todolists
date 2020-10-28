export default function updateCheckStatus(id, status) {
    console.log( 'updateCheckStatus() ---- ');
    
    var data = new URLSearchParams();
    data.append('completed', status);
  
    fetch(`http://localhost:8080/api/todos/${id}`, {
      method: 'put',
      body: data
    })
    .then (res => res.text())
    .then (text => {
      console.log(text, 'updateCheckStatus() ');
    })
    .catch (error => { console.log(error) });
}
