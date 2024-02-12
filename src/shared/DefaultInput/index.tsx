import React from "react";
import { Input } from "./style";

type Props = {
 setValue: React.Dispatch<React.SetStateAction<string>>;
};
function DefaultInput({ setValue }: Props) {
 return <Input onChange={(e) => setValue(e.target.value)} placeholder="Type to search" />;
}

export default DefaultInput;
