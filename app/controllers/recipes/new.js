import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  description: '',

  isModelValid: function() {
      return this.get('name').length >= 5
              && this.get('description').length >= 10;
  }.property('name', 'description'),

  isModelNotValid: Ember.computed.not('isModelValid'),

  actions: {
    createRecipe: function() {
      let recipe = this.get('model');
      recipe.set('name', this.get('name'));
      recipe.set('description', this.get('description'));

      // Save it
      recipe.save().then(function(recipe) {
        this.transitionToRoute('recipes.show', recipe);
      }.bind(this));
    }
  }
});
