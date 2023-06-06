export const Label=({title, src})=>{
  return(
    <div className="label">
      <img src={src}/>
      <h2>{title}</h2>
    </div>
  )
}