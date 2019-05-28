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
import '../css/home.scss';

/* js in this page
*  ==========================================================================
*/
import { clickSearch } from './templates/_home';
import { scrollFunction, toTo, activeMenu } from './components/_common';

(function () {

    window.onscroll = function() {scrollFunction()};

    toTo();

    activeMenu();

    clickSearch();
})();