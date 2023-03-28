import PropTypes from "prop-types";
import Head from "next/head";

import { GLOBAL_SETTINGS } from "@settings/global";

const faviconSrc = "images/favicons/favicon.png";
const faviconIcoSrc = "images/favicons/favicon.ico";

function PageHead({ title = "" }) {
  const siteTitle = `${title}${GLOBAL_SETTINGS.siteName}`;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="shortcut icon" type="image/x-icon" href={faviconIcoSrc} />
      <link rel="icon" type="image/png" sizes="32x32" href={faviconSrc} />
      <link rel="icon" type="image/png" sizes="16x16" href={faviconSrc} />
      <title>{siteTitle}</title>
    </Head>
  );
}

PageHead.propTypes = {
  title: PropTypes.string,
};

export default PageHead;
