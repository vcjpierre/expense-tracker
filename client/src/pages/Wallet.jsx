import MainContainer from "../components/Containers/MainContainer";
import { Title } from "../components/Titles/Titles";
import styles from "../styles/HomeComponents/Home.module.scss";
import { BsWallet2 } from "react-icons/bs";

const Wallet = () => {
  return (
    <MainContainer optionClass={styles.container}>
      <div className={styles.main}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <BsWallet2 size={32} />
          <Title>Wallet</Title>
        </div>
        <div style={{ fontSize: "1.1rem", color: "#333", marginBottom: "1.5rem" }}>
          Here you can see a summary of your wallet and future transactions.
        </div>
        <div style={{ background: "#f8f8f8", borderRadius: "10px", padding: "2rem", minHeight: "200px" }}>
          <span style={{ color: "#aaa" }}>
            Coming soon: Balance, income, and expense summary.
          </span>
        </div>
      </div>
    </MainContainer>
  );
};

export default Wallet;
