// "formlyVanilla" version 2.0.0 built with ♥ by Astrism <astrisms@gmail.com>, Kent C. Dodds <kent@doddsfamily.us> (ó ì_í)=óò=(ì_í ò)
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['angular'], function (angular) {
      return (root.returnExportsGlobal = factory(angular));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require('angular'));
  } else {
    factory(root.angular);
  }
}(this, function (angular) {

angular.module('formlyVanilla', ['formly']);
angular.module('formlyVanilla').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('fields/formly-field-checkbox.html',
    "<div><label><input type=checkbox id={{id}} formly-dynamic-name=id formly-custom-validation=options.validators aria-describedby={{id}}_description ng-required=options.required ng-disabled=options.disabled ng-model=\"model[options.key || index]\"> {{options.label || 'Checkbox'}} {{options.required ? '*' : ''}}</label><p id={{id}}_description ng-if=options.description>{{options.description}}</p></div>"
  );


  $templateCache.put('fields/formly-field-email.html',
    "<div><label for={{id}}>{{options.label || 'Email'}} {{options.required ? '*' : ''}}</label><input type=email id={{id}} formly-dynamic-name=id formly-custom-validation=options.validators placeholder={{options.placeholder}} aria-describedby={{id}}_description ng-required=options.required ng-disabled=options.disabled ng-model=\"model[options.key || index]\"><p id={{id}}_description ng-if=options.description>{{options.description}}</p></div>"
  );


  $templateCache.put('fields/formly-field-hidden.html',
    "<input type=hidden ng-model=\"model[options.key || index]\">"
  );


  $templateCache.put('fields/formly-field-number.html',
    "<div><label for={{id}}>{{options.label || 'Number'}} {{options.required ? '*' : ''}}</label><input type=number id={{id}} formly-dynamic-name=id formly-custom-validation=options.validators placeholder={{options.placeholder}} aria-describedby={{id}}_description ng-required=options.required ng-disabled=options.disabled min={{options.min}} max={{options.max}} ng-minlength={{options.minlength}} ng-maxlength={{options.maxlength}} ng-model=\"model[options.key || index]\"><p id={{id}}_description ng-if=options.description>{{options.description}}</p></div>"
  );


  $templateCache.put('fields/formly-field-password.html',
    "<div><label for={{id}}>{{options.label || 'Password'}} {{options.required ? '*' : ''}}</label><input type=password id={{id}} formly-dynamic-name=id formly-custom-validation=options.validators aria-describedby={{id}}_description ng-required=options.required ng-disabled=options.disabled ng-trim=\"{{options.trimWhitespace || false}}\" ng-model=\"model[options.key || index]\"><p id={{id}}_description ng-if=options.description>{{options.description}}</p></div>"
  );


  $templateCache.put('fields/formly-field-radio.html',
    "<div><label>{{options.label}} {{options.required ? '*' : ''}}</label><div ng-repeat=\"(key, option) in options.options\"><label><input type=radio formly-dynamic-name=id formly-custom-validation=options.validators id=\"{{id + '_'+ $index}}\" aria-describedby={{id}}_description ng-value=option.value ng-required=options.required ng-model=\"$parent.model[$parent.options.key || $parent.index]\"> {{option.name}}</label><p id={{id}}_description ng-if=option.description>{{option.description}}</p></div></div>"
  );


  $templateCache.put('fields/formly-field-select.html',
    "<div><label for={{id}}>{{options.label || 'Select'}} {{options.required ? '*' : ''}}</label><select id={{id}} formly-dynamic-name=id formly-custom-validation=options.validators aria-describedby={{id}}_description ng-model=\"model[options.key || index]\" ng-required=options.required ng-disabled=options.disabled ng-options=\"option.value as option.name group by option.group for option in options.options\"></select><p id={{id}}_description ng-if=options.description>{{options.description}}</p></div>"
  );


  $templateCache.put('fields/formly-field-text.html',
    "<div><label for={{id}}>{{options.label || 'Text'}} {{options.required ? '*' : ''}}</label><input type=text id={{id}} formly-dynamic-name=id formly-custom-validation=options.validators placeholder={{options.placeholder}} aria-describedby={{id}}_description ng-required=options.required ng-disabled=options.disabled ng-model=\"model[options.key || index]\"><p id={{id}}_description ng-if=options.description>{{options.description}}</p></div>"
  );


  $templateCache.put('fields/formly-field-textarea.html',
    "<div><label for={{id}}>{{options.label || 'Text'}} {{options.required ? '*' : ''}}</label><textarea type=text id={{id}} formly-dynamic-name=id formly-custom-validation=options.validators rows={{options.lines}} placeholder={{options.placeholder}} aria-describedby={{id}}_description ng-required=options.required ng-disabled=options.disabled ng-model=\"model[options.key || index]\">\n" +
    "\t</textarea><p id={{id}}_description ng-if=options.description>{{options.description}}</p></div>"
  );

}]);

// This file adds the default templates to the formlyConfigProvider.
angular.module('formlyVanilla').config(["formlyConfigProvider", function(formlyConfigProvider) {
  'use strict';
  var fields = [
    'textarea', 'radio', 'select', 'number', 'checkbox',
    'password', 'hidden', 'email', 'text'
  ];
  angular.forEach(fields, function(field) {
    formlyConfigProvider.setTemplateUrl(field, 'fields/formly-field-' + field + '.html');
  });
}]);
return "formlyVanilla";

}));
