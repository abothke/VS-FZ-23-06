import './animalitem.css'
const AnimalItem = (animal) => {
    return ( 
        <>
        <div id="animal-item">
            <div id="general-info-animal">
            <h2 id="emoji">{animal.emoji}</h2>
            <h2>{animal.name}</h2>
            <h3>{animal.species}</h3>
            <h3>{animal.diet}</h3>
            <h4>{animal.lifespan} years</h4>
            </div>
            <div id="info-list-animal">
            {animal.funFacts.map((funFact =>
                <li>{funFact}</li>
                ))}
            </div>
        </div>
        </>
     );
}
 
export default AnimalItem;