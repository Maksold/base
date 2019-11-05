/**
 * requirejs-config
 *
 * @copyright Copyright © 2019 Boolfly. All rights reserved.
 * @author    info@boolfly.com
 * @project   Core
 */
var config = {
    map: {
        '*': {
            slick: 'Boolfly_Base/js/slick.min',
            fancybox: 'Boolfly_Base/js/fancybox.min',
            'jquery/lazy': 'Boolfly_Base/js/jquery.lazy.min',
            'jquery/lazy/plugins': 'Boolfly_Base/js/jquery.lazy.plugins.min',
            lazyload: 'Boolfly_Base/js/verlok/lazyload.min',
            'intersection-observer': 'Boolfly_Base/js/verlok/intersection-observer.amd.min',
            nestable: 'Boolfly_Base/js/jquery.nestable.min'
        }
    },
    shim: {
        slick: {
            deps: ['jquery']
        },
        fancybox: {
            deps: ['jquery']
        },
        'jquery/lazy': {
            deps: ['jquery']
        },
        'jquery/lazy/plugins': {
            deps: ['jquery', 'jquery/lazy']
        },
        lazyload: {
            exports: 'LazyLoad'
        },
        'intersection-observer': {
            exports: 'IntersectionObserver'
        },
        nestable: {
            deps: ['jquery']
        }
    }
};