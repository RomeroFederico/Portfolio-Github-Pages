import Github from './Github';
import Linkedin from './Linkedin';

import { linkToLinkedin, linkToGithub } from '../../configuration/links';

export const logos = [
  {
    name: 'Github',
    component: <Github />,
    link: linkToGithub
  },
  {
    name: 'Linkedin',
    component: <Linkedin />,
    link: linkToLinkedin
  }
]