/* This file was partially autogenerated from https://github.com/jimhawkridge/SublimeABC

 Modifications

 -  more classes to express the abc semantic
 -  added syntax highlighting for Zupfnoter conventions (https://github.com/bwl21/zupfnoter)
 -  separate note pitch and note duration - even if it looks the same

 ***********************************************************************************************/

    "use strict";

    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

    var ABCHighlightRules = function () {
        // regexp must not have capturing parentheses. Use (?:) instead.
        // regexps are ordered -> the first match is used

        this.$rules = {
            start: [
                {
                    token: ['zupfnoter.information.comment.line.percentage', 'information.keyword', 'in formation.keyword.embedded'],
                    regex: '(%%%%)(hn\\.[a-z]*)(.*)',
                    comment: 'Instruction Comment'
                },
                {
                    token: ['information.comment.line.percentage', 'information.keyword.embedded'],
                    regex: '(%%)(.*)',
                    comment: 'Instruction Comment'
                },

                {
                    token: 'comment.line.percentage',
                    regex: '%.*',
                    comment: 'Comments'
                },

                {
                    token: 'barline.keyword.operator',
                    regex: '[\\[:]*[|:][|\\]:]*(?:\\[?[0-9]+)?|\\[[0-9]+',
                    comment: 'Bar lines'
                },
                {
                    token: ['information.keyword.embedded', 'information.argument.string.unquoted'],
                    regex: '(\\[[A-Za-z]:)([^\\]]*\\])',
                    comment: 'embedded Header lines'
                },
                {
                    token: ['information.keyword', 'information.argument.string.unquoted'],
                    regex: '^([A-Za-z]:)([^%\\\\]*)',
                    comment: 'Header lines'
                },
                {
                    token: ['text', 'entity.name.function', 'string.unquoted', 'text'],
                    regex: '(\\[)([A-Z]:)(.*?)(\\])',
                    comment: 'Inline fields'
                },
                {
                    token: ['accent.constant.language', 'pitch.constant.numeric', 'duration.constant.numeric'],
                    regex: '([\\^=_]*)([A-Ga-gz][,\']*)([0-9]*/*[><0-9]*)',
                    comment: 'Notes'
                },
                {
                    token: 'zupfnoter.jumptarget.string.quoted',
                    regex: '[\\"!]\\^\\:.*?[\\"!]',
                    comment: 'Zupfnoter jumptarget'
                }, {
                    token: 'zupfnoter.goto.string.quoted',
                    regex: '[\\"!]\\^\\@.*?[\\"!]',
                    comment: 'Zupfnoter goto'
                },
                {
                    token: 'zupfnoter.annotation.string.quoted',
                    regex: '[\\"!]\\^\\!.*?[\\"!]',
                    comment: 'Zupfnoter annoation'
                },
                {
                    token: 'zupfnoter.annotationref.string.quoted',
                    regex: '[\\"!]\\^\\#.*?[\\"!]',
                    comment: 'Zupfnoter annotation reference'
                },
                {
                    token: 'chordname.string.quoted',
                    regex: '[\\"!]\\^.*?[\\"!]',
                    comment: 'abc chord'
                },
                {
                    token: 'string.quoted',
                    regex: '[\\"!].*?[\\"!]',
                    comment: 'abc annotation'
                }

            ]
        };

        //  this.embedRules(JsonHighlightRules, "json-")

        this.normalizeRules();
    };

    ABCHighlightRules.metaData = {
        fileTypes: ['abc'],
        name: 'ABC',
        scopeName: 'text.abcnotation'
    };


    oop.inherits(ABCHighlightRules, TextHighlightRules);

    exports.ABCHighlightRules = ABCHighlightRules;
