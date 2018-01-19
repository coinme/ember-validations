/** @type {Ember} */
import Ember from 'ember';

const {
  A: emberArray,
  Object: EmberObject,
  get,
  set
} = Ember;

export default Ember.Object.extend({

  /**
   * @param {String} property
   * @return {V|*}
   */
  unknownProperty(property) {
    set(this, property, emberArray()); // this causes template rerenders
    return get(this, property);
  }
});
