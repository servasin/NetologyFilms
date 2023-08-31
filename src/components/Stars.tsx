import Star from "./Star"

type rangeStars =  {
  count: number,
}

function Stars({count}:rangeStars) {
  console.log(count);
  
  if (count<1 || count>5) {
    return null
  } else {

    const arr = Array(count)
    return (
      <ul>
        {arr.map(((i) =>
        <li key={i}>
          <Star />
        </li>
      ))}  
      </ul>
    )
  }
}

export default Stars
