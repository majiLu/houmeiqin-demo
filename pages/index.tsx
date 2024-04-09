import { Box, AssetList, Button, BasicModal } from "@interchain-ui/react";
import { useState } from "react";
import { Combobox } from "@/components";

export default function Home() {
  const handleSelect = () => { console.log('我是谁') }
  return <Combobox options={['maggie', 'tom', 'sandy', 'hero', 'sanra']} onSelect={handleSelect}></Combobox>;
}
