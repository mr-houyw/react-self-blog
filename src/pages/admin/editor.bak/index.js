import {
  Button,
  ButtonGroup,
  Grid,
  makeStyles,
  Paper
} from "@material-ui/core";
import {
  CodeRounded,
  FormatAlignCenterRounded,
  FormatAlignJustifyRounded,
  FormatAlignLeftRounded,
  FormatAlignRightRounded,
  FormatBoldRounded,
  FormatColorFillRounded,
  FormatColorTextRounded,
  FormatIndentDecreaseRounded,
  FormatIndentIncreaseRounded,
  FormatItalicRounded,
  FormatListBulletedRounded,
  FormatListNumberedRounded,
  FormatQuoteRounded,
  FormatSizeRounded,
  FormatUnderlinedRounded,
  InsertEmoticonRounded,
  InsertPhotoRounded,
  LinkOffRounded,
  LinkRounded,
  StrikethroughSRounded,
  TitleRounded
} from "@material-ui/icons";
import React, { useMemo } from "react";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import Editor from '../../../component/editor';
import CustomerElement from '../../../component/editor/customer';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    minHeight: "50vh",
    padding: "5px",
    background: "#80808030",
    width: "80vw"
  },
  control: {
    padding: "0 5px"
  }
}));
function AdminEditor() {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container justify='center' spacing={spacing}>
        <Grid item>
          <Paper style={{ width: "80vw", height: "auto" }} elevation={3}>
            <Grid container justify="center">
              <ButtonGroup
                color='primary'
                size='small'
                aria-label='outlined primary button group'
                className={classes.control}
              >
                <Button startIcon={<FormatBoldRounded />}
                  title="加粗"
                  onClick={event => {
                    event.preventDefault()
                    CustomerElement.toggleMark(editor, 'bold')
                  }}
                />
                <Button startIcon={<FormatItalicRounded />}
                  title="斜体"
                  onClick={event => {
                    event.preventDefault()
                    CustomerElement.toggleMark(editor, 'italic')
                  }}
                />
                <Button startIcon={<StrikethroughSRounded />}
                  title="删除线"
                  onClick={event => {
                    event.preventDefault()
                    CustomerElement.toggleMark(editor, 'strike')
                  }}
                />
                <Button startIcon={<FormatUnderlinedRounded />}
                  title="下划线"
                  onClick={event => {
                    event.preventDefault()
                    CustomerElement.toggleMark(editor, 'underline')
                  }}
                />
                <Button startIcon={<FormatSizeRounded />}
                  title="字号"
                />
                <Button startIcon={<TitleRounded />}
                  title="标题"
                />
                <Button startIcon={<FormatColorTextRounded />}
                  title="字体颜色"
                />
                <Button startIcon={<FormatColorFillRounded />}
                  title="背景色"
                />
              </ButtonGroup>
              <ButtonGroup
                color='primary'
                size='small'
                aria-label='outlined primary button group'
                className={classes.control}
              >
                <Button startIcon={<FormatAlignCenterRounded />} />
                <Button startIcon={<FormatAlignLeftRounded />} />
                <Button startIcon={<FormatAlignCenterRounded />} />
                <Button startIcon={<FormatAlignRightRounded />} />
                <Button startIcon={<FormatAlignJustifyRounded />} />
                <Button startIcon={<FormatAlignCenterRounded />} />
                <Button startIcon={<FormatIndentIncreaseRounded />} />
                <Button startIcon={<FormatIndentDecreaseRounded />} />
              </ButtonGroup>
              <ButtonGroup
                color='primary'
                size='small'
                aria-label='outlined primary button group'
                className={classes.control}
              >
                <Button startIcon={<LinkRounded />}
                  title="超链接"
                  onClick={event => {
                    event.preventDefault()
                    const url = window.prompt('URL:')
                    CustomerElement.insertLink(editor, url)
                  }}
                />
                <Button startIcon={<LinkOffRounded />}
                  title="解除超链接"
                  onClick={event => {
                    event.preventDefault()
                    CustomerElement.unwrapLink(editor)
                  }}
                />
                <Button startIcon={<CodeRounded />}
                  title="代码"
                  onClick={event => {
                    event.preventDefault()

                    CustomerElement.toggleMark(editor, 'code')
                  }}
                />
                <Button startIcon={<FormatQuoteRounded />}
                  title="引用"
                  onClick={event => {
                    event.preventDefault()
                    CustomerElement.toggleBlock(editor, 'quote')
                  }}
                />
                <Button startIcon={<FormatListBulletedRounded />}
                  title="无序列表"
                  onClick={event => {
                    event.preventDefault()
                    CustomerElement.toggleBlock(editor, 'bulleted-list')
                  }}
                />
                <Button startIcon={<FormatListNumberedRounded />}
                  title="顺序列表"
                  onClick={event => {
                    event.preventDefault()
                    CustomerElement.toggleBlock(editor, 'numbered-list')
                  }}
                />
                <Button startIcon={<InsertPhotoRounded />} />
                <Button startIcon={<InsertEmoticonRounded />} />
              </ButtonGroup>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={2}>
            <Editor editor={editor} style={{ "minHeight": "50vh", "padding": "5px", "background": "#fff" }} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default AdminEditor;
