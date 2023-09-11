import Link from "next/link";

export const metadata = {
    title: 'Tienda en Next-JS',
    description: 'Descripción de la tienda principal de mi tienda'
}

export default function TiendaLayout({ children }) {
  return (<>
    <nav>
        <h3>Sección tienda</h3>
        <ul>
            <li><Link href="/tienda/categorias">Categorías</Link></li>
            <li><Link href="#">Productos</Link></li>
            <li><Link href="#">Servicios</Link></li>
        </ul>
    </nav>
    {children}
    </>)
}
