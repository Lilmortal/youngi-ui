import Head from "next/head";
import { GetStaticProps } from "next";

import { cn } from "../../utils";
import styles from "./About.module.scss";
import SideBar, { SideBarProps, withSideBar } from "../../components/SideBar";
import LoremIpsum from "../../components/LoremIpsum";

interface AboutProps {
  photoImage: string;
  aboutText: string;
}

const About: React.FC<AboutProps & SideBarProps> = ({
  aboutText,
  photoImage,
  ...sideBarProps
}) => (
  <main className={styles.about}>
    <Head>
      <title>About me</title>
      <meta name="description" content="About Youngi" />
    </Head>
    <SideBar
      {...sideBarProps}
      mainItems={<img src={photoImage} className={cn(styles.mainItems)} />}
    />
    <div className={cn(styles.content)}>
      <div className={cn(styles.description)}>
        <h2>Hi there!</h2>
        <LoremIpsum />
      </div>

      <div className={cn(styles.socialContact)}>
        <div>Twitter</div>
        <div>Facebook</div>
        <div>Youtube</div>
      </div>
    </div>
  </main>
);

export const getStaticProps: GetStaticProps = async () => {
  const aboutProps: AboutProps = {
    photoImage: "",
    aboutText: "",
  };

  return { props: { ...aboutProps } };
};

export default withSideBar(About);
