
import { useEffect, useState } from "react";
import { TextAnimed } from "./styles";

interface PropsTextContent {
  children: any;
  className?: string;
  delay?: number;
  animationDuration?:string;
  pipeAnimed?: boolean;
}

export const TextAnimedWrite = ({
  className,
  delay,
  children,

}: PropsTextContent) => {
  const [textAnimed, setTextAnimed] = useState("");
  const textoArray = children.toString().split("");
 
  useEffect(() => {
    setTimeout(
      () => {
        var text = " ";
        textoArray.forEach(function (letra: String, i: number) {
          setTimeout(() => {
            text += letra;
            setTextAnimed(text);
          }, 200 * i );
        });
      },
      delay ? delay * 1000: 10
    );
  },[]);
  return <TextAnimed className={className}>{textAnimed}</TextAnimed>;
};
