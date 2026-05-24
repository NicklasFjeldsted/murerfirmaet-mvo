import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBuilding, faPhone, faEnvelope, faBars, faInfo, faHouse, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faFileLines, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

export function registerIcons(library: FaIconLibrary): void {
  library.addIcons(faBuilding, faPhone, faEnvelope, faBars, faInfo, faCircleQuestion, faHouse, faAngleRight, faInstagram, faFileLines, faCircleCheck);
}
