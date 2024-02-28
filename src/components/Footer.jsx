export const Footer = () => {
  return (
    <>
      <div className="block relative text-sm ">
        <button className="border border-b-0 text-neutral-500 bg-neutral-100 py-0 px-5 h-8 absolute left-1/2 bottom-full flex flex-row leading-8 ">
          Más información
        </button>
        <div className="max-h[270px] bg-neutral-100 relative overflow-hidden border-t mt-16">
          <div className="flex justify-between max-w-7xl mx-auto px-28 text-sm my-12 leading-relaxed">
            <div className="">
              <h3 className="font-semibold mb-4">Acerca de</h3>
              <ul className="text-neutral-400">
                <li>Mercado Libre</li>
                <li>Investor relations</li>
                <li>Tendencias</li>
                <li>Sustentabilidad</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-semibold mb-4">Otros sitios</h3>
              <ul className="text-neutral-400">
                <li>Developers</li>
                <li>Mercado Pago</li>
                <li>Mercado Shops</li>
                <li>Envíos</li>
                <li>Mercado Ads</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-semibold mb-4">Ayuda</h3>
              <ul className="text-neutral-400">
                <li>Comprar</li>
                <li>Vender</li>
                <li>Resolución de problemas</li>
                <li>Centro de seguridad</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-semibold mb-4">Redes Sociales</h3>
              <ul className="text-neutral-400">
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-semibold mb-4">Mi cuenta</h3>
              <ul className="text-neutral-400">
                <li>Resumen</li>
                <li>Favoritos</li>
                <li>Vender</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-semibold mb-4">Mercado Puntos</h3>
              <ul className="text-neutral-400">
                <li>Nivel 6</li>
                <li>Disney+</li>
                <li>Star+</li>
                <li>Max</li>
                <li>Paramount+</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white text-xs text-neutral-400 border-t border-neutral-200 justify-center flex">
        <div className="py-3 px-2.5">
          <ul className="flex flex-row flex-wrap justify-start text-neutral-700 text-[13px]">
            <li className="mb-2 mr-4">Trabaja con nosotros</li>
            <li className="mb-2 mr-4">Términos y condiciones</li>
            <li className="mb-2 mr-4">Como cuidamos tu privacidad</li>
            <li className="mb-2 mr-4">Accesibilidad</li>
            <li className="mb-2 mr-4">Información al usuario financiero</li>
            <li className="mb-2 mr-4">Ayuda</li>
            <li className="mb-2 mr-4">Defensa del Consumidor</li>
            <li className="mb-2 mr-4">Información sobre seguros</li>
          </ul>
          <p>
            FakeCopyright © {new Date().getFullYear()}{" "}
            <a href="https://github.com/aponzano">Ponsix</a>
          </p>
          <p className="mt-0.5">Av. Falsa 1234, Piso 5, CP 0000, Ciudad, Provincia</p>
        </div>
      </footer>
    </>
  );
};
