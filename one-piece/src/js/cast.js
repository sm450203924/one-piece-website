/* bootstrap
*  ==========================================================================
*/
import 'popper.js';
import './plugins/bootstrap_part.js';

/* font-awesome
*  ==========================================================================
*/
import './plugins/font-awesome_part';

/* style
*  ==========================================================================
*/
import '../css/cast.scss';

/* js in this page
*  ==========================================================================
*/
import { scrollFunction, toTo, activeMenu } from './components/_common';

(function () {

    window.onscroll = function() {scrollFunction()};

    toTo();

    activeMenu();
})();