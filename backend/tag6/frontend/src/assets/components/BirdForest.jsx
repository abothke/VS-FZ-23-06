import { useEffect, useState } from "react"
import BirdCard from "./BirdCard"

const BirdForest = () => {
    const [birds, setBirds] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/birds')
            .then((res) => res.json())
            .then((birdsJson) => setBirds(birdsJson))
    }, [])
    
    return (
        <div className="grid grid-cols-3 gap-2">
                {birds.map((bird) => {
                    return (
                        <BirdCard
                            name={bird.name}
                            description={bird.description}
                            imageUrl={bird.imageUrl}
                        />
                    );
                })}
        </div>
    )
}

export default BirdForest