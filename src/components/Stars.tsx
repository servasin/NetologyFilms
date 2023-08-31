import Star from "./Star"

type rangeStars =  {
  count: number,
}

function Stars({count}:rangeStars) {  
  if (count<1 || count>5) {
    return null
  }
    const arr = new Array(count).fill(<Star />)
    
    return (
      <ul className="stars-list">
        {arr.map((el, i) =>
          <li key={i}>
            {el}
          </li>
        )}  
      </ul>
    )
  }


export default Stars
