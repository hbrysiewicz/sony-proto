import Ember from 'ember';

export default Ember.Object.extend({
  x: null,
  y: null,
  height: null,
  width: null,
  layer: null,
  url: null,

  top: function() {
    return this.get('y');
  }.property('y'),

  left: function() {
    return this.get('x');
  }.property('x'),

  encoded: function() {
    return {
      x: this.get('x'),
      y: this.get('y'),
      height: this.get('height'),
      width: this.get('width'),
      url: encodeURI(this.get('url')),
      layer: this.get('layer')
    };
  }.property('x','y','height','width','url','layer')
});
