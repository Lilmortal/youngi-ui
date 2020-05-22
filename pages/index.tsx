import React, { useEffect } from "react";
import Head from "next/head";

import { useRouter } from "next/dist/client/router";
import { useIntl } from "react-intl";

const Index: React.FC<{}> = () => {
  const router = useRouter();
  const intl = useIntl();

  useEffect(() => {
    router.replace("/[lang]", `/${intl.locale}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
