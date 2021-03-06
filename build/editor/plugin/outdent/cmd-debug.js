/*
Copyright 2014, KISSY v5.0.0
MIT Licensed
build time: Apr 15 17:49
*/
/*
combined files : 

editor/plugin/outdent/cmd

*/
/**
 * @ignore
 * Add indent and outdent command identifier for KISSY Editor.
 * @author yiminghe@gmail.com
 */
KISSY.add('editor/plugin/outdent/cmd',['editor', '../dent-cmd'], function (S, require) {
    var Editor = require('editor');
    var dentUtils = require('../dent-cmd');

    var addCommand = dentUtils.addCommand;
    var checkOutdentActive = dentUtils.checkOutdentActive;
    return {
        init: function (editor) {
            addCommand(editor, 'outdent');
            var queryCmd = Editor.Utils.getQueryCmd('outdent');
            if (!editor.hasCommand(queryCmd)) {
                editor.addCommand(queryCmd, {
                    exec: function (editor) {
                        var selection = editor.getSelection();
                        if (selection && !selection.isInvalid) {
                            var startElement = selection.getStartElement();
                            var elementPath = new Editor.ElementPath(startElement);
                            return checkOutdentActive(elementPath);
                        }
                    }
                });
            }
        }
    };
});
