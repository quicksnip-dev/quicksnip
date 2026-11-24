import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/layouts/legal-page";
import { CONTACT_EMAIL, DISCORD_URL, GITHUB_URL } from "@/data/meta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "The rules for using QuickSnip, its snippets, API and registry.",
  path: "/terms",
});

const UPDATED = "2026-11-24";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated={UPDATED}
      tldr={[
        "QuickSnip is free. Snippets are MIT licensed, so you can use them in personal and commercial projects.",
        "Snippets come as-is. \"Verified\" means a snippet passes its tests, not that it is right for your project. Review code before you ship it.",
        "Bots, AI agents and other tools are welcome to use the site, API and registry. Please don't overload them.",
        "If you contribute, you confirm the code is yours to share and you license it under MIT.",
        "Don't use QuickSnip to spread malware or break the law.",
      ]}
    >
      <p>
        These terms apply to your use of the QuickSnip website at <Link href="/">quicksnip.app</Link>, its JSON API, shadcn
        registry and <code>llms.txt</code> files (the &quot;Service&quot;). By using the Service, you agree to these terms.
        If you don&apos;t agree, please don&apos;t use the Service.
      </p>

      <h2>1. The Service</h2>
      <p>
        QuickSnip is a free, open-source collection of code snippets maintained by Technophile and the QuickSnip
        contributors. The Service is provided free of charge. We may change, pause or discontinue any part of it at any
        time.
      </p>

      <h2>2. License for snippets and website code</h2>
      <p>
        Snippets and the source code of the website are released under the{" "}
        <Link href={`${GITHUB_URL}/blob/main/LICENSE`}>MIT License</Link>. You may use, copy, modify and distribute them,
        including in commercial projects, as long as you follow that license. Where the MIT License and these terms differ
        about the code itself, the MIT License applies.
      </p>

      <h2>3. No warranty for snippets</h2>
      <p>
        Snippets are provided &quot;as is&quot;, without warranty of any kind. A <strong>verified</strong> badge means the
        snippet is typed and passes its automated tests at the time of publishing. It does not guarantee that the snippet
        is correct, secure, fast or suitable for your use case. You are responsible for reviewing, testing and securing any
        code you use, including code installed by AI agents or command-line tools on your behalf.
      </p>

      <h2>4. Automated access</h2>
      <p>
        QuickSnip is built to be used by tools. Search engines, AI agents, crawlers, the shadcn CLI and other programs may
        access the Service. In return, please:
      </p>
      <ul>
        <li>keep request rates reasonable, and cache responses where you can;</li>
        <li>don&apos;t try to bypass rate limits or disrupt the Service;</li>
        <li>keep contributor credits visible when you republish snippets in bulk.</li>
      </ul>
      <p>We may block traffic that harms the Service or other users.</p>

      <h2>5. Contributions</h2>
      <p>When you submit a snippet or other change, you confirm that:</p>
      <ul>
        <li>you wrote it, or have the right to submit it;</li>
        <li>you license it under the MIT License, the same license as the project;</li>
        <li>it contains no malware, secrets, credentials or personal data of others;</li>
        <li>you agree that your GitHub username is shown publicly as its author.</li>
      </ul>
      <p>
        Contributions are also covered by our <Link href="/contributing">contributing guide</Link> and{" "}
        <Link href={`${GITHUB_URL}/blob/main/CODE_OF_CONDUCT.md`}>Code of Conduct</Link>. Maintainers may edit, decline or
        remove any contribution.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>break any law or infringe anyone&apos;s rights;</li>
        <li>distribute malicious code, or submit code designed to harm the people who install it;</li>
        <li>attack, probe or overload the Service or its infrastructure;</li>
        <li>pretend to be QuickSnip or suggest that QuickSnip endorses you when it doesn&apos;t.</li>
      </ul>

      <h2>7. Name and logo</h2>
      <p>
        The MIT License covers code, not the QuickSnip name or logo. You may use them to refer to the project, for example
        &quot;snippets from QuickSnip&quot;, but not in a way that suggests your product is QuickSnip or is officially
        endorsed by it.
      </p>

      <h2>8. Third-party services</h2>
      <p>
        The Service is hosted on Vercel, and links to and relies on third-party services such as GitHub, Discord, YouTube
        and Ko-fi, and on tools
        such as the shadcn CLI. Their own terms apply when you use them. We are not responsible for third-party services or
        content.
      </p>

      <h2>9. Disclaimer and limitation of liability</h2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, express or
        implied, including merchantability, fitness for a particular purpose and non-infringement. To the maximum extent
        permitted by law, QuickSnip, its maintainers and contributors are not liable for any indirect, incidental, special,
        consequential or punitive damages, or for any loss of data, profits or business, arising from your use of the
        Service or any snippet. Some jurisdictions don&apos;t allow these limitations, so they may not fully apply to you.
      </p>

      <h2>10. Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains what information the Service handles. In short: very
        little.
      </p>

      <h2>11. Changes to these terms</h2>
      <p>
        We may update these terms. When we do, we will change the date at the top of this page, and the full history stays
        available in the public repository. If you keep using the Service after a change, you accept the updated terms.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these terms? Email <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>, open an issue on{" "}
        <Link href={`${GITHUB_URL}/issues`}>GitHub</Link> or ask on <Link href={DISCORD_URL}>Discord</Link>.
      </p>
    </LegalPage>
  );
}
