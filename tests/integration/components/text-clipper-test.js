import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { htmlSafe } from 'ember-string';

moduleForComponent('text-clipper', 'Integration | Component | text clipper', {
  integration: true
});

test('it can be expanded and collapsed', function(assert) {
  this.set('text', 'Hello, World!');
  this.render(hbs`{{text-clipper text length=6}}`);

  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, '').replace(/\s{2,}/, ' '), 'Hello... more');

  this.$('a').click();
  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, '').replace(/\s{2,}/, ' '), 'Hello, World! less');

  this.$('a').click();
  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, '').replace(/\s{2,}/, ' '), 'Hello... more');
});

test('action text can be replaced', function(assert) {
  this.set('text', 'Hello, World!');
  this.render(hbs`{{text-clipper text length=6 expandText="expand" collapseText="collapse"}}`);

  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, '').replace(/\s{2,}/, ' '), 'Hello... expand');

  this.$('a').click();
  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, '').replace(/\s{2,}/, ' '), 'Hello, World! collapse');
});

test('expansion can be disabled', function(assert) {
  this.set('text', 'Hello, World!');
  this.render(hbs`{{text-clipper text length=6 canExpand=false}}`);
  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, '').replace(/\s{2,}/, ' '), 'Hello...');
});

test('dont show actions if text is shorter than length', function(assert) {
  this.set('text', 'Hello, World!');
  this.render(hbs`{{text-clipper text length=13}}`);
  assert.equal(this.$().text().trim().replace(/(\r\n|\n|\r|\t)/gm, '').replace(/\s{2,}/, ' '), 'Hello, World!');
});

test('can accept an empty text property', function(assert) {
  this.set('text', undefined);
  this.render(hbs`{{text-clipper text length=42}}`);
  assert.equal(this.$().text().trim(), '');
});

test('can change truncation action to href', function(assert) {
  this.set('text', 'Hello, World!');
  this.render(hbs`{{text-clipper text length=5 expandHref="/test"}}`);
  assert.equal(this.$().find('a').attr('href'), '/test');
});

test('can support Ember.String.htmlSafe text', function(assert) {
  this.set('text', htmlSafe('Hello, World!'));
  this.render(hbs`{{text-clipper text length=2}}`);
  assert.ok(this.$().find('a:contains("more")').length);
});
