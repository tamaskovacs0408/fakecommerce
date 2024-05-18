import Image from "next/image"

export default function Product({product}) {
    return (
        <div>
            <h2>{product.title}</h2>
            <Image src={product.image} alt={product.title} width={200} height={300} />
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}