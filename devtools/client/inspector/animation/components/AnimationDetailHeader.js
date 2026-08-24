/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const {
  PureComponent,
} = require("resource://devtools/client/shared/vendor/react.mjs");
const dom = require("resource://devtools/client/shared/vendor/react-dom-factories.js");
const PropTypes = require("resource://devtools/client/shared/vendor/react-prop-types.mjs");

const {
  getFormattedTitle,
} = require("resource://devtools/client/inspector/animation/utils/l10n.js");

const { LocalizationHelper } = require("resource://devtools/shared/l10n.js");
const COMPONENTS_L10N = new LocalizationHelper(
  "devtools/client/locales/components.properties"
);

class AnimationDetailHeader extends PureComponent {
  static get propTypes() {
    return {
      animation: PropTypes.object.isRequired,
      setDetailVisibility: PropTypes.func.isRequired,
    };
  }

  onClick(event) {
    event.stopPropagation();
    const { setDetailVisibility } = this.props;
    setDetailVisibility(false);
  }

  render() {
    const { animation } = this.props;
    const titleText = COMPONENTS_L10N.getStr("notificationBox.closeTooltip");

    return dom.div(
      {
        className: "animation-detail-header devtools-toolbar",
      },
      dom.div(
        {
          className: "animation-detail-title",
        },
        getFormattedTitle(animation.state)
      ),
      dom.button({
        className: "animation-detail-close-button devtools-button",
        onClick: this.onClick.bind(this),
        title: titleText,
        "aria-label": titleText,
      })
    );
  }
}

module.exports = AnimationDetailHeader;
