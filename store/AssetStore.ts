import { AssetListItemProps } from "@interchain-ui/react";
import { observable, action, makeObservable, makeAutoObservable } from "mobx";

export class AssetStore {
  assetsOptions: AssetListItemProps[] = [
    {
      imgSrc:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
      symbol: "SCRT",
      name: "scrt",
      tokenAmount: "102.61",
      tokenAmountPrice: "101.02",
    },
    {
      imgSrc:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
      symbol: "SIENNA",
      name: "sienna",
      tokenAmount: "102.61",
      tokenAmountPrice: "101.02",
    },
    {
      imgSrc:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg",
      symbol: "SHD(old)",
      name: "shd",
      tokenAmount: "102.61",
      tokenAmountPrice: "101.02",
    },
  ];
  selectedChain: AssetListItemProps[] = [
    {
      isOtherChains: false,
      imgSrc:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
      symbol: "ATOM",
      name: "Cosmos Hub",
      tokenAmount: "89.66",
      tokenAmountPrice: "10",
    },
    {
      isOtherChains: false,
      imgSrc:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
      symbol: "OSMO",
      name: "Osmosis",
      tokenAmount: "102.61",
      tokenAmountPrice: "101.02",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  addItem(value: AssetListItemProps) {
    this.selectedChain.push(value);
  }
}
const store = new AssetStore();
export default store;
