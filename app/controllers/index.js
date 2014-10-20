import Ember from 'ember';
import App from 'proto/app';
import Image from 'proto/models/image';

export default Ember.ArrayController.extend({
  queryParams: ['serialized'],
  isAdding: false,
  newImage: null,

  serialized: function(key, val) {
    if (arguments.length === 2) {
      var parsed = JSON.parse(decodeURI(val));
      var content = [];
      parsed.forEach(function(item) {
        item = Image.create(item);
        content.pushObject(item);
      });
      this.set('content', content);
      return val;
    }
    return encodeURI(JSON.stringify(this.get('content')));
  }.property('content.@each','content.@each.x','content.@each.y'),

  actions: {
    addImage: function() {
      this.set('isAdding', true);
      var newImage = Image.create();
      this.set('newImage', newImage);
    },

    saveImage: function() {
      var newImage = this.get('newImage');
      var newGuid = App.generateUUID();
      newImage.set('guid', newGuid);
      this.get('content').pushObject(newImage);
      this.set('newImage', null);
    }
  }
});
