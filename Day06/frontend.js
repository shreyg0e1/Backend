
// Default : get method
const response2 = await fetch ('https://api.example.com/data');
const data = response2.json(); 

// format
const response = await fetch ('https://api.example.com/data',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({name:'Shrey', age:30})
});


const response3 = await fetch ('https://api.example.com/data',{
    method:'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({name:'Shrey', age:30})
});