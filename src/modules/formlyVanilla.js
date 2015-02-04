angular.module('formlyVanilla', ['formly'], function configFormlyVanilla(formlyConfigProvider) {
  'use strict';
  var fields = [
    'input', 'radio', 'select', 'textarea', 'number'
  ];

  formlyConfigProvider.setWrapper([
    {
      name: 'vanillaDescription',
      templateUrl: 'wrappers/formly-wrappers-vanilla-description.html'
    },
    {
      name: 'vanillaLabel',
      templateUrl: 'wrappers/formly-wrappers-vanilla-label.html'
    }
  ]);

  angular.forEach(fields, function(fieldName) {
    formlyConfigProvider.setType({
      name: fieldName,
      templateUrl: 'fields/formly-field-' + fieldName + '.html',
      wrapper: ['vanillaDescription', 'vanillaLabel']
    });
  });

  // checkbox doesn't have a vanillaLabel wrapper
  formlyConfigProvider.setType({
    name: 'checkbox',
    templateUrl: 'fields/formly-field-checkbox.html',
    wrapper: 'vanillaDescription'
  });

});