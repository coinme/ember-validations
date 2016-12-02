/** @type {Ember} */
import Ember from 'ember';

export default Ember.Object.extend({

  /**
   * @param {String} property
   * @return {V|*}
   */
  unknownProperty(property) {
    // set(this, property, emberArray()); // this causes template rerenders
    // return get(this, property);
    return Ember.A();
  }
});
