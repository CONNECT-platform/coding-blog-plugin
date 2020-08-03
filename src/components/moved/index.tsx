import { Loading } from '@codedoc/core/dist/es5/components/util/loading';


const style = /*#__PURE__*/`
position: fixed;
z-index: 1000;
left: 0; right: 0; top: 0; bottom: 0;
cursor: pointer;
background: rgba(64, 64, 64, .65);
display: flex;
justify-content: center;
align-items: center;
font-size: 32px;
color: white;
text-decoration: none !important;
transition: opacity .1s;
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
`;


export interface MovedOptions {
  to: string;
}


export function Moved(options: MovedOptions, renderer: any) {
  return <a data-meta-redirect href={options.to} style={style}>
      <Loading/> &nbsp;&nbsp;&nbsp;&nbsp;
      <div>
        This page was moved to a new URL. 
        <br/> Redirecting ...
      </div>
    </a>
}
