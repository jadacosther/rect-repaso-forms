function ListaPerson({data}){
return <div>
    <ul>
   {data.map(({name, lastname, phone}, index)=>{
    return <li key={index}>
        {name},
        {lastname},
        {phone}
        </li>
   })}
   </ul>
</div>
}

export default ListaPerson