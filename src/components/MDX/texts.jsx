// both headers p use typography
function Typography({ className, children }) {
  return <p className={className}>{children}</p>;
}

function LinkTypography({ href, children }) {
  return (
    <a
      href={href}
      className="text-[17px] leading-[32px] text-light-blue dark:text-dark-blue"
    >
      {children}
    </a>
  );
}
let components = {};

const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

headings.forEach((tag, index) => {
  const size = 6 - index;
  let className = `text-${
    size !== 1 ? size : ""
  }xl font-bold text-light-charcoal dark:text-neutral-whisper my-4`;
  components[tag] = (props) => <Typography className={className} {...props} />;
});

components.p = (props) => (
  <Typography
    {...props}
    className={
      "text-[17px] leading-[32px] text-light-charcoal dark:text-neutral-whisper"
    }
  />
);

components.a = (props) => {
  return <LinkTypography {...props} />;
};

export default components;
