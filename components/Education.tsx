export const Education = () => {
  return(
    <div className="flex justify-center items-center">
      <div className="px-4 md:w-2/3 pb-20 relative">
        <div className="border-2 h-3/4 absolute left-24 mx-1.5 top-20 border-indigo-500 z-0"></div>
        <h1 className="text-3xl font-bold pb-12">Educations & Careers</h1>
        <ul className="text-gray-800">
          <li className="flex items-center pb-8">
            <div className="pr-6">2013.4</div>
            <div className="bg-indigo-500 w-7 h-7 rounded-full md:mr-6 mr-4"></div>
            <div className="bg-indigo-200 rounded-lg shadow-md md:px-6 px-4 py-4 md:text-lg font-semibold">女子学院入学</div>
          </li>
          <li className="flex items-center pb-8">
            <div className="pr-6">2019.3</div>
            <div className="bg-indigo-500 w-7 h-7 rounded-full md:mr-6 mr-4"></div>
            <div className="bg-indigo-200 rounded-lg shadow-md md:px-6 px-4 py-4 md:text-lg font-semibold">女子学院卒業</div>
          </li>
          <li className="flex items-center pb-8">
            <div className="pr-6">2019.4</div>
            <div className="bg-indigo-500 w-7 h-7 rounded-full md:mr-6 mr-4"></div>
            <div className="bg-indigo-200 rounded-lg shadow-md md:px-6 px-4 py-4 md:text-lg font-semibold">東京大学理科一類入学</div>
          </li>
          <li className="flex items-center pb-8">
            <div className="pr-4">2020.10</div>
            <div className="border-indigo-600 border-2 bg-white w-7 h-7 rounded-full pr-6 z-10"></div>
            <div className="border-indigo-200 border-2 rounded-lg shadow-md md:px-6 px-4 py-4 md:ml-6 ml-4">
              <h2 className="md:text-lg font-semibold pb-2">フロントエンドエンジニア</h2>
              <div className="text-gray-600">palanでフロントエンドエンジニアとしてインターンを始める。<br/>主にTypeScriptを使用。</div>
            </div>
          </li>
          <li className="flex items-center pb-8">
            <div className="pr-6">2021.4</div>
            <div className="bg-indigo-500 w-7 h-7 rounded-full pr-6"></div>
            <div className="bg-indigo-200 rounded-lg shadow-md md:px-6 px-4 py-4 md:text-lg font-semibold md:ml-6 ml-4">東京大学工学部電気電子工学科進学</div>
          </li>
        </ul>
      </div>
    </div>
  )
}