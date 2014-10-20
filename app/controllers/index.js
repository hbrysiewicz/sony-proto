import Ember from 'ember';
import App from 'proto/app';
import Image from 'proto/models/image';

export default Ember.ArrayController.extend({
  queryParams: ['serialized'],
  isAdding: false,
  newImage: null,

  serialized: function(key, val) {
    if (arguments.length === 2) {
      var content = JSON.parse(decodeURI(val));
      this.set('content', content);
      return val;
    }
    return encodeURI(JSON.stringify(this.get('content')));
  }.property('content.@each'),

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
