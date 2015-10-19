import { AsModule, DirectiveObject } from 'a1atscript';
import template from "./responsive-menu.tpl.js";

@AsModule('responsiveMenu')
@DirectiveObject('lrdResponsiveMenu')
export default class ResponsiveMenu {
  constructor() {
    this.restrict = 'E';
    this.template = template;
    this.transclude = true;
    this.scope = true;
  }

  link(scope, element, attrs) {
    var nav = responsiveNav(".nav-collapse");
  }
}
