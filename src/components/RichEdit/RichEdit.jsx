import React, { useState, useImperativeHandle, forwardRef  } from 'react';
import { Box } from '@material-ui/core';
import 'draft-js/dist/Draft.css';
import {Editor, EditorState, RichUtils, convertFromRaw, convertToRaw, Modifier } from 'draft-js';
import { richEditStyle } from './style';
import ToolbarButton from './ToolbarButton';
import {toolbarCommands} from './toolbarCommands';

const RichEdit = forwardRef((props, ref) => {
    const classes = richEditStyle(props);
    const [editorState, setEditorState] = useState(
        ()=>{
            if(props.value){
                return EditorState.createWithContent(convertFromRaw(JSON.parse(props.value)))
            }
            return EditorState.createEmpty();
        });
    let editor = {};

    const contentState = editorState.getCurrentContent();
    const currentStyle = editorState.getCurrentInlineStyle();
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

    const handleOnChange = state => {
        setEditorState(state);        
        if(props.onChange)
            props.onChange(convertToRaw(state.getCurrentContent()));
    }

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
        handleOnChange(newState);
          return 'handled';
        }
        return 'not-handled';
      }

    const handleToolbarCommand = command => {
        switch(command){
            case toolbarCommands.BOLD:
            case toolbarCommands.ITALIC:
            case toolbarCommands.UNDERLINE:
                handleOnChange(RichUtils.toggleInlineStyle(editorState, command));
                break;
            case toolbarCommands.UL:
                handleOnChange(RichUtils.toggleBlockType(editorState, command));
                break;
        }
    }
    const focus = ()=>{
        editor.focus();
    }

    const isActive = command => {
        switch(command){
            case toolbarCommands.BOLD:
            case toolbarCommands.ITALIC:
            case toolbarCommands.UNDERLINE:
                return currentStyle.has(command)
            case toolbarCommands.UL:
                return command == blockType;
        }
    }

    useImperativeHandle(ref, () => ({
        addParagraph(text) {
          const newContentState = Modifier.insertText(contentState, selection, text + '\n');
          const newEditorState = EditorState.push(editorState, newContentState, `insert-paragraph`);
          handleOnChange(newEditorState);
        }
    }));

    return(	
        <Box className={classes.box}>
            <Box className={classes.editor} onClick={focus}>
                <Editor
                    editorState={editorState}
                    onChange={handleOnChange}
                    ref={(element) => { editor = element; }}
                    handleKeyCommand={handleKeyCommand}
                    placeholder={props.placeholder}
                />
            </Box>
            <Box className={classes.toolbar}>
                <ToolbarButton command={toolbarCommands.BOLD} onClick={handleToolbarCommand} active={isActive(toolbarCommands.BOLD)}></ToolbarButton>
                <ToolbarButton command={toolbarCommands.ITALIC} onClick={handleToolbarCommand} active={isActive(toolbarCommands.ITALIC)}></ToolbarButton>
                <ToolbarButton command={toolbarCommands.UNDERLINE} onClick={handleToolbarCommand} active={isActive(toolbarCommands.UNDERLINE)}></ToolbarButton>
                <ToolbarButton command={toolbarCommands.UL} onClick={handleToolbarCommand} active={isActive(toolbarCommands.UL)}></ToolbarButton>
            </Box>
        </Box>
    );
});
export default RichEdit;