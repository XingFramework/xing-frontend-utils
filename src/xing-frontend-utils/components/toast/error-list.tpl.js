var template = `<div id="error_explanation">
  <h2 ng-if="header">{{header}}</h2>
  <ul>
    <li ng-repeat="message in messages">
      {{message}}
    </li>
  </ul>
</div>
`;
 export default template;