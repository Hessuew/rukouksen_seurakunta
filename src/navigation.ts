import type { MenuLink } from './components/widgets/Header.astro';
import { getPermalink } from './utils/permalinks';

export const headerData: { links: Array<MenuLink> } = {
  links: [
    {
      text: 'whatWeBelieve',
      href: getPermalink('#mihin-uskomme'),
    },
    {
      text: 'aboutUs',
      href: getPermalink('#meista'),
    },
    {
      text: 'testimonies',
      href: getPermalink('#todistuksia'),
    },
    {
      text: 'forYou',
      href: getPermalink('#sinulle'),
    },
    {
      separator: true,
      icon: 'tabler:brand-youtube',
      text: 'podcasts',
      href: getPermalink('/podkastit'),
    },
  ],
};
