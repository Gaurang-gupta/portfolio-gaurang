import { Link } from "react-router-dom"
import categoriesObject from "../../data/categories.json"

function Works() {
  return (
    <div className='xl:px-12 xl:py-10 xs:px-8 xs:py-6 text-justify w-full'>
        <h1 className='text-4xl font-bold pb-4 flex items-center'>
            Portfolio <div className='w-[50%] h-[1px] ml-8 styleHeading'></div>
        </h1>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 pt-4 gap-3'>
            {categoriesObject?.categories?.map(cat => (
                <Link to={`/works/${cat.name}`} className="rounded-3xl p-px bg-gradient-to-b from-[#85FFBD] to-[#FFFB7D] cursor-pointer">
                    <div className="bg-gray-50 p-10 rounded-[calc(1.5rem-1px)] flex flex-col items-center">
                        <img className="h-12 w-12 object-contain block" src={cat.image} alt={cat.alt} />
                        <h3 className="text-lg font-medium text-gray-700">{cat.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Works
