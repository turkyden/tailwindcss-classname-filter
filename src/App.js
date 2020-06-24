import React from 'react';
import { CodeFlaskReact } from "react-codeflask";

const code1 = `
const View = ({ title, author, list, style }) => (
  <>
    <div className="weax-iconblock-temp0">
      <div className="weax-iconblock-temp0-options">
        <h2 className="weax-iconblock-temp0-title">{title}</h2>
        <p className="weax-iconblock-temp0-author">{author}</p>
        <ul className="weax-iconblock-temp0-list">
          {
            list && list.map((v, i) => (
              <li className="weax-iconblock-temp0-text" key={i}>
                <a 
                  className="weax-iconblock-temp0-href" 
                  href={v.href || 'javascript:void(0)'} 
                  target={v.href && '_blank'} 
                >
                  {v.text}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
    <style jsx='true'>{style}</style>
  </>
)
`

const code2 = `
.weax-iconblock-temp0{

}
.weax-iconblock-temp0-options{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.weax-iconblock-temp0-title{
  font-size: 1.125rem;  
  padding-top: 1rem;
  color: red;
}
.weax-iconblock-temp0-author{
  padding-top: .5rem;
  padding-bottom: .5rem;
}
.weax-iconblock-temp0-list{
  width: 16rem;
  text-align: center;
}
.weax-iconblock-temp0-text{
  padding-top: .5rem;
  padding-bottom: .5rem;
}
.weax-iconblock-temp0-href{
  color: #2d3748;
}
.weax-iconblock-temp0-href:hover {
  color: #4299e1;
}
`

class App extends React.Component {
  state = {
    code1,
    code2
  }

  getCodeFlaskRef1 = (codeFlask) => {
    this.codeFlask1 = codeFlask
  }

  onChange1 = (code) => {
    this.setState({ code1: code })
  }

  getCodeFlaskRef2 = (codeFlask) => {
    this.codeFlask2 = codeFlask
  }

  onChange2 = (code) => {
    this.setState({ code2: code })
  }

  render() {
    return (
      <>
        <div className="pt-24">
          <h2 className="text-center text-3xl text-white">TailwindCSS ClassName Filter</h2>
          <div className="container m-auto flex pt-10">
            <div className="w-full">
              <CodeFlaskReact
                id='dom1' 
                language="js" 
                code={this.state.code1}
                onChange={this.onChange1}
                editorRef={this.getCodeFlaskRef1}
              />
            </div>
            <div className="w-full">
              <CodeFlaskReact
                id='dom2' 
                language="css" 
                readonly
                code={this.state.code2}
                onChange={this.onChange2}
                editorRef={this.getCodeFlaskRef2}
              />
            </div>
            <div className="w-full">
              <CodeFlaskReact
                id='dom3' 
                language="css" 
                code={this.state.code2}
                onChange={this.onChange2}
                editorRef={this.getCodeFlaskRef2}
              />
            </div>
          </div>
        </div>
        <style jsx="true">{`
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
            width: 400px;
            height: 600px;
            border-radius: 0.25rem;
          }
        `}
        </style>
      </>
    )
  }
}



export default App;
