import { AsModule, DirectiveObject } from 'a1atscript';

@AsModule('responsiveMenu')
@DirectiveObject('lrdResponsiveMenu')
export default class ResponsiveMenu {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = 'components/responsiveMenu/responsive-menu.tpl.html';
    this.transclude = true;
    this.scope = true;
  }

  link(scope, element, attrs) {
    var nav = responsiveNav(".nav-collapse");
  }
}
