import { styles } from "./MainSectionTitle.css";

type Props = {
  text: string;
};

export const MainSectionTitle = ({ text }: Props) => {
  return <h2 className={styles.MainSectionTitle}>{text}</h2>;
};
