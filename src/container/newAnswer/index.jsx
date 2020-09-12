import React, { useState } from 'react';
import { Form, Input, Radio,Tag, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios'
import './index.scss';
const { TextArea } = Input;

class EditableTagGroup extends React.Component {
  state = {
    tags: [],
    inputVisible: false,
    inputValue: '',
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.props.changeOptions(tags)
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.props.changeOptions(tags)
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => {
    this.input = input;
  };

  forMap = tag => {
    const tagElem = (
      <Tag
        closable
        onClose={e => {
          e.preventDefault();
          this.handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const tagChild = tags.map(this.forMap);
    return (
      <>
        <div style={{ marginBottom: 16 }}>
            {tagChild}
        </div>
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="large"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag onClick={this.showInput} className="site-tag-plus">
            <PlusOutlined />新增选项
          </Tag>
        )}
      </>
    );
  }
}

const NewAnswer = ({group}) => {
    const [type, setType] = useState(3);
    const [title, setTitle] = useState();
    const [options, setOptions] = useState([]);
    const submit = async () => {
      try {
        const res = await axios({
          method: 'post',
          url: '/join/api/control/question/add',
          data: {
            type,
            title,
            options,
            groups: group
          }
        })
        if(res.data.code === 0){
          message.success('提交成功')
        }else  {
          message.error('提交失败' + res.data.msg)
        }
      }catch (err) {
        console.error(err)
      }
        console.log({
          type,
          title,
          options,
          group
        })
    };

    return (
        <>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
            >
                <Form.Item label="题目类型" name="type">
                    <Radio.Group onChange={(e) => setType(e.target.value)}>
                        <Radio.Button value="1">单选题</Radio.Button>
                        <Radio.Button value="2">多选题</Radio.Button>
                        <Radio.Button value="3">填空题</Radio.Button>
                        <Radio.Button value="4">简答题</Radio.Button>
                        <Radio.Button value="5">附件题</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="题目" name="title">
                    <TextArea rows={5} onChange={e => setTitle(e.currentTarget.value)}/>
                </Form.Item>
                <Form.Item className={type > 2 ? 'hide':''} label="选项" name="options">
                  <EditableTagGroup  changeOptions = {setOptions}/>
                </Form.Item>
                <Form.Item label="提交">
                    <button className="addQuest" onClick={submit}>添加</button>
                </Form.Item>
            </Form>
        </>
    );
};

export default NewAnswer;
