async function getData(){

const res = await fetch ("https:/snowtooth-api-rest.fly.dev");
return res.json();
}


export default async function Page(){
    const data = await getData();
return(
    <main>
        <h2>This is a list of items</h2>
        <table>
            <thead>
                <tr>
                    <th>Lift name</th>
                    <th>Current status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((lift)=>
                <tr key={lift.id}>
                    <th>
                        {lift.name}
                    </th>
                    <th>
                        {lift.status}
                    </th>
                </tr>)}
            </tbody>
        </table>
        
    </main>
);

}