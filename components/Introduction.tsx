export default function Introduction() {
  return(
    <div className="rounded-lg shadow-lg md:w-2/3 md:mx-0 mx-8 flex flex-col flex-wrap justify-center items-center border">
      <img src="/grayRabbit.jpg" height="180" width="180" className="rounded-circle shadow-xl border-4 border-white my-8"/>
      <span className="font-bold text-2xl pb-4">
        Fukuda Momoko
      </span>
      <ul className="border-t border-gray-200 flex flex-wrap py-3 md:px-16 px-6 mx-4">
        <li className="mr-3 my-1 tracking-wider border px-2 text-indigo-600 border-indigo-600">Javascript</li>
        <li className="mr-2 my-1 tracking-wider border px-2 text-indigo-600 border-indigo-600">Typescript</li>
        <li className="mr-2 my-1 tracking-wider border px-2 text-indigo-600 border-indigo-600">C</li>
        <li className="mr-2 my-1 tracking-wider border px-2 text-indigo-600 border-indigo-600">C++</li>
        <li className="mr-2 my-1 tracking-wider border px-2 text-indigo-600 border-indigo-600">Python</li>
        <li className="mr-2 my-1 tracking-wider border px-2 text-indigo-600 border-indigo-600">HTML5</li>
        <li className="my-1 tracking-wider border px-2 text-indigo-600 border-indigo-600">CSS</li>
      </ul>
    </div>
  )
}