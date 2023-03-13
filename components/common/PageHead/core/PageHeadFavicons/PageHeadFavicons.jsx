const faviconSrc = "images/favicons/favicon.png";

function PageHeadFavicons() {
  return (
    <>
      <link rel="icon" type="image/png" sizes="32x32" href={faviconSrc} />
      <link rel="icon" type="image/png" sizes="16x16" href={faviconSrc} />
    </>
  );
}

export default PageHeadFavicons;
