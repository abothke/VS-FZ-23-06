const BirdCard = ({name, description, imageUrl}) => {

    return (
    <div className='shadow-md overflow-hidden p-3'>
    <div className='bg-slate-500 aspect-video'>
        <img src={imageUrl} className='object-cover aspect-video' alt=''></img>
    </div>
   
    <h3 className='font-bold'>{name}</h3>
    <p className='line-clamp-3'>{description}</p>
    </div>

  )
}

export default BirdCard