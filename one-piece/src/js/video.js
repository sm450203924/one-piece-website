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
import '../css/video.scss';

/* js in this page
*  ==========================================================================
*/
import './plugins/big-picture';

import { scrollFunction, toTo, activeMenu } from './components/_common';
import { setClickHandler, fetchVideoSource } from './templates/_video';

(function () {
    window.onscroll = function() {scrollFunction()};

    toTo();

    activeMenu();

    /* click the video to extend it */
    setClickHandler('#video_container', function (e) {
        let className = e.target.className;

        ~className.indexOf('youtube') &&
        BigPicture({
            el: e.target,
            ytSrc: e.target.getAttribute('ytSrc')
        });
    });

    setClickHandler('#broken_container', function (e) {
        ~e.target.className.indexOf('youtube') &&
        BigPicture({
            el: e.target,
            ytSrc: 'oijlksdjf'
        })
    });

    /* fetch video list source */
    fetchVideoSource();

})();
