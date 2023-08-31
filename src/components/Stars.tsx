import Star from "./Star"

type rangeStars =  {
  count: number,
}

function Stars({count}:rangeStars) {  
  if (count<1 || count>5) {
    return null
  } else {
    const arr = new Array(count).fill('')
    
    return (
      <ul className="stars-list">
        {arr.map((_, i) =>
          <li key={i}>
            <Star />
          </li>
        )}  
      </ul>
    )
  }
}

export default Stars
