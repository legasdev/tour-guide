import { TITLE_SIZES } from "./sizes";

const H1 = ({ children, ...props }) => <h1 {...props}>{children}</h1>;
const H2 = ({ children, ...props }) => <h2 {...props}>{children}</h2>;
const H3 = ({ children, ...props }) => <h3 {...props}>{children}</h3>;
const H4 = ({ children, ...props }) => <h4 {...props}>{children}</h4>;
const H5 = ({ children, ...props }) => <h5 {...props}>{children}</h5>;
const H6 = ({ children, ...props }) => <h6 {...props}>{children}</h6>;

const TITLE_BY_SIZE = Object.freeze({
  [TITLE_SIZES.h1]: H1,
  [TITLE_SIZES.h2]: H2,
  [TITLE_SIZES.h3]: H3,
  [TITLE_SIZES.h4]: H4,
  [TITLE_SIZES.h5]: H5,
  [TITLE_SIZES.h6]: H6,
});

export { TITLE_BY_SIZE };
