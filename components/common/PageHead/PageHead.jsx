import PropTypes from "prop-types";
import Head from "next/head";

import { GLOBAL_SETTINGS } from "@settings/global";

import { PageHeadFavicons } from "./core";

function PageHead({ title = "" }) {
  const siteTitle = `${title}${GLOBAL_SETTINGS.siteName}`;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <PageHeadFavicons />
      <title>{siteTitle}</title>
    </Head>
  );
}

PageHead.propTypes = {
  title: PropTypes.string,
};

export default PageHead;
