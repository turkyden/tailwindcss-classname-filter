import React, { useState, useEffect } from 'react';
import { CodeFlaskReact } from "react-codeflask";
import { utilities } from "./taiwindcss";

const CODE = ` /** 提取样式 **/
.weax-iconblock-temp0{
  color: #c7161e;
}
`

function App() {
  const [code, setCode] = useState(CODE);
  const [className, setClassName] = useState('weax-iconblock-temp0');
  const [tailwindCSS, setTailwindCSS] = useState('flex px-2');

  useEffect(() => {
    console.log(utilities)
  })

  return (
    <React.Fragment>
      <div className="pt-24">
        <h2 className="text-center text-3xl text-white"><span role="img">✅</span> TailwindCSS ClassName Filter</h2>
        <div className="container m-auto flex pt-10 justify-between">
          {/** input **/}
          <div className="w-1/2 flex justify-center">
            <div className="w-4/5">
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    ClassName
                  </label>
                  <input value={className} onChange={e => setClassName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="classname" type="text" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    TailwindCSS Array
                  </label>
                  <textarea value={tailwindCSS} onChange={e => setTailwindCSS(e.target.value)} className="shadow appearance-none border rounded w-full h-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tailwindcss" type="text" />
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Filter It &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/** result **/}
          <div className="w-1/2">
            <CodeFlaskReact
              id='dom1' 
              language="js" 
              code={code}
              onChange={v => setCode(v)}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        body{
          background-color: #1a202c;
        }
        /* 美化滚动条样式 */
        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
          background-color: transparent;
        }
        /*定义滚动条轨道 内阴影+圆角*/
        ::-webkit-scrollbar-track {
          -webkit-box-shadow: transparent;
          background-color: transparent;
        }
        /*定义滑块 内阴影+圆角*/
        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          -webkit-box-shadow: none;
          background-color: #ccc;
        }
        .codeflask{
          width: 500px;
          height: 600px;
          border-radius: 0.25rem;
        }
      `}
      </style>
    </React.Fragment>
  )
}

export default App;
