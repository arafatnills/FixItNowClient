"use client";

import Link from "next/link";
import { useEffect } from "react";

const GitHubButton = () => {
  useEffect(() => {
    // Prevent loading the script multiple times
    if (
      document.querySelector(
        'script[src="https://buttons.github.io/buttons.js"]'
      )
    ) {
      return;
    }

    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="pt-2 max-md:hidden ">
      <Link
        className="github-button "
        href="https://github.com/arafatnills"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star arafatnills on GitHub"
      >
        Star
      </Link>
    </div>
  );
};

export default GitHubButton;