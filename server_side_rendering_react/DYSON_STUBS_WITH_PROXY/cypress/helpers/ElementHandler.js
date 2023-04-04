"use strict";
/*
 * Implements the ElementHandlerInterface, for interacting with UI elements.
 *
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementType = void 0;
var ElementType;
(function (ElementType) {
    ElementType["WEB"] = "web";
    ElementType["BUTTON"] = "button";
    ElementType["LIST"] = "list";
    ElementType["LABEL_HTML"] = "labelHTML";
    ElementType["LINK"] = "link";
    ElementType["EDIT"] = "edit";
    ElementType["RADIO"] = "radio";
    ElementType["PRICE"] = "price";
    ElementType["CHECKBOX"] = "checkbox";
    ElementType["INPUT"] = "input";
    ElementType["IMAGE"] = "image";
    ElementType["INTEGER"] = "integer";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
var ElementHandler = /** @class */ (function () {
    function ElementHandler(elements) {
        this._elements = elements;
    }
    // Get elements functions
    ElementHandler.prototype.getElement = function (elementKey, options) {
        var element = this._elements[elementKey];
        if (!element) {
            throw new Error("The element '".concat(elementKey, "' doesn't exist"));
        }
        return cy.get(element.selector(options === null || options === void 0 ? void 0 : options.index), options);
    };
    ElementHandler.prototype.getElements = function (elementKey, options) {
        return this.getElement(elementKey, options);
    };
    ElementHandler.prototype.getElementType = function (elementKey) {
        var _a;
        var element = this._elements[elementKey];
        if (!element) {
            throw new Error("The element '".concat(elementKey, "' doesn't exist"));
        }
        return (_a = element.type) !== null && _a !== void 0 ? _a : ElementType.WEB;
    };
    ElementHandler.prototype.getElementSelector = function (elementKey, options) {
        var element = this._elements[elementKey];
        if (!element) {
            throw new Error("The element '".concat(elementKey, "' doesn't exist"));
        }
        return element.selector(options === null || options === void 0 ? void 0 : options.index);
    };
    ElementHandler.prototype.count = function (elementKey, options) {
        return this.getElements(elementKey, options).its("length");
    };
    ElementHandler.prototype.checkElementCount = function (elementKey, count, options) {
        if (count === 0) {
            return this.doesNotExist(elementKey, options);
        }
        return this.count(elementKey, options).should("eq", count);
    };
    ElementHandler.prototype.doesNotExist = function (elementKey, options) {
        if (options === void 0) { options = {}; }
        var element = this.getElement(elementKey, options);
        return element.should("not.exist");
    };
    ElementHandler.prototype.isVisible = function (elementKey, options) {
        var elements = this.getElements(elementKey, options);
        elements.last().scrollIntoView();
        return elements.should("be.visible");
    };
    ElementHandler.prototype.isNotVisible = function (elementKey, options) {
        this.doesNotExist(elementKey, options);
    };
    ElementHandler.prototype.isDisplayed = function (elementKey, expectDisplayed, options) {
        if (expectDisplayed) {
            this.isVisible(elementKey, options);
        }
        else {
            this.isNotVisible(elementKey, options);
        }
    };
    ElementHandler.prototype.isSelected = function (elementKey, options) {
        var element = this.getElement(elementKey, options);
        return element.should("be.checked");
    };
    ElementHandler.prototype.isFocused = function (elementKey, options) {
        var element = this.getElement(elementKey, options);
        return element.should("have.focus");
    };
    ElementHandler.prototype.isNotFocused = function (elementKey, options) {
        var element = this.getElement(elementKey, options);
        return element.should("not.have.focus");
    };
    ElementHandler.prototype.isValue = function (elementKey, value, options) {
        var element = this.getElement(elementKey, options);
        switch (this.getElementType(elementKey)) {
            case ElementType.LABEL_HTML:
                return element.first().should("have.text", value);
            case ElementType.EDIT:
            case ElementType.LIST:
                return element.should("have.value", value);
            default:
                return element.should("have.text", value);
        }
    };
    ElementHandler.prototype.isNotValue = function (elementKey, value, options) {
        var element = this.getElement(elementKey, options);
        switch (this.getElementType(elementKey)) {
            case ElementType.LABEL_HTML:
                return element.first().should("not.have.text", value);
            case ElementType.EDIT:
            case ElementType.LIST:
                return element.should("not.have.value", value);
            default:
                return element.should("not.have.text", value);
        }
    };
    /**
     * Asserts that the element contains the specified value
     * @throws Will throw an error if the elementKey does not exist.
     */
    ElementHandler.prototype.containsValue = function (elementKey, value, options) {
        var element = this.getElement(elementKey, options);
        switch (this.getElementType(elementKey)) {
            default:
                return element.contains(value);
        }
    };
    ElementHandler.prototype.hasCorrectLinkHref = function (elementKey, href, options) {
        var element = this.getElement(elementKey, options);
        return element.should("have.prop", "href").and("contains", href);
    };
    ElementHandler.prototype.shouldOpenNewTab = function (elementKey, options) {
        var currentElement = this.getElement(elementKey, options);
        return currentElement
            .should("have.attr", "target", "_blank")
            .should("have.attr", "href");
    };
    // TODO: implement
    // getValue(elementKey: string, options?: Options)
    // getAttribute(elementKey: string, attribute: string, options?: Options)
    // Setter functions
    ElementHandler.prototype.setValue = function (elementKey, value, options) {
        var element = this.getElement(elementKey, options);
        switch (this.getElementType(elementKey)) {
            case ElementType.LIST:
                element.select(value);
                break;
            default:
                if (value === "") {
                    element.focus();
                }
                else if (options === null || options === void 0 ? void 0 : options.clearField) {
                    element.clear().type(value);
                }
                else {
                    element.type(value);
                }
        }
    };
    // Action functions
    ElementHandler.prototype.click = function (elementKey, options) {
        var element = this.getElement(elementKey, options);
        return element.click();
    };
    ElementHandler.prototype.type = function (elementKey, text, options) {
        return this.setValue(elementKey, text, options);
    };
    ElementHandler.prototype.scrollTo = function (elementKey, position, options) {
        var element = this.getElement(elementKey, options);
        return element.scrollTo(position, { ensureScrollable: false });
    };
    // Wait functions
    ElementHandler.prototype.waitForVisible = function (elementKey, options) {
        return this.isVisible(elementKey, __assign({ timeout: 10000 }, options));
    };
    ElementHandler.prototype.waitForNotVisible = function (elementKey, options) {
        var element = this.getElement(elementKey, options);
        return element.should("not.be.visible");
    };
    ElementHandler.prototype.waitForValue = function (elementKey, value, options) {
        var element = this.waitForVisible(elementKey, options);
        return element.contains(value);
    };
    return ElementHandler;
}());
exports.default = ElementHandler;
