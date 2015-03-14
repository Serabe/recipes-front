import Ember from 'ember';
import layout from '../templates/components/counting-textarea';

export default Ember.Component.extend({
  layout: layout,

  textLength: function() {
      let value = this.get('componentValue');

      return value.length || 0;
  }.property('componentValue')
});
