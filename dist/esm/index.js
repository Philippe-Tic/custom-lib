import React from 'react';
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, SlideFade } from '@chakra-ui/react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var FormGroup = function (_a) {
    var children = _a.children, errorMessage = _a.errorMessage, helper = _a.helper, id = _a.id, isRequired = _a.isRequired, label = _a.label, showError = _a.showError, props = __rest(_a, ["children", "errorMessage", "helper", "id", "isRequired", "label", "showError"]);
    return (React.createElement(FormControl, __assign({ isInvalid: showError, isRequired: isRequired }, props),
        !!label && React.createElement(FormLabel, { htmlFor: id }, label),
        children,
        !!helper && React.createElement(FormHelperText, null, helper),
        !!errorMessage && (React.createElement(FormErrorMessage, { id: "".concat(id, "-error") },
            React.createElement(SlideFade, { in: true, offsetY: -6 }, errorMessage)))));
};

export { FormGroup };
//# sourceMappingURL=index.js.map
