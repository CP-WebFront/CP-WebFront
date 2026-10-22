
const Card = () => {
  return (
    <div>
      <img src={imagem} alt={titulo} className="w-full h-[260px] object"/>
      <article className="text-center p-4">
        <h2>{titulo}</h2>
        <p>{preco}</p>

        <button className="w-[50%] py-2 px-4 rounded-[20px] border-none cursor-pointer font-semibold scale-105">Comprar</button>
      </article>   

    </div>
  )
}

export default Card
