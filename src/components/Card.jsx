
const Card = () => {
  return (
    <div>
      <img src={imagem} alt="{titulo}" />
      <h2>{titulo}</h2>
      <p>{preco}</p>
    </div>
  )
}

export default Card
