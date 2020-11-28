/**
 * Copyright (c) OpenSpug Organization. https://github.com/openspug/spug
 * Copyright (c) <spug.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React from 'react';
import { observer } from 'mobx-react';
import { Input, Select } from 'antd';
import { SearchForm, AuthDiv, Breadcrumb } from 'components';
import ComTable from './Table';
import ComForm from './Form';
import store from './store';

export default observer(function () {
  return (
    <AuthDiv auth="monitor.monitor.view">
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>监控中心</Breadcrumb.Item>
      </Breadcrumb>
      <SearchForm>
        <SearchForm.Item span={7} title="任务名称">
          <Input allowClear value={store.f_name} onChange={e => store.f_name = e.target.value} placeholder="请输入"/>
        </SearchForm.Item>
        <SearchForm.Item span={7} title="检测类型">
          <Select allowClear value={store.f_type} onChange={v => store.f_type = v} placeholder="请选择">
            {store.types.map(item => <Select.Option key={item} value={item}>{item}</Select.Option>)}
          </Select>
        </SearchForm.Item>
        <SearchForm.Item span={7} title="任务状态">
          <Select allowClear value={store.f_status} onChange={v => store.f_status = v} placeholder="请选择">
            <Select.Option value={-1}>待检测</Select.Option>
            <Select.Option value={0}>正常</Select.Option>
            <Select.Option value={1}>异常</Select.Option>
          </Select>
        </SearchForm.Item>
      </SearchForm>
      <ComTable/>
      {store.formVisible && <ComForm/>}
    </AuthDiv>
  )
})
