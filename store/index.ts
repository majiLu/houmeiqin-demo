import { makeAutoObservable } from "mobx";
import assetStore from "./AssetStore";

class RootStore {
  assetStore = assetStore;
  constructor() {
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();
export default rootStore;
