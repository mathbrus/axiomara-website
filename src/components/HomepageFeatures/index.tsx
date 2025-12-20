import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Multi-Interface',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Usable through UI, CLI, REST API or Python.
      </>
    ),
  },
  {
    title: 'Research-Focused',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Comprehensive documentation for developers.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        All code available on GitHub.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  const commands = [
    'deepalpharesearch --start',
    'deepalpharesearch --docs',
    'deepalpharesearch --code'
  ];
  
  const commandIndex = title === 'Multi-Interface' ? 0 : title === 'Research-Focused' ? 1 : 2;
  
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className={styles.featureIcon}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
        <div className={styles.terminalSnippet}>
          <span className={styles.terminalPromptSmall}>$</span>
          <code className={styles.terminalCommandSmall}>{commands[commandIndex]}</code>
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
