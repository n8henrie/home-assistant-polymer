import hass from '../util/home-assistant-js-instance';

import Polymer from '../polymer';

require('./domain-icon');
require('./display-time');
require('./relative-ha-datetime');

const { moreInfoActions } = hass;

export default new Polymer({
  is: 'logbook-entry',

  entityClicked(ev) {
    ev.preventDefault();
    moreInfoActions.selectEntity(this.entryObj.entityId);
  },
});
