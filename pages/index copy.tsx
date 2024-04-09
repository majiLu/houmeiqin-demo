import { Box, AssetList, Button, BasicModal, Combobox } from "@interchain-ui/react";
import { useState } from "react";
// import { Layout, Wallet } from "@/components";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Box width="auto" mx="$4">
      <Box mb="$1" textAlign={"center"}>
        <BasicModal
          renderTrigger={(triggerProps) => (
            <Button  {...triggerProps} onClick={() => setIsOpen(true)}>
              Add Asset
            </Button>
          )}
          isOpen={isOpen}
          title='Add Asset'
          onClose={() => setIsOpen(false)}
          closeOnClickaway={false}
        >
          <Box width='440px'>

          </Box>
        </BasicModal>
      </Box>
      <AssetList
        needChainSpace
        isOtherChains={false}
        list={[
          {
            isOtherChains: false,
            imgSrc:
              'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
            symbol: 'ATOM',
            name: 'Cosmos Hub',
            tokenAmount: '89.66',
            tokenAmountPrice: '10',
            onDeposit: () => {
              console.log('onDeposit');
            },
            onWithdraw: () => {
              console.log('onWithdraw');
            },
          },
          {
            isOtherChains: false,
            imgSrc:
              'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
            symbol: 'OSMO',
            name: 'Osmosis',
            tokenAmount: '102.61',
            tokenAmountPrice: '101.02',
            onDeposit: () => {
              console.log('onDeposit');
            },
            onWithdraw: () => {
              console.log('onWithdraw');
            },
          },
        ]}
      />

    </Box>
  );
}
