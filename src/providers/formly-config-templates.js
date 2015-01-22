// This file adds the default templates to the formlyConfigProvider.
angular.module('formlyVanilla').config(function(formlyConfigProvider) {
  'use strict';
  var fields = [
    'textarea', 'radio', 'select', 'number', 'checkbox',
    'password', 'hidden', 'email', 'text'
  ];
  angular.forEach(fields, function(field) {
    formlyConfigProvider.setTemplateUrl(field, 'fields/formly-field-' + field + '.html');
  });
});