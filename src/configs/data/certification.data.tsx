import Coursera from "@/assets/certification/Coursera.png";
import HackerRank from "@/assets/certification/HackerRank.png";
import Sololearn from "@/assets/certification/Sololearn.jpg";

export interface CertificationItem {
  name: string;
  img: string;
  src: string;
  titleClassName?: string;
}

export const certificationData: CertificationItem[] = [
  {
    name: "Coursera",
    img: Coursera,
    src: "https://drive.google.com/drive/folders/1u8GeKv1LSdryNotvYvjxqsDgChkDLN55?usp=sharing",
    titleClassName: "text-white",
  },
  {
    name: "Sololearn",
    img: Sololearn,
    src: "https://drive.google.com/drive/folders/1oySHWxDD0zz1asjbs5Yc7AFygZWyA5bL?usp=sharing",
  },
  {
    name: "HackerRank",
    img: HackerRank,
    src: "https://drive.google.com/drive/folders/1Ukp1DvJoEKtbohIB1oQ3yUoKtC0cFp7q?usp=sharing",
    titleClassName: "text-white",
  },
];
