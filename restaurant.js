

const url = "https://zomato-express.prerananawar.repl.co/restaurants";

const showList =(items)=>{
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = '';
    items.map((item)=>{
        const list = document.createElement("li");
        list.className = "list-group-item";
        itemList.innerHTML = `
        <h1>${item.name}</h1>
        <p>Cuisine: ${item.cuisine}</p>
        <p>Address: ${item.address} ${item.city}</p>
        <p>Rating: ${item.rating}</p>
        <button class="btn btn-primary" onClick="detail('${item._id}')"> View Detail</button>
        <button class="btn btn-danger" onClick="delete('${item._id}')"> Delete</button>
        <button class="btn btn-warning" onClick="update('${item._id}')"> Update</button>
        `
        itemList.appendChild(list);
    })
}



const fetchData = async()=>{
  const res = await fetch(url);
  const data = await res.json();
  if(data.length !== 0){
    // console.log(data)
    showList(data);
  }

}
fetchData()