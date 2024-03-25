const BirdList = ({birds, entries}) => {
 console.log(birds)
 console.log(entries)
  return (
    <div>
    <h2>Birds</h2>
    <ul>
      {birds.map((bird) => (
        <li key={bird._id}>
        <img src={bird.imageUrl} style={{maxWidth: '200px'}} alt={bird.name} />
        <p className="text-gray-700">{bird.latinName}</p>
        <p className="text-gray-700">{bird.name}</p>
        <h3 className="mt-2">Entries</h3>
        <ul>
          {entries.filter((entry) => entry.bird._id === bird._id).map((entry) => (
            <li key={entry._id}>{entry.content}</li>
          ))}
        </ul>
        </li>
        ))}
    </ul>
  </div>
  )
}

export default BirdList