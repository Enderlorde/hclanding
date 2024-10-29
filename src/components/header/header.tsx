import * as React from "react";

import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";

import classes from "./header.module.css";

function useSticky() {
  const ref = React.useRef<HTMLDivElement>(null);

  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([event]) => setIsSticky(event.intersectionRatio < 1),
      { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isSticky };
}

const Header = () => {
  const { ref, isSticky } = useSticky();

  return (
    <div
      ref={ref}
      className={`${classes.header} ${isSticky ? "someClass" : ""}`}
    >
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
