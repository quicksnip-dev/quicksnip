import { FC } from "react";

import { AppProvider } from "@contexts/AppContext";

import { GitHubIcon } from "./Icons";
import LinkButton from "./LinkButton";

// import Container from "./Container";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <AppProvider>
      <div className="migration-screen">
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmMzbWxkcmwwbTFvcjNwZDdsa240M2U5ZHMyam9ndXBnMWNkdXAzOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XIqCQx02E1U9W/giphy.gif"
          alt="kermit typing on a laptop"
          width={450}
          style={{ marginInline: "auto" }}
        ></img>
        <h1>🚧 We’re upgrading!</h1>
        <p>
          Quicksnip is moving to <strong>Next.js</strong>, so things might be a
          bit broken right now. We’ll be back soon.
        </p>
        <LinkButton
          style={{ width: "fit-content", marginInline: "auto" }}
          href="https://github.com/quicksnip-dev/quicksnip/tree/nextjs-migration"
          target="_blank"
        >
          <GitHubIcon />
          See the migration
        </LinkButton>
      </div>
      {/* <Container /> */}
    </AppProvider>
  );
};

export default App;
