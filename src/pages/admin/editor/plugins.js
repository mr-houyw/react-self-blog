import 'braft-editor/dist/index.css'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
import ColorPicker from 'braft-extensions/dist/color-picker'
// 引入表情包扩展模块和默认表情包列表
import Emoticon, { defaultEmoticons } from 'braft-extensions/dist/emoticon'
// 引入表情包扩展模块样式文件
import 'braft-extensions/dist/emoticon.css'
import HeaderId from 'braft-extensions/dist/header-id'
import Markdown from 'braft-extensions/dist/markdown'
import Table from 'braft-extensions/dist/table'
import React from 'react'
// 取出Mention扩展和Mention列表组件
// 表情扩展
const emoticon = {
  // 转换默认表情包列表，让webpack可以正确加载到默认表情包中的图片，请确保已对png格式的文件配置了loader
  // 如果你使用的webpack版本不支持动态require，或者使用的其他打包工具，请勿使用此写法
  // emoticons: defaultEmoticons.map(item => require(`braft-extensions/dist/assets/${item}`)),

  // 也可以使用自己的表情包资源，不受打包工具限制
  // const emoticons = ['http://path/to/emoticon-1.png', 'http://path/to/emoticon-2.png', 'http://path/to/emoticon-3.png', 'http://path/to/emoticon-4.png', ...]

  options: {
    // includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
    // excludeEditors: ['editor-id-2'],  // 指定该模块对哪些BraftEditor无效
    emoticons: defaultEmoticons.map(item => require(`braft-extensions/dist/assets/${item}`)),// 指定可用表情图片列表，默认为空
    closeOnBlur: true, // 指定是否在点击表情选择器之外的地方时关闭表情选择器，默认false
    closeOnSelect: true // 指定是否在选择表情后关闭表情选择器，默认false
  }
}
// 着重号
const underdot = {
  // 指定扩展类型
  type: 'inline-style',
  // 指定该扩展对哪些编辑器生效，不指定includeEditors则对所有编辑器生效
  includeEditors: ['demo-editor-with-underdot-ext'],
  // 指定扩展样式名，推荐使用全大写
  name: 'UNDERDOT',
  // 在编辑器工具栏中增加一个样式控制按钮，text可以为一个react组件
  control: {
    text: '着重号'
  },
  // 指定该扩展样式的CSS规则，请注意，IE/EDGE浏览器暂时不支持textEmphasis
  style: {
    textEmphasis: 'circle',
    textEmphasisPosition: 'under',
    WebkitTextEmphasis: 'circle',
    WebkitTextEmphasisPosition: 'under'
  },
  importer: (nodeName, node) => {
    // 指定html转换为editorState时，何种规则的内容将会附加上该扩展样式
    // 如果编辑器在createEditorState时使用的是RAW数据，并且开启了stripPastedStyles，则可以不指定importer，因为不存在html转editorState的场景
    return nodeName === 'span' && [].find.call(node.style, (styleName) => styleName.indexOf('text-emphasis') !== -1)
  },
  exporter: () => {
    // 指定该样式在输出的html中如何呈现，对于inline-style类型的扩展可以不指定exporter，输出样式即为该扩展的style
    return (
      <span style={{
        textEmphasis: 'circle',
        textEmphasisPosition: 'under',
        WebkitTextEmphasis: 'circle',
        WebkitTextEmphasisPosition: 'under'
      }} />
    )
  }
}
//提及扩展

const mention = {
  options: {
    // includeEditors: ['editor-id-1'], // 指定该模块对哪些BraftEditor生效，不传此属性则对所有BraftEditor有效
    // excludeEditors: ['editor-id-2'],  // 指定该模块对哪些BraftEditor无效
    mentionTrigger: '@'   // 可选参数。设置触发 mention 的符号，默认为 '@'
  },
  mentions: [
    {
      id: 'Matthew Russell',
      name: 'Matthew Russell',
      link: 'https://twitter.com/mrussell247',
      avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg'
    },
    {
      id: 'Julian Krispel-Samsel',
      name: 'Julian Krispel-Samsel',
      link: 'https://twitter.com/juliandoesstuff',
      avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400'
    },
    {
      id: 'Jyoti Puri',
      name: 'Jyoti Puri',
      link: 'https://twitter.com/jyopur',
      avatar: 'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400'
    },
    {
      id: 'Max Stoiber',
      name: 'Max Stoiber',
      link: 'https://twitter.com/mxstbr',
      avatar: 'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg'
    }
  ],
  // 再维护一个mention列表搜索关键字
  mentionKeyword: null,
  handleMentionFilter: (mentionKeyword) => {
    mention.mentionKeyword = mentionKeyword
  }
}
// 标体区块
const headerId = {
  options: {

  }
}
// table
const table = {
  options: {
    defaultColumns: 3, // 默认列数
    defaultRows: 3, // 默认行数
    withDropdown: true, // 插入表格前是否弹出下拉菜单
    columnResizable: true, // 是否允许拖动调整列宽，默认false
    exportAttrString: '', // 指定输出HTML时附加到table标签上的属性字符串
  }
}
// markdown语法支持
const markdown = {
  options: {

  }
}
const highlight = {
  options: {
    syntaxs: [
      {
        name: 'JavaScript',
        syntax: 'javascript'
      }, {
        name: 'HTML',
        syntax: 'html'
      }, {
        name: 'CSS',
        syntax: 'css'
      }, {
        name: 'Java',
        syntax: 'java',
      }, {
        name: 'PHP',
        syntax: 'php'
      }
    ]
  }
}
const color = {
  options: {
    theme: 'light'
  }
}
const BraftPlugins = {
  underdot: underdot,
  emoticon: Emoticon(emoticon.options),
  mention: mention,
  headerId: HeaderId(headerId.options),
  table: Table(table.options),
  markdown: Markdown(markdown.options),
  highlight: CodeHighlighter(highlight.options),
  color: ColorPicker(color.options),
  mention: mention.options
}
export default BraftPlugins