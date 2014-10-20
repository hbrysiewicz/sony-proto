import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['canvas-canvas-component'],

  // used to keep track of which item is moving
  selectedItem: null,

  heighestLayer: function() {
    var layers = this.get('images').sortBy('layer');
    return layers.get('lastObject.layer');
  }.property('images.@each.layer'),

  dragOver: function(e) {
    e.preventDefault();
  },

  drop: function(e) {
    var guid = e.dataTransfer.getData('text/data');
    var image = this.get('images').findBy('guid', guid);

    var offset = $(e.currentTarget).offset();
    var mouseX = e.originalEvent.clientX-offset.left;
    var mouseY = e.originalEvent.clientY-offset.top;

    image.setProperties({x: mouseX, y: mouseY});
    this.set('selectedItem', null)
  }
});
