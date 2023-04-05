import PropTypes from "prop-types";
import Head from "next/head";
import { Html } from "next/document";
import { useRouter } from "next/router";

import { GLOBAL_SETTINGS, DOMAIN } from "@settings/global";

const faviconSrc = "images/favicons/favicon.png";
const faviconIcoSrc = "images/favicons/favicon.ico";
const faviconSvgSrc = "images/favicons/favicon.svg";
const shareImage = "images/share-default.png";

const description =
  "Naš sistem za vodiče dostupan je u Crnoj Gori samo za iznajmljivanje. Naša oprema za vodiče je izvanredna opcija za gradske i kružne ture. Naša oprema radi u radijusu od 70 metara.\n" +
  "Naša opera vam takodje možete koristiti na konferencijama i kao pomoć za rad prevodiocima u toku konferencija.  Ovo je dobra oprema za sinhronizovani prevod u Crnoj Gori.\n" +
  "Za bolje iskustvo vodiča nudimo veliki izbor mikrofona i slušalica za iznajmljivanje.\n" +
  "Naš sistem za vodiče nudi lokalna kompanija «Monteniko» koja se nalazi u Crnoj Gori. \n" +
  "Ocjene od strane turista koji su koristili naš sistem su takve da su uživali u doživljaju slušanja i takodje naš sistem pomaže vodiču da vodi turu bez ometanja.\n";

function PageHead({ title = "" }) {
  const siteTitle = `${title}${GLOBAL_SETTINGS.siteName}`;
  const canonicalURL = DOMAIN + useRouter().pathname;

  return (
    <Head>
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#FFFFFF" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="twitter:card" content="summary" />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={shareImage} />
      <link rel="canonical" href={canonicalURL} />
      <link rel="shortcut icon" type="image/x-icon" href={faviconIcoSrc} />
      <link rel="icon" type="image/png" sizes="32x32" href={faviconSrc} />
      <link rel="icon" type="image/png" sizes="16x16" href={faviconSrc} />
      <link rel="icon" href={faviconSvgSrc} sizes="any" type="image/svg+xml" />
      <title>{siteTitle}</title>
    </Head>
  );
}

PageHead.propTypes = {
  title: PropTypes.string,
};

export default PageHead;
