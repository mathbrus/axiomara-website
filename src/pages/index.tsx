import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Generate strategies and backtest results within seconds.
          </p>
          <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalButtons}>
                <span className={styles.terminalButton}></span>
                <span className={styles.terminalButton}></span>
                <span className={styles.terminalButton}></span>
              </div>
              <span className={styles.terminalTitle}>terminal</span>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span className={styles.terminalCommand}> deepalpharesearch --init</span>
              </div>
              <div className={styles.terminalOutput}>
                <span className={styles.terminalSuccess}>✓</span> Initializing DeepAlphaResearch...
              </div>
              <div className={styles.terminalOutput}>
                <span className={styles.terminalSuccess}>✓</span> Loading documentation...
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span className={styles.terminalCursor}>_</span>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.primaryButton)}
              to="/docs/intro">
              Get Started
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.secondaryButton)}
              to="/docs/intro">
              View Documentation
            </Link>
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
