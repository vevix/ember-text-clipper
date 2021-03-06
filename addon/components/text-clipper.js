import Component from 'ember-component';
import get, { getProperties } from 'ember-metal/get';
import set from 'ember-metal/set';
import computed from 'ember-computed';
import { htmlSafe } from 'ember-string';
import { assign } from 'ember-platform';
import layout from '../templates/components/text-clipper';
import clip from 'clip';
import Ember from 'ember';

const TextClipperComponent = Component.extend({
  layout,
  isExpanded: false,
  canExpand: true,
  expandHref: undefined,
  expandText: 'more',
  collapseText: 'less',
  length: 200,

  truncated: computed('text', {
    get() {
      const { text, length, options } = getProperties(this, 'text', 'length', 'options');
      const response = clip(text, length, options);
      return this._isHTML() ? htmlSafe(response) : response;
    }
  }).readOnly(),

  didReceiveAttrs() {
    this._super(...arguments);
    set(this, 'canCollapse', get(this, 'canCollapse') || get(this, 'canExpand'));
    set(this, 'options', assign(this._defaultOptions(), get(this, 'options') || {}));
    set(this, 'safeText', this._isHTML() ? htmlSafe(get(this, 'text')) : get(this, 'text'));

    let length = get(this, 'text.length');
    if (Ember.String.isHTMLSafe(get(this, 'text'))) {
      length = get(this, 'text.string.length');
    }
    if (get(this, 'text') && length > get(this, 'length')) {
      set(this, 'isTruncated', true);
    }
  },

  _defaultOptions() {
    return {
      breakWords: false,
      html: false,
      imageWeight: 2,
      indicator: '...',
      maxLines: undefined
    };
  },

  _isHTML() {
    return get(this, 'options.html');
  },

  actions: {
    toggleExpand() {
      this.toggleProperty('isExpanded');
    }
  }
});

TextClipperComponent.reopenClass({
  positionalParams: ['text']
});

export default TextClipperComponent;
