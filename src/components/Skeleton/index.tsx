import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={210}
    height={260}
    viewBox='0 0 210 260'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='30' y='143' rx='3' ry='3' width='150' height='15' />
    <rect x='30' y='35' rx='10' ry='10' width='150' height='90' />
    <rect x='169' y='94' rx='0' ry='0' width='1' height='0' />
    <rect x='30' y='162' rx='0' ry='0' width='93' height='15' />
    <rect x='30' y='200' rx='8' ry='8' width='80' height='24' />
    <rect x='148' y='191' rx='8' ry='8' width='32' height='32' />
  </ContentLoader>
);
