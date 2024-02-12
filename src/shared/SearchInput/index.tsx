import React from "react";
import { SearchInput } from "./style";

type Props = {
 setValue: React.Dispatch<React.SetStateAction<string>>;
};

function SearhInput({ setValue }: Props) {
 return <SearchInput onChange={(e) => setValue(e.target.value)} placeholder="Type to search" />;
}

export default SearhInput;
