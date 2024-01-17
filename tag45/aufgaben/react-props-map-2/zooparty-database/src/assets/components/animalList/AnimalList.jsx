import AnimalItem from "../animalItem/AnimalItem";

const AnimalList = ({animals}) => {
    return ( 
        <>
            {animals.map((animal =>
                <AnimalItem
                name={animal.name}
                emoji={animal.emoji}
                species={animal.species}
                diet={animal.diet}
                lifespan={animal.lifespan}
                funFacts={animal.funFacts}
                />
                ))}
        </>
     );
}
 
export default AnimalList;