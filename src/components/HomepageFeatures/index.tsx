import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {Terminal, Container, Github} from 'lucide-react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Icon: React.ComponentType<{size?: number; strokeWidth?: number; className?: string}>;
  description: ReactNode;
  command: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Multi-Interface',
    Icon: Terminal,
    description: 'Usable through UI, REST API or Python client.',
    command: 'curl ...',
  },
  {
    title: 'Run Locally',
    Icon: Container,
    description: 'Single Docker Compose application. Run locally.',
    command: 'docker compose up --build',
  },
  {
    title: 'Open Source',
    Icon: Github,
    description: 'All code available on GitHub.',
    command: 'git clone https://github.com/mathbrus/deepalpharesearch.ai.git',
  },
];

function Feature({title, Icon, description, command}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className={styles.featureIcon}>
        <Icon size={36} strokeWidth={1.5} className={styles.featureIconSvg} />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
        <div className={styles.terminalSnippet}>
          <span className={styles.terminalPrompt}>$</span>
          <code className={styles.terminalCommand}>{command}</code>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.featuresRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
