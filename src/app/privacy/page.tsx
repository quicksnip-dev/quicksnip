import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/layouts/legal-page";
import { CONTACT_EMAIL, DISCORD_URL, GITHUB_URL } from "@/data/meta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "What QuickSnip collects (very little), why, and what you can do about it.",
  path: "/privacy",
});

const UPDATED = "2026-11-27";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={UPDATED}
      tldr={[
        "No accounts, no ads, no tracking cookies. We don't sell or share personal data.",
        "We use Vercel Web Analytics and Speed Insights to count visits and measure page speed. They use no cookies and don't identify you.",
        "Your browser stores two small preferences: your theme and whether the snippet sidebar is open.",
        "Vercel hosts the site and keeps short-lived server logs (IP address, browser, page requested) to keep it running and secure. Namecheap manages our domain.",
        "Contributor avatars load from GitHub and the footer badge loads from Product Hunt, so they can see those requests.",
        "If you contribute, your GitHub username is shown publicly as the author. That is how open source works.",
      ]}
    >
      <p>
        QuickSnip (&quot;QuickSnip&quot;, &quot;we&quot;, &quot;us&quot;) is an open-source project that publishes code snippets at{" "}
        <Link href="/">quicksnip.app</Link>, together with a JSON API, a shadcn registry and <code>llms.txt</code> files (the
        &quot;Service&quot;). This policy explains what information the Service handles when you use it.
      </p>

      <h2>1. Information we collect</h2>
      <h3>You don&apos;t need an account</h3>
      <p>
        You can use the whole Service without signing up or telling us who you are. We don&apos;t ask for your name, email
        address or any other contact details.
      </p>

      <h3>Server logs</h3>
      <p>
        Like almost every website, the servers that host QuickSnip record basic technical details about each request: IP
        address, date and time, the URL requested, referrer, browser user agent and response status. This applies to web
        pages and to the API, registry and <code>llms.txt</code> endpoints. Our hosting provider, Vercel, processes these
        logs for us to deliver the site, prevent abuse and fix errors. We don&apos;t use them to build profiles of visitors,
        and they are kept only for Vercel&apos;s standard, short retention period.
      </p>

      <h3>Analytics and performance</h3>
      <p>
        We use <Link href="https://vercel.com/docs/analytics/privacy-policy">Vercel Web Analytics</Link> to understand
        which pages are useful, and{" "}
        <Link href="https://vercel.com/docs/speed-insights/privacy-policy">Vercel Speed Insights</Link> to find slow pages.
        Both are designed to be privacy-friendly:
      </p>
      <ul>
        <li>
          They set <strong>no cookies</strong> and store nothing on your device.
        </li>
        <li>
          Web Analytics records page views with the page URL, referrer, country, browser, operating system and device type.
          Visits are grouped by a hash of the request that changes every day, so you can&apos;t be followed from one day to
          the next or across other websites. Your IP address is not stored.
        </li>
        <li>
          Speed Insights records performance measurements (Core Web Vitals such as loading time and layout shift) along with
          the page, browser, operating system, device type, connection speed and country.
        </li>
      </ul>
      <p>
        We only see aggregated numbers, such as &quot;this page had 500 views this week&quot;. Blocking these scripts (for
        example with an ad blocker) doesn&apos;t affect how the site works.
      </p>

      <h3>Stored in your browser</h3>
      <p>We store two small preferences on your device. Neither is used to track you, and neither is sent to third parties.</p>
      <ul>
        <li>
          <strong>Theme</strong> (local storage key <code>theme</code>): remembers whether you chose light, dark or system
          mode.
        </li>
        <li>
          <strong>Sidebar state</strong> (cookie <code>sidebar_state</code>, expires after 7 days): remembers whether the
          snippet sidebar is open.
        </li>
      </ul>
      <p>
        These are strictly necessary for features you ask for, so they don&apos;t require consent. You can clear them at any
        time in your browser settings.
      </p>

      <h3>Search</h3>
      <p>
        Snippet search runs entirely in your browser. Documentation search sends your query to our own{" "}
        <code>/api/search</code> endpoint to return results. We don&apos;t store search queries beyond the server logs
        described above.
      </p>

      <h3>Contributions</h3>
      <p>
        Contributions happen on <Link href={GITHUB_URL}>GitHub</Link>, under GitHub&apos;s own terms and privacy policy. When
        a snippet you wrote is published, your GitHub username and public avatar are shown as its author on QuickSnip and in
        our public JSON API, registry and <code>llms.txt</code> files. Your contribution also becomes part of the public git
        history of the repository.
      </p>

      <h2>2. What we don&apos;t do</h2>
      <ul>
        <li>We don&apos;t use advertising, tracking cookies, cross-site tracking pixels or fingerprinting.</li>
        <li>We don&apos;t sell, rent or trade personal data.</li>
        <li>We don&apos;t use your data to train AI models.</li>
      </ul>

      <h2>3. Third parties</h2>
      <ul>
        <li>
          <strong>Vercel Inc.</strong>: hosts the site, processes the server logs and provides Web Analytics and Speed
          Insights, as described above. See <Link href="https://vercel.com/legal/privacy-policy">Vercel&apos;s privacy
          policy</Link>.
        </li>
        <li>
          <strong>Namecheap, Inc.</strong>: registrar for the <code>quicksnip.app</code> domain. Namecheap does not receive
          data about your visits to the site. See{" "}
          <Link href="https://www.namecheap.com/legal/general/privacy-policy/">Namecheap&apos;s privacy policy</Link>.
        </li>
        <li>
          <strong>GitHub</strong>: contributor avatars are loaded directly from <code>github.com</code>, so GitHub receives
          your IP address and browser details when those images load.
        </li>
        <li>
          <strong>Product Hunt</strong>: the Product Hunt badge in the footer loads from{" "}
          <code>api.producthunt.com</code>, so Product Hunt receives your IP address and browser details when it loads. See{" "}
          <Link href="https://www.producthunt.com/privacy">Product Hunt&apos;s privacy policy</Link>.
        </li>
        <li>
          <strong>YouTube and Ko-fi images</strong>: these are fetched and resized by our own server, so your browser does
          not contact YouTube or Ko-fi to display them.
        </li>
        <li>
          <strong>External links</strong>: links to GitHub, Discord, Reddit, YouTube, Ko-fi and other sites are governed by those
          sites&apos; own privacy policies once you follow them.
        </li>
      </ul>
      <p>Fonts are served from our own domain, not from a third-party font service.</p>

      <h2>4. Legal basis</h2>
      <p>
        Where privacy laws such as the GDPR apply, we process server logs, analytics and performance data on the basis of
        our legitimate interest in running a secure, reliable and useful service, and we display contributor names to give
        credit for work you chose to publish. Vercel may process data in the United States and other countries, under
        appropriate safeguards such as Standard Contractual Clauses.
      </p>

      <h2>5. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct or delete personal data about you, or to
        object to how it is processed. Because we don&apos;t have accounts, we usually can&apos;t link log entries to a
        person. If you want your name removed from the contributor credits on the website, contact us and we will do it.
        Removing it from past git history is not always possible, because rewriting history affects every copy of the
        project. You can also complain to your local data protection authority.
      </p>

      <h2>6. Children</h2>
      <p>
        The Service is meant for developers and is not directed at children under 13. We don&apos;t knowingly collect
        personal data from children.
      </p>

      <h2>7. Changes</h2>
      <p>
        If we change this policy, we will update the date at the top of this page. Significant changes will also be
        announced in the <Link href={`${GITHUB_URL}/releases`}>release notes</Link>. The full history of this page is
        available in the public repository.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions or requests about privacy? Email <Link href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</Link>. For
        anything that doesn&apos;t need to be private, you can also open an issue on{" "}
        <Link href={`${GITHUB_URL}/issues`}>GitHub</Link> or ask on <Link href={DISCORD_URL}>Discord</Link>. See also our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
