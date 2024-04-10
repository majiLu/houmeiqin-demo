/* eslint-disable @next/next/no-img-element */
import { BasicModal, Box } from "@interchain-ui/react";
import styles from "./index.module.css";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const DepositModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <BasicModal title="Deposit ATOM" isOpen={isOpen} onClose={onClose}>
      <Box width="500px" className={styles.container}>
        <div className={`${styles["flex-start"]} ${styles["form-to-labels"]}`}>
          <label
            className={`${styles["item-label"]} ${styles["flex-grow"]}`}
            style={{ marginRight: "24px" }}
          >
            From Cosmos Hub
          </label>
          <label className={`${styles["item-label"]} ${styles["flex-grow"]}`}>
            To Osmosis
          </label>
        </div>
        <div
          className={`${styles["flex-start"]} ${styles["form-to-content"]} `}
        >
          <div
            className={`${styles["flex-grow"]} ${styles["flex-start"]} ${styles["item-content"]}`}
          >
            <img
              className={styles["icon"]}
              src="https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png"
              alt=""
            />
            <span
              className={`${styles["item-value"]} ${styles["text-ellipsis"]}`}
            >
              abdsfasdlf;kas
            </span>
          </div>
          <span className={`${styles["flex-none"]} ${styles["right-arrow"]} `}>
            -&gt;
          </span>
          <div
            className={`${styles["flex-grow"]} ${styles["flex-start"]}   ${styles["item-content"]} `}
          >
            <img
              className={styles["icon"]}
              src="https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg"
              alt=""
            />
            <span className={styles["item-value"]}>
              abdsfasdl
            </span>
          </div>
        </div>

        <div className={styles["mt-20"]}>
          <div
            className={`${styles["flex-between"]} ${styles["amount-title"]}`}
          >
            <label>Select amount</label>
            <span className={`${styles["amount-desc"]}`}>
              Available&nbsp;<span>2 ATOM</span>
            </span>
          </div>
          <div className={`${styles["amount-content"]}`}>
            <div className={`${styles["amount-icon"]}`}>
              <img
                className={styles["icon-large"]}
                src="https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png"
                alt=""
              />
            </div>
            <div className={styles["amount-input-container"]}>
              <div className={styles["amount-input-num"]}>
                <span>2</span>
                <span>ATOM</span>
              </div>
              <div className={styles["amount-input-rate"]}>≈$1.303</div>
            </div>
          </div>
          <div className={`${styles["amount-percent"]}`}>
            <span>Max</span>
            <span>1/2</span>
            <span>1/3</span>
          </div>
        </div>
        <div className={styles["esitmated-time"]}>
          Esitmated time:<label>20 seconds</label>
        </div>
        <div
          className={`${styles["btn"]}  ${styles["mb-10"]}   ${styles["mt-10"]}  ${styles["btn-transfer"]}`}
        >
          Transfer
        </div>
        <div className={`${styles["btn"]}   ${styles["btn-cancel"]}`}>
          cancel
        </div>
      </Box>
    </BasicModal>
  );
};
