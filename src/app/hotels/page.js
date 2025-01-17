async function getData(){
    const res = await fetch("https://snowtooth-hotel-api.fly.dev");
    return res.json();
}

function HotelBlock({name, capacity}){
return (
    <div>
        <h2>{name}</h2>
        <p>{capacity}</p>
        </div>

)

}

export default async function Page(){
const data = await getData();
return(
<main>
    <div>
        <h1>Hi there, hotels.</h1>
        <img src="https://github.com/connorwiebe.png" height={200} alt='A photo'/>
        {data.map((hotel)=>
        <ol>
            <HotelBlock id={hotel.id} name={hotel.name} capacity={hotel.capacity} />
        </ol>
    )}
    </div>
</main>
);
}