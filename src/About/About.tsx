import Head from "next/head";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";

import { cn } from "../../utils";
import styles from "./About.module.scss";
import SideBar, { SideBarProps, withSideBar } from "../../components/SideBar";
import SocialIcon from "./SocialIcon";

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
        <ReactMarkdown source={aboutText} />
      </div>

      <div className={cn(styles.socialContact)}>
        <SocialIcon icon="/twitter.svg" text="Twitter" />
        <SocialIcon icon="/facebook.svg" text="Facebook" />
        <SocialIcon icon="/youtube.svg" text="Youtube" />
      </div>
    </div>
  </main>
);

export const getStaticProps: GetStaticProps = async () => {
  const aboutProps: AboutProps = {
    photoImage: "/download.jpg",
    aboutText:
      "# Hi there!\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return { props: { ...aboutProps } };
};

export default withSideBar(About);
