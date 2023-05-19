/*
  THIS FILE WAS AUTOGENERATED BY mode.tmpl.js
*/

"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var ObjectiveCHighlightRules = require("./objectivec_highlight_rules").ObjectiveCHighlightRules;
var CStyleFoldMode = require("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = ObjectiveCHighlightRules;
    this.foldingRules = new CStyleFoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/"};
    this.$id = "ace/mode/objectivec";
}).call(Mode.prototype);

exports.Mode = Mode;
