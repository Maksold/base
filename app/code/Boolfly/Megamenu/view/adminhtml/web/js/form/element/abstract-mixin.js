/**
 * abstract-mixin
 *
 * @copyright Copyright © 2019 Boolfly. All rights reserved.
 * @author    info@boolfly.com
 * @project   Banner Slider
 */
define([
    'jquery'
], function ($) {
    'use strict';

    return function (targetModule) {
        return targetModule.extend({

            dependValues: false,

            /**
             * Add update visible and disable element
             *
             * @param value
             * @returns {Element}
             */
            updateCustomProperty: function (value) {
                if (this.dependValues) {
                    if (Array.isArray(this.dependValues)) {
                        this.changeVisibleAndDisable(this.dependValues.indexOf(value) > -1);
                    } else {
                        this.changeVisibleAndDisable(value === this.dependValues);
                    }
                }

                return this;
            },

            /**
             * Change Visible And Disable property
             *
             * @param value
             */
            changeVisibleAndDisable: function (value) {
                if (value) {
                    this.show();
                    this.enable();
                } else {
                    this.hide();
                    this.disable();
                }

            }
        })
    }
});