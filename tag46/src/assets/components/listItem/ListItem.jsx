import CardItem from "../cardItem/cardItem";

const ListItem = ({uebergebendeData}) => {
    return ( 
        <>
        <main>
            {uebergebendeData.map((car, index) =>{
                    return (
                        <div key={index}>
                            <CardItem 
                            marke={car.marke}
                            farbe={car.farbe}
                            modell={car.modell}
                            produktionsjahr={car.produktionsjahr}
                            ps={car.ps}
                            />
                        </div>
                    )
            })}
        </main>
        </>
     );
}
 
export default ListItem;