"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,i,t,a,n){var r=void 0;i.default.MODEL_FACTORY_INJECTIONS=!0,r=i.default.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default}),(0,a.default)(r,n.default.modulePrefix),e.default=r}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,i,t){var a=t.default.APP.name,n=t.default.APP.version;e.default=i.default.extend({version:n,name:a})}),define("dummy/components/text-clipper",["exports","ember-text-clipper/components/text-clipper"],function(e,i){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}})}),define("dummy/controllers/application",["exports","ember"],function(e,i){e.default=i.default.Controller.extend({text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Duo enim genera quae erant, fecit tria. Multoque hoc melius nos veriusque quam Stoici. Quod si ita se habeat, non possit beatam praestare vitam sapientia. Rhetorice     igitur, inquam, nos mavis quam dialectice disputare?\n\n  Quicquid porro animo cernimus, id omne oritur a sensibus; Neque solum ea communia, verum etiam paria esse dixerunt. Ita relinquet duas, de quibus etiam atque etiam consideret. Neque solum ea communia, verum etiam paria esse dixerunt. Immo videri fortasse. Equidem etiam Epicurum, in physicis quidem, Democriteum puto.",html:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Duo enim genera quae erant, fecit tria. <i>Multoque hoc melius nos veriusque quam Stoici.</i> Quod si ita se habeat, non possit beatam praestare vitam sapientia. Rhetorice     igitur, inquam, nos mavis quam dialectice disputare?</p>\n\n  <p>Quicquid porro animo cernimus, id omne oritur a sensibus; Neque solum ea communia, verum etiam paria esse dixerunt. Ita relinquet duas, de quibus etiam atque etiam consideret. Neque solum ea communia, verum etiam paria esse dixerunt. Immo videri fortasse. Equidem etiam Epicurum, in physicis quidem, Democriteum puto.</p>"})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,i){e.default=i.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,i){e.default=i.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,i,t){e.default={name:"App Version",initialize:(0,i.default)(t.default.APP.name,t.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,i){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",i.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,i){e.default={name:"data-adapter",before:"store",initialize:i.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,i,t){e.default={name:"ember-data",initialize:i.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,i,t){function a(){var e=arguments[1]||arguments[0];if(t.default.exportApplicationGlobal!==!1){var a;if("undefined"!=typeof window)a=window;else if("undefined"!=typeof global)a=global;else{if("undefined"==typeof self)return;a=self}var n,r=t.default.exportApplicationGlobal;n="string"==typeof r?r:i.default.String.classify(t.default.modulePrefix),a[n]||(a[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[n]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,i){e.default={name:"injectStore",before:"store",initialize:i.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,i){e.default={name:"store",after:"ember-data",initialize:i.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,i){e.default={name:"transforms",before:"store",initialize:i.default.K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,i){e.default={name:"ember-data",initialize:i.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,i){e.default=i.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,i,t){var a=i.default.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL});a.map(function(){}),e.default=a}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,i){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.3",loc:{source:null,start:{line:1,column:0},end:{line:5,column:46}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var i=e.createDocumentFragment(),t=e.createElement("h1"),a=e.createTextNode("Plain Text");e.appendChild(t,a),e.appendChild(i,t);var t=e.createTextNode("\n");e.appendChild(i,t);var t=e.createComment("");e.appendChild(i,t);var t=e.createTextNode("\n\n");e.appendChild(i,t);var t=e.createElement("h1"),a=e.createTextNode("HTML");e.appendChild(t,a),e.appendChild(i,t);var t=e.createTextNode("\n");e.appendChild(i,t);var t=e.createComment("");return e.appendChild(i,t),i},buildRenderNodes:function(e,i,t){var a=new Array(2);return a[0]=e.createMorphAt(i,2,2,t),a[1]=e.createMorphAt(i,6,6,t),e.insertBoundary(i,null),a},statements:[["inline","text-clipper",[["get","text",["loc",[null,[2,15],[2,19]]],0,0,0,0]],[],["loc",[null,[2,0],[2,21]]],0,0],["inline","text-clipper",[["get","html",["loc",[null,[5,15],[5,19]]],0,0,0,0]],["options",["subexpr","hash",[],["html",!0],["loc",[null,[5,28],[5,44]]],0,0]],["loc",[null,[5,0],[5,46]]],0,0]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var i="dummy";try{var t=i+"/config/environment",a=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),n=JSON.parse(unescape(a)),r={default:n};return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-text-clipper",version:"0.1.0+52d34114"});