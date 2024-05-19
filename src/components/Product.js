import Title from "./Title"
import Image from "next/image"

export default function Product({product}) {
    return (
        <div className="w-25 h-350 flex flex-col justify-between items-baseline">
            <Title>{product.title}</Title>
            <Image src={product.image} alt={product.title} width={150} height={200} className="w-100 rounded m-auto" />
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}