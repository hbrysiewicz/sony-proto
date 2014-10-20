import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['canvas-image-component'],
  attributeBindings: ['style', 'draggable'],
  draggable: "true",

  isSelected: function() {
    return this.get('selectedItem') === this.get('content');
  }.property('selectedItem'),

  style: function() {
    return 'width: ' + this.get('content.width') + 'px;height: ' + this.get('content.height')
      + 'px;top: '+  this.get('content.y') + 'px;left: ' + this.get('content.x') + 'px;'
      + 'background: url(' + this.get('content.url') + ');background-size: ' + this.get('content.width')
      + 'px ' + this.get('content.height') + 'px;z-index:' + this.get('content.layer');
  }.property('content.height','content.width','content.url','content.x', 'content.y', 'content.layer'),

  dragStart: function(e) {
    this.set('selectedItem', this.get('content'));
    this.set('content.layer', this.get('heighestLayer')+1);
    e.dataTransfer.setData('text/data', this.get('content.guid'));
  },

  click: function(e) {
    e.stopPropagation();
  },
});
