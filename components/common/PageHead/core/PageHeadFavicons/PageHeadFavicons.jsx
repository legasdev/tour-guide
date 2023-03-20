const faviconSrc = "images/favicons/favicon.png";
const faviconIcoSrc = "images/favicons/favicon.ico";

function PageHeadFavicons() {
  return (
    <>
      <link rel="shortcut icon" type="image/x-icon" href={faviconIcoSrc} />
      <link rel="icon" type="image/png" sizes="32x32" href={faviconSrc} />
      <link rel="icon" type="image/png" sizes="16x16" href={faviconSrc} />
    </>
  );
}

export default PageHeadFavicons;
