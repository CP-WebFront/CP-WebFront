

const Navbar = () => {
  return (
    <header>
      <h1 className=" p-2 text-white text-[2rem] font-bold cursor-pointer transition-all">
        LOJA DE<span className="text-orange-500 p-4">ESPORTES</span></h1>

      <nav>
        <ul className="flex list-none items-center gap-8">
          <li>
            <Link to="/" className="text-white text-lg no-underline 
              hover:text-orange-500 hover:underline transition-all">Home</Link>
          </li>
          <li>
            <Link to="/produtos" className="text-white text-lg no-underline 
              hover:text-orange-500 hover:underline transition-all">Produtos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
