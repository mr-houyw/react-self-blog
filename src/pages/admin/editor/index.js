import {
  Chip,
  makeStyles,
  Paper,
  TextField
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import "braft-extensions/dist/code-highlighter.css";
import "braft-extensions/dist/color-picker.css";
// 引入表情包组件样式文件
import "braft-extensions/dist/emoticon.css";
import "braft-extensions/dist/table.css";
import React, { useState } from "react";
import BraftPlugins from "./plugins";
// BraftEditor.use(BraftPlugins.emoticon)
BraftEditor.use(BraftPlugins.underdot);
BraftEditor.use(BraftPlugins.headerId);
BraftEditor.use(BraftPlugins.table);
BraftEditor.use(BraftPlugins.markdown);
BraftEditor.use(BraftPlugins.highlight);
BraftEditor.use(BraftPlugins.color);
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch"
  }
}));
const [articelInfo, setArticel] = useState
const tags = [
  { language: "java" },
  { language: "javascript" },
  { language: "python" },
  { language: "html" },
  { language: "css" },
  { language: "vue" },
  { language: "react" }
];
function Editor(props) {
  const classes = useStyles();
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState("<p>Hello <b>World</b>")
  );
  const types = [
    { type: 0, name: 'None' },
    { type: 1, name: '技术' },
    { type: 2, name: '随笔' }
  ]
  const handleEditorChange = editorState => {
    setEditorState(editorState);
    sessionStorage.setItem("content", editorState.toRAW());
  };
  const submitContent = function () {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = editorState.toHTML();
    sessionStorage.setItem("content", htmlContent);
  };
  // const control =BraftEditor.defaultProps.controls.push()
  return (
    <Paper elevation={2} style={{ height: "auto", width: "80vw" }}>
      <div className={classes.root}>
        <TextField
          label='标题'
          style={{ margin: 8, width: "22.3%" }}
          variant='outlined'
          color='secondary'
        />
        <TextField
          label='Cover'
          style={{ margin: 8, width: "22.3%" }}
          // fullWidth
          variant='outlined'
          color='secondary'
        />
        <Autocomplete
          id="select-artical-type"
          options={types}
          getOptionLabel={(option) => option.name}
          style={{ width: "22.3%", margin: '8px' }}
          renderInput={(params) => <TextField {...params} label="分类" variant="outlined" color='secondary' />}
        />
        <Autocomplete
          style={{
            margin: "8px",
            width: "22.3%"
          }}
          fullWidth
          multiple
          variant='outlined'
          options={tags.map(option => option.language)}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant='outlined'
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={params => (
            <TextField
              {...params}
              variant='outlined'
              color='secondary'
              label='Tag'
            />
          )}
        />

        <TextField
          label="desc"
          placeholder="desc"
          style={{ margin: '8px', width: '100%' }}
          color='secondary'
          multiline
          fullWidth
          variant="outlined"
        />
      </div>
      <BraftEditor
        style={{ height: "100%", width: "100%" }}
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
    </Paper>
  );
}
export default Editor;
