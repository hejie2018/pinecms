export default {
  _status: {"0": "关闭", "1": "开启"},
  _set_status: {"1": "你好", "2": "我好", "3": "大家好"},
  _enum_status: {"0": "天真", "1": "无邪", "2": "王胖子"},
  limits: {
    $page: {
      label: '查看列表',
    },
    add: {
      label: '添加',
    },
    edit: {
      label: '编辑',
    },
    del: {
      label: '删除',
    },
  },
  apis: {
    list: {
      url: 'GET todo/list',
      limits: '$page',
      onPreRequest: (source) => {
        const {dateRange} = source.data
        if (dateRange) {
          const arr = dateRange.split('%2C')
          source.data = {
            ...source.data,
            startDate: arr[0],
            endDate: arr[1],
          }
        }
        return source
      },
    },
    add: {
      url: 'POST todo/add',
      limits: 'add',
    },
    edit: {
      url: 'POST todo/edit?linkid=$id',
      limits: 'edit',
    },
    del: {
      url: 'POST todo/delete?id=$id',
      limits: 'del',
    },
  },
}