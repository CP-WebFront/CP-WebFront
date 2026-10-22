
import Card from '../components/Card'
import esporteImg from '../assets/esporte.jpg'

const Home = () => {
  const esportes = [
    { id: 1, titulo: "Jogo-01", preco: "R$ 400,00", imagem: esporteImg },
    { id: 2, titulo: "Jogo-02", preco: "R$ 350,00", imagem: esporteImg },
    { id: 3, titulo: "Jogo-03", preco: "R$ 250,00", imagem: esporteImg },
  ];

  return (
    <main className="px-[5%] mt-10 mb-16 flex-grow">
      <h2 className="titulo text-3xl text-orange-500 font-bold -mt-6 mb-2">
        Produtos em Destaque
      </h2>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {esportes.map((esporte) => (
          <Card
            key={esporte.id}
            titulo={esporte.titulo}
            preco={esporte.preco}
            imagem={esporte.imagem}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
