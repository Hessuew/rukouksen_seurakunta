import type { MenuLink } from './components/widgets/Header.astro';
import { getPermalink } from './utils/permalinks';

export const headerData: { links: Array<MenuLink> } = {
  links: [
    {
      text: 'Mihin uskomme',
      href: getPermalink('/#mihin-uskomme'),
    },
    {
      text: 'Meistä',
      href: getPermalink('/#meista'),
    },
    {
      text: 'Todistuksia',
      href: getPermalink('/#todistuksia'),
    },
    {
      text: 'Sinulle',
      href: getPermalink('/#sinulle'),
    },
  ],
};
