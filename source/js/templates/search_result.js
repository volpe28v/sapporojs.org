// TODO Rewrite with handlebars

Ember.TEMPLATES['search_result'] = Ember.Handlebars.compile([
  '<div id="modal-wrapper">',
    '<div id="modal-container">',
      '{{view Sapporojs.SearchTextFieldView valueBinding=controller.query}}',
      '<ul class="results">',
        '{{view Sapporojs.SearchResultTextView}}',
        '{{#each controller}}',
          '<li>',
            '<h2><a {{bindAttr href=url}}>{{title}}</a></h2>',
            '{{summary_text}}',
          '</li>',
        '{{/each}}',
      '</ul>',
    '</div>',
  '</div>',
  '{{view Sapporojs.ModalBgView controllerBinding="controller"}}'
].join(''));

Ember.TEMPLATES['search_result_text'] = Ember.Handlebars.compile([
  '{{#if controller.length}}',
    'Showing <strong>all {{controller.length}}</strong> {{view.resultText}} for <strong><i>{{query}}</i></strong>',
  '{{else}}',
    'No results found for <strong><i>{{query}}</i></strong>',
  '{{/if}}',
].join(''));
