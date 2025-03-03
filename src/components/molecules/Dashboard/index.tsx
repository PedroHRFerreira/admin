import styles from "./styles.module.scss";
import AtomsText from "@/components/atoms/Text/Index";
import AtomsIconSvg from "@/components/atoms/IconSvg/index";
const MoleculesDashboard = ({ title, subTitle, text, onFooterClick }: any) => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.dashboard__content}>
        <AtomsText fontSize="24px" fontWeight="bold" color="#fff">
          {title}
        </AtomsText>
        <AtomsText fontSize="16px" fontWeight="normal" color="#fff">
          {subTitle}
        </AtomsText>
      </div>
      <div className={styles.dashboard__footer} onClick={onFooterClick}>
        <AtomsText fontSize="16px" fontWeight="normal" color="#fff">
          {text}
        </AtomsText>
        <AtomsIconSvg className={styles.icon} name="seta-para-a-esquerda" />
      </div>
    </section>
  );
};

export default MoleculesDashboard;
