fetch('https://api.github.com/users/mesumbinshaukat')
.then((response)=>{
    // console.log(response);
    return response.json()
})
.then((response) => {
    // console.log(response);
    return response.name
})
.then((name) => console.log(name))
.catch((err) => console.log(err))