import {useEffect, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const CURSOR_FRAMES = ['>_', '>>', '>_'];

const ASCII_TOP = [
  '                 /\\                  ',
  '                /  \\                 ',
  '               / /\\ \\                ',
].join('\n');

const ASCII_CURSOR_LINE_PREFIX = '              / /__\\ \\    ';

const ASCII_MID = '             /_/    \\_\\              ';

const ASCII_REFLECTION = [
  '             \\ \\____/ /              ',
  '              \\______/',
].join('\n');

const ASCII_BOTTOM = [
  '',
  '          A X I O M A R A           ',
].join('\n');

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [frameIdx, setFrameIdx] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setFrameIdx((current) => (current + 1) % CURSOR_FRAMES.length);
    }, 420);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeCursor = CURSOR_FRAMES[frameIdx] ?? CURSOR_FRAMES[0];

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <img
              src="/img/logo.svg"
              alt="Axiomara Logo"
              className={styles.heroLogo}
            />
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <p className={styles.heroDescription}>
              Generate strategies and backtest results in seconds from a workflow
              that feels like your favorite terminal.
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--primary button--lg', styles.primaryButton)}
                to="/docs/intro">
                Get Started
              </Link>
            </div>
          </div>
          <div className={styles.heroTerminalColumn}>
            <div className={styles.terminalWindow}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalButtons}>
                  <span className={styles.terminalButton}></span>
                  <span className={styles.terminalButton}></span>
                  <span className={styles.terminalButton}></span>
                </div>
                <span className={styles.terminalTitle}>axiomara-session</span>
              </div>
              <div className={styles.terminalBody}>
                <div className={styles.terminalLine}>
                  <span className={styles.terminalPrompt}>$</span>
                  <span className={styles.terminalCommand}>axiomara --init</span>
                </div>
                <pre className={styles.terminalAscii} aria-hidden="true">
                  {'\n'}
                  {ASCII_TOP}
                  {'\n'}
                  {ASCII_CURSOR_LINE_PREFIX}
                  <span>{activeCursor}</span>
                  {'\n'}
                  {ASCII_MID}
                  {'\n'}
                  <span className={styles.asciiReflection}>{ASCII_REFLECTION}</span>
                  {`\n${ASCII_BOTTOM}`}
                </pre>
                <div className={styles.terminalLine}>
                  <span className={styles.terminalCursor}>█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
