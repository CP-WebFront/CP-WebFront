const Card = ({ imagem, titulo, preco }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imagem}
        alt={titulo}
        className="w-full h-[260px] object-cover"
      />

      <article className="text-center p-4">
        <h2 className="text-xl font-bold text-black">
          {titulo}
        </h2>

        <p className="text-gray-700 mt-2">
          {preco}
        </p>

        <button className="w-[50%] mt-4 py-2 px-4 rounded-[20px] border-none cursor-pointer font-semibold bg-blue-600 text-white hover:bg-blue-700">
          Comprar
        </button>
      </article>
    </div>
  );
};

export default Card;