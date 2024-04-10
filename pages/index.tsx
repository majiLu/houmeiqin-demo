/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Box, AssetList, Button, BasicModal } from "@interchain-ui/react";
import React, { useContext, useMemo, useRef, useState } from "react";
import { Combobox, Modal, DepositModal } from "@/components";
import { MobXProviderContext, observer } from "mobx-react";
import { AssetStore } from "@/store/AssetStore";
function Home() {
  const { assetStore } = useContext(MobXProviderContext) as {
    assetStore: AssetStore;
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState("");
  const handleSelect = (opt: string) => {
    setSelectedOpt(opt);
  };
  const handleConfirm = () => {
    const opt = assetStore.assetsOptions.find(
      (row) => row.name === selectedOpt
    );
    if (opt) {
      assetStore.addItem(opt);
      setIsOpen(false);
    }
  };
  const selectedChainMemo = assetStore.selectedChain.map((row) => ({
    ...row,
    onDeposit: () => {
      setIsPanelOpen(true);
    },
    onWithdraw: () => {
      setIsPanelOpen(true);
    },
  }));
  return (
    <Box width="auto" mx="$4">
      <Box mb="$1" padding="$4" textAlign={"center"}>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Button size="sm" intent="primary" onClick={() => setIsOpen(true)}>
            Add Asset
          </Button>
        </div>
        <Modal
          isOpen={isOpen}
          title="Add Asset"
          width="320px"
          onClose={() => setIsOpen(false)}
        >
          <Combobox
            options={assetStore.assetsOptions.map((row) => row.name)}
            onSelect={handleSelect}
          ></Combobox>
          <Box display="flex" justifyContent="right" mt="$4">
            <Button intent="primary" size="sm" onClick={handleConfirm}>
              Confirm
            </Button>
          </Box>
        </Modal>
      </Box>
      <AssetList
        needChainSpace
        isOtherChains={false}
        list={selectedChainMemo}
      />
      <DepositModal
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      ></DepositModal>
    </Box>
  );
}

export default observer(Home);
